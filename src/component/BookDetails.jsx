import React, { useEffect } from "react";

import { useDispatch } from "react-redux"; 
import { getbooks } from "../store/bookSlice";
import { bookPreveiw } from "../store/preveiwSlice";
import { useSelector } from "react-redux";
import { deleteBook } from "../store/bookSlice";

const BookDetails = () => {
    const {isLoading, Books, erorr} = useSelector((state) => state.bookSlice )
    

  const readHandel =(book)=>{
    dispatch(bookPreveiw(book))
  }
    
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getbooks())
    },[dispatch])
    
    return (
      <>
             <li className="row">
                <p className="col-3">Title</p>
            </li>
        {
          Books === [] ? "no data avilable" : isLoading ? "loading..." : Books &&
          Books.map((book) => <ul key={book.id}> <li className="row">
                        <p className="col-6 text-start">{book.title}</p>
                        <button type="button" className="btn btn-primary col-3" onClick={()=> readHandel(book)} >READ</button>
                        <button type="button" className="btn btn-danger col-3" onClick={()=>dispatch(deleteBook(book.id))}>DELETE</button>
                    </li></ul>)      
             
 
               
        } 

      </>
    )
  }
  
  export default BookDetails