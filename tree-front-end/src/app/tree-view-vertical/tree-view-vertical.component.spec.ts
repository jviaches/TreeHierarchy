import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewVerticalComponent } from './tree-view-vertical.component';

describe('TreeViewVerticalComponent', () => {
  let component: TreeViewVerticalComponent;
  let fixture: ComponentFixture<TreeViewVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
