let idcoffee = 0

export const addCoffee = text => ({
  type: "ADD_COFFEE",
  id: idcoffee++,
  complete: false,
  text
})
