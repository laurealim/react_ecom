import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:10,
            color:'Blue',
        }
    }

    colorChange = ()=>{
        let newCount = this.state.count;
        console.log(newCount);
        if(newCount <= 5){
            this.setState({
                color:'Red'
            })
        }else if(newCount >= 15){
            this.setState({
                color:'Green'
            })
        }else{
            this.setState({
                color:'Blue'
            })
        }
    }

    add = ()=>{
        this.setState({
            count : ++this.state.count,
        });
        this.colorChange();
    }


    sub = ()=>{
        this.setState({
            count : --this.state.count,
        })
        this.colorChange();
    }

    render(){
        return(
            <div>
                <h1>
                    <span onClick={ this.sub }> - </span> <span style={{ color: this.state.color }}> { this.state.count } </span><span onClick={ this.add }> + </span>
                </h1>
            </div>
        )
    }
}

export default Counter;