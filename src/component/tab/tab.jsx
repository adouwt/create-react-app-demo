import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tab.scss'

class TabComponent extends Component {
  static propTypes = {
    tabStore: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { tabStore } = this.props
    const tabElement = []
    for (let i = 0; i < tabStore.length; i += 1) {
      const { url, name } = tabStore[i]
      /*eslint-disable*/
      tabElement.push(
        <div className="single-tab">
          <div className="img">
            <img src={url} alt="" />
          </div>
          <div className="name">
            {name}
          </div>
        </div>
      )
    }
    return tabElement
  }
}

export default TabComponent
