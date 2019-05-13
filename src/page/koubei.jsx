import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'
import PullRefresh from '../component/pull'

@observer
class Koubei extends Component {
  render() {
    return (
      <div>
        <PullRefresh />
        <TabBar page="KoubeiTab" />
      </div>
    )
  }
}

export default Koubei
