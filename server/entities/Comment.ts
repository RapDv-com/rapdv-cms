// Copyright (C) Konrad Gadzinowski

import 'reflect-metadata'
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript'
import { RapDvBaseEntity } from '../../submodules/rapdv/server/database/RapDvBaseEntity'
import { Post } from './Post'
import { User } from '../../submodules/rapdv/server/database/CollectionUser'

@Table({ tableName: 'comments', timestamps: true })
export class Comment extends RapDvBaseEntity {
  @Column({ allowNull: true, type: DataType.TEXT })
  content: string

  @ForeignKey(() => Post)
  @Column({ allowNull: true, type: DataType.UUID })
  postId: string

  @BelongsTo(() => Post)
  post: Post

  @ForeignKey(() => User)
  @Column({ allowNull: true, type: DataType.UUID })
  authorId: string

  @BelongsTo(() => User)
  author: User

  @Column({ allowNull: true, type: DataType.DATE })
  publishedDate: Date
}
