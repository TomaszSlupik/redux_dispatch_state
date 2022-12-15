const booklist = (state = ['Wiedźmin'], action) => {

    switch (action.type) {
        case "ADD_BOOK":
            return [...state, 
                action.text]

        default:
            return state
    }
}

export default booklist