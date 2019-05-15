/*eslint-disable*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView } from 'antd-mobile';
import http from '../../plugin/http'
import './pull.scss'
const genAjaxData = (page) => {
  return new Promise((resolve, reject) => {
    http({
      url: 'http://localhost:4000/post/getUsersFromPage',
      method: 'post',
      data: {
        page: page
      }
    }).then(res => {
      console.log(res)
      resolve(res)
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
      ajaxData: [],
      pageSize: 1
    };
    this.refresh = this.refresh.bind(this)
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    genAjaxData(this.state.pageSize).then(res => {
      console.log(res)
      this.setState({
        height: hei,
        ajaxData: res.users,
        maxSize: res.maxSize
      })
    })
  }
  refresh() {
    this.setState({ refreshing: true });
    setTimeout(() => {
      console.log(this.state.pageSize)
      if(this.state.pageSize <= this.state.maxSize) {
        genAjaxData(this.state.pageSize).then(res => {
          this.setState({
            refreshing: false,
            ajaxData: res.users,
            pageSize: this.state.pageSize+1
          })
        })
      } else {
        console.log('不要扯了，到底了')
      }
    }, 1000);
    
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