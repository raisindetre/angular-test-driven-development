/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('App: ToDo Application', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  //let de:      DebugElement;
  //let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // declare the test component
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance; // BannerComponent test instance
    app.add('a sample comment');
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('first comment should match', () => {
    expect(app.comments[0].title).toBe('a sample comment');
  })

});