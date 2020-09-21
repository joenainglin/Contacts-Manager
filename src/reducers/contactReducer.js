import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from "../actions/types";

const initialState = {
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
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state
            };
        case DELETE_CONTACTS:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case ADD_CONTACTS:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}