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
  }
  
  createTriangle(){
    let triangleContent = `polygon points='${this.points}' fill='${this.color}'`
    console.log(triangleContent)
    return triangleContent;
  }
}

//Circle class
class Circle extends Shape{
  constructor(shape,color,cx,cy,r) {
    super(shape,color);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }

  createCircle(){
    let circleContent = `circle cx='${this.cx}' cy='${this.cy}' r='${this.r}' fill='${this.color}'`
    console.log(circleContent)
    return circleContent;
  }
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
    let squareContent = `rect x='${this.x}' y='${this.y}' rx='${this.rx}' ry='${this.ry}' width='${this.width}' height='${this.height}' fill='${this.color}'`
    console.log(squareContent)
    return squareContent;
  }
}

export default {Triangle,Circle,Square};