class Dodge {
    constructor(x,y, isTarget = false, vel = 4) {
        this.size = 80;
        this.pos = createVector(x,y);        
        this.vel = createVector(random(vel*-1,vel), random(vel*-1,vel));
        this.accel = createVector(0.001,0.001);
        this.isTarget = isTarget;
    }

    move() {
        this.vel.add(this.accel);
        this.pos.add(this.vel);
        
        if (this.pos.x <= 0 || this.pos.x >=width - this.size) {
            this.vel.x *= -1;
            this.accel.x *= -1;
        } else if (this.pos.y <= 0 || this.pos.y >= height - this.size) {
            this.vel.y *= -1;
            this.accel.y *= -1;
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
        }
    }
}

class Dodges {
    constructor(num) {
        this.num = num;
        this.dodges = [];
        for (let i=0; i<this.num; i++) {
            this.dodges.push(new Dodge(width/2, height/2))
        }
        this.makeSpeed = 3;
    }

    addDodge () {        
        if (frameCount%50 == 0) {
            for(let i = 0; i<this.makeSpeed; i++) {                
              this.dodges.push(new Dodge(random(width), random(height)))
            }
        }
    }

    display() {
        this.dodges.forEach(function(item) {
            item.move();
            item.display();
        })
    }    
}

function levelUp() {
    dodgeArray.makeSpeed += 3;
    console.log(targetDodge.accel);
    targetDodge.accel.mult(1.5);
}