import React, { Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './components/nav/nav.js';

function App() {
  return <BrowserRouter >
    <Nav></Nav>
    <main className="main" >
      {/* ▼异步组件父级必须有 Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect exact from="/" to="/home" ></Redirect>
          <Route path="/home" component={React.lazy(() => import('./views/index/index.js'))} ></Route>
          <Route path="/ryf" component={React.lazy(() => import('./views/ryf/ryf.js'))} ></Route>
          <Route path="/about" component={React.lazy(() => import('./views/about/about.js'))} ></Route>
        </Switch>
      </Suspense>
    </main>
  </BrowserRouter>;
}

/*
  ● 有<Switch>标签，则下列其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配；
  ● 无<Switch>标签，则其中的<Route>在路径相同的情况下全都会匹配。更严重的是，还会匹配上级路径的，如下面例子：
    <Switch> 
        <Route path="/Guide" component={ AboutUs } ></Route>
        <Route path="/Guide/ContactUs" component={ ContactUs } ></Route>
        <Route path="/Guide/ContactUs" component={ ContactUs } ></Route>
    </Switch>
*/

export default App;
