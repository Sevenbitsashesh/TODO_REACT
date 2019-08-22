import React,{useState} from 'react';

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
    const {list} = props;
    // console.log(todos);

    const [to] = useState(list);
console.log(to);
return (<div>
    {/* deletetodo */}
    <div>   
        {   
            list.length > 0 ? 
            
            list.map(d => 
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
    
    {list: state.todos.todos}
)
}

const mapDispatchToProps =  {
  addtodo: todos.addtodo,
  deletetodo: todos.deletetodo,
  listtodos: todos.listtodos
}
const TodoApp = connect(mapStateToProps,mapDispatchToProps)(MyTodos)
export default TodoApp;