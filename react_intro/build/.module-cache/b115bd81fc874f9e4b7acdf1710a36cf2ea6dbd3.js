var Button = React.createClass({displayName: "Button",
  render: function() {
    return (
      React.createElement("button", null, "Go")
    );
  }
});

React.render(React.createElement(Button, null), document.getElementById("root"));
