import React, {useContext, useState} from 'react'
import { BookReferenceForm } from './BookReferenceForm'
import {v4 as uuidv4} from 'uuid'
import { BookReference } from './BookReference'
import { EditBookReferenceForm } from './EditBookReferenceForm';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
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
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Reference Books</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
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
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/courseassessment'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
        
    </div>
  )
}
