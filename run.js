// https://juejin.cn/post/6844903741611573255

Runtime = {
  executionContextStack: []
}

// 获取当前的运行上下文，也就是运行栈， 栈顶的运行上下文
Runtime.getRunningExecutinContext = function() {
  return this.executionContextStack[this.executionContextStack.length - 1];
}

// 把运行栈顶的运行上下文弹出
Runtime.pop = function() {
  this.executionContextStack.pop();
}

// 把一个运行上下文放到运行栈栈顶
Runtime.push = function(newContext) {
  this.executionContextStack.push(newContext);
}

Runtime.FunctionCreate = function(parameterList, functionBody, scope, strict) {
  var F = object.create();
  F.[[Class]] = 'Function';
  F.[[Code]] = functionBody;
  F.[[FormalParameters]] = parameterList;
  F.[[prototype]] = scope;
  F.prototype = {
    constructor: F
  }
  F.[[Call]] = [[internal method]]

  return F;
}

Runtime.run = function(context) {
  this.push(context);
  var current = Runtime.getRunningExecutinContext();
  
  // register
  current.register('a', undefined);

  // initialize
  if (typeof current.func === 'function') {
    // 创建一个新的词法环境
    var newLexicalenviroment = new LexicalEnviroment();
    // 关联当前词法环境
    var currentLexicalEnviroment = current.LexicalEnviroment;
    newLexicalenviroment.outer = currentLexicalEnviroment;
    // 使用newFexicalEnviroment创建函数对象
    var fo = this.FunctionCreate(argumentlist, funcbody, newLexicalenviroment, strict);
    Runtime.initialize('foo', fo);

    // 创建新的执行上下文对象
    var foExecutionContext = new ExecutionContext(newLexicalenviroment, newLexicalenviroment, ThisBinding);

    // this.push(foExecutionContext);
    result = this.run(foExecutionContext);
    current.initialize('b', result);
  }
  else {
    this.pop();
  }
}

// 在当前运行上下文初始化一个变量信息
Runtime.regsiter = function(name) {
  var env = this.getRunningExecutinContext().variableEnviroment;
  env.EnviromentRecord.regsiter(name);
}

// 在当前运行上下文初始化一个变量信息
Runtime.initialize = function(name, value) {
  var env = this.getRunningExecutinContext().variableEnviroment;
  env.EnviromentRecord.initialize(name, value);
}

// 在当前运行上下文上，解析一个标识符
Runtime.getIdentifierValue = function(name) {
  var env = this.getRunningExecutinContext().LexicalEnviroment;

  while(env) {
    var envRec = env.EnviromentRecord;
    var exists = envRec.isExist(name);
    if (exists) return envRec.getValue(name);
    env = env.outer
  }
}

function ExecutionContext(LexicalEnviroment, variableEnviroment, ThisBinding) {
  this.LexicalEnviroment = LexicalEnviroment || undefined;
  this.variableEnviroment = variableEnviroment || undefined;
  this.ThisBinding = ThisBinding || undefined;
}



// Lexical Enviroment
function LexicalEnviroment() {
  this.EnviromentRecord = undefined;
  this.outer = undefinedl;
}

// EnviromentRecord
function EnviromentRecord(obj) {

  if (isObject(obj)) {
    this.bindings = object;
    this.type = 'Object';
  }

  this.bindings = new Map();
  this.type = 'Declarative';
}

EnviromentRecord.prototype.register = function(name, value) {
  if (this.type === 'Declarative') {
    this.bindings.set(name, undefined)
  }
  this.bindings[name] = undefined;
}

EnviromentRecord.prototype.initialize = function(name, value) {
  if (this.type === 'Declarative') {
    this.bindings.set(name, value)
  }

  this.bindings[name] = value;
}

EnviromentRecord.prototype.getValue = function(name) {
  if (this.type === 'Declarative') {
    return this.bindings.get(name)
  }

  return this.bindings[name];
}

function createGlobalEnviroment(globalobject) {
  var globalEnviroment = new LexicalEnviroment();
  globalEnviroment.outer = null;
  globalEnviroment.EnviromentRecord = new EnviromentRecord(globalobject);

  return globalEnviroment;
}

// 创建全局词法环境
globalEnviroment = createGlobalEnviroment(globalobject); // 可以看作是浏览器环境下的window

// 创建并设置运行上下文
var globalExecutionContext = new ExecutionContext(globalEnviroment, globalEnviroment,globalobject );

// 初始化运行环境
Runtime.push(globalExecutionContext);

// 1. 提升
Runtime.initialize('foo', fo)

// 2.执行
// foo()


