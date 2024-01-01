// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickButton = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    let image
    if (randomNumber === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
    return image
  }

  render() {
    const {total, heads, tails, image} = this.state
    return (
      <div className="bg-container">
        <div className="content-bg">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button type="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="counts">Total:{total}</p>
            <p className="counts">Heads:{heads}</p>
            <p className="counts">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
