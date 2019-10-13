import React, { Component } from 'react';

class Demo extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            count: 0,
            loading: true,
            error: null,
            data: null
        };
    }
    render() {
        let { state } = this;
        const dom = (()=>{
            if(state.loading){
                return <div>loading……</div>;
            }else if(state.error !== null) {
                return <div>说，你错哪了？{state.error}</div>;
            }else{
                return <div>
                    <p>姓名：{state.data.name}</p>
                    <p>年龄：{state.data.age}</p>
                    <p>时间：{state.data.time}</p>
                </div>
            }
        })();
        return <div>
            <h1>
                请求数据：并根据请求成功与否显示结果形态
            </h1>
            <section>
                <div>
                    已请求：{state.count} 次&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.toGetData.bind(this)}>刷新</button>
                </div>
                {dom}
            </section>
        </div>
    }
    componentDidMount(){
        this.toGetData();
    }
    toGetData(){
        this.setState({
            count: this.state.count+1,
            loading: true,
            error: null,
            data: null
        });
        this.props.promiseFn().then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error}),
        );
    }
    componentWillUnmount(){
        
    }
}

const promiseFn = function(){
    return new Promise(function( resolve, reject ){
        setTimeout(()=>{
            if( Math.random() > 0.5 ){
                resolve({
                    name: 'Tom',
                    age: 18,
                    time: new Date().toLocaleString(),
                });
            }else{
                reject('★就是错了★');
            }
        }, 1000*0.5);
    });
}

export default function (){
    return <Demo promiseFn={promiseFn} ></Demo>;
}