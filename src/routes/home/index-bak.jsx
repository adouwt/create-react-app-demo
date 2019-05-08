import React, { Component } from 'react'
import axios from 'axios'
// import Side from './side';
/*eslint-disable*/
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {ajaxData: 123, item: []}
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        axios.get('https://api.scampus.cn/get/alluser').then((res) => {
            // console.log(res.data.users);
            this.setState(() => ({
                ajaxData: res.data.users
            }));
        })
    }
    handleClick() {
        axios.get('https://api.scampus.cn/get/alluser').then((res) => {
            // console.log(res.data.users);
            this.setState(() => ({
                ajaxData: res.data.users
            }));
        })
    }
    render() {
        let data = this.state.ajaxData
        let usersElements = [];
        for(let i = 0; i< data.length;i++) {
            usersElements.push(
                <li key={data[i]._id}>
                    <p>{data[i].name}</p>
                    <p>{data[i].avatar_url}</p>
                    <p>
                        <img src={data[i].avatar_url} alt=""/>
                    </p>
                </li>
            )
        }

        return (
            <div className="main">
                <div className="left">
                    this is a left side.
                    {/* <Side></Side> */}
                </div>
                <div className="right">
                    {this.props.data}
                    <div>
                        <ul>
                            {usersElements}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Home
  