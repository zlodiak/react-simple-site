import React from 'react';
import { withRouter } from 'react-router-dom'
import store from '../../redux/redux-store';
import { changeHelloTextCreator } from '../../redux/helloReducer';
import { setHelloValueCreator } from '../../redux/helloValueReducer';


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
            <hr/>
            <textarea id="hello" placeholder="hello" onChange={this.handleChange} value={store.getState().helloReducer.newHelloText}></textarea>
            <br/>
            <button id="setBtn" onClick={this.set.bind(this)}>set</button>
        </div>;
    }

    go() {
        const id = this.whereRef.current.value;
        const message = this.messageRef.current.value.trim();
        if(id && id > 1 && message) {
            this.props.history.push(`/page${id}/${message}`)
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        store.dispatch(changeHelloTextCreator(e.target.value));
    }

    set() {
        const helloValue = store.getState().helloReducer.newHelloText;
        store.dispatch(setHelloValueCreator(helloValue));
    }
}


export default withRouter(Page1);
