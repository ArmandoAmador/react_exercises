var Button = React.createClass({displayName: "Button",
  getInitialState: function() {
    return {counter: 9};
  },
  render: function() {
    return (
      React.createElement("button", {onClick: this.handleClick}, this.state.counter)
    );
  }
});

React.render(React.createElement(Button, null), document.getElementById("root"));
