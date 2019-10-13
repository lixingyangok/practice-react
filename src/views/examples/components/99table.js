import React from 'react';

export default function(){
    let nineLine = [];
    for(let idx of Array(9).keys()){
        let thisLine = [];
        for(let idx2 of Array(idx+1).keys()){
            thisLine.push(
                <span key={`${idx}*${idx2}`}
                    style={{display: 'inline-block', width: '88px'}} 
                >
                    {idx2+1} * {idx+1} = {(idx+1) * (idx2+1)}
                </span>
            );
        }
        nineLine.push( thisLine );
    }
    return <div>
        {
            nineLine.map((cur, idx)=>{
                return <div key={idx}>{cur}</div>
            })
        }
    </div>
}