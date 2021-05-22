class Doge {
    constructor(x,y, isTarget = false, vel = 4) {
        this.size = 80;
        this.pos = createVector(x,y);        
        this.vel = createVector(random(vel*-1,vel), random(vel*-1,vel));
        this.accel = createVector(0.001,0.001);
        this.isTarget = isTarget;
    }

    move() {
        if(this.vel.x < 0) {
            this.vel.x -= this.accel.x;
        } else if (this.vel.x > 0) {
            this.vel.x += this.accel.x;
        }

        if(this.vel.y < 0) {
            this.vel.y -= this.accel.y;
        } else if (this.vel.y > 0) {
            this.vel.y += this.accel.y;
        }
        
        this.pos.add(this.vel);
        
        if (this.pos.x <= 0 || this.pos.x >=width - this.size) {
            this.vel.x *= -1;
        } else if (this.pos.y <= 0 || this.pos.y >= height - this.size) {
            this.vel.y *= -1;
        }
    }

    display() {   
        push();
        if(dist(mouseX, mouseY, this.pos.x+40, this.pos.y+40)<= 30 && this.isTarget == true) {
            tint(176, 176, 176);
        }
        if (this.isTarget == false) {
            image(img, this.pos.x, this.pos.y, this.size, this.size);
        } else {
            image(targetImg, this.pos.x, this.pos.y, this.size, this.size);
        }
        pop();  
    }
    
    isGotten() {
        if(dist(mouseX, mouseY, this.pos.x+40, this.pos.y+40)<= 30) {
            console.log("GAME OVER");
            stage ++;
        }
    }
}

class Doges {
    constructor(num) {
        this.num = num;
        this.doges = [];
        for (let i=0; i<this.num; i++) {
            this.doges.push(new Doge(width/2, height/2))
        }
        this.makeSpeed = 3;
    }

    addDoge () {        
        if (frameCount%50 == 0) {
            for(let i = 0; i<this.makeSpeed; i++) {                
              this.doges.push(new Doge(random(width), random(height)))
            }
        }
    }

    display() {
        this.doges.forEach(function(item) {
            item.display();
        })
    }

    move() {
        this.doges.forEach(function(item) {
            item.move();
        })
    }
}

function levelUp() {
    dogeArray.makeSpeed += 3;
    console.log(targetDoge.accel);
    targetDoge.accel.mult(2.3);
}