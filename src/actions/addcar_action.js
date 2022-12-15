let car = 0

export const addcar = text => ({
  type: "ADD_CAR",
  id: car++,
  complete: false,
  text
})
