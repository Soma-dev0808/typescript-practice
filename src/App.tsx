import React, { useState } from 'react';

interface AppState {
    title: string,
}

const App: React.FC<AppState> = ({ title }) => {
    console.log('loaded');
    const [count, setCount] = useState<number>(0);

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {title}
            <br />
            <button onClick={increase}>
                +
            </button>

            <div>
                Current Count
                {count}
            </div>
        </div>
    );
};

export default App;
