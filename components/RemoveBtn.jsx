import { HiOutlineTrash } from 'react-icons/hi'
import React from 'react'

const RemoveBtn = () => {
  return (
    <button className='text-red-400'>
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveBtn