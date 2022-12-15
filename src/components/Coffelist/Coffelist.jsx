import React from 'react'
import { connect } from 'react-redux'

export const Coffelist = ({coffeelist}) => {
  return (
    <div>
        <div>Najlepsze kawy do wyboru:</div>
        <div>{JSON.stringify(coffeelist, null, 2)}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    coffeelist: state.coffeelist
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Coffelist)