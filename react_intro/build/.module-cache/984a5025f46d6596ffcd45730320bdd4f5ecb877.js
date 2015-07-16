var Button = React.createClass({displayName: "Button",
  render: function() {
    return (
      React.createElement("button", {onClick: this.props.localHandleClick}, "+1")
    );
  }
});

var Result = React.createClass({displayName: "Result",
  render: function() {
    return (
      React.createElement("div", null, this.props.localCounter)
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
        React.createElement(Result, {localCounter: this.state.counter})
      )
    );
  }
});

React.render(React.createElement(Main, null), document.getElementById("root"));
