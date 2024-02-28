import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalApiComponent } from './signal-api.component';

describe('SignalApiComponent', () => {
  let component: SignalApiComponent;
  let fixture: ComponentFixture<SignalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
