#!/usr/bin/env ts-node
// Runs all pending SQL migrations against the database specified by DATABASE_URL.
// Usage: DATABASE_URL=postgresql://... npx ts-node scripts/RunMigration.ts

import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'
import * as fs from 'fs'
import * as path from 'path'

export class RunMigration {
  private sequelize: Sequelize

  private parseMigrationSql(content: string): { up: string; down: string } {
    const upMarker = '-- UP'
    const downMarker = '-- DOWN'
    const upIndex = content.indexOf(upMarker)
    const downIndex = content.indexOf(downMarker)

    if (upIndex === -1) throw new Error('Migration file must contain a "-- UP" section')
    if (downIndex === -1) throw new Error('Migration file must contain a "-- DOWN" section')

    return {
      up: content.substring(upIndex + upMarker.length, downIndex).trim(),
      down: content.substring(downIndex + downMarker.length).trim(),
    }
  }

  private async ensureMigrationsTable(): Promise<void> {
    await this.sequelize.query(
      `CREATE TABLE IF NOT EXISTS "migrations" ("id" SERIAL PRIMARY KEY, "name" character varying NOT NULL, "executedAt" TIMESTAMP NOT NULL DEFAULT now())`
    )
  }

  public async run(): Promise<void> {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl || (!databaseUrl.startsWith('postgresql') && !databaseUrl.startsWith('postgres'))) {
      throw new Error('DATABASE_URL must be set to a valid PostgreSQL connection string.')
    }

    this.sequelize = new Sequelize(databaseUrl, {
      dialect: 'postgres',
      logging: false,
    })

    await this.sequelize.authenticate()
    console.log('Connected to PostgreSQL')

    await this.ensureMigrationsTable()

    const migrationsDir = path.resolve(process.cwd(), 'migrations')
    if (!fs.existsSync(migrationsDir)) {
      console.log('No migrations directory found.')
      return
    }

    const sqlFiles = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort()

    const executed: any[] = await this.sequelize.query(`SELECT "name" FROM "migrations"`, {
      plain: false,
      raw: true,
      type: 'SELECT' as any,
    })
    const executedNames = new Set((executed as any[]).map(r => r.name))

    let ran = 0
    for (const file of sqlFiles) {
      if (executedNames.has(file)) continue

      const content = fs.readFileSync(path.join(migrationsDir, file), 'utf-8')
      const { up } = this.parseMigrationSql(content)
      if (!up) continue

      console.log(`Running migration: ${file}`)
      await this.sequelize.query(up)
      await this.sequelize.query(`INSERT INTO "migrations" ("name") VALUES ($1)`, { bind: [file] })
      console.log(`Applied: ${file}`)
      ran++
    }

    if (ran === 0) console.log('No new migrations to run.')
    await this.sequelize.close()
  }

  public static async main(): Promise<void> {
    await new RunMigration().run()
  }
}

RunMigration.main().catch(err => {
  console.error(err)
  process.exit(1)
})
