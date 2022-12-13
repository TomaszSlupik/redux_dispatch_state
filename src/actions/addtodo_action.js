let nexttodoid = 0

export const addToDo = text => ({
    type: 'ADD_TO_DO', 
    id: nexttodoid++,
    complete: false,
    text 
})