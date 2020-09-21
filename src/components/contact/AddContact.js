import React, { Component } from "react";

import { Consumer } from "../../contextprovider/context";

import { v4 as uuid } from "uuid";

import TextInputForm from "../TextInputForm";


import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addContact } from "../../actions/contactsActions";


class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {},
    };
  }

  onFormFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // check for error 
    if (this.state.name === '') {
      this.setState({ errors: { name: "name is require" } });
      return;
    }

    if (this.state.email === '') {
      this.setState({ errors: { email: "email is require" } });
      return;
    }

    if (this.state.password === '') {
      this.setState({ errors: { password: "password is require" } });
      return;
    }
    const newContact = {
      id: uuid(),
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.addContact(newContact);

    this.setState({
      name: "",
      email: "",
      password: "",
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card mt-5">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit}>
                  <TextInputForm
                    onChange={this.onFormFieldChange}
                    name="name"
                    label="name"
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    error={this.state.errors.name}
                  ></TextInputForm>

                  <TextInputForm
                    onChange={this.onFormFieldChange}
                    name="email"
                    label="email"
                    type="text"
                    placeholder="email"
                    value={this.state.email}
                    error={this.state.errors.email}
                  ></TextInputForm>

                  <TextInputForm
                    onChange={this.onFormFieldChange}
                    name="password"
                    label="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    error={this.state.errors.password}
                  ></TextInputForm>

                  <button type="submit" className="btn btn-primary btn-block">
                    Add
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
}

export default connect(null, { addContact })(AddContact);
