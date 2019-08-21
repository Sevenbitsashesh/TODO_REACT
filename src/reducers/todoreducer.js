const Initial_State = {todos: []};
export  function todos(state = Initial_State, action)  {
    
    switch(action.type) {

        case 'ADD_TODO' :  
        // console.log('adding',action);
         return Object.assign({}, state, {todos:[ ...state.todos,{id: action.id, text: action.text}]}) ;
         

         case 'LIST_TODOS' :   
              
         return [...state.todos];

         case 'DELETE_TODO' :
        console.log(state.todos.indexOf(action.item));
        state.todos.slice(state.todos.indexOf(action.item)-1,1)
        return state
        
         default :
        //  console.log('default');      
         return state
    }
    
}