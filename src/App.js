import React from 'react';

// Components
import Button from "./components/Button";


function App() {
    function handleClick() {
        alert('clicked');
    }

    return (
        <Button type="button" text="primary button" onPress={handleClick}/>
    );
}

export default App;
