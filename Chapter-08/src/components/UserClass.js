import { Component } from "react";

class UserClass extends Component {
  constructor() {

    console.log( "child Constructor");
    super();

    this.state = {

        userInfo:{

            name:"dummy name",
            location:"dummy location"
        }
    }
  }

  async componentDidMount() {

    const Data = await fetch("https://api.github.com/users/Athul-Kumar");
    const json = await Data.json();
    this.setState ( {
        userInfo:json,
    })
    
  }

// componentDidMount(){

//     this.timer = setInterval(()=>{
//         console.log("Namaste React");
//     }, 1000)

// }
  componentDidUpdate() {
    console.log("component did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
    console.log("component unmounter");
  }

  render() {
    
    const {name, location} = this.state.userInfo

    return (
      <div className="us-container">
        <h1>Class Based User component</h1>
    
        <ol>
          <li>Name:{name}</li>
          <li>Location:{location}</li>
        </ol>
      </div>
    );
  }
}

export default UserClass;
