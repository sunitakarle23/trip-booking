import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightResultComponent } from './flight-result.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FlightResultComponent', () => {
  let component: FlightResultComponent;
  let fixture: ComponentFixture<FlightResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightResultComponent],
      imports: [HttpClientModule],
      providers: [
        HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
