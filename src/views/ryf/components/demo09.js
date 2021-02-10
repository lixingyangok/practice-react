import React, { Component } from 'react';

export default class Demo extends Component {
    state = {
        val01: 'val01',
        val02: 'val02',
    }
    render() {
        let { state } = this;
        return <div>
            <h1>
                表单：表单变化事件 onChange;
            </h1>
            <section>
                <input type="text" name="val01" value={state.val01} onChange={ ev => this.valChanged(ev)} />
                state.val01： {state.val01} <br/>
                <input type="text" name="val02" value={state.val02} onChange={ ev => this.valChanged(ev)} />
                state.val02： {state.val02} <br/>
            </section>
        </div>
    }
    valChanged(ev){
        let target = ev.target;
        this.setState({
            [target.name]: target.value,
        });
    }
}