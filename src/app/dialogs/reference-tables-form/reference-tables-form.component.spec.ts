import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTablesFormComponent } from './reference-tables-form.component';

describe('ReferenceTablesFormComponent', () => {
  let component: ReferenceTablesFormComponent;
  let fixture: ComponentFixture<ReferenceTablesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceTablesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTablesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
