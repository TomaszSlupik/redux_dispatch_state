import React from 'react'
import { connect } from 'react-redux'

export const Booklist = ({booklist}) => {
  return (
    <div>
        <div>Lista książek</div>
        <div>{JSON.stringify(booklist, null,2)}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    booklist: state.booklist
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist)