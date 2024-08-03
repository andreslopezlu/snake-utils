import _, { map } from 'underscore';
import { DoubleLinkedList } from '../src/classes/DoubleLinkedList';

describe ('test the DoubleLinkedList class', () => {

  let newList;
  let obj1;
  let obj2;
  let obj3;

  beforeEach(() => {

    newList = new DoubleLinkedList();

    obj1 = {
      x: 1,
      y: 2,
    };

    obj2 = {
      x: 3,
      y: 4,
    };

    obj3 = {
      x: 5,
      y: 6,
    };
  });


  test ('should be an instance of DoubleLinkedList', () => {
    expect(newList).toBeInstanceOf(DoubleLinkedList);
  });

  test ('that a DoubleLinkedList of length 0 points to null values', () => {
    let first = newList.first;
    let last = newList.last;

    expect(first).toBe(null);
    expect(last).toBe(null);
  });

  test ('the push method of a DoubleLinkedList of length 1', () => {
    newList.push(obj1);

    let first = newList.first;
    let last = newList.last;

    expect(_.isEqual(obj1, first.data)).toBe(true);
    expect(_.isEqual(obj1, last.data)).toBe(true);
  });

  test ('the push method of a DoubleLinkedList of length 2', () => {
    newList.push(obj1);
    newList.push(obj2);
    let first = newList.first;
    let last = newList.last;
    expect(_.isEqual(obj1, first.data)).toBe(true);
    expect(_.isEqual(obj2, last.data)).toBe(true);
  });

  test ('the push method of a DoubleLinkedList of length 3', () => {
    newList.push(obj1);
    newList.push(obj2);
    newList.push(obj3);

    let first = newList.first;
    let last = newList.last;

    expect(_.isEqual(obj1, first.data)).toBe(true);
    expect(_.isEqual(obj3, last.data)).toBe(true);
  });

  test ('the unshift method of a DoubleLinkedList of length 1', () => {
    newList.unshift(obj1);

    let first = newList.first;
    let last = newList.last;

    expect(_.isEqual(obj1, first.data)).toBe(true);
    expect(_.isEqual(obj1, last.data)).toBe(true);
  });

  test ('the unshift method of a DoubleLinkedList of length 2', () => {
    newList.unshift(obj1);
    newList.unshift(obj2);

    let first = newList.first;
    let last = newList.last;

    expect(_.isEqual(obj2, first.data)).toBe(true);
    expect(_.isEqual(obj1, last.data)).toBe(true);
  });
    
  test ('the unshift method of a DoubleLinkedList of length 3', () => {
    newList.unshift(obj1);
    newList.unshift(obj2);
    newList.unshift(obj3);

    let first = newList.first;
    let last = newList.last;

    expect(_.isEqual(obj3, first.data)).toBe(true);
    expect(_.isEqual(obj1, last.data)).toBe(true);
  });

  test ('the pop method of a DoubleLinkedList of length 3', () => {
    newList.push(obj1);
    newList.push(obj2);
    newList.push(obj3);

    let deletedNode3 = newList.pop();
    expect(_.isEqual(obj3, deletedNode3.data)).toBe(true);

    let deletedNode2 = newList.pop();
    expect(_.isEqual(obj2, deletedNode2.data)).toBe(true);

    let deletedNode1 = newList.pop();
    expect(_.isEqual(obj1, deletedNode1.data)).toBe(true);
  });

  test ('the shift method of a DoubleLinkedList of length 3', () => {
    newList.push(obj1);
    newList.push(obj2);
    newList.push(obj3);

    let deletedNode1 = newList.shift();
    expect(_.isEqual(obj1, deletedNode1.data)).toBe(true);

    let deletedNode2 = newList.shift();
    expect(_.isEqual(obj2, deletedNode2.data)).toBe(true);

    let deletedNode3 = newList.shift();
    expect(_.isEqual(obj3, deletedNode3.data)).toBe(true);
  });

  test ('the getValues method', () => {
    let data = [];
    data.push(obj1);
    data.push(obj2);
    data.push(obj3);

    newList.push(obj1);
    newList.push(obj2);
    newList.push(obj3);
    let doubleLinkedList = newList.getValues();

    expect(_.isEqual(doubleLinkedList, data)).toBe(true);
  });
});
