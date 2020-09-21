import React, { Component } from "react";
import Contact from "./Contact";


import { Consumer } from "../../contextprovider/context";

import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactsActions";

export class Contacts extends Component {



  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (

      <div className="card mt-5 mb-5">
        <div className="card-header">Contacts</div>
        {this.props.contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            email={contact.email}
            password={contact.password}
          ></Contact>
        ))}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
})

// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// })
export default connect(mapStateToProps, { getContacts })(Contacts);
