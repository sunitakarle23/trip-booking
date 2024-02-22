import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should ngOnInit create form and set last search criteria', fakeAsync(() => {
    const spy = spyOn<any>(component, 'setLastSearchCriteria');
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));

  it('Should dateValidator return validation error', fakeAsync(() => {
    const mockControl = new FormControl();
    mockControl.setValue("Thu Feb 15 2024 01:11:10 GMT+0530 (India Standard Time)");
    const result = component['dateValidator'](mockControl);
    fixture.detectChanges();
    expect(result.invalidDate).toBeTrue();
  }));

  it('dateValidator should not return validation error', fakeAsync(() => {
    const mockControl = new FormControl();
    mockControl.setValue("Sun Mar 24 2024 01:11:10 GMT+0530 (India Standard Time)");
    const result = component['dateValidator'](mockControl);
    fixture.detectChanges();
    expect(result).toBeNull();
  }));
  it('dateValidator should return max date validation error', fakeAsync(() => {
    const mockControl = new FormControl();
    mockControl.setValue("Tue Mar 24 2026 01:11:10 GMT+0530 (India Standard Time)");
    const result = component['dateValidator'](mockControl);
    fixture.detectChanges();
    expect(result.maxDateExceeded).toBeTrue();
  }));
});
