const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Common,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Vertices,
} = Matter;

Common.setDecomp(decomp);

const oWidth = 800;
const oHeight = 600;

let matterShapes = [];

let ropeA;
let ropeB;
let ropeC;

// create engine
const engine = Engine.create(),
  world = engine.world;

let elemenTarget = document.querySelector('#canvas');

// create runner
const runner = Runner.create();

function setup() {
  setCanvasContainer('canvas2', oWidth, oHeight, true);

  var group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 100, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([arrow]), {
      render: {
        fillStyle: color,
        strokeStyle: color,
        lineWidth: 1,
      },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 9, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([horseShoe]), {
      render: {
        fillStyle: color,
        strokeStyle: color,
        lineWidth: 1,
      },
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [ropeA, ropeB, ropeC]);

  // add mouse control
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  background('white');
  Runner.run(runner, engine);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  background('white');

  noStroke();
  fill('red');
  ropeA.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx == 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });

  fill('blue');
  ropeB.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / oWidth) * width,
        (eachVertex.y / oHeight) * height
      );
    });
    endShape(CLOSE);
  });

  fill('green');
  ropeC.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx == 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}

var arrow = Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50'),
  horseShoe = Vertices.fromPath(
    '35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7'
  );
