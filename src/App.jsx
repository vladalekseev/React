import React from 'react';
import { render } from 'react-dom';

import ContactList from './ContactList/ContactList';
import NotesApp from './NotesApp/NotesApp';

render(
    <div>
        <NotesApp />
        <ContactList/>
    </div>,
    document.getElementById('root'));