import React, {useRef} from 'react'

import { useDispatch } from 'react-redux';
import { insertBook } from '../store/bookSlice';
const AddForm = () => {
  const dispatch = useDispatch()
  // refs
  const title = useRef(null)
  const price = useRef(null)
  const discription = useRef(null)
  const handelSubmit = (e)=>{
    e.preventDefault()
    const bookData = {
      title: title.current.value,
      price: price.current.value,
      discription: discription.current.value,
    }
    dispatch(insertBook(bookData))
    title.current.value = null
    price.current.value = null
    discription.current.value = null
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input ref={title} className="form-control" type="text" placeholder="Title" aria-label="default input example" />
        <input ref={price} className="form-control" type="text" placeholder="Price" aria-label="default input example" />
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea ref={discription} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-success' type='submit'>ADD</button>
      </form>
    </>
  )
}

export default AddForm;
