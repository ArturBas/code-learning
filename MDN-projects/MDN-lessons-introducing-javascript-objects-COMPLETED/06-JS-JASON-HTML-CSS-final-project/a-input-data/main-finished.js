/*
PROJECT BRIEF
Our bouncy ball demo is fun, but now we want to make it a little bit more interactive by adding a user-controlled evil circle, which will eat the balls if it catches them. We also want to test your object-building skills by creating a generic Shape() object that our balls and evil circle can inherit from. Finally, we want to add a score counter to track the number of balls left to capture.

STEPS TO COMPLETE
The following sections describe what you need to do.

A. Creating our new objects

  First of all, change your existing Ball() constructor so that it becomes a Shape() constructor and add a new Ball() constructor:

  The Shape() constructor should define the x, y, velX, and velY properties in the same way as the Ball() constructor did originally, but not the color and size properties.
  It should also define a new property called exists, which is used to track whether the balls exist in the program (have not been eaten by the evil circle). This should be a boolean (true/false).
  The Ball() constructor should inherit the x, y, velX, velY, and exists properties from the Shape() constructor.
  It should also define a color and a size property, like the original Ball() constructor did.
  Remember to set the Ball() constructor's prototype and constructor appropriately.
  The Ball prototype's collisionDetect() method needs a small update. If the code were kept as-is, the EvilCircle would start eating the bouncing balls by setting the exists property to false. And that would reduce the number of balls involved in collision detection. A ball needs to be considered for collision detection only if the exists property is true. So, replace the existing collisionDetect() code with the following code:

  Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j]) && balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
  }
  As discussed above, the only addition is to check if the ball exists — by using balls[j].exists in the if conditional.
  The ball draw() and update() method definitions should be able to stay exactly the same as they were before.

  You also need to add a new parameter to the new Ball() ( ... ) constructor call — the exists parameter should be the 5th parameter, and should be given a value of true.

  At this point, try reloading the code — it should work just the same as it did before, with our redesigned objects.

B. Defining EvilCircle()

  Now it's time to meet the bad guy — the EvilCircle()! Our game is only going to involve one evil circle, but we are still going to define it using a constructor that inherits from Shape() to give you some practice. You might want to add another circle to the app later on that can be controlled by another player, or have several computer-controlled evil circles. You're probably not going to take over the world with a single evil circle, but it will do for this assessment.

  The EvilCircle() constructor should inherit x, y, velX, velY, and exists from Shape(), but velX and velY should always equal 20.

  You should do this something like Shape.call(this, x, y, 20, 20, exists);

  It should also define its own properties, as follows:

  color — 'white'
  size — 10
  Again, remember to define your inherited properties as parameters in the constructor, and set the prototype and constructor properties correctly.

C. Defining EvilCircle()'s methods

  EvilCircle() should have four methods, as described below.

  draw()

    This method has the same purpose as Ball()'s draw() method: It draws the object instance on the canvas. It will work in a very similar way, so you can start by copying the Ball.prototype.draw definition. You should then make the following changes:

    We want the evil circle to not be filled in, but rather just have an outer line (stroke). You can achieve this by updating fillStyle and fill() to strokeStyle and stroke().
    We also want to make the stroke a bit thicker, so you can see the evil circle a bit more easily. This can be achieved by setting a value for lineWidth somewhere after the beginPath() call (3 will do).

  checkBounds()

    This method will do the same thing as the first part of Ball()'s update() function — look to see whether the evil circle is going to go off the edge of the screen, and stop it from doing so. Again, you can mostly just copy the Ball.prototype.update definition, but there are a few changes you should make:

    - Get rid of the last two lines — we don't want to automatically update the evil circle's position on every     frame, because we will be moving it in some other way, as you'll see below.
    
    - Inside the if() statements, if the tests return true we don't want to update velX/velY; we want to instead change the value of x/y so the evil circle is bounced back onto the screen slightly. Adding or subtracting (as appropriate) the evil circle's size property would make sense.
  
  setControls()
    
    This method will add an onkeydown event listener to the window object so that when certain keyboard keys are pressed, we can move the evil circle around. The following code block should be put inside the method definition:

    let _this = this;
    window.onkeydown = function(e) {
        if (e.key === 'a') {
          _this.x -= _this.velX;
        } else if (e.key === 'd') {
          _this.x += _this.velX;
        } else if (e.key === 'w') {
          _this.y -= _this.velY;
        } else if (e.key === 's') {
          _this.y += _this.velY;
        }
      }
  
    So when a key is pressed, the event object's key property is consulted to see which key is pressed. If it is one of the four specified keys, then the evil circle will move left/right/up/down.

    For a bonus point, can you tell us why we've had to set let _this = this; in the position it is in? It is something to do with function scope.

  collisionDetect()

    This method will act in a very similar way to Ball()'s collisionDetect() method, so you can use a copy of that as the basis of this new method. But there are a couple of differences:

    - In the outer if statement, you no longer need to check whether the current ball in the iteration is the same as the ball that is doing the checking — because it is no longer a ball, it is the evil circle! Instead, you need to do a test to see if the ball being checked exists (with which property could you do this with?). If it doesn't exist, it has already been eaten by the evil circle, so there is no need to check it again.
    
    - In the inner if statement, you no longer want to make the objects change color when a collision is detected — instead, you want to set any balls that collide with the evil circle to not exist any more (again, how do you think you'd do that?).

D. Bringing the evil circle into the program

  Now we've defined the evil circle, we need to actually make it appear in our scene. To do this, you need to make some changes to the loop() function.

  - First of all, create a new evil circle object instance (specifying the necessary parameters), then call its setControls() method. You only need to do these two things once, not on every iteration of the loop.
  
  - At the point where you loop through every ball and call the draw(), update(), and collisionDetect() functions for each one, make it so that these functions are only called if the current ball exists.
  
  - Call the evil ball instance's draw(), checkBounds(), and collisionDetect() methods on every iteration of the loop. 

E. Implementing the score counter
  To implement the score counter, follow the following steps:

  1. In your HTML file, add a <p> element just below the <h1> element containing the text "Ball count: ".
  2. In your CSS file, add the following rule at the bottom:
  
  p {
    position: absolute;
    margin: 0;
    top: 35px;
    right: 5px;
    color: #aaa;
  }

  3. In your JavaScript, make the following updates:
    - Create a variable that stores a reference to the paragraph.
    - Keep a count of the number of balls on screen in some way.
    - Increment the count and display the updated number of balls each time a ball is added to the scene.
    - Decrement the count and display the updated number of balls each time the evil circle eats a ball (causes it not to exist).
*/

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// define Ball constructor

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// define ball draw method

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// define ball update method

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
      }
    }
  }
};

// define array to store balls and populate it

let balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the adge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}

// define loop that keeps drawing the scene constantly

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();