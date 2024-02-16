import { Component } from "react";
import { USERINFO_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

class UserClass extends Component {
  constructor() {
    // console.log("child Constructor");
    super();

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
  }

  async componentDidMount() {
    const Data = await fetch(USERINFO_API);
    const json = await Data.json();
    this.setState({
      userInfo: json,
    });
  }

  // componentDidMount(){

  //     this.timer = setInterval(()=>{
  //         console.log("Namaste React");
  //     }, 1000)

  // }
  componentDidUpdate() {
    // console.log("component did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
    // console.log("component unmounter");
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="us-container">
        <h1>Class Based User component</h1>

        <ol>
          <li>Name:{name}</li>
          <li>Location:{location}</li>
        </ol>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
