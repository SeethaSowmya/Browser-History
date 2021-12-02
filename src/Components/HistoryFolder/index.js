import {Component} from 'react'
import Lists from '../listFolder/index'
import './index.css'

class MainBrowser extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props

    const searchResults = initialHistoryList.filter(eachDestination =>
      eachDestination.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="blue">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="centerElement">
            <div className="element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />

              <input
                type="search"
                placeholder="Search"
                className="inputElement"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </div>
        <div>
          <ul className="none">
            {searchResults.map(each => (
              <Lists
                key={each.id}
                Details={each}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MainBrowser
