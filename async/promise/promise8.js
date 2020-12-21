function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve,time)
  })
}

delay(100)
.then(function step2() {
  console.log('step 2(after 100ms');
  return delay(200)
})
.then(function step3() {
  console.log('step 3(after 200ms');
})
.then(function step4() {
  console.log('step 4 (next job)');

  return delay(50);
})
.then(function step5() {
  console.log('step 5 (after another 500ms');
});