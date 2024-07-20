import _, { map } from 'underscore';
import { DoubleLinkedList } from '../src/classes/DoubleLinkedList';
import { Node } from '../src/classes/Node';


describe ('test the DoubleLinkedList class', () => {

    let newList;
    let obj1;
    let obj2;
    let obj3;
    let node1;
    let node2;
    let node3;

    beforeEach(() => {

        newList = new DoubleLinkedList();

        obj1 = {
            x: 1,
            y: 2,
        }

        obj2 = {
            x: 3,
            y: 4,
        }

        obj3 = {
            x: 5,
            y: 6,
        }

        node1 = new Node(obj1);

        node2 = new Node(obj2);

        node3 = new Node(obj3);

    })


    test ('should be an instance of DoubleLinkedList', () => {
        
        expect(newList).toBeInstanceOf(DoubleLinkedList);
        
    })

    test ('that a DoubleLinkedList of length 0 points to null values', () => {
        let first = newList.first;
        let last = newList.last;
        expect(first).toBe(null);
        expect(last).toBe(null);
    })

    test ('the push method of a DoubleLinkedList of length 1', () => {
        newList.push(node1);
        let first = newList.first;
        let last = newList.last;
        expect(_.isEqual(node1.data, first.data)).toBe(true);
        expect(_.isEqual(node1.data, last.data)).toBe(true);
    })

    test ('the push method of a DoubleLinkedList of length 2', () => {
        newList.push(node1);
        newList.push(node2);
        let first = newList.first;
        let last = newList.last;
        expect(_.isEqual(node1.data, first.data)).toBe(true);
        expect(_.isEqual(node2.data, last.data)).toBe(true);
    })

    test ('the push method of a DoubleLinkedList of length 3', () => {
        newList.push(node1);
        newList.push(node2);
        newList.push(node3);
        let first = newList.first;
        let last = newList.last;
        expect(_.isEqual(node1.data, first.data)).toBe(true);
        expect(_.isEqual(node3.data, last.data)).toBe(true);
    })

    test ('the unshift method of a DoubleLinkedList of length 1', () => {
        newList.unshift(node1);
        let first = newList.first;
        let last = newList.last;
        expect(_.isEqual(node1.data, first.data)).toBe(true);
        expect(_.isEqual(node1.data, last.data)).toBe(true);
    })

    test ('the unshift method of a DoubleLinkedList of length 2', () => {
        newList.unshift(node1);
        newList.unshift(node2);
        let first = newList.first;
        let last = newList.last;
        expect(_.isEqual(node2.data, first.data)).toBe(true);
        expect(_.isEqual(node1.data, last.data)).toBe(true);
    })
    
    test ('the unshift method of a DoubleLinkedList of length 3', () => {
        newList.unshift(node1);
        newList.unshift(node2);
        newList.unshift(node3);
        let first = newList.first;
        let last = newList.last;
        expect(_.isEqual(node3.data, first.data)).toBe(true);
        expect(_.isEqual(node1.data, last.data)).toBe(true);
    })

    test ('the pop method of a DoubleLinkedList of length 3', () => {
        newList.push(node1);
        newList.push(node2);
        newList.push(node3);
        let deletedNode3 = newList.pop();
        expect(_.isEqual(node3.data, deletedNode3.data)).toBe(true);
        let deletedNode2 = newList.pop();
        expect(_.isEqual(node2.data, deletedNode2.data)).toBe(true);
        let deletedNode1 = newList.pop();
        expect(_.isEqual(node1.data, deletedNode1.data)).toBe(true);
    })

    test ('the shift method of a DoubleLinkedList of length 3', () => {
        newList.push(node1);
        newList.push(node2);
        newList.push(node3);
        let deletedNode1 = newList.shift();
        expect(_.isEqual(node1.data, deletedNode1.data)).toBe(true);
        let deletedNode2 = newList.shift();
        expect(_.isEqual(node2.data, deletedNode2.data)).toBe(true);
        let deletedNode3 = newList.shift();
        expect(_.isEqual(node3.data, deletedNode3.data)).toBe(true);
    })

    test ('the getList method', () => {
        let data = [];
        data.push(obj1);
        data.push(obj2);
        data.push(obj3);

        newList.push(node1);
        newList.push(node2);
        newList.push(node3);
        let doubleLinkedList = newList.getList();
        expect(_.isEqual(doubleLinkedList, data)).toBe(true);

    })

})