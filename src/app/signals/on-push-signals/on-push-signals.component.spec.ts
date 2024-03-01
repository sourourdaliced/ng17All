import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushSignalsComponent } from './on-push-signals.component';

describe('OnPushSignalsComponent', () => {
  let component: OnPushSignalsComponent;
  let fixture: ComponentFixture<OnPushSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnPushSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
