
export class TreeNode {
  entitys: TreeNodeEntity[] = [];
  parentNode: TreeNode;
  childreen: TreeNode[] = [];
}

export class TreeNodeEntity {
  PersonFirstName: string;
  PersonLastNme: string;
  PersonImageProfileUrl: string;
}

