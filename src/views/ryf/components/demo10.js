import React, { Component } from 'react';

export default class Demo extends Component {
    state = {
        count: 1,
    }
    render() {
        let { state } = this;
        console.log( 'render' );
        return <div>
            <h1>
               生命周期：
            </h1>
            <section>
                当前数值：{ state.count } &nbsp;&nbsp;
                <button onClick={()=>this.countAdd()} >增加</button>
            </section>
        </div>
    }
    countAdd(){
        this.setState({
            count: this.state.count + 1,
        });
    }
    static getDerivedStateFromProps( props, state ){
        console.log( 'getDerivedStateFromProps' );
        console.log( props );
        console.log( state );
        return state;
    }
    
    // componentWillMount(){
    //     console.log( '01 - componentWillMount' );
    // }
    componentDidMount(){
        console.log( '02 - componentDidMount' );
    }
    // componentWillUpdate( nextProps, nextState){
    //     console.log( 'componentWillUpdate' );
    //     console.log( nextProps );
    //     console.log( nextState );
    // }
    // componentDidUpdate( prevProps, prevState){
    //     console.log( 'componentDidUpdate' );
    //     console.log( prevProps );
    //     console.log( prevState );
    // }
    componentWillUnmount(){
        console.log( 'componentWillUnmount' );
    }
}