import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

export default class RyfDemo extends Component {
    state = {
        navArr: [{
            name: '九九表',
            url: '99table',
        },{
            name: '质数表',
            url: 'prime-number',
        },],
    }
    render() { 
        return <div className="example" >
            <ul style={{display: 'flex'}} >
                {this.state.navArr.map((cur, idx)=>{
                    return <li key={idx} >
                        <NavLink to={`/examples/${cur.url}`} >{cur.name}</NavLink>
                    </li>;
                })}
            </ul>
            <article className="components" >
                <Switch>
                    <Redirect exact from="/examples" to="/examples/99table" ></Redirect>
                    <Route path='/examples/99table'
                        component={React.lazy(()=>import('./components/99table.js'))}
                    ></Route>
                    <Route path='/examples/prime-number'
                        component={React.lazy(()=>import('./components/prime-number.js'))}
                    ></Route>
                </Switch>
            </article>
        </div>;
    }
}
 