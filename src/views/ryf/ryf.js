import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './style/ryf.css';

class RyfDemo extends Component {
    state = {
        navArr: [
            'demo01', 'demo02', 'demo03', 'demo04', 'demo05',
            'demo06', 'demo07', 'demo08', 'demo09', 'demo10',
            'demo11', 'demo12', 'demo13',
        ],
    }
    render() { 
        return <div className="ryf" >
            <ul style={{display: 'flex'}} >
                {this.state.navArr.map((cur, idx)=>{
                    return <li key={idx} >
                        <NavLink to={`/ryf/${cur}`} >{cur}</NavLink>
                    </li>;
                })}
            </ul>
            <article className="components" >
                <Switch>
                    <Redirect exact from="/ryf" to="/ryf/demo01" ></Redirect>
                    <Route path='/ryf/demo01'
                        component={React.lazy(()=>import('./components/demo01.js'))}
                    ></Route>
                    <Route path='/ryf/demo02'
                        component={React.lazy(()=>import('./components/demo02.js'))}
                    ></Route>
                    <Route path='/ryf/demo03'
                        component={React.lazy(()=>import('./components/demo03.js'))}
                    ></Route>
                    <Route path='/ryf/demo04'
                        component={React.lazy(()=>import('./components/demo04.js'))}
                    ></Route>
                    <Route path='/ryf/demo05'
                        component={React.lazy(()=>import('./components/demo05.js'))}
                    ></Route>
                    <Route path='/ryf/demo06'
                        component={React.lazy(()=>import('./components/demo06.js'))}
                    ></Route>
                    {/* <Route path='/ryf/demo07'
                        component={React.lazy(()=>import('./components/demo07.js'))}
                    ></Route>
                    <Route path='/ryf/demo08'
                        component={React.lazy(()=>import('./components/demo08.js'))}
                    ></Route>
                    <Route path='/ryf/demo09'
                        component={React.lazy(()=>import('./components/demo09.js'))}
                    ></Route>
                    <Route path='/ryf/demo10'
                        component={React.lazy(()=>import('./components/demo10.js'))}
                    ></Route>
                    <Route path='/ryf/demo11'
                        component={React.lazy(()=>import('./components/demo11.js'))}
                    ></Route>
                    <Route path='/ryf/demo12'
                        component={React.lazy(()=>import('./components/demo12.js'))}
                    ></Route>
                    <Route path='/ryf/demo13'
                        component={React.lazy(()=>import('./components/demo13.js'))}
                    ></Route> */}
                </Switch>
            </article>
        </div>;
    }
}
 
export default RyfDemo;