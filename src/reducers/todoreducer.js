const Initial_State = {todos: [] };
export const Todos = (state = Initial_State, action) => {
    
    switch(action.type) {

        case 'ADD_TODO' :  
        console.log(state)      
         return {...state.todos,  todos: {id: action.id, text: action.text}};

         case 'LIST_TODOS' :        
         return state.todos;

         case 'DELETE_TODO' :
        
        return [state]
        //  return [ ...state.slice(state.indexOf(action.item)+1,1)];


         default :
         return [state.todos]
    }
    
}