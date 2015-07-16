var Button = React.createClass({displayName: "Button",
  handleClick: function() {
    this.setState({ counter: this.state.counter + 1 });
  },
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
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Button, null), 
        React.createElement(Result, null)
      )
    );
  }
});

React.render(React.createElement(Main, null), document.getElementById("root"));
