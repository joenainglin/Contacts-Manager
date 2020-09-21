import React, { Component } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

import { Consumer } from "../contextprovider/context";

export class Contacts extends Component {
  constructor() {
    super();
    this.state = {
       
    };
  }

  render() {
    return (
      <Consumer>

        {(value) => {
          return (
            <div className="card mt-5 mb-5">
            <div
              className="card-header"
             
            >
                Contacts
             
            </div>
            {value.contacts.map((contact) => (
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
        }}
      </Consumer>
    );
  }
}

export default Contacts;
