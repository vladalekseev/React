import React from 'react';

export default class NewComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val : ''
        }
    }

    changeHandler(e) {
        this.setState({
            val : e.target.value
        })
    }

    addComment() {
        this.props.handler(this.state.val);
        this.setState({
            val: ''
        });
    }



    render() {
        return (
            <div>
                <textarea cols="60" rows="10" value={this.state.val} onChange={this.changeHandler.bind(this)}/>
                <button onClick={this.addComment.bind(this)}>
                    Написать
                </button>
            </div>
        )
    }
}