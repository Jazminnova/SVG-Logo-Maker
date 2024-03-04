//constructor
class shape {
  constructor(shapeColor, color, text) {
    this.shapecolor = shapecolor;
    this.color = color;
    this.text = text;
  }
}

// Circle class
class Circle extends Shape {
  constructor(shapecolor, color, text) {
    super(shapecolor, color, text);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">
            ${this.text}
          </text>
        </svg>`;
  }
}

// Create a circle object
const Circle = new Circle("green", "white", "SVG");
console.log(Circle.render());

// Square class
class Square extends Shape {
  constructor(shapecolor, color, text) {
    super(shapecolor, color, text);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="${this.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">
        ${this.text}
        </text>
        </svg>`;
  }
}

//Triangle constructor
class triangle extends Shape {
  constructor(shapecolor, color, text) {
    super(shapecolor, color, text);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 200,150 10,150" fill="${this.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">
        ${this.text}
        </text>
        </svg>`;
  }
}
