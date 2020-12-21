// error-first风格
function response(err, data) {
  // 出错?
  if(err) {
    console.error(err);
  }
  // 否则认为成功
  else {
    console.log(data);
  }
}

ajax('http://some.url.1', response);