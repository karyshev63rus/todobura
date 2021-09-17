import React from "react"
import './item-status-filter.css'

// const ItemStatusFilter = () => {
//     return (
//         <div>
//             <button
//                 type='button' 
//                 className='btn btn-info'>
//                 All
//             </button>

//             <button
//                 type='button' 
//                 className='btn btn-outline-secondary'>
//                 Active
//             </button>
//             <button
//                 type='button' 
//                 className='btn btn-outline-secondary'>
//                 Done
//             </button>
//         </div>
//     )
// }

class ItemStatusFilter extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     type='button' 
//                     className='btn btn-info'>
//                     All
//                 </button>
    
//                 <button
//                     type='button' 
//                     className='btn btn-outline-secondary'>
//                     Active
//                 </button>
//                 <button
//                     type='button' 
//                     className='btn btn-outline-secondary'>
//                     Done
//                 </button>
//             </div>
//         )
//     }

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render () {
        const { filter, onFilterChange } = this.props
        const buttons = this.buttons.map(({ name, label }) => {
        const isActive = filter === name
        const clazz = isActive ? 'btn-info' : 'btn outline-secondary'
            return (
                <button 
                    type='button'
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        })
        return(
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}

export default ItemStatusFilter