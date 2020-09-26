import React from 'react';
import { useParams } from "react-router-dom";

const Page2 = (props) => {
    let { message } = useParams();

    return <div>
            page2 content
            <br/>
            recieve message is: { message }
        </div>;
}

export default Page2;