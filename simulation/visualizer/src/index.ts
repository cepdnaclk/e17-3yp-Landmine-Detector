import {PhysicsLoader, Project, Scene3D} from 'enable3d'
import { GreaterEqualDepth } from 'three'
import * as THREE from 'three'


// scalar to simulate speed
var posx=6,posy=0.5,posz=6
var box1;

export class PhysicsTest extends Scene3D{

  async init(){
    this.renderer.setPixelRatio(1)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  async create(){
    this.warpSpeed()
    // let plane = this.physics.add.plane({x:0,y:0,z:0,width:5,height:20},{lambert:{color: 0xffff00}});
    // plane.rotation.set(0, Math.PI / 2, 0)
    //plane.rotation.x = 90
    this.camera.position.set(13,10,13)
    // this.haveSomeFun()

    box1 = this.physics.add.box({x:posx,y:posy,z:posz},{phong: {color: 'green'}})
    this.physics.debug?.enable()
    this.renderer
    // this.camera
    // this.scene
    // this.physics


    // let group = new THREE.Group()
    // const body = this.add.box({ height: 0.8, y: 1, width: 0.4, depth: 0.4 }, { lambert: { color: 0xffff00 } })
    // const head = this.add.sphere({ radius: 0.25, y: 1.7, z: 0.05 }, { lambert: { color: 0xffff00 } })
    // group.add(body, head)
    // group.position.setX(3)
    // this.add.existing(group)
    // this.physics.add.existing(group)

    box1.body.setCollisionFlags(2)
  }

  update() {

    // const orbitRadius = 5
    // const date = time * 0.0025
    // const { x, y, z } = box1.position.clone()

          // // make object orbit around a center
          // // https://stackoverflow.com/questions/42418958/rotate-an-object-around-an-orbit
          // box1.position.set(
          //   Math.cos(date) * orbitRadius + 0,
          //   0,
          //   Math.sin(date) * orbitRadius + 0
          // )
    if(posx>-6){
      posx=posx-0.1
    }
    else if(posz>-6){
      posz=posz-0.1
    }
    // box1.rotation.x =+ 0.01
    // set needUpdate to true, every time you want
    // to adjust the position or rotation of a kinematic body
    box1.position.set(posx,posy,posz)
    box1.body.needUpdate = true
  }
}

const config = {scenes:[PhysicsTest], antialias: true}
PhysicsLoader('/ammo',()=> new Project(config))