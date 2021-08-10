import {PhysicsLoader, Project, Scene3D} from 'enable3d'
import { GreaterEqualDepth } from 'three'
import * as THREE from 'three'

var direction = new THREE.Vector3(1, 0, 0);
var box1;
// scalar to simulate speed
var speed = 1;

export class PhysicsTest extends Scene3D{

  
  async init(){
    this.renderer.setPixelRatio(1)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  async create(){
    this.warpSpeed()
    this.camera.position.set(13,10,13)
    // this.haveSomeFun()

    box1 = this.physics.add.box({x:6,y:0,z:6},{phong: {color: 'green'}})
    this.physics.debug?.enable()
    // this.renderer
    // this.camera
    // this.scene
    // this.physics
  }

  update(){
    var vector = direction.clone().multiplyScalar(speed);
    
    box1.position.x += vector.x;
    box1.position.y += vector.y;
    box1.position.z += vector.z;
  
  }
}

const config = {scenes:[PhysicsTest], antialias: true}
PhysicsLoader('/ammo',()=> new Project(config))

/**
 * setting timed
 *       setTimeout(() => {
            this.isRolling = true
          }, 2000)
        }

        update() {
          if (this.isRolling) this.wheel.body.setAngularVelocityX(1)
        }
 */