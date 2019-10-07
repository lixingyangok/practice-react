import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Demo extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        alertFn: PropTypes.func.isRequired,
    }
    state = {  }
    render() {
        let { props } = this;
        let { alertFn } = props;
        return <div>
            <h1>
                props 校验：import PropTypes from 'prop-types';
            </h1>
            <p>姓名：{props.name}</p>
            <p>年龄：{props.age}</p>
            <button onClick={()=>alertFn([props.name, props.age])} >
                弹出信息
            </button>
        </div>;
    }
}
 
export default function(){
    return <Demo  
        name="阿丽塔"
        age={18}
        alertFn={str=>alert(str)}
    ></Demo>
};