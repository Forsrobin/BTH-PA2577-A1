import { Router } from 'express'
import { addPost, deletePost, getPosts } from './service'
import { Post } from '@prisma/client'

const postRouter = Router()

postRouter.get('/getPosts', async (req, res) => {
  const posts = await getPosts()
  res.json(posts)
})

postRouter.post('/addPost', async (req, res) => {
  const postData = req.body as Omit<Post, 'id'>
  const post = await addPost(postData)
  res.json(post)
})

postRouter.delete('/deletePost/:id', async (req, res) => {
  const { id } = req.params
  await deletePost(id)
  res.json({ message: `Post with id ${id} deleted` })
})

export default postRouter
