import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isActive} = this.state

    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.onToggleIsActive}
          >
            <img className="image" src={image} alt={altText} />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
