import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribGraphComponent } from './contrib-graph.component';

describe('ContribGraphComponent', () => {
  let component: ContribGraphComponent;
  let fixture: ComponentFixture<ContribGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
