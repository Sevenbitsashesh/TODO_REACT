const Initial_State = {todos: []};
export  function todos(state = Initial_State, action)  {
    
    switch(action.type) {

        case 'ADD_TODO' :  
        // console.log('adding',action);
         return  Object.assign({}, state, {todos:[ ...state.todos,{id: action.id, text: action.text}]});
         

         case 'LIST_TODOS' :   
              console.log(todos)
         return state;

         case 'DELETE_TODO' :
        console.log(state.todos.splice(state.todos.indexOf(action.item),1));
        console.log(state)
        
        
        return Object.assign({}, state, {todos:state.todos.filter((d) => { return d.id !== action.item.id })});
        
         default :
         console.log('default');      
         return state
    }
    
}