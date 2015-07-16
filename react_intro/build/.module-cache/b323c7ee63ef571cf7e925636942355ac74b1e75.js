var Button = React.createClass({displayName: "Button",
  render: function() {
    return (
      React.createElement("button", null, "5")
    );
  }
});

React.render(React.createElement(Button, null), document.getElementById("root"));
