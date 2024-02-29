import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedProblemComponent } from './computed-problem.component';

describe('ComputedProblemComponent', () => {
  let component: ComputedProblemComponent;
  let fixture: ComponentFixture<ComputedProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedProblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputedProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
