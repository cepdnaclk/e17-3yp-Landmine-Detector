import {PhysicsLoader, Project, Scene3D,THREE, ExtendedMesh, ExtendedObject3D} from 'enable3d'
import { GreaterEqualDepth, Plane } from 'three'
import {Pane} from 'tweakpane';




// scalar to simulate speed
var posx=15,posy=0.5,posz=15
var box1;
var area,area1;




export class PhysicsTest extends Scene3D{

  async init(){
    this.renderer.setPixelRatio(1)
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    
  }

  async create(){
    // this.warpSpeed('-ground').then(({ ground }) => {
    //   if (ground) {
        
    //   }
    // })

    this.warpSpeed()

    // Adding thrree js objects ============================

    // const geometry = new THREE.SphereGeometry(0.8, 16, 16)
    // const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
    // const cube = new ExtendedMesh(geometry, material)
    // const object = new ExtendedObject3D()
    
    // this.scene.add(cube)

    //=================================

    // const material = new THREE.LineBasicMaterial( { color: 0x0000ff , linewidth: 2,} );
    // const points = [new THREE.Vector3( 10, 0.5, 0 ),new THREE.Vector3( -8 , 0.5, 0 )];

    
    // const geometry = new THREE.BufferGeometry().setFromPoints( points );
    // const line = new THREE.Line( geometry, material );
    // this.scene.add(line)



    // const size = 10;
    // const divisions = 10;
    
    // const gridHelper = new THREE.GridHelper( size, divisions );
    const PARAMS = {
      factor: 123,
      title: 'hello',
      color: '#0f0',
    };

    //to do figure out how to add elements
    const pane = new Pane();

    
  
    

    const gridHelper = new THREE.GridHelper( 100, 20, 0x0000ff, 0x808080 );
    const area = new THREE.GridHelper( 50, 10, PARAMS.color,  0xff0000);
    area.position.y = 0.1;
    this.scene.add( gridHelper );
    this.scene.add(area);


   
    // let plane = this.physics.add.box({x:5,y:0,z:0,width:30,height:1.01,depth:40},{lambert:{color: 0x0ffff00}});
    
    // //plane.rotation.x = 90
    // this.camera.position.set(20,50,20)
    // // this.haveSomeFun()

    box1 = this.physics.add.box({x:posx,y:posy,z:posz},{phong: {color: 'green'}})
    this.physics.debug?.enable()
    this.renderer
    // this.camera
    // this.scene
    // this.physics

    area1 = this.physics.add.box({x:0,y:0,z:0,height:0.1,width:50,depth:50})
    
    
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
    this.camera.lookAt(box1.position.clone())
    //this.camera.attach(box1)

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