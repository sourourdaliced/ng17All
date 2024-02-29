import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaObjectComponent } from './signa-object.component';

describe('SignaObjectComponent', () => {
  let component: SignaObjectComponent;
  let fixture: ComponentFixture<SignaObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
