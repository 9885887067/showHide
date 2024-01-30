import {Component} from 'react'
import './index.css'
class ShowHide extends Component {
  state = {
    isClicked: false,
  }
  firstName = () => {
    this.setState((prevState = {isClicked: !prevState.isClicked}))
  }
  getFirstName = () => {
    <div className="container">
      <h1 className="heading-2">Joe</h1>
    </div>
  }

  render() {
    const {isClicked} = this.state
    {
      isClicked ? this.getFirstName : null
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button className="button" onClick={this.firstName}>
            Show/Hide Firstname
          </button>
          <button className="button" onClick={this.lastName}>
            Show/Hide Lastname
          </button>
        </div>
      </div>
    )
  }
}
export default ShowHide
