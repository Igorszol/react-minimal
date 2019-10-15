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
    }

    handleChangeb(event) {
        this.setState({value: event.target.value});
        console.log("Value changed b:"+event.target.value)
    }

    render() {
        return (
            <div>
                <input id="numa" type="number" min="0" onChange={this.handleChangea}></input>
                <input id="numb" type="number" min="0" onChange={this.handleChangeb}></input>
            </div>  
        )
    }
}

export default Lab2