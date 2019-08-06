import React from 'react';

// Components
import Button from "./components/Button";
import TextInput from "./components/TextInput";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advanced: false,
            VOP: 0,         // value of property
            RENT: 0,        // rent
            TAX: 0,         // annual property taxes
            CF: 0,          // condo fee
            MR: 0.03,       // mortgage rate
            DP: 0.3,        // down payment percentage
            AP: 25,          // amortization period
            REA: 0.03,       // real estate appriciation
            SMA: 0.06       // stock market appriciation
        };
    }
    
    handleClick() {
        alert('clicked');
    }

    handleChange(input, metric) {
        console.log(input.target.value, metric);
        let s = this.state;
        s[metric] = input.target.value;
        this.setState({metric: s[metric]});
    }

    toggleAdv() {
        let s = this.state;
        s.advanced = !s.advanced;
        this.setState({advanced: s.advanced});
    }

    render(){
        return (
            <React.Fragment>
                
                <div className="container">
                    <div className="row">
                        <div className="u-full-width">
                        <h1>Rent Vs Buy</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="six columns">
                            <TextInput type="text" placeholder="" label="Value of Property" onTyping={(input) => this.handleChange(input, "VOP")}/>
                        </div>
                        <div className="six columns">
                            <TextInput type="text" placeholder="" label="Rent" onTyping={(input) => this.handleChange(input, "RENT")}/>
                        </div>
                    </div>
                    <div className="row">
                        <Button type="button" text="Advanced" onPress={() => this.toggleAdv()}/>
                        {this.state.advanced ? 
                            
                            <React.Fragment>
                                <TextInput type="number" step="0.01" defaultValue={this.state.TAX} label="Taxes" onTyping={(input) => this.handleChange(input, "TAX")}/>
                                <TextInput type="number" step="0.01" defaultValue={this.state.CF} label="Condo Fee" onTyping={(input) => this.handleChange(input, "CF")}/>
                                <TextInput type="number" step="0.01" defaultValue={this.state.MR} label="Mortgage Rate" onTyping={(input) => this.handleChange(input, "MR")}/>
                                <TextInput type="number" step="0.01" defaultValue={this.state.DP} label="Down Payment (%)" onTyping={(input) => this.handleChange(input, "DP")}/>
                                <TextInput type="number" step="0.01" defaultValue={this.state.AP} label="Amortization Period" onTyping={(input) => this.handleChange(input, "AP")}/>
                                <TextInput type="number" step="0.01" defaultValue={this.state.REA} label="Real Estate Appreciation" onTyping={(input) => this.handleChange(input, "REA")}/>
                                <TextInput type="number" step="0.01" defaultValue={this.state.SMA} label="Stock Market Appreciation" onChange={(input) => this.handleChange(input, "SMA")}/>
                            </React.Fragment>

                            : null}
                    </div>
                    <div className="row">
                        <div className="u-full-width">
                            <Button type="button" className="button-primary u-pull-right" text="Calculate" onPress={() => this.handleClick()}/>
                        </div>
                    </div>

                </div>
                
            </React.Fragment>
        );
    }
}

export default App;
