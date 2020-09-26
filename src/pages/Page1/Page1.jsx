import React from 'react';
import { withRouter } from 'react-router-dom'


class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.whereRef = React.createRef();
        this.messageRef = React.createRef();
    }

    render() {
        return <div>
            <label htmlFor="where">enter page nember: </label>
            <input type="number" id="where" ref={this.whereRef} />
            <br/>
            <label htmlFor="message">enter text message: </label>
            <input type="text" id="message" ref={this.messageRef} />
            <br/>
            <button id="goBtn" onClick={this.go.bind(this)}>go</button>
        </div>;
    }

    go() {
        const id = this.whereRef.current.value;
        const message = this.messageRef.current.value.trim();
        if(id && id > 1 && message) {
            this.props.history.push(`/page${id}/${message}`)
        }
    }
}


export default withRouter(Page1);
