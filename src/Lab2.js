import React from 'react'


class Lab2 extends React.Component {
    constructor(props) {
        super();

        this.state = {a:0, b:0};
    
        this.handleChangea = this.handleChangea.bind(this);
        this.handleChangeb = this.handleChangeb.bind(this);
    }

    handleChangea(event) {
        this.setState({value: event.target.value});
        console.log("Value changed a:"+event.target.value)
        this.state.a=event.target.value;

    
    }

    handleChangeb(event) {
        this.setState({value: event.target.value});
        console.log("Value changed b:"+event.target.value)
        this.state.b=event.target.value;

    }

    generateArray2(n){
        return Array.from({length: n+1}, (v,k) => parseInt(this.state.a,10)+k); 
    }

    render() {
        var ar=new Array();
        if(parseInt(this.state.a)>0 && parseInt(this.state.a)<parseInt(this.state.b)) var ar=this.generateArray2(this.state.b-this.state.a);
        
        return (
            <div>
                <input id="numa" type="number" min="0" onChange={this.handleChangea}></input>
                <input id="numb" type="number" min="0" onChange={this.handleChangeb}></input>

                <p>{ar.toString()}</p>
            </div>
        )
    }


}

export default Lab2