function add(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise])
         .then((values) => {
           return values[0] + values[1];
         })
}

// 返回一个promise


add(fetchX(), fetchY())
.then(
  // 完成处理函数
  (sum) => {
    console.log(sum);
  },
  // 拒绝处理函数
  (err) => {
    console.log(err)
  }
)
