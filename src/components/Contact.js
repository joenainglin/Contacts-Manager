import React, { Component } from "react";
import PropTypes from "prop-types";

import { Consumer } from "../contextprovider/context";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false,
    };

    // this.onShowClick = this.onShowClick.bind(this);
  }

  // onShowClick() {
  //   console.log(this.state);
  // }

  // with arrow functions we dont need to bind this
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteContact = (id, dispatch) => {
    // this.props.deleteClickHandler(id);
    console.log(id);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    return (

      <Consumer>
        { value => {
          return (
            <React.Fragment>
              <div className="card m-2">
                <div
                  className="card-header"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                >
                  {this.props.name}
                  <svg
                    onClick={this.deleteContact.bind(this, this.props.id, value.dispatch)}
                    width="1em"
                    height="2em"
                    viewBox="0 0 16 16"
                    className="bi bi-x-circle float-right"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
                {this.state.showContactInfo ? (
                  <div className="card-body">
                    <p className="card-text">Email: {this.props.email}</p>
                    <p className="card-text">Password: {this.props.password}</p>
                  </div>
                ) : null}
              </div>
              {/* {this.props.contacts.map(contact => 
              <div className="card my-2">
                <div className="card-header">{contact.name} </div>
                <div className="card-body">
                  <p className="card-text">Email: {contact.email}</p>
                  <p className="card-text">Password: {contact.password}</p>
                </div>
              </div> )} */}{" "}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}
Contact.defaultProps = {
  id: null,
  name: null,
  email: null,
  password: null,
};

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string.isRequired,

};

export default Contact;
