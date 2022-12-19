import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

export const Carslist = () => {

const cars = useSelector(state => state.carlist)

const toggleCar = () =>  {

}

  return (
    <div>
        <div>
          <li onClick={() => toggleCar(cars.id)}>{cars}</li>
        </div>
    </div>
    
  )
}

const mapStateToProps = (state) => ({
    carlist: state.carlist
})

const mapDispatchToProps = () => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Carslist)