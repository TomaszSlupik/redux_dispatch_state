import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../actions/addtodo_action'



export const Addtodo = ({addToDo}) => {

    let input;

    const taskInput = (e) => {
        e.preventDefault()
        const value = input.value.trim()
        addToDo(value)
        console.log(value)
    }

  return (
    <div>
        <form>
            <label>
                <input 
                ref={node => (input = node)}
                type="text"></input>
                <button
                onClick={taskInput}
                >Dodaj</button>
            </label>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    addToDo: (text) => dispatch(addToDo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Addtodo)