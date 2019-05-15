import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'
import PullRefresh from '../component/pullfresh/pull'

@observer
class Koubei extends Component {
  componentWillUnmount() {
    document.querySelector('body').style.overflow = 'auto'
  }
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
