import {Component} from 'react'
import './index.css'
import EmojiList from '../EmojiList'

class Feedback extends Component {
  state = {
    onEmojiClicked: false,
  }

  onClickingEmoji = () => {
    const {onEmojiClicked} = this.state
    this.setState({onEmojiClicked: !onEmojiClicked})
  }

  headingElement = () => {
    const {onEmojiClicked} = this.state

    if (onEmojiClicked === false) {
      return <h1 className="heading">Feedback</h1>
    }

    return <h1 className="heading">Thank You Screen</h1>
  }

  bodyElement = () => (
    <div className="card-conatiner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
        className="image"
        alt="love emoji"
      />

      <h1 className="parag">Thank You!</h1>
      <p className="paragraph">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )

  render() {
    const {resources} = this.props
    const {onEmojiClicked} = this.state
    const {emojis, loveEmojiUrl} = resources
    console.log(loveEmojiUrl)
    console.log(emojis)

    return (
      <div className="home">
        <div className="card-container">
          <div className="white-container">
            {onEmojiClicked && this.bodyElement()}

            {!onEmojiClicked && (
              <div>
                <h1 className="parag">
                  How satisfied are you with our <br />
                  customer support <br />
                  performance?
                </h1>
                <ul className="list-container">
                  {emojis.map(eachEmoji => (
                    <EmojiList
                      key={eachEmoji.id}
                      emoji={eachEmoji}
                      onClickingEmoji={this.onClickingEmoji}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
