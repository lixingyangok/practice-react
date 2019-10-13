import React, { Component } from 'react';

export default class Demo extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            time: '',
            timer: null,
        };
    }
    render() {
        let { state } = this;
        return <div>
            <h1>
                请求数据：请求被赋值（开启定时器、组件卸载时要关闭定时器
            </h1>
            <section>
                当前时间：{state.time}
            </section>
        </div>
    }
    componentDidMount(){
        // ▼模拟数据请求
        const timer = setInterval(()=>{
            this.setState({
                time: new Date().toLocaleString(),
            });
        }, 1000*1);
        this.setState({
            timer,
        });
    }
    componentWillUnmount(){
        clearInterval( this.state.timer );
    }
}