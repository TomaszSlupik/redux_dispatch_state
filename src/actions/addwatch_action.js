let watchid = 0

export const addWatchToList = (text) => ({
  type: "ADD_WATCH",
  id: watchid,
  complete: false,
  text
})
