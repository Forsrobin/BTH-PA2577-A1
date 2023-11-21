import { ChangeEvent, useState } from 'react'
import { Input } from '../components/Input'
import { Wrapper } from '../components/Wrapper'
import { Textarea } from '../components/Textarea'
import { customAxios } from '../helper/axiosClient'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState<string>('')
  const [author, setAuthor] = useState('')

  const navigate = useNavigate()

  const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  const handleSetContent = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
  const handleSetAuthor = (e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)

  const createPost = async () => {
    try {
      await customAxios.post('/blog/addPost', {
        title,
        content,
        author,
        published: true
      })
      navigate('/')
    } catch (error) {
      alert('Could not connecto to server')
    }
  }

  return (
    <Wrapper>
      <div className='w-1/2'>
        <h2 className='text-xl font-bold text-gray-600'>Create a blog post</h2>
        <form
          action='post'
          onSubmit={async (e) => {
            e.preventDefault()
            createPost()
          }}>
          <Input onChange={handleSetTitle} value={title} label='Title' placeholder='Title' type='text' />
          <Textarea onChange={handleSetContent} label='Content' placeholder='Post content' value={content} />
          <Input onChange={handleSetAuthor} value={author} label='Author' placeholder='Robin Fors' type='text' />
          <button className='bg-blue-500 px-3 py-2 mt-3 text-white rounded-md' type='submit'>
            Create
          </button>
          <button
            onClick={() => {
              navigate('/')
            }}
            className='px-4 py-2 mt-3 mr-2 text-gray-600 border-b-2 border-b-transparent  hover:text-blue-700 hover:undeline '>
            Back
          </button>
        </form>
      </div>
    </Wrapper>
  )
}
