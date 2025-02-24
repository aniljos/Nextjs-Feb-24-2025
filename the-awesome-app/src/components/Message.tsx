'use client' // directive

type MessageProps = {
    text: string;
    color: string;
}

export function Message(props : MessageProps){

    console.log("Message", props);

    return (
        <div style={{border: `2px solid ${props.color}`, margin: "7px", padding: '7px'}}>
            <h4>Hello {props.text}</h4>
            <p>This is a functional component</p>
            <p>Expression: {5 + 7}</p>
            <p>Generate at: {new Date().toLocaleString()}</p>
        </div>
    )
}