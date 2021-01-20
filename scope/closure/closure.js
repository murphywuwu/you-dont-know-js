let x = 20;

function foo() {
  console.log(x);
}

// Closure for foo
let fooClosure = {
  code: foo, // reference to function
  enviroment: { x: 20 } // context for searching free variables
  context: {
    // lexicalEnviroment: { x: undefined },
    // variableEnviroment: { x: undefined },
    // thisBinding
  }
}

// 没人引用它，它就会被释放

let x = 10;

function foo() {
  console.log(x);
}

(function(funArg) {
  let x = 20;
  
  // variable 'x' for  funArg is saved statically
  // from the (lexical) context, in which it was created
  // therefore:
  
  funArg(); // 10, but not 20
})(foo);



