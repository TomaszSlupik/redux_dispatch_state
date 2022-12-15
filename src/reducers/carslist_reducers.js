const carlist = (state= ['mercedes', 'bmw'], action) => {

      switch (action.type) {
      case "ADD_CAR":
        return [
          ...state, 
          action.text
        ]
    
      default:
        return state
      }
}

export default carlist