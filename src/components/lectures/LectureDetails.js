import React from 'react'

function LectureDetails(props) {
    const id=props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Lecture Title-{id}</span>
                    <p>akkad bakkad bambe po assi nabbe poore so</p> 
                </div>
            <div className='card-action grey lighten-4 grey-text'>
                <div>Posted by Aditya</div>
                <div>4th Oct 2019, 5 pm</div>
            </div>
            </div>
        </div>
    )
}

export default LectureDetails
