var Button = React.createClass({displayName: "Button",
  render: function() {
    return (
      React.createElement("button", {onClick: this.handleClick}, "+1")
    );
  }
});

var Result = React.createClass({displayName: "Result",
  render: function() {
    return (
      React.createElement("div", null, "XXX")
    );
  }
});

var Main = React.createClass({displayName: "Main",
  getInitialState: function() {
    return {counter: 0};
  },
  handleClick: function() {
    this.setState({ counter: this.state.counter + 1 });
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Button, {localHandleClick: this.handleClick}), 
        React.createElement(Result, null)
      )
    );
  }
});

React.render(React.createElement(Main, null), document.getElementById("root"));
