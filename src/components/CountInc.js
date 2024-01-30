import React from 'react';
class Counter extends React.Component{
    constructor(){
        super()
            this.state={
             count : 0,
            }
    }
    shouldComponentUpdate(prevState, prevProps){
       if(prevProps.count !== this.state.count){
        return true 
       }
       return false 
    }

    render(){
        console.log('Inside Rendering')
        return(
            <>
             <h1>Count : {this.state.count}</h1>
              <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Count Inc</button>
            </>
        )
    }
}
export default Counter;