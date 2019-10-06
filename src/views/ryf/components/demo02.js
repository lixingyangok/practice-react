import React  from 'react';

export default function (){
    const arr = [ 'Item01', 'Item02', 'Item03' ];
    return <div>
        <h1>遍历：使数组成员转为dom节点</h1>
        {arr.map((cur, idx)=>{
            return <p key={idx}> {cur}、</p>;
        })}
    </div>;
}