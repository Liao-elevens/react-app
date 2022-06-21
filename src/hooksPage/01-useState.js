import React, { useState } from 'react';

export default function App() {
    const [name, setName] = useState('hooks');
    const [flag, setFlag] = useState(false);
    return (
        <div>
            <div>
                App - {name} - {flag ? 'a' : 'b'}
            </div>
            <button
                onClick={() => {
                    setName('change');
                    setFlag(!flag);
                }}
            >
                change
            </button>
        </div>
    );
}
