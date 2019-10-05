import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CreateLecture} from '../../store/actions/lectureActions'

 class CreateLecture extends Component {
     state = {
         title: '',
         content: ''
     }
     handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        this.props.createLecture(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='grey-text text-darken-3'>Create New Lecture</h4>
                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange}/>
                    </div>
                    <div className='input field'>
                        <label htmlFor='content'>Lecture Content</label>
                        <textarea id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create Lecture</button>
                    </div>
                </form>    
            </div>
        );
    }
}
const mapDispatchToProps= (dispatch) => {
    return {
        createLecture: (lecture) => dispatch(createLecture(lecture))
    }
}
export default connect(null, mapDispatchToProps)(CreateLecture)
