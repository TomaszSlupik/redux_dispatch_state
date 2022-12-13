import React from 'react'
import { connect } from 'react-redux'

export const Booklist = ({booklist}) => {
  return (
    <div>
        <div>Lista książek</div>
        <div>{booklist}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    booklist: state.booklist
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist)