import React from "react"
import ReactDOM from "react-dom/client"

/**
 * <div id="parent">
 *      <div id="child1">
 *            <h1>This is H1 tag</h1>
 *            <h2>This is H2 tag</h2>
 *      </div>
 *      <div id="child2">
 *            <h1>This is H1 tag</h1>
 *            <h2>This is H2 tag</h2>
 *      </div>
 * </div>
 */

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
