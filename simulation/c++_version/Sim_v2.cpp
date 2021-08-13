#include<SFML/Graphics.hpp>
#include<vector>
#incude<iostream>
#include<string>
using namespace sf;

/*
g++ -c Sim_v2.cpp &&
g++ Sim_v2.o -o sfml-app -lsfml-graphics -lsfml-window -lsfml-system &&
./sfml-app
*/

//number of blocks per side
int n = 100;
//window size
int win_size=600;

int main(){

  RenderWindow appWindow(VideoMode(win_size,win_size),"Select");
  Event appEvent;

  //appWindow.setFramerateLimit(2.5)

  int block_size = win_size/n;

  //vector grid of tuples
  std::vector<std::std::vector<std::tuple<float,float,bool>>> grid(n);

  float y=0;
  for(int i=0;i<n;i++){
    float x=0;
    for(int j=0;j<n;j++){
      grid[i].push_back(std::make_tuple(x,y,false));
      x+=size;
    }
  }
  return 0;
}
