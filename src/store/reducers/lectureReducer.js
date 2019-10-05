const initState ={
    lectures: [
        {id: '1', title: 'WT', content: 'css, html & js'},
        {id: '2', title: 'AA', content: 'how to become god'},
        {id: '3', title: 'CN', content: 'packet tracer'},
    ]
}

const lectureReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            
    }
    return state
}
export default lectureReducer