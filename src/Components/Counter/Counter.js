import React,{useState} from 'react';



const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>  
        </div>
    )
}

export default Counter;