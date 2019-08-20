import React from 'react';

import {connect} from 'react-redux';
import  {todos}  from '../actions';
const Todos = (props) => {
console.log(props.list.Todos)
    const addTodo = (event, props) => {
        event.preventDefault();
        props.addtodo(event.target.user.value)
        
      }
    const deletetodo = (event, item)  => {
        console.log(props);
        event.preventDefault();
        props.deletetodo(item)
    }
return (<div>
    {/* deletetodo */}
    <div>
   
        {   
            
            props.list && props.list.Todos &&  props.list.Todos.length >= 1 ? 
            
            props.list.Todos.map(d => 
        <div key={d.id} onClick={(event) => deletetodo(event, d)}>{d.text}</div>
        ) :
        <div>
            No data
            </div>
        }
    </div>
    <form onSubmit={(event) => addTodo(event, props)}>
    <input type="text" name="user"/>
    <input type="submit"/>
    </form>
</div>)


}

const mapStateToProps = (state) => {
console.log(state)        
   return (
    
    {list: state.Todos}
)
}

// const mapDispatchToProps = (actions) => ({
//   todos: actions
// })
const TodoApp = connect(mapStateToProps, todos)(Todos)
export default TodoApp;