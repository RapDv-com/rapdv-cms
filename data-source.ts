import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Evolution } from './submodules/rapdv/server/database/CollectionEvolution'
import { Log } from './submodules/rapdv/server/database/CollectionLog'
import { File } from './submodules/rapdv/server/database/CollectionFile'
import { ImageFile } from './submodules/rapdv/server/database/CollectionImageFile'
import { System } from './submodules/rapdv/server/database/CollectionSystem'
import { User } from './submodules/rapdv/server/database/CollectionUser'
import { UserSession } from './submodules/rapdv/server/database/CollectionUserSession'
import { Post } from './server/entities/Post'
import { Comment } from './server/entities/Comment'

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Evolution, Log, File, ImageFile, System, User, UserSession, Post, Comment],
  migrations: ['migrations/*.ts'],
})
