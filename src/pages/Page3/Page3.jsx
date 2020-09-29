import React from 'react';
import { useParams } from "react-router-dom";
import store from '../../redux/redux-store';


const Page3 = (props) => {
    let { message } = useParams();
    
    return <div>
            page3 content
            <br/>
            recieve message is: { message }
            <hr/>
            hello text is: { store.getState().helloReducer.newHelloText }
            <br/>
            hello value is: { store.getState().helloValueReducer.helloValue }
        </div>;
}

export default Page3;