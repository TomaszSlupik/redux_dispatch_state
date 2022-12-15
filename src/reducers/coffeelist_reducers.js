const coffeelist = (state=['costa'], action) => {
      
      switch (action.type) {
      case "ADD_COFFEE":
        return [
            ...state, 
            action.text
        ]
    
      default:
        return state
      }
    }

    export default coffeelist
    
