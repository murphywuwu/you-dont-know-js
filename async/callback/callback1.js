listen('click', (evt) => {
  setTimeout(() => {
    ajax('http://some.url.1', (text) => {
      if (text == 'hello') {
        handler();
      }
      else if (text == 'world') {
        request();
      }
    }) 
  }, 500);
});

