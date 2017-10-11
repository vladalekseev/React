import React from 'react';
import notes from './notes';
import './notes-app.sass';

export default class NotesApp extends React.Component {
    constructor() {
        super();

        this.state = {
            notes: notes,
            val: ''
        };
    }

    changeText(value) {
        this.setState({
            val: value
        })
    }

    addNote(note) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(note);
        this.setState({
            notes: newNotes,
            val: ''
        });
    }

    render() {
        return(
            <div className="notes-app">
                <NotesEditor text={this.state.val} changeText={this.changeText.bind(this)} addNote={this.addNote.bind(this)}/>
                <NotesGrid notes={this.state.notes}/>
            </div>
        )
    }
}

function NotesEditor(props) {
    function writeText(e) {
        props.changeText(e.target.value);
    }
    function addNote() {
        var note = {
            text : props.text
        };
        props.addNote(note)
    }

    return(
        <div>
            <textarea cols="30" rows="10" value={props.text} onChange={writeText} placeholder="Enter your note here ...." />
            <button onClick={addNote}>Add</button>
        </div>
    )
}

function NotesGrid(props) {
    return(
        <div>
            {
                props.notes.map((note, i) => {
                    return <Note key={i}>{note.text}</Note>
                })
            }
        </div>
    )
}

function Note(props) {
    return(
        <div>
            <p>{props.children}</p>
        </div>
    )
}
