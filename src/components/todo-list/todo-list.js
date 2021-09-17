import React, { Component } from "react"
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

//STEP 1 : USE PROPS
//------------------
// const TodoList = ( props ) => { 
//     return(
//         <div>
//             <ul>
//                 <li><TodoListItem 
//                     label={props.todos[0].label} 
//                     important={props.todos[0].important}/>
//                 </li>
//                 <li><TodoListItem 
//                     label={props.todos[1].label} 
//                     important={props.todos[1].important}/>
//                 </li>
//                 <li><TodoListItem 
//                     label={props.todos[2].label} 
//                     important={props.todos[2].important}/>
//                 </li>
//             </ul>
//         </div>
//     )
// }

//STEP 2 : USE TODOS BESIDES PROPS
//------------------
// const TodoList = ( {todos} ) => { 
//     return(
//         <div>
//             <ul>
//                 <li><TodoListItem 
//                     label={todos[0].label} 
//                     important={todos[0].important}/>
//                 </li>
//                 <li><TodoListItem 
//                     label={todos[1].label} 
//                     important={todos[1].important}/>
//                 </li>
//                 <li><TodoListItem 
//                     label={todos[2].label} 
//                     important={todos[2].important}/>
//                 </li>
//             </ul>
//         </div>
//     )
// }

//STEP 3 : USE MAP AND GET ITEM FIELDS EXACTLY
//------------------
// const TodoList = ( { todos } ) => { 
//     const elements = todos.map((item) => {
//         return(
//             <li>
//                 <TodoListItem
//                 label={item.label}
//                 important={item.important}
//             />
//             </li>
//         )})
//     return(
//         <div>
//             <ul>
//                 {elements}
//             </ul>
//         </div>
//     )
// }

//STEP 4 : USE CONSTRUCTION ...ITEM
//------------------
// const TodoList = ( { todos } ) => { 
//     const elements = todos.map((item) => {
//         return(
//             <li>
//                 <TodoListItem{ ...item }
//             />
//             </li>
//         )})
    
//     return(
//         <div>
//             <ul>
//                 {elements}
//             </ul>
//         </div>
//     )
// }

//STEP 5 : USE ID AND ...ITEM_WITHOUT_ID
//------------------
// const TodoList = ( { todos } ) => { 
//     const elements = todos.map((item) => {
//     const { id, ...item_without_id } = item
//         return(
//             <li className='list-group-item' key={ id }>
//                 <TodoListItem{ ...item_without_id }/>
//             </li>
//         )})
    
//     return(
//         <div>
//             <ul className='list-group todo-list'>
//                 {elements}
//             </ul>
//         </div>
//     )
// }
 
//STEP 6 : CREATE CLASS COMPONENT
//------------------
class TodoList extends Component { 
    render() {
    const elements = this.props.todos.map((item) => {
    const { id, ...item_without_id } = item
        return(
            <li className='list-group-item' key={ id }>
                <TodoListItem 
                    { ...item_without_id } 
                    onDeleted={() => this.props.onDeleted(id)}
                    onToggleDone={() => this.props.onToggleDone(id)}
                    onToggleImportant={() => this.props.onToggleImportant(id)}
                />
            </li>
        )})
        return(
            <div>
                <ul className='list-group todo-list'>
                    {elements}
                </ul>
            </div>
        )
    }
}

export default TodoList