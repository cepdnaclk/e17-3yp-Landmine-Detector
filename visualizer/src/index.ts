import {PhysicsLoader, Project, Scene3D} from 'enable3d'
import { GreaterEqualDepth } from 'three'
import * as THREE from 'three'

var direction = new THREE.Vector3(1, 0, 0);
// scalar to simulate speed
var speed = 1;
var box1;

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

    box1.body.setCollisionFlags(2)
  //   const teleport = () => {
  //     // set body to be kinematic
  //     box1.body.setCollisionFlags(2)

  //     // set the new position
  //     box1.position.set(2, 4, 2)
  //     box1.body.needUpdate = true

  //     // this will run only on the next update if body.needUpdate = true
  //     box1.body.once.update(() => {
  //       // set body back to dynamic
  //       box1.body.setCollisionFlags(0)

  //       // if you do not reset the velocity and angularVelocity, the object will keep it
  //       box1.body.setVelocity(0, 0, 0)
  //       box1.body.setAngularVelocity(0, 0, 0)
  //     })
  //   }
  //   setTimeout(teleport, 2000)
  }

  update(time) {

    const orbitRadius = 5
    const date = time * 0.0025
    const { x, y, z } = box1.position.clone()

          // make object orbit around a center
          // https://stackoverflow.com/questions/42418958/rotate-an-object-around-an-orbit
          box1.position.set(
            Math.cos(date) * orbitRadius + 0,
            0,
            Math.sin(date) * orbitRadius + 0
          )

    // box1.position.set(0,5,0)
    // box1.rotation.x =+ 0.01
    // set needUpdate to true, every time you want
    // to adjust the position or rotation of a kinematic body

    box1.body.needUpdate = true
  }
}

const config = {scenes:[PhysicsTest], antialias: true}
PhysicsLoader('/ammo',()=> new Project(config))