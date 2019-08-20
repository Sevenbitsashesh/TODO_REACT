

let nextTodoId = 0;
export const addtodo = (text) => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text    
})

export const listtodos = (text) => ({
    type: "LIST_TODOS",
    text    
})

export const deletetodo = (item) => ({
    type: "DELETE_TODO",
    item    
})