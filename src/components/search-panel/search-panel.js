import React from "react"
import './search-panel.css'

// const SearchPanel = () => {
//     return(
//         <div className='search-input'>
//             <input
//                 placeholder='search'
//             />
//         </div>
//     )
// }

class SearchPanel extends React.Component {
    state = {
        termPanel: ''
    }

    onSearchPanelChange = (e) => {
        const termPanel = e.target.value
        this.setState({ termPanel })
        this.props.onSearchChange(termPanel)
    }

    render() {
        return (
            <div className='search-input'>
                <input className='form-control'
                    placeholder='search'
                    value={this.state.termPanel}
                    onChange={this.onSearchPanelChange}
                />
            </div>
        )
    }
}

export default SearchPanel