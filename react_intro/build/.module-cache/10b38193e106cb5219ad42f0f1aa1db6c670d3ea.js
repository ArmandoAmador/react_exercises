var Button = React.createClass({displayName: "Button",
  getInitialState: function() {
    return {counter: 0};
  },
  render: function() {
    return (
      React.createElement("button", null)
    );
  }
});

React.render(React.createElement(Button, null), document.getElementById("root"));
