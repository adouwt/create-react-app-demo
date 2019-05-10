import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'

@observer
class Koubei extends Component {
  render() {
    return (
      <div>
        <h1>koubei</h1>
        <TabBar page="KoubeiTab" />
      </div>
    )
  }
}

export default Koubei
