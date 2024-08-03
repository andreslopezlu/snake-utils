import _ from 'underscore';
import { Queue } from '../src/classes/Queue';

describe ('test the Queue class', () => {

  let obj1;
  let newQueue;

  beforeEach(() => {

    obj1 = {
      x: 1,
      y: 2,
    };

    newQueue = new Queue();
  });

  test ('should be an instance of Queue', () => {
    expect(newQueue).toBeInstanceOf(Queue);
  });

  test ('the Queue constructor accepts the given data as argument correctly', () => {

    newQueue.add(obj1);
    let data = newQueue.pop();

    expect(_.isEqual(data, obj1)).toBe(true);
  });
});
