import { Component, OnInit, Input } from '@angular/core';

import { TreeNode, TreeNodeEntity } from './../shared/tree-node.model';

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
    this.mainNode.entitys[0] = new TreeNodeEntity();
    this.mainNode.entitys[0].PersonFirstName = 'Root';

     const rootChild = new TreeNode();
     rootChild.entitys[0] = new TreeNodeEntity();
     rootChild.entitys[0].PersonFirstName = 'RootChild';
     rootChild.parentNode = this.mainNode;
     this.mainNode.childreen.push(rootChild);

     const child1 = new TreeNode();
     child1.entitys[0] = new TreeNodeEntity();
     child1.entitys[0].PersonFirstName = 'Adam1';
     child1.parentNode = rootChild;
     rootChild.childreen.push(child1);

     const child2 = new TreeNode();
     child2.entitys[0] = new TreeNodeEntity();
     child2.entitys[0].PersonFirstName = 'Adam2';
     child2.entitys[1] = new TreeNodeEntity();
     child2.entitys[1].PersonFirstName = 'Eve2';
     child2.parentNode = rootChild;
     rootChild.childreen.push(child2);

     const child3 = new TreeNode();
     child3.entitys[0] = new TreeNodeEntity();
     child3.entitys[0].PersonFirstName = 'Adam3';
     child3.parentNode = child2;
     child2.childreen.push(child3);

     const child31 = new TreeNode();
     child31.entitys[0] = new TreeNodeEntity();
     child31.entitys[0].PersonFirstName = 'Adam3-1';
     child31.parentNode = child3;
     child3.childreen.push(child31);

     const child32 = new TreeNode();
     child32.entitys[0] = new TreeNodeEntity();
     child32.entitys[0].PersonFirstName = 'Adam3-2';
     child32.parentNode = child3;
     child3.childreen.push(child32);

  }

  AddNode(parenNode: TreeNode) {
    if (parenNode == null) {
      return;
    }

    const childNode = new TreeNode();
    childNode.entitys[0] = new TreeNodeEntity();
    childNode.entitys[0].PersonFirstName = 'TestNode';
    parenNode.childreen.push(childNode);
  }

  RemoveNode(removedNode: TreeNode) {
     if (removedNode == null) {
       return;
     }

    const nodeIndex = removedNode.parentNode.childreen.indexOf(removedNode);
    if (nodeIndex !== -1) {
      removedNode.parentNode.childreen.splice(nodeIndex, 1);

    }
  }
}
