export const createLecture = (lecture) => {
    return(dispatch, getState) => {
        dispatch({type: 'CREATE-LECTURE', lecture });   
    }
};