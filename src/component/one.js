import React,{ Component } from 'react'
import './aa.css'
import { Button } from 'antd';
class OnePage extends Component {
    render () {
        return (
            <div class="top">
                <h1>我是第一页面</h1>
                <p>webpack4.0+,大爷的; 真的是太坑了</p>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}
export default OnePage