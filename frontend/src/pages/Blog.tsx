import React, { useEffect } from 'react'
import { customAxios } from '../helper/axiosClient'
import { Post } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { Link } from 'react-router-dom'

export interface Post {
  id: string
  createdAt: Date
  published: boolean
  updatedAt: Date
  title: string
  content: string
  author: string
}

export const Blog = () => {
  const [posts, setPosts] = React.useState<Post[]>([])

  const getPosts = async () => {
    const response = await customAxios.get('/blog/getPosts')
    const data = (await response.data) as Post[]
    setPosts(data)
  }

  const deletePost = async (id: string) => {
    try {
      await customAxios.delete(`/blog/deletePost/${id}`)
      getPosts()
    } catch (error) {
      alert('Could not connecto to server')
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Wrapper>
      <div className='w-full flex flex-col'>
        <h2 className='text-2xl font-bold'>Posts</h2>
        <hr className='my-3' />
        {posts && posts.length === 0 ? (
          <div className='flex flex-row gap-3 items-center'>
            <p>No posts available, please create one.</p>
            <Link to='/create' className='bg-blue-500 text-white px-3 py-2 text-xs rounded-md '>
              Create a post
            </Link>
          </div>
        ) : (
          <div className=' gap-3 flex flex-col'>
            {posts &&
              posts.map((post) => {
                return <Post deletePost={deletePost} post={post} key={post.id} />
              })}
          </div>
        )}
      </div>
    </Wrapper>
  )
}
