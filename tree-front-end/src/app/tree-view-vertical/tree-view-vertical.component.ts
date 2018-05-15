import { Component, OnInit, Input } from '@angular/core';

import { TreeNode } from './../shared/tree-node.model';

@Component({
  selector: 'app-tree-view-vertical',
  templateUrl: './tree-view-vertical.component.html',
  styleUrls: ['./tree-view-vertical.component.css']
})
export class TreeViewVerticalComponent implements OnInit {

  private mainNode: TreeNode;
  @Input() nodes;

  constructor() {
    this.mainNode = new TreeNode();
    this.nodes = this.mainNode.childreen;
  }

  ngOnInit() {
    this.mainNode.firstName = 'Root';

    const child1 = new TreeNode();
    child1.firstName = 'Adam1';
    this.mainNode.childreen.push(child1);

    const child2 = new TreeNode();
    child2.firstName = 'Adam2';
    this.mainNode.childreen.push(child2);

    const child3 = new TreeNode();
    child3.firstName = 'Adam3';
    child2.childreen.push(child3);

    const child31 = new TreeNode();
    child31.firstName = 'Adam3-1';
    child3.childreen.push(child31);

    const child32 = new TreeNode();
    child32.firstName = 'Adam3-2';
    child3.childreen.push(child32);
  }
}
