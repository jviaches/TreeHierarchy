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
    this.mainNode.Person1FirstName = 'Root';

    const rootChild = new TreeNode();
    rootChild.Person1FirstName = 'RootChild';
    this.mainNode.childreen.push(rootChild);

    const child1 = new TreeNode();
    child1.Person1FirstName = 'Adam1';
    rootChild.childreen.push(child1);

    const child2 = new TreeNode();
    child2.Person1FirstName = 'Adam2';
    child2.Person2FirstName = 'Eve2';
    rootChild.childreen.push(child2);

    const child3 = new TreeNode();
    child3.Person1FirstName = 'Adam3';
    child2.childreen.push(child3);

    const child31 = new TreeNode();
    child31.Person1FirstName = 'Adam3-1';
    child3.childreen.push(child31);

    const child32 = new TreeNode();
    child32.Person1FirstName = 'Adam3-2';
    child3.childreen.push(child32);
  }

  AddNode(parenNode: TreeNode) {
    if (parenNode == null) {
      return;
    }

    const childNode = new TreeNode();
    childNode.Person1FirstName = 'TestNode';
    parenNode.childreen.push(childNode);
  }

  RemoveChildreenNodes(parenNode: TreeNode) {
    if (parenNode == null) {
      return;
    }

    parenNode.childreen = [];
  }
}
