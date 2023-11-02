import React from 'react'

const CourseAssessmentTable = () => {
  return (
    <div className='Wrapper text-center' id='courseassessment'>
        <h1>Course Assessment</h1>
       <table className='table table-bordered text-center table-hover border-dark'>
            <thead>
                <tr>
                    <th rowSpan={2}>Blooms Category</th>
                    <th colSpan={3}>CIE - Continuous Internal Evaluation</th>
                    <th rowSpan={2}>Final Examination</th>
                </tr>
                <tr >
                     
                    <th>Fest/Quiz</th>
                    <th>Assignment</th>
                    <th>External Perticipation</th>
                </tr>
                    
            </thead>
            <tbody>

                <tr >
                     <th >Remember</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Understand</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Apply</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Analyze</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Evaluate</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Creare</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Total</th>
                
                     <td colSpan={3}><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>

            
            </tbody>
        </table>
        <button type="button" class="btn btn-success">Save</button>
    </div>
  )
}

export default CourseAssessmentTable