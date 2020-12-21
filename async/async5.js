console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

// 理论上的任务API
schedule(() => {
  console.log('C');

  schedule(() => {
    console.log('D');
  });
});

// A C B D



