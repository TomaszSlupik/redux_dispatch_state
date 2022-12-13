const booklist = (state = ['Wiedźmin'], action) => {

    switch (action.type) {
        case "ADD_BOOK":
            return [...state]

        default:
            return state
    }
}

export default booklist