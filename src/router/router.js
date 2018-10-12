import React, {Component} from 'react'
import one from '@/component/one.js'
import two from '@/component/two'
import app from '@/component/App'
import Nav from '@/other/nav/index'
import '../../node_modules/antd/dist/antd.css'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


class Root extends Component {
    render () {
        return (
            <Router>  
                <div>
                    <Nav/>
                        <Route exact path="/" component ={app}></Route>
                        <Route  path="/one" component ={one}></Route>
                        <Route  path="/two" component ={two}></Route> 
                </div>
            </Router>
        )
    }
}

export default Root; 