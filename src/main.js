function AppComponent() {}

AppComponent.annotations = [
  //whole app
  new angular.ComponentAnnotation({
    selector: 'test-app'
  }),
  new angular.ViewAnnotation({
    template: '<h1>Our even more awesome Angular 2 App</h1>'
  })
];

function DisplayComponent() {
  //closure
  var greetingIndicator = 0;

  this.name = '';
  this.greeting = '';

  this.updateName = function(value) {
    this.name = value;
  };

  this.greet = function() {
    switch(greetingIndicator) {
      case 0:
        this.greeting = "Hello ";
        greetingIndicator++;
        break;
      case 1:
        this.greeting = "Moin ";
        greetingIndicator++;
        break;
      case 2:
        this.greeting = "Ciao ";
        greetingIndicator++;
        break;
      case 3:
        this.greeting = "Hope you are well ";
        greetingIndicator++;
        break;
      case 4:
        this.greeting = '';
        greetingIndicator = 0;
        break;
      default:
        this.greeting = "Hi ";
        greetingIndicator = 0;
    }
  };
}

DisplayComponent.annotations = [
  //values element
  new angular.ComponentAnnotation({
    selector: 'display-hello'
  }),
  new angular.ViewAnnotation({
    template: '<div id="showAngular"><label for="typedName">Name: </label>' +
              '<input #newname (keyup)="updateName(newname.value)" id="typedName">' +
              '<button type="button" (click)="greet()">Say hallo</button>' +
              '<p>A Name: {{ name }}</p>' +
              '<p>greeting line: {{greeting}}{{name}}</p>' +
              '</div>',
    directives: [angular.If]

  })
];

document.addEventListener('DOMContentLoaded', function() {
  //document.body.innerHTML += 'Hi';
  angular.bootstrap(AppComponent);
  angular.bootstrap(DisplayComponent);
});
