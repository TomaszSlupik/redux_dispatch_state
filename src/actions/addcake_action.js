let idcake = 0

export const addcake = (text) => ({
    type: "ADD_CAKE",
    complete: false, 
    id: idcake++, 
    text

})