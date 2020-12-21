var res = [];

function response(data) {
  // 一次处理1000个
  var chunk = data.splice(0, 1000);

  res = res.concat(chunk.map((val) => {
    return val * 2;
  }));

  if (data.length > 0) {
    // 异步调度下一次批处理
    setTimeout(() => {
      response(data);
    }, 0);
  }
}

// 如果http://some.url.1首先取得结果，那么整个列表会立刻映射到res中。
// 如果记录有几千条或更少，这不算什么。但是如果有像1000万条记录的话，就可能运行相当一段时间了。
ajax('http://some.url.1', response);
ajax('http://some.url.2', response);