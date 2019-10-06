import React  from 'react';

function Demo( props ){
    // 接收 props 参数
    return <div>
        <h1> 接收props：通过父级标签属性传入</h1>
        props 为：{ props.name }
    </div>;
}

export default function (){
    return <Demo name="abc" ></Demo>;
}