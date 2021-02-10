import React, { Component } from 'react';

export default class Demo extends Component {
    state = {
        isLike: false,
    }
    render() {
        let { state } = this;
        return <div>
            <h1>
                定义state：state={'{}'};
            </h1>
            <div>
                this.state.isLike = { state.isLike+"" }
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.toChange()}>切换状态</button>
            </div>
        </div>;
    }
    toChange(){
        this.setState({
            isLike: !this.state.isLike,
        });
    }
}
 