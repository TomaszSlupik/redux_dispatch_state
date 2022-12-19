import React from 'react'
import { connect } from 'react-redux'
import { addcake } from '../../actions/addcake_action'

export const Cakeadd = ({addcake}) => {

    let input

const addcaketolist = (e) => {
    e.preventDefault()
    const value = input.value.trim()
    addcake(value)

}


  return (
    <div>
        <form>
            <label htmlFor='addcake'>Dodawanie</label> 
            <input type="text" id='addcake' placeholder="wpisz ciasto" ref={node => (input = node)}/> 
            <input type="submit" value="dodaj" onClick={addcaketolist}/>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    addcake: (text) => dispatch (addcake(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cakeadd)