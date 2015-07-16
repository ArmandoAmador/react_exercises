var Button = React.createClass({displayName: "Button",
  getInitialState: function() {
    return {counter: 9};
  },
  handleClick: function() {
    this.setState({ counter: this.state.counter + 1 });
  },
  render: function() {
    return (
      React.createElement("button", {onClick: this.handleClick}, this.state.counter)
    );
  }
});

var Result = React.create({
  render: function() {
    return (
      React.createElement("div", null, "XXX")
    )
  }
})

React.render(React.createElement(Button, null), document.getElementById("root"));
