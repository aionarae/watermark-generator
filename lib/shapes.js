class Shape {
  constructor(shape,color) {
    this.shape = shape;
    this.color = color;
  }

}
//Triangle class
class Triangle extends Shape {
  constructor(shape,color,points) {
    super(shape,color);
    this.points = points;
    //"polygon points='150,20 100,180 200,180'";
  }
  
  createTriangle(){
    let triangleContent = `<polygon points=${points} fill=${color}/>`
    console.log(triangleContent)
    return triangleContent;
  }

}
{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width='100' height='100' cx="150" cy="100" r="80" fill="blue"/>
    <text x="120" y="125" font-size="60" text-anchor="middle" fill="pink">hi</text></svg> */}

//Circle class
class Circle extends Shape{
  constructor(shape,color,cx,cy,r) {
    super(shape,color);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }

  createCircle(){
    let circleContent = `<circle cx=${cx} cy=${cy} r=${r} fill=${color}/>`
    console.log(circleContent)
    return circleContent;
  }
  //<circle cx="25" cy="75" r="20"/>
}

//Square class
class Square extends Shape {
  constructor(shape,color,x,y,rx,ry,width,height) {
    super(shape,color);
    this.x = x;
    this.y = y;
    this.rx = rx;
    this.ry = ry;
    this.width = width;
    this.height = height;
  }

  createSquare(){
    let squareContent = `<rect x=${x} y=${y} rx=${rx} ry=${ry} width=${width} height=${height}/>`
    console.log(squareContent)
    return squareContent;
  }

}

export default {Triangle,Circle,Square};