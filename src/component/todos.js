import React from 'react';

import {connect} from 'react-redux';
import  {todos}  from '../actions';
const MyTodos = (props) => {
// console.log(props.list.Todos)
    const addTodo = (event, props) => {
        event.preventDefault();
        props.addtodo(event.target.user.value)
        
      }
    const deletetodo = (event, item)  => {
        // console.log(props);
        event.preventDefault();
        props.deletetodo(item)
    };
    const todos = props.list;
    // console.log(todos);
return (<div>
    {/* deletetodo */}
    <div>   
        {   
            todos.length > 0 ? 
            
            todos.map(d => 
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
// console.log(state)        
   return (
    
    {list: state.todos.todos}
)
}

// const mapDispatchToProps = (actions) => ({
//   todos: actions
// })
const TodoApp = connect(mapStateToProps, todos)(MyTodos)
export default TodoApp;