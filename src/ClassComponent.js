import React from 'react'

class ClassCounter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={count:0}
        this.handleDecriment=this.handleDecriment.bind(this)
        this.handleIncriment=this.handleIncriment.bind(this)

    }

    handleIncriment()
    {
        this.setState(curState=>{return {count:curState.count+1}})
    }

    handleDecriment()
    {
        this.setState(curState=>{return {count:curState.count-1}})
    }

    render()
    {
        return <>
        <h1>This is class component</h1>
        <div className='sub-container'>
            <button className='btn' onClick={this.handleDecriment}>-</button>
            <span className='span'>{this.state.count}</span>
            <button className='btn' onClick={this.handleIncriment}>+</button>
        </div>
        </>
    }
}

export default ClassCounter