
try {
  var after = document.getElementById('after');
  console.log(after.innerHTML);
  // 浏览器在遇到含有defer属性的script标签时会先再后台加载js文件，等到页面中的dom元素构建完成时，再执行该js代码
  // script with defer always execute when the DOM is ready(but before DOMContentLoaded event)
  alert('after is ready for async script ');
}
catch {
  // 浏览器会阻塞，停止构建dom。直到该文件加载执行完毕再继续构建DOM
  // 所以在该文件中访问after dom时，该dom还未构建，所以获取到的undefined
  alert('after is not build when script tag executed');
}

// script标签js文件的执行顺序
