import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

export const Wrapper: FC<Props> = ({ children }) => {
  return <div className='bg-white shadow-md flex grow p-4'>{children}</div>
}
