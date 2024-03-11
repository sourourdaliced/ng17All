import { inject } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { MathService } from './math.service';
import { TestBed } from '@angular/core/testing';

let loggerSpy: any;
let mathService: MathService;
let loggerService: LoggerService;
let loggerServiceSpy: any;
fdescribe('MathService', () => {
  beforeEach(() => {
    loggerServiceSpy = jasmine.createSpyObj<LoggerService>('LoggerService', [
      'logger',
    ]);
    /*
      loggerSpy = jasmine.createSpyObj('LoggerService', ['logger']);
      mathService = new MathService(loggerSpy);
    */
    // Remplacant de new LoggerService()
    loggerService = TestBed.inject(LoggerService);
    // loggerSpy = spyOn(loggerService, 'logger');
    //Old version wihout spy mathService = new MathService(loggerService);
    mathService = new MathService(loggerServiceSpy);
  });
  it('should be created', () => {
    expect(mathService).toBeTruthy();
  });

  it('should Add two numbers v1', () => {
    const loggerService = new LoggerService();
    const mathService = new MathService(loggerService);
    expect(mathService.add(2, 3)).toBe(5);
  });
  it('should Add two numbers v2', () => {
    expect(mathService.add(2, 3)).toBe(5);
  });
  it('should Add two numbers v2', () => {
    loggerSpy = spyOn(loggerService, 'logger');
    mathService = new MathService(loggerService);
    expect(mathService.add(2, 3)).toBe(5);
    expect(loggerSpy.calls.count()).toBe(1);
    expect(loggerSpy.calls.argsFor(0)).toEqual(['2 + 3 = 5']);
  });
  it('should Substract two numbers v1', () => {
    const loggerService = new LoggerService();
    const mathService = new MathService(loggerService);
    expect(mathService.substract(2, 3)).toBe(-1);
  });
  it('should Substract two numbers v2', () => {
    expect(mathService.substract(2, 3)).toBe(-1);
  });
});
