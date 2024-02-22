import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  let mockRouter: any;
  beforeEach(async () => {
    mockRouter = {
      events: new Observable(observer => {
        observer.next(true);
        observer.complete();
      })
    };

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: Router, useValue: mockRouter}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'trip-booking'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('trip-booking');
  });

 
});
