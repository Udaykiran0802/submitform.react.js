import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstName: false,
    isLastName: false,
    isSuccess: false,
  }

  submitFormSuccessfully = event => {
    event.preventDefault()
    const {isSuccess} = this.state
    const {firstName, lastName} = this.state
    if (isSuccess === false) {
      if (firstName !== '' && lastName !== '') {
        this.setState({isSuccess: true, firstName: '', lastName: ''})
      } else if (firstName === '' && lastName !== '') {
        this.setState({isFirstName: true})
      } else if (lastName === '' && firstName !== '') {
        this.setState({isLastName: true})
      } else {
        this.setState({isFirstName: true, isLastName: true})
      }
    } else {
      this.setState({isSuccess: false})
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({isFirstName: true})
    } else {
      this.setState({isLastName: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({isLastName: true})
    } else {
      this.setState({isLastName: false})
    }
  }

  renderForm = () => {
    const {firstName, lastName, isFirstName, isLastName} = this.state
    return (
      <>
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          className="user-input-field"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {isFirstName && <p className="error-msg">Required</p>}
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          className="user-input-field"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {isLastName && <p className="error-msg">Required</p>}
      </>
    )
  }

  renderSuccessfullySubmitted = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
        className="success-logo"
      />
      <p className="success-heading">Submitted Successfully</p>
    </div>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <div className="app-container">
        <div className="registration-form-container">
          <h1 className="registration-heading">Registration</h1>
          <form
            className="form-container"
            onSubmit={this.submitFormSuccessfully}
          >
            {isSuccess ? this.renderSuccessfullySubmitted() : this.renderForm()}
            <div className="button-container">
              <button type="submit" className="button">
                {isSuccess ? 'Submit Another response ' : 'submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default RegistrationForm
