import { Post, Prisma } from '@prisma/client'
import { prisma } from '../..'

export const getPosts = async () => {
  const data = await prisma.post.findMany()
  return data
}

export const addPost = async (post: Omit<Post, 'id'>) => {
  const data = await prisma.post.create({ data: post })
  return data
}

export const deletePost = async (id: string) => {
  const res = await prisma.post.delete({ where: { id } })

  if (!res) {
    throw new Error(`Post with id ${id} not found`)
  }

  return res
}
