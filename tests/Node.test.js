import _, { map } from 'underscore';
import { Node } from "../src/classes/Node";

describe ('test the Node class', () => {

    let obj1;
    let newNode;

    beforeEach(() => {

        obj1 = {
            x: 1,
            y: 2,
        }
        
        newNode = new Node(obj1);

    })

    test ('should be an instance of Node', () => {

        expect(newNode).toBeInstanceOf(Node);
        
    })

    test ('the Node constructor accepts the given data as argument correctly', () => {

        expect(_.isEqual(newNode.data, obj1)).toBe(true);

    })

})