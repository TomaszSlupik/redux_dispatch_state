import React from 'react'
import { connect } from 'react-redux'
import { addCoffee } from '../../actions/addcoffee_action'

export const Coffeeadd = ({ addCoffee }) => {

    let input

    const addCoffeeList = (e) => {
        e.preventDefault()
        const value = input.value.trim()
        addCoffee (value)
    }

  return (
    <div>Dodawanie
        <div>
            <form>
                <label>
                    <input type="text" ref={node => (input = node)}/>
                    <button onClick={addCoffeeList}>Dodaj</button>
                </label>
            </form>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    addCoffee: (text) => dispatch(addCoffee(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Coffeeadd)