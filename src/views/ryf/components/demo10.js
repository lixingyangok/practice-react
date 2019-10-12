import React, { Component } from 'react';

export default class Demo extends Component {
    constructor( props ){
        super( props );
        console.clear();
        console.log( '00：constructor' );
    }
    static getDerivedStateFromProps( props, state ){
        console.log( '01：得到props，和state，getDerivedStateFromProps, willMount???' );
        // console.log( props );
        // console.log( state );
        return state;
    }
    state = {
        count: 1,
    }
    render() {
        let { state } = this;
        console.log( '02：render' );
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
    
    
    // componentWillMount(){
    //     console.log( '01 - componentWillMount' );
    // }
    componentDidMount(){
        console.log( '03：装载完成——componentDidMount' );
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
    // 
    componentWillUnmount(){
        console.log( '04：卸载组件——componentWillUnmount' );
    }
}