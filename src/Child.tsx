import React, { useState } from 'react'

function Child() {
  const [count, setCount] = useState(0);
    console.log('child rendered');
    return (
        <div>
            <p>Child</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add count</button>
            <p>Count - {count}</p>
        </div>
    )
}

export default Child
