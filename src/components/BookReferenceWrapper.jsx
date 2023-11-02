import React, {useContext, useState} from 'react'
import { BookReferenceForm } from './BookReferenceForm'
import {v4 as uuidv4} from 'uuid'
import { BookReference } from './BookReference'
import { EditBookReferenceForm } from './EditBookReferenceForm';
uuidv4()

export const BookReferenceWrapper = () => {

    const [bookReferences, setBookReferences] = useState([])
    const addBookReference = (name, author, publisher, year, edition)=>  {
        setBookReferences([...bookReferences, {id: uuidv4(), name: name, author: author, publisher: publisher, year: year, edition: edition, completed: false, isEditing: false}])
    }
    const deleteBookReference = id => {
        setBookReferences(bookReferences.filter(bookReference => bookReference.id !== id))
    }
    const editBookReference = id => {
        setBookReferences(bookReferences.map(bookReference => bookReference.id === id ? {...bookReference, isEditing: !bookReference.isEditing} : bookReference))
    }
    const editDescriptionBookReference = (name,author,publisher,year,edition, id) => {
        setBookReferences(bookReferences.map(bookReference => bookReference.id === id ? {...bookReference,name, author, publisher, year, edition, isEditing: !bookReference.isEditing} : bookReference))
    }
    
  return (
    <div className='Wrapper' id='bookreference'>
        <h1>BookReference</h1>
        <BookReferenceForm addBookReference={addBookReference}/>
        <table className='table table-bordered text-center table-hover border-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Edition</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookReferences.map((bookReference, index) => (
              
              bookReference.isEditing ? (
                <EditBookReferenceForm editBookReference={editDescriptionBookReference} bookReference={bookReference}/>
              ) : (
                <BookReference bookReference={bookReference} key={bookReference.id} index={index} deleteBookReference={deleteBookReference} editBookReference={editBookReference}/>
                )))
                
            }
          </tbody>
        </table>
        
        <button type='submit'>Next</button>
    </div>
  )
}
