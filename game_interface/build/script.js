var StarsFrame = React.createClass({displayName: "StarsFrame",
  render: function() {
    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++) {
      stars.push(
        React.createElement("span", {className: "glyphicon glyphicon-star"})
      );
    }

    return (
      React.createElement("div", {id: "stars-frame"}, 
        React.createElement("div", {className: "well"}, 
          stars
        )
      )
    );
  }
});

var ButtonFrame = React.createClass({displayName: "ButtonFrame",
  render: function() {
    var disabled, button, correct = this.props.correct;

    switch(correct) {
      case true:
        button = (
          React.createElement("button", {className: "btn btn-success btn-lg", 
                  onClick: this.props.acceptAnswer}, 
            React.createElement("span", {className: "glyphicon glyphicon-ok"})
          )
        );
        break;
      case false:
        button = (
          React.createElement("button", {className: "btn btn-danger btn-lg"}, 
            React.createElement("span", {className: "glyphicon glyphicon-remove"})
          )
        );
        break;
      default:
        disabled = (this.props.selectedNumbers.length === 0);
        button = (
          React.createElement("button", {className: "btn btn-primary btn-lg", disabled: disabled, 
                  onClick: this.props.checkAnswer}, 
            "="
          )
        );
    }

    return (
      React.createElement("div", {id: "button-frame"}, 
        button, 
        React.createElement("br", null), React.createElement("br", null), 
        React.createElement("button", {className: "btn btn-warning btn-xs", onClick: this.props.redraw}, 
          React.createElement("span", {className: "glyphicon glyphicon-refresh"}), 
          " ", 
          this.props.redraws
        )
      )
    );
  }
});

var AnswerFrame = React.createClass({displayName: "AnswerFrame",
  render: function() {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function(i) {
      return (
        React.createElement("span", {onClick: props.unselectNumber.bind(null, i)}, 
          i
        )
      );
    });

    return (
      React.createElement("div", {id: "answer-frame"}, 
        React.createElement("div", {className: "well"}, 
          selectedNumbers
        )
      )
    );
  }
});

var NumbersFrame = React.createClass({displayName: "NumbersFrame",
  render: function() {
    var numbers = [], className,
        selectNumber = this.props.selectNumber,
        usedNumbers = this.props.usedNumbers,
        selectedNumbers = this.props.selectedNumbers;

    for (var i = 1; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i)>=0);
      className += " used-" + (usedNumbers.indexOf(i)>=0);
      numbers.push(
        React.createElement("div", {className: className, onClick: selectNumber.bind(null, i)}, 
          i
        )
      );
    }
    return (
      React.createElement("div", {id: "numbers-frame"}, 
        React.createElement("div", {className: "well"}, 
          numbers
        )
      )
    );
  }
});

var Game = React.createClass({displayName: "Game",
  getInitialState: function() {
    return { numberOfStars: Math.floor(Math.random()*9) + 1,
             selectedNumbers: [],
             usedNumbers: [],
             redraws: 5,
             correct: null };
  },
  selectNumber: function(clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
      this.setState(
        { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
          correct: null }
      );
    }
  },
  unselectNumber: function(clickedNumber) {
    var selectedNumbers = this.state.selectedNumbers,
        indexOfNumber = selectedNumbers.indexOf(clickedNumber);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({ selectedNumbers: selectedNumbers, correct: null });
  },
  sumOfSelectedNumbers: function() {
    return this.state.selectedNumbers.reduce(function(p,n) {
      return p+n;
    }, 0);
  },
  checkAnswer: function() {
    var correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());
    this.setState({ correct: correct });
  },
  acceptAnswer: function() {
    var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
    this.setState({
      selectedNumbers: [],
      usedNumbers: usedNumbers,
      correct: null,
      numberOfStars: Math.floor(Math.random()*9) + 1
    });
  },
  redraw: function() {
    if (this.state.redraws > 0) {
      this.setState({
        numberOfStars: Math.floor(Math.random()*9) + 1,
        correct: null,
        selectedNumbers: [],
        redraws: this.state.redraws - 1
      });
    }
  },
  render: function() {
    var selectedNumbers = this.state.selectedNumbers,
        usedNumbers = this.state.usedNumbers,
        numberOfStars = this.state.numberOfStars,
        redraws = this.state.redraws,
        correct = this.state.correct;
    return (
      React.createElement("div", {id: "game"}, 
        React.createElement("h2", null, "Play Nine"), 
        React.createElement("hr", null), 
        React.createElement("div", {className: "clearfix"}, 
          React.createElement(StarsFrame, {numberOfStars: numberOfStars}), 
          React.createElement(ButtonFrame, {selectedNumbers: selectedNumbers, 
                       correct: correct, 
                       redraws: redraws, 
                       checkAnswer: this.checkAnswer, 
                       acceptAnswer: this.acceptAnswer, 
                       redraw: this.redraw}), 
          React.createElement(AnswerFrame, {selectedNumbers: selectedNumbers, 
                       unselectNumber: this.unselectNumber})
        ), 

        React.createElement(NumbersFrame, {selectedNumbers: selectedNumbers, 
                      usedNumbers: usedNumbers, 
                      selectNumber: this.selectNumber})

      )
    );
  }
});

React.render(
  React.createElement(Game, null),
  document.getElementById('container')
);
