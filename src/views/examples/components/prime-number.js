import React from 'react';

export default function(){
    let arr = [1,2,3];
    // for(let idx of Array(100).keys() ){
    //     let num = idx+1;
    //     console.log(num);
    // }
    return <div>
        {arr.join('，')}
    </div>
}