#!/usr/bin/env ts-node
// Generates an initial SQL migration from Sequelize model definitions.
// Uses pg-mem so no real database connection is required.
// Usage: npx ts-node scripts/generate-migration.ts [migration-name]

import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'
import * as fs from 'fs'
import * as path from 'path'

async function generateMigration() {
  // Load all built-in models
  const { Log } = require('../submodules/rapdv/server/database/CollectionLog')
  const { File } = require('../submodules/rapdv/server/database/CollectionFile')
  const { ImageFile } = require('../submodules/rapdv/server/database/CollectionImageFile')
  const { System } = require('../submodules/rapdv/server/database/CollectionSystem')
  const { User } = require('../submodules/rapdv/server/database/CollectionUser')
  const { UserSession } = require('../submodules/rapdv/server/database/CollectionUserSession')

  // Load app-specific models
  const { Post } = require('../server/entities/Post')
  const { Comment } = require('../server/entities/Comment')

  const allModels = [Log, File, ImageFile, System, User, UserSession, Post, Comment]

  const sqlStatements: string[] = []

  const { newDb } = require('pg-mem')
  const db = newDb()
  const pgMem = db.adapters.createPg()

  const sequelize = new Sequelize({
    dialect: 'postgres',
    dialectModule: pgMem,
    database: 'test',
    username: 'test',
    password: 'test',
    host: 'localhost',
    models: allModels as any,
    logging: (sql: string) => {
      const cleaned = sql.replace(/^Executing \(default\): /, '')
      if (/^\s*CREATE TABLE/i.test(cleaned)) {
        sqlStatements.push(cleaned)
      }
    },
  })

  await sequelize.sync({ force: true })
  await sequelize.close()

  if (sqlStatements.length === 0) {
    console.error('No CREATE TABLE statements captured. Something went wrong.')
    process.exit(1)
  }

  // Build UP section
  const up = sqlStatements.join(';\n\n') + ';'

  // Build DOWN section — drop in reverse order to respect FK constraints
  const tableNames = sqlStatements
    .map(s => {
      const match = s.match(/CREATE TABLE IF NOT EXISTS "([^"]+)"/)
      return match ? match[1] : null
    })
    .filter(Boolean)
    .reverse()

  const down = tableNames.map(t => `DROP TABLE IF EXISTS "${t}" CASCADE`).join(';\n') + ';'

  const migrationName = process.argv[2] || 'initial'
  const timestamp = Date.now()
  const fileName = `${timestamp}-${migrationName}.sql`
  const migrationsDir = path.resolve(process.cwd(), 'migrations')

  fs.mkdirSync(migrationsDir, { recursive: true })
  fs.writeFileSync(path.join(migrationsDir, fileName), `-- UP\n${up}\n\n-- DOWN\n${down}\n`)

  console.log(`Generated: migrations/${fileName}`)
  console.log(`Tables: ${tableNames.reverse().join(', ')}`)
}

generateMigration().catch(err => {
  console.error(err)
  process.exit(1)
})
