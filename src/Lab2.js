import React from 'react'


class Lab2 extends React.Component {
    constructor(props) {
        super();

        this.state = {a:0, b:0, i:0,ar:new Array(0)};
    
        this.handleChangea = this.handleChangea.bind(this);
        this.handleChangeb = this.handleChangeb.bind(this);
    }

    handleChangea(event) {
        this.setState({value: event.target.value});
        //console.log("Value changed a:"+event.target.value)
        this.state.a=event.target.value;
        if(parseInt(this.state.a)>0 && parseInt(this.state.a)<parseInt(this.state.b))  this.state.ar=this.generateArray2(this.state.b-this.state.a);
        else this.state.ar=new Array(0);
    }

    handleChangeb(event) {
        this.setState({value: event.target.value});
        //console.log("Value changed b:"+event.target.value)
        this.state.b=event.target.value;
        if(parseInt(this.state.a)>0 && parseInt(this.state.a)<parseInt(this.state.b)) this.state.ar=this.generateArray2(this.state.b-this.state.a);
        else this.state.ar=new Array(0);    
    }

    generateArray2(n){
        return Array.from({length: n+1}, (v,k) => parseInt(this.state.a,10)+k); 
    }
    render() {
        console.time("render : "+this.state.i+" ");      
        return (
            <div>
                <input id="numa" type="number" min="0" onChange={this.handleChangea}></input>
                <input id="numb" type="number" min="0" onChange={this.handleChangeb}></input>

                <p>{this.state.ar.toString()}</p>
            {console.timeEnd("render : "+this.state.i++ +" ")}
            </div>
        )
    }


}

export default Lab2