import React from 'react'
import { connect } from 'react-redux'

export const Carslist = ({carlist}) => {
  return (
    <div>{JSON.stringify(carlist, null, 2)}</div>
  )
}

const mapStateToProps = (state) => ({
    carlist: state.carlist
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Carslist)