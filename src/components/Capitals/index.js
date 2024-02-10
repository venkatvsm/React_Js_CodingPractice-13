import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {currentID: countryAndCapitalsList[0].id}

  countryChange = event => {
    this.setState({currentID: event.target.value})
  }

  searchResult = () => {
    const {currentID} = this.state
    const serachFilter = countryAndCapitalsList.find(
      eachItem => eachItem.id === currentID,
    )
    return serachFilter.country
  }

  render() {
    const countryName = this.searchResult()

    return (
      <div className="bg_container">
        <div className="card_container">
          <h1>Countries And Capitals</h1>
          <div className="questionContainer">
            <select onChange={this.countryChange} className="optionelement">
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key= {eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h1 className="countryName">{countryName}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
