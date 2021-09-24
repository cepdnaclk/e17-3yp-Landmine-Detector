import {PhysicsLoader, Project, Scene3D,THREE, ExtendedMesh, ExtendedObject3D} from 'enable3d'
import { GreaterEqualDepth, Plane } from 'three'
import {Pane} from 'tweakpane';

// scalar to simulate speed

var box1;
var area,area1;
var area_length = 75, area_div = 15;
var block_dis = area_length/area_div;
var blocks_per_side = area_length/block_dis;
var posx= - ((blocks_per_side/2>>0)*(block_dis)) ,posy=1.1 ,posz = posx;

// Create one dimensional array
var searchMatrix;// = new Array(15);

var k =0;


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

    (await this.warpSpeed()).camera?.position.set(-75,40,0);
    

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
      color: '#ff0',
    };

    //to do figure out how to add elements (tweakPane)
    const pane = new Pane();

    const gridHelper = new THREE.GridHelper( 100, 20, 0x0000ff, 0x808080 );
    const area = new THREE.GridHelper( area_length, area_div, PARAMS.color,  0xff0000);
    area.position.y = 0.1;
    // this.scene.add( gridHelper );
    this.scene.add(area);



    // Loop to create 2D array using 1D array
    searchMatrix = new Array(15);

    for(var i=0;i<15;i++){
      searchMatrix[i]= new Array(15);
      for(var j=0;j<searchMatrix[i].length;j++){
        searchMatrix[i][j] = new Array(15);
        searchMatrix[i][j][0]=0.5;
      }
    }
    var h = -((blocks_per_side/2>>0)*(block_dis));

    // // Loop to initialize 2D array elements.
    for (var i = 0; i < 15; i++) {
      for (var j = 0; j < 15; j++) {
        searchMatrix[i][j][0]  = h;
        searchMatrix[i][j][1]  = h + j*(block_dis); 
        searchMatrix[i][j][2]  = 0;
      }
      h+=(block_dis);
    }
  
    // Loop to display the elements of 2D array. 
    // for (var i = 0; i < 2; i++) {
    //   for (var j = 0; j < 2; j++)    {
    //     document.write(searchMatrix[i][j][0] + " ");
    //   }
    //   document.write("<br>");
    // } 

    box1 = this.physics.add.box({x:posx,y:posy,z:posz,height:2,width:2,depth:2},{phong: {color: 'green'}})
    this.physics.debug?.enable()
    this.renderer
    // this.camera
    // this.scene
    // this.physics

    area1 = this.physics.add.box({x:0,y:0,z:0,height:0.1,width:75,depth:75})
    
    
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
    this.camera.lookAt(0,0,0)
    // this.camera.lookAt(box1.position.clone())
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

    
    
      if(posx < 0 ){
          posx = searchMatrix[k][0][0];
          k++;
      }
      else if(posz < 0){
        posz = posz+0.5; //searchMatrix[k][0][0];
      }
    
    // box1.rotation.x =+ 0.01
    // set needUpdate to true, every time you want
    // to adjust the position or rotation of a kinematic body
    box1.position.set(posx,posy,posz)
    box1.body.needUpdate = true;
  }
}

const config = {scenes:[PhysicsTest], antialias: true}
PhysicsLoader('/ammo',()=> new Project(config))