/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InmueblesComponent } from './inmuebles.component';

describe('InmueblesComponent', () => {
  let component: InmueblesComponent;
  let fixture: ComponentFixture<InmueblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmueblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
