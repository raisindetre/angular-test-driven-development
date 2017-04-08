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
        expect(comment.getText()).toBe('a sample comment like 0');
      });

    });

    describe('when I like a comment', () => {
      var firstComment = null;
      beforeEach(() => {
        firstComment = element.all(by.css('li')).first();
        var likeButton = firstComment.all(by.buttonText('like'));

        likeButton.click();
      });

      it('should increase like comment count to 1', () => {
        var commentLikes = element.all(by.css('li')).first().all(by.css('#likes')).first();
        //browser.pause();
        expect(commentLikes.getText()).toBe('1');
      });
    });

  });

  describe('Given views should flip through navigation interaction', () => {

    var view = element(by.css('#defaultView'));
    var view1 = element(by.css('#view1'));
    var view2 = element(by.css('#view2'));


    beforeEach(() => {
      browser.get('');

      //Confirm View 1 or two are not visible
      [1, 2].map((x) => {
        expect(element(by.css('#view' + x)).isPresent()).toBeFalsy();
      });

      var viewLink1 = element(by.linkText('View1'));
      viewLink1.click();

    });

    it('should now display View1 page', () => {
      expect(view1.isPresent()).toBeTruthy();
    });

    it('...and View2 should not be visible', () => {
      expect(view2.isPresent()).toBeFalsy();
    });

    it('...and refreshing to default page should hide both View1 and View2', () => {
      browser.get('');
      expect(view1.isPresent()).toBeFalsy();
      expect(view2.isPresent()).toBeFalsy();
    });
  });
});