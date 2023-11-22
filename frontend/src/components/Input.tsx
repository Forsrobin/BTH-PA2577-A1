import { ChangeEvent, FC } from 'react'

interface Props {
  label: string
  type: 'text' | 'password' | 'email' | 'number'
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string | number
}

export const Input: FC<Props> = ({ type, placeholder, label, value, onChange }) => {
  return (
    <label htmlFor={label} className='flex relative flex-col'>
      <span className=' text-xs -top-1/2 translate-y-1/2 mx-2 px-1 w-fit bg-white'>{label}</span>
      <input
        min={0}
        minLength={0}
        onChange={onChange}
        className='border-[1px] rounded-md px-3 py-3 border-gray-300 text-sm'
        required
        value={value}
        name={label}
        type={type}
        placeholder={placeholder}
      />
    </label>
  )
}
