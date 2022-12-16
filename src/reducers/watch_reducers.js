const watchlist = (state=['Garmin'], action) => {
 
  
      switch (action.type) {
    
      case "ADD_WATCH":
        return [
            ...state, 
            action.text
        ]
    
      default:
        return state
      }
    }
    
export default watchlist