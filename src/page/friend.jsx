import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'

@observer
class Friend extends Component {
  render() {
    return (
      <div>
        <h3>this is a Friend tab</h3>
        <TabBar page="FriendTab" />
      </div>
    )
  }
}

export default Friend
