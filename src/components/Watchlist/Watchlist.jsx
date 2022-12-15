import React from 'react'
import { connect } from 'react-redux'


export const Watchlist = ({watchlist}) => {
  return (
    <div>
        <div>Lista zegarków</div>
        <div>{watchlist}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    watchlist: state.watchlist
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist)