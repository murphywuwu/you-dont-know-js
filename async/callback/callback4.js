function addNumbers(x, y) {
  // 针对不信任输入的防御
  if (typeof x != 'number' || typeof y != 'number') {
    throw Error('Bad Parameters');
  }

  // 同上，但更加友好的方法
  x = Number(x);
  y = Number(y);

  return x + y;
}

addNumbers(21, 21);
addNumbers(21, '21');