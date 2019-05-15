/*eslint-disable*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView } from 'antd-mobile';
import http from '../../plugin/http'
import './pull.scss'
const genAjaxData = () => {
  return new Promise((resolve, reject) => {
    http({
      url: '/get/alluser',
      method: 'get',
      data: {}
    }).then(res => {
      resolve(res.users)
    })
  })
}

class pullRefresh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      ajaxData: []
    };
    this.refresh = this.refresh.bind(this)
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    genAjaxData().then(res => {
      this.setState({
        height: hei,
        ajaxData: res
      })
    })
  }
  refresh() {
    this.setState({ refreshing: true });
    setTimeout(() => {
      genAjaxData().then(res => {
        this.setState({
          refreshing: false,
          ajaxData: res
        })
        console.log(this.state.ajaxData)
      })
    }, 1000);
    console.log(123)
  }
  componentDidUpdate() {
    
  }
  render() {
    return (<div >
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={this.refresh}
      >
        {
          this.state.ajaxData.map(j => (
            <div key={j._id} style={{ textAlign: 'center', padding: 20 }}>
              <p><img src={j.avatar_url} alt="" width="100" /></p>
              <p>{j.name}</p>
              <p>{j.created_at}</p>
              <p>{j.password}</p>
            </div>
          ))
        }
      </PullToRefresh>
    </div>);
  }
}

export default pullRefresh