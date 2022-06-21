import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function App() {
    const [count, setcount] = useState(0);
    var num = useRef(0);

    const handleClick =
            () => {
            setcount(count+1)
            num.current ++;
        }
        // useCallback(() => {
        //     console.log('1: ',count, num.current);
        //     setcount(count + 1);
        //     num.current ++;
        //     console.log('2: ',count, num.current);
        // }, [count]);
    return (
        <div>
            <button onClick={() => handleClick()}>
                {count} - {num.current}
            </button>
        </div>
    );
}
