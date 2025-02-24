'use client'

import { useEffect, useState } from "react"
import { Message } from "./Message";

// <Counter initialCount={10} />

type CounterProps  = {
    initialCount: number
}

export function Counter(props: CounterProps){

    const [count, setCount] = useState(props.initialCount);

    useEffect(() => {

        console.log("count updated", count);
        

    }, [count])

    function inc(){
        //setCount(count + 1);
        //setCount(count + 1);
        //console.log("count", count);

        setCount(currentCount => currentCount + 1);
        //setCount(currentCount => currentCount + 1);
        
    }

    function decr(){
        setCount(count - 1);
    }

    return (
        <div>
            <h4>Count: {count}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>

           {count > 5 ? <Message text={`Count: ${count}`} color="blue"/> : null}  
        </div>
    )
}