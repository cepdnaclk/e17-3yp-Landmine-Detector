#include<SFML/Graphics.hpp>
#include<bits/stdc++.h>
#include<vector>
#include<iostream>
#include<string>
using namespace sf;

/*
   g++ -c pathfinder.cpp && g++ pathfinder.o -o sfml-app -lsfml-graphics -lsfml-window -lsfml-system && ./sfml-app
   */

int main(){
	
	int window_size = 500;
	int sq_size = 20;
	int search_area = 20;
	int sq_num = window_size/sq_size;
	int area[sq_num][sq_num];

	std::memset(area,0,sizeof(area));

//	for(int i=0;i<window_size;i+=sq_size){
//		for(int j=0;j<window_size;j+=sq_size){
//			if((i>search_area && window_size-search_area>i) && (j>search_area && window_size-search_area>j))
//				area[i][j] = 1;
//		}	
//	}

	RenderWindow window(VideoMode(window_size,window_size), "PathFinder");
	
	//squares to divide the space
	RectangleShape rect;
	rect.setSize(Vector2f(sq_size,sq_size));
	rect.setOutlineColor(Color::Black);
	rect.setOutlineThickness(1);
	rect.setFillColor(Color::Red);

	//robot 
	CircleShape robot(8.f);
	robot.setFillColor(Color::Green);
	robot.setPosition(10,window_size-10);

	si = 0;
	sj = 0;


	while(window.isOpen()){
		Event event;
		while(window.pollEvent(event)){
			if(event.type == sf::Event::Closed)
				window.close();
		}

		window.clear();
		
		for(int i=0;i<window_size;i+=sq_size){
			for(int j=0;j<window_size;j+=sq_size){
//				if(area[i][j] == 1)
				if((i>search_area && window_size-search_area>i) && (j>search_area && window_size-search_area>j))
					rect.setFillColor(Color::White);
				else
					rect.setFillColor(Color::Black);
			
				


				rect.setPosition(i,j);
				window.draw(rect);
			}
		}


		window.draw(robot);
		window.display();
	}
	return 0;
}
