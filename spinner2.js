const spinner = function(numOfTurns, delay) {
    let timers = 0;
    //these hold the states of the spinner
    const states = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  "];
    //for n# of times you want the spinner to spin
    for (let i = 0; i < numOfTurns; i++) {
      //loop through each state
      for (let j = 0; j < states.length; j++)
      {
        if (i === (numOfTurns - 1) && j === (states.length - 1)) {
          setTimeout(() => {
            //add a newline once we reach the end
            process.stdout.write(states[j] + '\n');
          }, timers);
        } else {
          setTimeout(() => {
            process.stdout.write(states[j]);
          }, timers);
        }
        timers += delay;
      }
    }
  };
  
  spinner(10, 100);