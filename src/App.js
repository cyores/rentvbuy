import React from 'react';

// Components
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Sheet from './components/Sheet';


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
            AP: 25,         // amortization period
            REA: 0.03,      // real estate appriciation
            SMA: 0.06,       // stock market appriciation
            calcs: {
                downpayment: 0,
                taxes: 0,
                maint: 0,
                rent: 0,
                percentRule: 0,
                rentOrBuy: null
            },
            donecalcs: false
        };
    }
    
    calculate() {
        let s = this.state;
        s.calcs.downpayment = parseFloat((s.VOP * s.DP).toFixed(2));
        s.calcs.rent = parseFloat((s.RENT).toFixed(2));

        if(s.TAX > 0) {
            s.calcs.taxes = s.TAX;
        }
        else {
            s.calcs.taxes = (s.VOP * 0.01) / 12; // asume taxes at 1% of VOP
        }
        s.calcs.taxes = parseFloat((s.calcs.taxes).toFixed(2));

        if(s.CF > 0) {
            console.log('m', ((s.VOP * 0.005) / 12));
            console.log('cf', s.CF);
            s.calcs.maint = s.CF + ((s.VOP * 0.005) / 12);
        }
        else {
            s.calcs.maint = (s.VOP * 0.01) / 12; // assume maintenance of 1% if no condo fee
        }
        s.calcs.maint = parseFloat((s.calcs.maint).toFixed(2));

        s.calcs.percentRule = parseFloat(((s.VOP * (s.SMA - s.REA) + s.calcs.maint + s.calcs.taxes) / 12).toFixed(2));

        if(s.calcs.percentRule < s.calcs.rent) {
            s.calcs.buy = true;
        }
        else {
            s.calcs.buy = false;
        }

        s.calcs.donecalcs = true;
        this.setState({calcs: s.calcs});
        
    }

    handleChange(input, metric) {
        console.log(input.target.value, metric);
        let s = this.state;
        s[metric] = parseFloat(input.target.value);
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
                        <div className="u-full-width">
                            <Button type="button" text="Advanced" onPress={() => this.toggleAdv()}/>
                            {this.state.advanced ? 
                                <React.Fragment>
                                    <div className="row">
                                        <div className="four columns">
                                            <TextInput type="number" step="0.01" defaultValue={this.state.TAX} label="Taxes" onTyping={(input) => this.handleChange(input, "TAX")}/>
                                        </div>
                                        <div className="four columns">
                                            <TextInput type="number" step="0.01" defaultValue={this.state.CF} label="Condo Fee" onTyping={(input) => this.handleChange(input, "CF")}/>
                                        </div>
                                        <div className="four columns">
                                        <TextInput type="number" step="0.01" defaultValue={this.state.MR} label="Mortgage Rate" onTyping={(input) => this.handleChange(input, "MR")}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="four columns">
                                            <TextInput type="number" step="0.01" defaultValue={this.state.DP} label="Down Payment (%)" onTyping={(input) => this.handleChange(input, "DP")}/>
                                        </div>
                                        <div className="four columns">
                                            <TextInput type="number" step="0.01" defaultValue={this.state.AP} label="Amortization Period" onTyping={(input) => this.handleChange(input, "AP")}/>
                                        </div>
                                        <div className="four columns">
                                            <TextInput type="number" step="0.01" defaultValue={this.state.REA} label="Real Estate Appreciation" onTyping={(input) => this.handleChange(input, "REA")}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="four columns">
                                            <TextInput type="number" step="0.01" defaultValue={this.state.SMA} label="Stock Market Appreciation" onChange={(input) => this.handleChange(input, "SMA")}/>
                                        </div>
                                    </div>
                                </React.Fragment>

                            : null}
                        </div>

                    </div>
                    <div className="row">
                        <div className="u-full-width">
                            <Button type="button" className="button-primary u-pull-right" text="Calculate" onPress={() => this.calculate()}/>
                        </div>
                    </div>

                    {this.state.calcs.donecalcs ?
                        <React.Fragment>
                            <div className="row">
                                {this.state.calcs.buy ? <p>You should buy</p> : <p>You should rent</p>}
                            </div>
                            <div className="row">
                                <div className="six columns">
                                    <Sheet title={"Buy"}>
                                        <p>Downpayment: {this.state.calcs.downpayment}</p>
                                        <p>Taxes: {this.state.calcs.taxes}/month</p>
                                        <p>Maintenance: {this.state.calcs.maint}/month</p>
                                        <p>Percent Rule: {this.state.calcs.percentRule}/month</p>  
                                    </Sheet>
                                </div>
                                <div className="six columns">
                                    <Sheet title={"Rent"}>
                                        <p>Rent: {this.state.calcs.rent}/month</p>
                                    </Sheet>
                                </div>
                            </div>
                        </React.Fragment>
                    : null}

                </div>
                
            </React.Fragment>
        );
    }
}

export default App;
