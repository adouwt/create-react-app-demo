/*eslint-disable*/
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'

@observer
class Index extends Component {
  render() {
    return (
      <div className="list-wrapper">
        <h3>this is a index tab</h3>
        <TabBar page="indexTab" />
      </div>
    )
  }
}

export default Index
