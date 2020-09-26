import React from 'react';
import { useParams } from "react-router-dom";

const Page3 = (props) => {
    let { message } = useParams();
    
    return <div>
            page3 content
            <br/>
            recieve message is: { message }
        </div>;
}

export default Page3;