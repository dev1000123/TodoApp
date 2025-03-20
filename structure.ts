export interface Todo{
    Label:string,
    id:number,
    completed:boolean,
}

export interface TodoList{
    todos:Todo[],
    
}