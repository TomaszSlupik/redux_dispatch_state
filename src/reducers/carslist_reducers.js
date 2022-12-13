const carlist = (state= ['mercedes', 'bmw'], action) => {

      switch (action.type) {
      case "ADD_CAR":
        return [
          ...state
        ]
    
      default:
        return state
      }
}

export default carlist