import BSTNode from "./BSTNode";

class BSTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new BSTNode(data);
        if (this.root === null) this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(bstNode, newNode) {
        if (newNode.data < bstNode.data) {
            if (bstNode.left === null) bstNode.left = newNode;
            else this.insertNode(bstNode.left, newNode);
        } else {
            if (bstNode.right === null) bstNode.right = newNode;
            else this.insertNode(bstNode.right, newNode);
        }
    }

    delete(data) {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(bstNode, key) {
        if (bstNode === null) return null;
        else if (key < bstNode.data) {
            bstNode.left = this.deleteNode(bstNode.left, key);
            return bstNode;
        } else if (key > bstNode.data) {
            bstNode.right = this.deleteNode(bstNode.right, key);
            return bstNode;
        } else {
            if (bstNode.left === null && bstNode.right === null) {
                bstNode = null;
                return bstNode;
            }
            if (bstNode.left === null) {
                bstNode = bstNode.right;
                return bstNode;
            } else if (bstNode.right === null) {
                bstNode = bstNode.left;
                return bstNode;
            }

            let min = this.findMin(bstNode.right);
            bstNode.data = min.data;
            bstNode.right = this.deleteNode(bstNode.right, min.data);
            return bstNode;
        }
    }

    findMin(bstNode) {
        if (bstNode.left === null) return bstNode;
        else return this.findMin(bstNode.left);
    }

    search(data, bstNode = this.root) {
        if (bstNode === null) return null;
        else if (data < bstNode.data) return this.search(data, bstNode.left);
        else if (data > bstNode.data) return this.search(data, bstNode.right);
        else return bstNode;
    }

    // Tree traversals

    inorder(bstNode) {
        if (bstNode !== null) {
            this.inorder(bstNode.left);
            console.log(bstNode.data);
            this.inorder(bstNode.right);
        }
    }

    preorder(bstNode) {
        if (bstNode !== null) {
            console.log(bstNode.data);
            this.preorder(bstNode.left);
            this.preorder(bstNode.right);
        }
    }

    postorder(bstNode) {
        if (bstNode !== null) {
            this.postorder(bstNode.left);
            this.postorder(bstNode.right);
            console.log(bstNode.data);
        }
    }
}

export default BSTree;
