import React, { Component } from "react"
import './todo-list-item.css'

//STEP 1 : USE SIMPLE FUNCTION
//------------------
// const TodoListItem = ( props ) => {
//     const style={
//         color: (props.important ? 'tomato' : 'black') 
//     }
//     return <span style={style}>{props.label}</span>
// }

//STEP 2 : USE FUNCTION WITH BUTTONS ETC
//------------------
// const TodoListItem = ( { label, important=false } ) => {
//     const style={
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal' 
//     }
//     return (
//         <span className='todo-list-item'>
//             <span className='todo-list-item-label' style={style}>
//                 {label}
//             </span>
//             <button 
//             type='button' 
//                className='btn btn-outline-success btn-sm float-right'>
//                 <i className='fa fa-exclamation'/>
//             </button>
//             <button
//                 className='btn btn-outline-danger btn-sm float-right'>
//                 <i className='fa fa-trash-o'/>
//             </button>
//         </span>
//     )
// }

//STEP 3 : USE CLASS BESIDES FUNCTION
//------------------
// class TodoListItem extends Component {
//     onLabelClick = () => {
//         console.log(`Done: ${ this.props.label }`)
//     }
//     render() {
//         const { label, important=false } = this.props
//         const style={
//             color: important ? 'steelblue' : 'black',
//             fontWeight: important ? 'bold' : 'normal' 
//         }
//         return (
//             <span className='todo-list-item'>
//                 <span className='todo-list-item-label' style={ style } 
//                 // onClick={() => console.log(`Done: ${ label }`)}>
//                 onClick={ this.onLabelClick }>
//                     { label }
//                 </span>
//                 <button 
//                 type='button' 
//                    className='btn btn-outline-success btn-sm float-right'>
//                     <i className='fa fa-exclamation'/>
//                 </button>
//                 <button
//                     className='btn btn-outline-danger btn-sm float-right'>
//                     <i className='fa fa-trash-o'/>
//                 </button>
//             </span>
//         )
//     }
// }

class TodoListItem extends Component {
    state={
        done: false,
        important: false
    }

    // onLabelClick = () => {
    //     this.setState(({ done }) => {
    //         return {
    //             done: !done
    //         }
    //     })
    // }

    // onMarkImportant = () => {
    //     this.setState(({ important }) => {
    //         return {
    //             important: !important
    //         }
    //     })
    // }

    render() {
        const { label, onToggleDone, onToggleImportant, onDeleted } = this.props
        // const { done, important } = this.state
        let classNames = 'todo-list-item'
        if ( this.props.done ) {
            classNames += ' done'
        }
        if ( this.props.important ) {
            classNames += ' important'
        }
        return (
            <span className={ classNames }>
                <span className='todo-list-item-label'
                    // onClick={ this.onLabelClick }>
                    onClick={ onToggleDone }>
                    { label }
                </span>
                <button 
                    type='button' 
                    className='btn btn-outline-success btn-sm float-right'
                    // onClick={ this.onMarkImportant }>
                    onClick={ onToggleImportant }>
                    <i className='fa fa-exclamation'/>
                </button>
                <button
                    className='btn btn-outline-danger btn-sm float-right'
                    onClick={ onDeleted }>
                    <i className='fa fa-trash-o'/>
                </button>
            </span>
        )
    }
}

export default TodoListItem