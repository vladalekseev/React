import React from 'react';
import NewComment from './NewComment.jsx'

export default class Article extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            comments : props.comments
        }
    }

    handleClick(text) {
        const obj = {
            name: 'Влад Алексеев',
            date: (new Date()).toDateString(),
            text: text
        };
        const arr = this.state.comments;
        arr.push(obj);
        this.setState({
            comments : arr
        })
    }

    render() {
        return <div className="container">{
            this.state.comments.map((comment,i) => {
                return (
                    <section key={i}>
                        <h1>{comment.name}</h1>
                        <p>{comment.text}</p>
                        <p>{comment.date}</p>
                    </section>
                )
            })}
            <NewComment handler = {this.handleClick}/>
        </div>
    }


}
