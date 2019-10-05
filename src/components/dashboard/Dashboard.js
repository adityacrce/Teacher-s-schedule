import React, { Component } from 'react'
import Notifications from './Notifications'
import LectureList from '../lectures/LectureList'
import {connect} from 'react-redux'


class Dashboard extends Component{
    render() {
        const {lectures} = this.props;
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <LectureList lectures={lectures} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications />
                    </div>
                </div>
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return{
        lectures: state.lecture.lectures
    }
}

export default connect(mapStateToProps)(Dashboard)