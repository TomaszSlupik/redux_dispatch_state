import React from 'react'
import { connect } from 'react-redux'


export const Watchlist = ({watchlist}) => {
  return (
    <div>
        <div>Lista zegarków</div>
        <div>{JSON.stringify(watchlist, null, 2)}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    watchlist: state.watchlist
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist)