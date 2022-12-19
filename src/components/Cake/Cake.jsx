import React from 'react'
import { connect } from 'react-redux'

export const Cake = ({cakelist}) => {
  return (
    <div>
        <div>Lista wypieków:</div>
        <div>{JSON.stringify(cakelist, null, 2)}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    cakelist: state.cakelist
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)