import Node from './Node';

class Tendril {
  constructor(options) {
    this.spring = 0;
    this.friction = 0.5;
    this.dampening = 0.25;
    this.tension = 0.98;
    this.nodes = [];
    this.canvasRef = options.canvasRef;
    this.targetRef = options.targetRef || { current: { x: 0, y: 0 } };

    this.spring = (options.spring || 0) + Math.random() * 0.1 - 0.05;
    this.friction = (options.friction || 0) + Math.random() * 0.01 - 0.005;
    this.dampening = options.dampening || 0;
    this.tension = options.tension || 0;

    for (let i = 0, node; i < (options.size || 0); i++) {
      node = new Node();
      node.x = this.targetRef.current.x || 0;
      node.y = this.targetRef.current.y || 0;

      this.nodes.push(node);
    }
  }

  update() {
    let spring = this.spring;
    let node = this.nodes[0];

    const target = this.targetRef?.current || { x: 0, y: 0 };

    node.vx += (target.x - node.x) * spring;
    node.vy += (target.y - node.y) * spring;

    for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
      node = this.nodes[i];

      if (i > 0) {
        prev = this.nodes[i - 1];

        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * this.dampening;
        node.vy += prev.vy * this.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;

      spring *= this.tension;
    }
  }

  draw() {
    if (!this.canvasRef.current) {
      return;
    }
  
    const ctx = this.canvasRef.current.getContext('2d');
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    let a;
    let b;
  
    ctx.beginPath();
    ctx.moveTo(x, y);
  
    for (let i = 1; i < this.nodes.length - 2; i++) {
      a = this.nodes[i];
      b = this.nodes[i + 1];
      x = (a.x + b.x) * 0.5;
      y = (a.y + b.y) * 0.5;
  
      ctx.quadraticCurveTo(a.x, a.y, x, y);
    }
  
    // Correct the loop indexing
    a = this.nodes[this.nodes.length - 2];
    b = this.nodes[this.nodes.length - 1];
  
    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
    ctx.stroke();
    ctx.closePath();
  }
  
  
  
}

export default Tendril;


