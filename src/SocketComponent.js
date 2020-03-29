import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function SocketComponent() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on("message", msg => setMessages([...messages, msg]));
    }, [messages])

    function handleClick() {
        socket.send(`Currently ${messages.length} messages`)
    }

    return (
        <div>
            <button onClick={() => handleClick()}>
                Send Message
            </button>
            <ul>
                { messages.map((msg => (
                    <li>{msg}</li>
                )))}
            </ul>
        </div>
    );
}

export default SocketComponent;