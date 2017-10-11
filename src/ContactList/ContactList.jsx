import React from 'react';
import contacts from './contacts';
import './contact-list.sass';

function Contact(props) {
    return(
        <div className="contact-list__contact">
            <img src={props.img} alt="img"/>
            <h2>{props.name}</h2>
            <p>{props.phone}</p>
        </div>
    )
}

export default class ContactList extends React.Component{
    constructor() {
        super();

        this.state = {
            contacts : contacts,
            val : ''
        }
    }

    filterContacts(e) {
        const val = e.target.value.toLowerCase();
        const filtred = contacts.filter((contact) => {
            return ~contact.name.toLowerCase().indexOf(val);
        });
        this.setState({
            contacts: filtred,
            val: val
        });
    }
    
    render() {
        return(
            <div className="contact-list">
                <input className="contact-list__input" type="text" onChange={this.filterContacts.bind(this)} value={this.state.val}/>
                {
                    this.state.contacts.map((contact, i) => {
                        return <Contact key={i} name={contact.name} phone={contact.phone} img={contact.img}/>
                    })
                }
            </div>

        )
    }
}

