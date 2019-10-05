import React  from 'react';

export default function Demo01(){
    const arr = [ 'item01', 'item02', 'item03' ];
    return <div>
        {arr.map((cur, idx)=>{
            return <span key={idx}> {cur}、</span>;
        })}
    </div>;
}