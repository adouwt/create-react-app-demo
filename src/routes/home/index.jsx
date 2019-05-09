import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import './style.scss'


@inject('homeStore')
@observer
class Home extends Component {
  static propTypes = {
    homeStore: PropTypes.shape({}).isRequired,
  }
  render() {
    const { homeStore } = this.props
    const { number, increase, decrease } = homeStore

    return (
      <div>
        <p>this is home page</p>
        <Link to="/about">goto About</Link>
        <Link to="/list"> goto list</Link>
        <div>
          <Link to="/index">生活</Link>
        </div>
        <div>
          <Link to="/money">財富</Link>
        </div>
        <div>
          <Link to="/koubei">口碑</Link>
        </div>
        <div>
          <Link to="/friend">朋友</Link>
        </div>
        <div>
          <Link to="/my">我的</Link>
        </div>
        <div>当前数：{number}</div>
        <div>
          <Button className="btn" type="primary" onClick={increase}>增加</Button>
          <Button type="primary" onClick={decrease}>减少</Button>
        </div>
      </div>
    )
  }
}

export default Home
