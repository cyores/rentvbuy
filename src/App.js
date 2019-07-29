import React from 'react';

// Components
import Button from "./components/Button";
import TextInput from "./components/TextInput";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Start"
        };
    }
    
    handleClick() {
        alert('clicked');
    }

    handleChange(input, metric) {
        console.log(input.target, metric);
        let btnText = this.state.buttonText;
        btnText = input.target.value;
        this.setState({buttonText: btnText});
    }

    render(){
        return (
            <React.Fragment>
                <Button type="button" text={this.state.buttonText} onPress={() => this.handleClick()}/>
                <TextInput type="text" placeholder="" label="Cost of Property" onTyping={(input) => this.handleChange(input, "COP")}/>
            </React.Fragment>
        );
    }
}

export default App;
