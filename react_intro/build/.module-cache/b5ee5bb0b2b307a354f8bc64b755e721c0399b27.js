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

// var Result = React.create({
//   render: function() {
//     return (
//       <div>XXX</div>
//     )
//   }
// })

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Button />
//         <Result />
//       </div
//     )
//   }
// })

React.render(React.createElement(Main, null), document.getElementById("root"));
