import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css'

// const App = () => {

//   const todoData = [
//     {label: 'Do One', important: true, id: 1},
//     {label: 'Do Two', important: false, id: 2},
//     {label: 'Do Three', important: true, id: 3},
//   ]
//   return(
//     <div className='todo-app'>
//     <AppHeader toDo={1} done={5}/>
//     <div className='top panel d-flex'>
//     <SearchPanel/>
//     <ItemStatusFilter/>
//     </div>
//     <TodoList todos={ todoData }/>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super()
    this.maxId = 100
    this.state = {
      todoData: [
        this.createTodoItem('One'),
        this.createTodoItem('Two'),
        this.createTodoItem('Three'),
      ],
      term: '',
      filter: 'all'
    }
  }

  createTodoItem = (label) => {
    return {
      label,
      impportant: false,
      done: false,
      id: this.maxId++
    }
  }

  addItem = (text) => {
    this.setState((state) => {
      const newItem = this.createTodoItem(text)
      const newArray = [...state.todoData, newItem]
      return {
        todoData: newArray
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    const newArray = [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
    return newArray
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'important') }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'done') }
    })
  }

  onSearchChange = (term) => {
    this.setState({ term: term })
  }
 
  search(items, term) {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter: filter })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  render() {
    const { todoData, term, filter } = this.state
    const visibleItems = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount
    return (
      <div className='todo-app'>
        <AppHeader
          toDo={todoCount}
          done={doneCount}
        />
        <div className='top panel d-flex'>
          <SearchPanel
            onSearchChange={this.onSearchChange}
          />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm
          text={'Hello World'}
          onItemAdded={this.addItem}
        />
      </div>
    )
  }
}

export default App