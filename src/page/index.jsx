/*eslint-disable*/
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'
import SearchBar from '../component/search/search'
import http from '../plugin/http'

import '../styles/index.scss'
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {ajaxData: '', item: []};
  }

  getNewList () {
    return new Promise(resolve => {
      resolve(http({
        url: '/get/alluser',
        method: 'get',
        data: {}
      }))
    })
  }
  componentDidMount () {
    this.getNewList().then((res) => {
      console.log(res)
      this.setState({
        ajaxData: res.users
      })
      
    })
  }
  render() {
    let usersElements = [];
    let data = this.state.ajaxData;
    for(let i = 0; i< data.length;i++) {
      usersElements.push(
        <div key={data[i]._id} className="user">
          <div className="avatar">
            <img src={data[i].avatar_url} alt="" />
          </div>
          <p className="name">{data[i].name}</p>
        </div>
      )
    }
    return (
      <div className="">
        <div>
          <SearchBar />
          <div className="user-wrapper">
            {usersElements}
          </div>
        </div>
        <TabBar page="indexTab" />
      </div>
    )
  }
}

export default Index
