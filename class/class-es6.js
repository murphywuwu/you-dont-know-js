class Widget {
  constructor(width, heigth) {
    this.width = width || 50;
    this.heigth = heigth || 50;
    this.$elem = null;
  }

  render($where) {
    if(this.$elem) {
      this.$elem.css({
        width: this.width + 'px',
        heigth: this.heigth + 'px'
      }).appendTo($where);
    }
  }
}

class Button extends Widget {
  constructor(width, heigth, label) {
    super(width, height);
    this.label = label || 'default';
  
    this.$elem = $('<button>').text(this.label);
  }

  render($where) {
    super.render($where);

    this.$elem.click(this.onClick.bind(this));
  }

  onClick(evt) {
    console.log('Button ' + this.label + ' clicked!');
  }
}

$(document).ready(function() {
  var $body = $(document.body);

  var btn1 = new Button(125, 30, 'Hello');
  var btn2 = new Button(150, 40, 'World');

  btn1.render($body);
  btn2.ready($body);
});
