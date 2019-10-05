import React from 'react'

const LectureSummary= ({lecture}) => {
    return (
        <div className='card z-depth-0 lecture-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title '>{lecture.title}</span>
                    <p>Taken by Mahendra Mehra</p>
                    <p className='grey-text'> 4 Oct 2019, 3 pm</p>
                </div>
        </div>
    );
}

export default LectureSummary 