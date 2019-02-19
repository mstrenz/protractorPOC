//Example of spec start
describe('angularjs homepage', function() {

    //Example of in-line help function
    async function confirmParent(child){
      var parent = await child.element(by.xpath(".."));
      expect(await parent.getAttribute('class')).toEqual("text-center")

    }

    beforeEach(async function() {
      //Override default set in config
      browser.waitForAngularEnabled(true);
    });

    //Example of spec test
    it('should greet the named user', async function() {
      await browser.get('http://www.angularjs.org');

      //Finding angular element by ng-model
      await element(by.model('yourName')).sendKeys('Julie');
      
      //Finding angular element by ng-binding
      var greeting = element(by.binding('yourName'));
      
      //Example of assertion
      expect(await greeting.getText()).toEqual('Hello Julie!');
    });
  
    describe('todo list', function() {
      //Example of local variable
      var todoList;
  
      beforeEach(async function() {
        await browser.get('http://www.angularjs.org');
        
        //Finding angular elements by ng-repeat
        todoList = element.all(by.repeater('todo in todoList.todos'));
      });
  
      it('should list todos', async function() {
        //Example on how to enter debugger;
        debugger;
        expect(await todoList.count()).toEqual(2);
        expect(await todoList.get(1).getText()).toEqual('build an AngularJS app');
      });
  
      it('should add a todo', async function() {
        var addTodo = element(by.model('todoList.todoText'));
        var addButton = element(by.css('[value="add"]'));
  
        await addTodo.sendKeys('write a protractor test');
        await addButton.click();
  
        expect(await todoList.count()).toEqual(3);
        expect(await todoList.get(2).getText()).toEqual('write a protractor test');
      });

      it('should find a class on the parent element', async function(){
        var button = await element(by.css("div.stage-container a[target='_blank'"));
        //example of helper function call
        await confirmParent(button);
      })
    });
  });
  