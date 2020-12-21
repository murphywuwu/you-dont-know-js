var LoginController = {
  getUser: function() {
    return document.getElementById('login username').value;
  },
  getPassword: function() {
    return document.getElementById('login password').value;
  },
  validateEntry: function(user, pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)) {
      return this.failure('please enter a username & password!')
    }
    else if (pw.lengt < 5) {
      return this.failure('Password must be 5+ characters!');
    }

    return true;
  },
  showDialog: function (title, msg) {
    // 给用户显示标题和消息
  },
  failure: function (err) {
    this.errors.push(err);
    this.showDialog('Error', 'Login invalid: ' +  err);
  }
}

var AuthController = Object.create(LoginController);

AuthController.checkAuth = function() {
  var user = this.getUser();
  var pw = this.getPassword();

  if(this.validateEntry(user, pw)) {
    this.server('/check-auth', {
      user: user,
      pw: pw
    })
  }
}
AuthController.server = function(url, data) {
  return $.ajax({
    url: url, 
    data: data
  })
  .then(this.accepted.bind(this))
  .fail(this.rejected.bind(this))
}
AuthController.accepted = function() {
  this.showDialog('Success', 'Authenticated!')
}
AuthController.rejected = function(err) {
  this.failure('Auth Failed: ' + err);
}

var controller = Object.create(AuthController, { errors: [] });
controller.checkAuth();

