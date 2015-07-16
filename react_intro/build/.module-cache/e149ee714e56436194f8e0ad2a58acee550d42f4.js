React.createClass({
  render: function() {
    return (
      React.createElement("button", null, "Go")
    )
  }
});

React.render(React.createElement("button", null), document.getElementById("root"));
