import React, { Component } from 'react'
import axios from 'axios';

class Test extends Component {
    state = {
        contacts: [],
    }

    componentDidMount() {
        console.log('component did mount!')

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.setState({ contacts: response.data }))
        console.log(this.state)
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidUpdate() {
        console.log('compont wil update - only work when the state is change')
        console.log(this.state)
    }

    componentWillUpdate() {
        console.log('compont wil update - only work when the state is change')
    }
    render() {
        return (
            <div>

                { this.state.contacts.map(contact => (
                    <h1>{contact.name}</h1>
                ))}

            </div>
        )
    }
}


export default Test;