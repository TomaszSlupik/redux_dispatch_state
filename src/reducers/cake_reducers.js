const cakelist = (state=['szarlotka'], action) => {
   
      switch (action.type) {
    
      case "ADD_CAKE":
        return [
            ...state, 
            action.text
        ]
    
      default:
        return state
      }
}

export default cakelist