import React from 'react'
import LectureSummary from './LectureSummary'

const LectureList = ({lectures}) => {
    return(
        <div className='lecture-list section'>
            {lectures && lectures.map(lecture => {
                return (
                    <LectureSummary lecture={lecture} key={lecture.id} />
                )
            })}
            
        </div>
    )
}
                                                                                                                        
export default LectureList