import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  render() {
    return (
      <div className="w-[250px] bg-teal-500 m-auto p-auto align-middle">
        <h1>Class Based About Page</h1>
        {/* <User/> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
