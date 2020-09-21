import React, { Component } from 'react';


// created context here
const Context = React.createContext();


const reducer = (state, action ) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return { ...state, 
            contacts: state.contacts.filter(contact => contact.id !== action.payload)};
        case 'ADD_CONTACT':
            return { ...state, 
            contacts: [action.payload, ...state.contacts]};
        default:
            return state;
        
    }
}


export class Provider extends Component {
    constructor(){
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "joe",
                    email: "joenainglin@gmail.com",
                    password: "howlin"
                },
                {
                    id: 2,
                    name: "hae",
                    email: "haelin@gmail.com",
                    password: "howlin"
                },
                {
                    id: 3,
                    name: "how",
                    email: "howlin@gmail.com",
                    password: "howlin"
                }
            ],
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        }
    }
    
    render() {
        return (

            // with the context that we created
            // we used it along with class name 
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

 export const Consumer = Context.Consumer;