import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabBar from '../component/tabBar/tabBar'

@observer
class My extends Component {
  render() {
    return (
      <div>
        {/* <h1>my</h1> */}
        <TabBar page="MyTab" />
      </div>
    )
  }
}

export default My
