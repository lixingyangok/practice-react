import React, { Component } from 'react';

export default class Demo extends Component {
    render() {
        return <div>
            <h1>
                得到真实dom节点：this.refs.*
            </h1>
            <input type="text" ref="ipt" />
            <button onClick={()=>this.toFocus()} >
                定位
            </button>
        </div>;
    }
    toFocus(){
        const ipt = this.refs.ipt; //得到真实dom节点
        ipt.focus();
    }
}
 