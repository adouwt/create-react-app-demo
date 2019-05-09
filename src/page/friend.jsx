import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'

@observer
class Money extends Component {
  render() {
    return (
      <div>
        {/* <h1>friend</h1> */}
        <TabBar page="FriendTab" />
      </div>
    )
  }
}

export default Money
