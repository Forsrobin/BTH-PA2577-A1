import { ChangeEvent, FC } from 'react'

interface Props {
  value: string
  label: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: FC<Props> = ({ placeholder, label, value, onChange }) => {
  return (
    <label htmlFor={label} className='flex relative flex-col'>
      <span className=' text-xs -top-1/2 translate-y-1/2 mx-2 px-1 w-fit bg-white'>{label}</span>
      <textarea defaultValue={value} onChange={onChange} className='border-[1px] rounded-md px-3 py-3 border-gray-300 text-sm' name={label} placeholder={placeholder} />
    </label>
  )
}
