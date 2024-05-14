import {describe, expect, test} from '@jest/globals';
import shapes from "../shapes" // import the shapes module

// test for the Triangle class
describe('Triangle', () => {
  test('should render a triangle with the correct color', () => {
    const shape = new shapes.Triangle()
    shape.color="blue";
    shape.points='200,10 250,200 125,210';
    //shape.setColor("blue");
    expect(shape.createSVG()).toEqual('polygon points="200,10 250,200 125,210" fill="blue"');
  });
});

// test for the Circle class
describe('Circle', () => {
  test('should render a circle with the correct color', () => {
    const shape = new shapes.Circle()
    shape.color="blue";
    shape.cx=150;
    shape.cy=100;
    shape.r=80;
    expect(shape.createSVG()).toEqual('circle cx=\'150\' cy="100" r="80" fill="blue"');
  });
});

//test for the Square class
describe('Square', () => {
  test('should render a square with the correct color', () => {
    const shape = new shapes.Square()
    shape.color="blue";
    shape.x=0;
    shape.y=0;
    shape.rx=0;
    shape.ry=0;
    shape.width=100;
    shape.height=100;
    //shape.setColor("blue");
    expect(shape.createSVG()).toEqual('rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="blue"');
  });
});
