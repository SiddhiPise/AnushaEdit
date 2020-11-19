class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.checkbox1 = createCheckbox('Boy', false);
      this.checkbox2 = createCheckbox('Girl', false);

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.checkbox1.hide();
      this.checkbox2.hide();
  }

  display(){
    this.title.html("Anusha's Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.checkbox1.position(500,360);
    this.checkbox2.position(550,360);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.checkbox1.hide();
      this.checkbox2.hide();
      var name = this.input.value();
      this.greeting.html("Hello " + name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      gameState =1;

    });

  }

  
}
