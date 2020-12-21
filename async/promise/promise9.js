function request(url) {
  return new Promise((resolve, rejcet) => {
    // ajax回调应该是我们这个promise的resolve函数
    ajax(url, resolve)
  })
}

request('http://some.url.1')
.then(function(response1){
  return request('http://some.url.2/? v=' + response1);
})
.then(function(response2) {
  console.log(response2);
});

