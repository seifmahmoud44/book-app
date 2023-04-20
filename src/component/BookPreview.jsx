import React from 'react'
import { useSelector } from 'react-redux'

function BookPreview() {
  const {selectedBook} = useSelector((state)=>state.preveiwSlice)
  
  return (
    <>
    {selectedBook ? <div className='text-start mt-5 ml-3'>
      <p>Title : {selectedBook.title}</p>
      <p>Price : {selectedBook.price}</p>
      <p>Discription : {selectedBook.discription}</p>
      </div> : "no data available"}
    
    </>
  )
}

export default BookPreview
