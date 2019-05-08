import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'

@inject('homeStore')
@observer
class About extends Component {
  static propTypes = {
    homeStore: PropTypes.shape({}).isRequired,
  }

  render() {
    const { homeStore } = this.props
    const { number, increase, decrease } = homeStore
    return (
      <div>
        <h4>this is </h4>
        <p>this is about page</p>
        <div>当前数：{number}</div>
        <Link to="/home">goto Home</Link>

        <div>
          <Button className="btn" type="primary" onClick={increase}>增加</Button>
          <Button type="primary" onClick={decrease}>减少</Button>
        </div>

      </div>
    )
  }
}

export default About
