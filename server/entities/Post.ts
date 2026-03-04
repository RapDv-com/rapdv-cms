// Copyright (C) Konrad Gadzinowski

import 'reflect-metadata'
import { Column, DataType, Table, Unique } from 'sequelize-typescript'
import { RapDvBaseEntity } from '../../submodules/rapdv/server/database/RapDvBaseEntity'

@Table({ tableName: 'posts', timestamps: true })
export class Post extends RapDvBaseEntity {
  @Unique
  @Column({ allowNull: true })
  key: string

  @Column({ allowNull: true, type: DataType.TEXT })
  title: string

  @Column({ allowNull: true, type: DataType.TEXT })
  description: string

  @Column({ allowNull: true, type: DataType.TEXT })
  content: string

  @Column({ allowNull: true, type: DataType.DATE })
  publishedDate: Date
}
