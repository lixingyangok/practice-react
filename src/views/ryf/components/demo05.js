import React  from 'react';

function Demo( props ){
    let children = (
        props.children
        ? props.children instanceof Array ? props.children : [ props.children ]
        : []
    );
    // ▼React.Children无效，搞不懂
    React.Children.forEach((cur, idx)=>{
        console.log( cur );
    });
    // 接收 props 参数
    return <div>
        <h1>
            接收父级子节点：
            this.props.children、
            props.children、
            React.Children.*（推荐做法）
        </h1>
        props 为：
        {children.map((cur, idx)=>{
            return <p key={idx}>收到children{idx+1}：{cur}</p>
        })}
    </div>;
}

export default function (){
    return <Demo >
        <span>span01</span>
        <span>span01</span>
    </Demo>;
}