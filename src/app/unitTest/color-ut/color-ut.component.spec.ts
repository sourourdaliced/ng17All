import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUtComponent } from './color-ut.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { getElementByAttributeName } from '../../test helpers/test.helpers';

fdescribe('ColorUtComponent', () => {
  let component: ColorUtComponent;
  let fixture: ComponentFixture<ColorUtComponent>;
  let template: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorUtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorUtComponent);
    // représente l'instance du composant
    component = fixture.componentInstance;
    // représente le template du composant
    template = fixture.debugElement;
    fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a red paragraphe', () => {
    const paragraphe = getElementByAttributeName('para', template);
    template.triggerEventHandler('click');
    expect(paragraphe.nativeElement.style.backgroundColor).toBe('red');
  });
  it('should have a yellow paragraphe after clicking on it', () => {
    const paragraphe = getElementByAttributeName('para', template);
    paragraphe.triggerEventHandler('click');
    fixture.detectChanges();
    expect(paragraphe.nativeElement.style.backgroundColor).toBe('yellow');
  });
});
