import React from 'react'
import { connect } from 'react-redux'
import { addWatchToList } from '../../actions/addwatch_action'

export const Watchadd = ({addWatchToList}) => {

    let input 

    const watchAddNext = (e) => {
        e.preventDefault()
        const value = input.value.trim()
        addWatchToList(value)
    }

  return (
    <div>
        <div>Dodaj kolejny zegarek:</div>
        <input
        ref={node => (input = node)}
        type="text" />
        <button onClick={watchAddNext}>Dodaj</button>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    addWatchToList: (text) => dispatch(addWatchToList(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Watchadd)