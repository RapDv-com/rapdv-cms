#!/usr/bin/env ts-node
// Generates a SQL migration from Sequelize model definitions.
// Uses pg-mem so no real database connection is required.
// Usage: npx ts-node scripts/GenerateMigration.ts [migration-name]

import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'
import * as fs from 'fs'
import * as path from 'path'

export class GenerateMigration {
  private sqlStatements: string[] = []

  private loadModels(): any[] {
    const { Log } = require('../submodules/rapdv/server/database/CollectionLog')
    const { File } = require('../submodules/rapdv/server/database/CollectionFile')
    const { ImageFile } = require('../submodules/rapdv/server/database/CollectionImageFile')
    const { System } = require('../submodules/rapdv/server/database/CollectionSystem')
    const { User } = require('../submodules/rapdv/server/database/CollectionUser')
    const { UserSession } = require('../submodules/rapdv/server/database/CollectionUserSession')
    const { Post } = require('../server/entities/Post')
    const { Comment } = require('../server/entities/Comment')
    return [Log, File, ImageFile, System, User, UserSession, Post, Comment]
  }

  private buildUpSection(): string {
    return this.sqlStatements.join(';\n\n') + ';'
  }

  private buildDownSection(): string {
    const tableNames = this.sqlStatements
      .map(s => s.match(/CREATE TABLE IF NOT EXISTS "([^"]+)"/)?.[1])
      .filter(Boolean)
      .reverse()
    return tableNames.map(t => `DROP TABLE IF EXISTS "${t}" CASCADE`).join(';\n') + ';'
  }

  private writeMigrationFile(name: string, content: string): string {
    const timestamp = Date.now()
    const fileName = `${timestamp}-${name}.sql`
    const migrationsDir = path.resolve(process.cwd(), 'migrations')
    fs.mkdirSync(migrationsDir, { recursive: true })
    fs.writeFileSync(path.join(migrationsDir, fileName), content)
    return fileName
  }

  public async run(migrationName: string = 'initial'): Promise<void> {
    const allModels = this.loadModels()

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
          this.sqlStatements.push(cleaned)
        }
      },
    })

    await sequelize.sync({ force: true })
    await sequelize.close()

    if (this.sqlStatements.length === 0) {
      throw new Error('No CREATE TABLE statements captured.')
    }

    const content = `-- UP\n${this.buildUpSection()}\n\n-- DOWN\n${this.buildDownSection()}\n`
    const fileName = this.writeMigrationFile(migrationName, content)

    const tableNames = this.sqlStatements
      .map(s => s.match(/CREATE TABLE IF NOT EXISTS "([^"]+)"/)?.[1])
      .filter(Boolean)

    console.log(`Generated: migrations/${fileName}`)
    console.log(`Tables: ${tableNames.join(', ')}`)
  }

  public static async main(): Promise<void> {
    const migrationName = process.argv[2] || 'initial'
    await new GenerateMigration().run(migrationName)
  }
}

GenerateMigration.main().catch(err => {
  console.error(err)
  process.exit(1)
})
