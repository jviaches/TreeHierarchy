import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewHorizontalComponent } from './tree-view-horizontal.component';

describe('TreeViewHorizontalComponent', () => {
  let component: TreeViewHorizontalComponent;
  let fixture: ComponentFixture<TreeViewHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
