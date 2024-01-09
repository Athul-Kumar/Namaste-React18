import React from "react"
import ReactDOM from "react-dom/client"

const parentTag = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
]);

console.log(parentTag);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentTag);
