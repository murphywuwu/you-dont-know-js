// 异步：将来需要做的事
// 并行：能够同时发生的事

function later() {
  answer = answer * 2;
  console.log('Meaning of life:', answer);
}

var a = 20;

function foo() {
  // 线程1：(X和Y是临时内存地址)
  // a. 把a的值加载到X 
  // b. 把1保存在Y
  // c. 执行X+Y,结果保存在X 
  // d. 把X的值保存在a 

  a = a + 1;
}

function bar() {
  // 线程2:(X和Y是临时内存地址)
  // a. 把a的值加载到X 
  // b. 把2保存在Y 
  // c. 执行X*Y，结果保存在X 
  // d. 把X的值保存在a
  a = a * 2;
}

// ajax(..)是某个库中提供的Ajax函数
ajax('http://some.url.1', foo);
ajax('http://some.url.2', bar);

// 并行:多线程
// 1a (把a的值加载到X ===> 20)
// 2a (把a的值加载到X ===> 20)
// 1b (把1保存在Y ===> 1)
// 2b (把2保存在Y ===> 2)
// 1c (执行X加Y，结果保存在X ===> 22)
// 2c (执行X乘Y，结果保存在X ===> 44)
// 1d (把X的值保存在a ===> 44)
// 2d (把X的值保存在a ===> 44)


// 1a (把a的值加载到X ===> 20)
// 2a (把a的值加载到X ===> 20)
// 1b (把2保存在Y ===> 2)
// 2b (把1保存在Y ===> 1)
// 2c (执行X*Y，结果保存在X ===> 20)
// 2c (执行X+Y,结果保存在X ===> 21)
// 1d (把X的值保存在a ===> 21)
// 2d (把X的值保存在a ===> 21)

    

// 线程    指令    cpu   内存
//   1     a             X
//         b             Y 
//         c
//         d 
//   2     a
//         b
//         c
//         d

// 异步执行执行顺序: (1)abcd(2)abcd or (2)abcd(1)abcd
// 并行执行顺序: aabbccdd