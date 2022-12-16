import React from 'react'
import { connect } from 'react-redux'
import Addtodoitem from '../Addtodo/Addtodoitem'


export const Todolist = ({todo}) => {

const btnADD = () =>  {
  console.log(todo)
}


  return (
    <div>
      <button onClick={btnADD}>sdasd</button>
        <ul>
          {
            todo.map(el => (
                      <Addtodoitem key={el.id} {...el}/>
              ))
            }
        </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)