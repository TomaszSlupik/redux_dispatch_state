import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/addbook_action';

export const Booklistadd = ({addBook}) => {

    let input;

    const addBooktoList = (e) => {
        e.preventDefault()
        const value = input.value.trim()
        addBook (value)
        console.log(value)
    }


  return (
    <div>
        <form>
            <label>
                <input type="text" ref={node => (input = node)}/>
                <button onClick={addBooktoList}>Dodaj</button>
            </label>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    addBook: (text) => dispatch(addBook(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Booklistadd)