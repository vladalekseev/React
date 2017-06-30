import React from "react";
import ReactDOM from "react-dom";

var arr = [
    {
        name: 'Vlad',
        lastname: 'Alesekeev',
        age: 21,
        id: 1
    },
    {
        name: 'Bodya',
        lastname: 'Golubov',
        age: 21,
        id: 2
    },
    {
        name: "Valera",
        lastname: 'Luk',
        age: 21,
        id: 3
    }
];


var Contact = React.createClass({

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.lastname}</h2>
                <h3>{this.props.age}</h3>
            </div>
        )
    }

});


var App = React.createClass({

    getInitialState() {
        return {
            persons: arr
        }
    },

    handler(e) {
        var query = e.target.value.toLowerCase();

        var filtredArr = arr.filter((el) => {
           if(el.name.toLowerCase().indexOf(query) != -1) {
               return el.name;
           }
        });

        this.setState({
            persons: filtredArr
        });
    },



    render() {
        return (
            <div>
                <input type="text" onChange={this.handler}/>
                {
                    this.state.persons.map(function(el) {
                        return <Contact key={el.id} name={el.name} lastname={el.lastname} age={el.age}/>
                    })
                }

            </div>
        )
    }


});



ReactDOM.render(<App />, document.getElementById("content"));