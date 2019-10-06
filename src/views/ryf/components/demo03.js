import React  from 'react';

export default function (){
    const arr = [
        <p key="1" >这是一个p标签</p>,
        <p key="2" >这是另一个p标签</p>,
    ];
    return <div>
        <h1>直接数组：React 将其展开插入</h1>
        {arr}
    </div>;
}