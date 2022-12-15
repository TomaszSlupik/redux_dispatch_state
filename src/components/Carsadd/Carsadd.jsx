import React from 'react'
import { connect } from 'react-redux'
import { addcar } from '../../actions/addcar_action'

export const Carsadd = ({addcar}) => {

let input

const addCarToList = (e) => {
    e.preventDefault()
    const value = input.value.trim()
    addcar(value)
    console.log(value)
}

  return (
    <div>
        <form>
          <label>
            <input id='addcar' type="text"  ref={node => (input = node)}/>
            <button onClick={addCarToList}>Dodaj</button>
          </label>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    addcar: (text) => dispatch(addcar(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Carsadd)