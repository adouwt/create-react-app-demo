/*eslint-disable*/
import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarComponent extends Component {
  state = {
    value: '美食',
  };
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  onChange= (value) => {
    console.log(value);
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  render() {
    return (<div>
      <SearchBar placeholder="Search" 
      onBlur={() => console.log('onBlur')}
      onFocus={() => console.log('onFocus')}
      onChange={this.onChange}
      maxLength={8} />
    </div>
    
    );
  }
}

export default SearchBarComponent