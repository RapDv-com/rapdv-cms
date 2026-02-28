// Copyright (C) Konrad Gadzinowski

import 'reflect-metadata'
import { Column, Entity } from 'typeorm'
import { RapDvBaseEntity } from '../../submodules/rapdv/server/database/RapDvBaseEntity'

@Entity('posts')
export class Post extends RapDvBaseEntity {
  @Column({ unique: true, nullable: true })
  key: string

  @Column({ nullable: true, type: 'text' })
  title: string

  @Column({ nullable: true, type: 'text' })
  description: string

  @Column({ nullable: true, type: 'text' })
  content: string

  @Column({ nullable: true, type: 'timestamptz' })
  publishedDate: Date
}
