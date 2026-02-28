// Copyright (C) Konrad Gadzinowski

import 'reflect-metadata'
import { Column, Entity, ManyToOne } from 'typeorm'
import { RapDvBaseEntity } from '../../submodules/rapdv/server/database/RapDvBaseEntity'
import { Post } from './Post'
import { User } from '../../submodules/rapdv/server/database/CollectionUser'

@Entity('comments')
export class Comment extends RapDvBaseEntity {
  @Column({ nullable: true, type: 'text' })
  content: string

  @ManyToOne(() => Post, { nullable: true })
  post: Post

  @Column({ nullable: true })
  postId: string

  @ManyToOne(() => User, { nullable: true })
  author: User

  @Column({ nullable: true })
  authorId: string

  @Column({ nullable: true, type: 'timestamptz' })
  publishedDate: Date
}
