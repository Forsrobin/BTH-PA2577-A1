import { FC } from 'react'
import type { Post as PostProps } from '../pages/Blog'
import { GoTrash } from 'react-icons/go'

interface Props {
  post: PostProps
  deletePost: (id: string) => void
}

export const Post: FC<Props> = ({ post, deletePost }) => {
  return (
    <div className=' bg-slate-300 text-gray-700 p-5 rounded-md'>
      <div className='flex flex-row items-center gap-2'>
        <button
          onClick={() => {
            deletePost(post.id)
          }}
          className='text-md font-bold flex justify-center mt-1 text-red-500 rounded-md'>
          <GoTrash />
        </button>
        <h3 className='text-2xl font-bold capitalize'>{post.title}</h3>
      </div>
      <p className='text-xs'>Author: {post.author}</p>
      <p className='my-2'>{post.content}</p>
      <p className='text-xs text-gray-500'>
        Created at: {new Date(post.createdAt).toLocaleDateString() + ' ' + new Date(post.createdAt).toLocaleTimeString()}
      </p>
      <p className='text-xs text-gray-500'>
        Updated at: {new Date(post.updatedAt).toLocaleDateString() + ' ' + new Date(post.updatedAt).toLocaleTimeString()}
      </p>
    </div>
  )
}
