import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharecterComponent } from './add-charecter.component';

describe('AddCharecterComponent', () => {
  let component: AddCharecterComponent;
  let fixture: ComponentFixture<AddCharecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCharecterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCharecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
