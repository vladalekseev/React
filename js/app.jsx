import React from 'react';
import ReactDOM from 'react-dom';
import {arr} from '../data.js';



function Note(props) {
    return(
        <div>
            <h2 onClick={props.onDelete}>{props.children}</h2>
        </div>
    )
}


var NotesGrid = React.createClass({



    render() {

        var deleteNote = this.props.deleteNote;
        return(
            <div>
                {
                    this.props.notes.map((el)=> {
                        return <Note key={el.id} onDelete={deleteNote.bind(null, el)} >{el.text}</Note>
                    })
                }
            </div>
        )
    }
});


var NoteEditor = React.createClass({

    getInitialState() {
      return {
          val: ""
      }
    },

    handleChange(e) {
        this.setState({
           val: e.target.value
        });
    },

    handleClick() {
      var newNote = {
          text: this.state.val,
          id: Date.now()
      };
      this.props.onAddNote(newNote);

      this.setState({
          val: ""
      });
    },

    render() {
        return(
            <div>
                <textarea cols="30" rows="10" value={this.state.val} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
});



var App = React.createClass({

    getInitialState() {
      return {
          notes: arr
      }
    },


    componentDidMount() {
      var localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes) {
            this.setState({
                notes: localNotes
            })
        }
    },

    onDeleteNote(note) {
        var newArr = this.state.notes.filter((el)=> {
          return el.id != note.id;
        });

        this.setState({
            notes: newArr
        });
    },

    addNote(newNote) {
        var newArr = this.state.notes.slice();
        newArr.unshift(newNote);

        this.setState({
            notes: newArr
        });
    },

    componentDidUpdate() {
        this.updateLocalStorage();
    },


    updateLocalStorage() {
      var notes = JSON.stringify(this.state.notes);
      localStorage.setItem('notes', notes);
    },

    render() {
        return(
            <div>
                <NoteEditor onAddNote={this.addNote} />
                <NotesGrid notes={this.state.notes} deleteNote={this.onDeleteNote}/>
            </div>
        )
    }
});



ReactDOM.render(<App />, document.getElementById('content'));