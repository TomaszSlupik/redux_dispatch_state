import React from 'react'
import { connect } from 'react-redux'


export const Todolist = ({todo}) => {
  return (
    <div>
        <pre>
        {JSON.stringify(todo, null, 2)}
        </pre>
    </div>
  )
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)