'use client'
// <Counter initialCount={10} />

type CounterProps  = {
    initialCount: number
}

export function Counter(props: CounterProps){

    let count = props.initialCount;
    function inc(){
        //props.initialCount++;
        count++;
        console.log("Counter", count);
    }

    return (
        <div>
            <h4>Count: {count}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button>Decr</button>
            </div>
        </div>
    )
}