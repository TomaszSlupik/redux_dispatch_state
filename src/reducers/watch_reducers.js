const watchlist = (state=['Garmin'], action) => {
 
  
      switch (action.type) {
    
      case "ADD_COFFEE":
        return [
            ...state
        ]
    
      default:
        return state
      }
    }
    
export default watchlist