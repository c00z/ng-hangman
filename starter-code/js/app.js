console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

  function HangmanController() {
    var vm = this;
    // initialize a new game
    vm.game = new HangmanGame("elephant");
    // console.log(vm.game.guess("e"));
    // console.log(vm.game.guess("j"));

  }
