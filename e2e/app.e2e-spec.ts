import { browser, element, by } from 'protractor';
import { TodoExercisePage } from './app.po';

describe('begin e2e testing of Todo App', function () {
  let page: TodoExercisePage;

  beforeEach(() => {
    page = new TodoExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  describe('Given I am posting a new comment', () => {
    describe('When I push the submit button', () => {

      beforeEach(() => {
        var commentInput = element(by.css('input'));
        commentInput.sendKeys('a sample comment');
        var submitButton = element(by.buttonText('Submit')).click();
      });

      // Test if comment was added
      it('should add a comment', () => {
        var comment = element.all(by.css('li')).first();
        expect(comment.getText()).toBe('a sample comment');
      });

    });
  });

});
