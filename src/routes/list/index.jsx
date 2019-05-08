/*eslint-disable*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import antd from 'antd'
import request from '../../plugin/http.js'
import './list.scss'

const { Layout, List, Avatar } = antd
const {
  Header, Footer, Sider, Content,
} = Layout

@inject('homeStore')
@observer
class ListPage extends Component {
  static propTypes = {
    homeStore: PropTypes.shape({}).isRequired,
  }
  getNewList () {
    return new Promise(resolve => {
      return request({
        url: '/post/login',
        method: 'post',
        data: {
          username: 'admin',
          password: '123456'
        }
      })
    })
  }

  render() {
    const { homeStore } = this.props
    const { alertMsg } = homeStore
    let data = []
    this.getNewList().then((res) => {
      data = res
    })
    return (
      <div className="list-wrapper">
        <Layout>
          <Header className="header">Header</Header>
          <Layout className="layout-wrapper">
            <Sider className="side">Sider</Sider>
            <Content className="content">
              <button onClick={alertMsg}>点击</button>
              <div>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar_url={<Avatar src={item.avatar_url} />}
                        name={item.title}
                        created_at={item.created_at}
                      />
                    </List.Item>
                  )}
                />,
              </div>
            </Content>
          </Layout>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default ListPage
