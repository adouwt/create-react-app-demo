/*eslint-disable*/
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'
import SearchBar from '../component/search/search'
import http from '../plugin/http'
import Tab from '../component/tab/tab'
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
      this.setState({
        ajaxData: res.users
      })
      
    })
  }
  render() {
    // mock
    let tabData = [
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '美国队长'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '雷神'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '钢铁侠'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '绿巨人'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
      {url: 'http://www.imeitou.com/uploads/allimg/2018041608/jwzx4afoxf5.jpg', name: '奇异博士'},
    ]

    let usersElements = [];
    let data = this.state.ajaxData;
    for(let i = 0; i< data.length;i++) {
      usersElements.push(
        <div key={data[i]._id} className="user">
          <div className="avatar">
            <img src={data[i].avatar_url} alt="" />
          </div>
          <p className="name color-white">{data[i].name}</p>
        </div>
      )
    }
    usersElements = usersElements.slice(0, 4)


    return (
      <div>
        <div className="top">
          <div>
            <SearchBar />
            <div className="user-wrapper">
              {usersElements}
            </div>
          </div>
          <TabBar page="indexTab" />
        </div>
        <div className="tab-wrapper">
          <Tab tabStore={tabData}></Tab>
        </div>
      </div>
    )
  }
}

export default Index
