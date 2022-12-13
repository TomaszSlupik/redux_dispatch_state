const todo = (state = ['Idę na trening'], action) => {

    switch (action.type) {
        case 'ADD_TO_DO':
            return [
                ...state, 
                 action.text    
            ]

        default:
            return state

    }
}

export default todo