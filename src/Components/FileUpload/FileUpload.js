import React from 'react';

export default function () {
  return (
    <div>
        <h2>File Upload</h2>
        <div className='uploads'>
        <div className='notice'>
        <h3>Upload Notice</h3>
    <form action="http://localhost:5001/upload-notice" method="post" enctype="multipart/form-data">
      <input type="file" name="pdfnoticeupload"></input>
      <button type='submit'>Upload</button>
    </form>
      </div>

      <div className='attendance'>
        <h3>Upload Attendance</h3>
    <form action="http://localhost:5001/upload-attendance" method="post" enctype="multipart/form-data">
      <input type="file" name="pdfattendanceupload"></input>
      <button type='submit'>Upload</button>
    </form>
      </div>
          </div> 
     
    </div>
  )
}
