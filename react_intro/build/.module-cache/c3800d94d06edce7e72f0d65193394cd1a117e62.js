var Button = React.createClass({displayName: "Button",
  render: function() {
    return (
      React.createElement("button", null, "Go")
    )
  }
});

React.render(React.createElement("button", null), document.getElementById("root"));
