/*eslint-disable*/
import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './tabBar.css'
class TabBarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.page,
      snippet: props.snippet,
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 50, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="tab-bar">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={
              <Link to='/index'>
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
              </Link>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selected={this.state.selectedTab === 'indexTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'indexTab',
              });
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            title="Money"
            key="Money"
            icon={
              <Link to='/money'>
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat' }}
                />
              </Link>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selected={this.state.selectedTab === 'MoneyTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'MoneyTab',
              });
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <Link to='/koubei'>
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              </Link>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'KoubeiTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'KoubeiTab',
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <Link to='/friend'>
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              </Link>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'FriendTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'FriendTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <Link to='/friend'>
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat' }}
                />
              </Link>
            }
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'MyTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'MyTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarComp