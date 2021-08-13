#include<SFML/Graphics.hpp>
#include<vector>
#include<iostream>
#include<string>
using namespace sf;


/*
g++ -c Sim_v1.cpp &&
g++ Sim_v1.o -o sfml-app -lsfml-graphics -lsfml-window -lsfml-system &&
./sfml-app
*/

int n = 100;
//number of blocks on a side

int main(){

    RenderWindow appWindow(VideoMode(800,800),"Select");
    Event appEvent;



    //appWindow.setFramerateLimit(2.5);

    int size = 800/n;

    std::vector<std::vector<std::tuple<float,float,bool>>> grid(n);

    float y=0;
    for(int i=0;i<n;i++){
        float x=0;
        for(int j=0;j<n;j++){
            grid[i].push_back(std::make_tuple(x,y,false));
            x +=size;
        }
        y +=size;
    }

    sf::RectangleShape rectangle(sf::Vector2f(size, size));
    int iter = 0;
    int posx=n/2,posy=n/2;
    int dir = 0;
    /*
    up    = 0
    right = 1
    down  = 2
    left  = 3
    */

    while(appWindow.isOpen()){
        while (appWindow.pollEvent(appEvent))
        {
            if(appEvent.type == Event::Closed)appWindow.close();
            if (Mouse::isButtonPressed(Mouse::Left))
            {
                sf::Vector2i position = sf::Mouse::getPosition();
                // std::cout<<position.x<<" "<<position.y<<"\n";
                std::get<2>(grid[(position.y/800)*size+1][(position.x/800)*size+1]) = true; 
            }

            if(appEvent.type == Event::KeyPressed && appEvent.key.code == Keyboard::Escape){
              appWindow.close();
              RenderWindow appWindow1(VideoMode(800,800),"Langdon's Ant");
              Event appEvent1;
              while(appWindow1.isOpen()){
                while (appWindow1.pollEvent(appEvent1))
                {
                    if(appEvent1.type == Event::Closed)appWindow1.close();
                }

                // if(iter==11000){
                //     sf::Image screenshot =appWindow.capture();
                //     screenshot.saveToFile("screenshot.png");
                //     appWindow.close();
                // }
                appWindow1.clear(Color::Black);

                for(int i=0;i<n;i++){
                    for(int j=0;j<n;j++){
                        rectangle.setPosition(std::get<0>(grid[i][j]),std::get<1>(grid[i][j]));
                        if(std::get<2>(grid[i][j])==false){
                            rectangle.setFillColor(Color::White);
                        }
                        else{
                            rectangle.setFillColor(Color(125,125,125));
                        }
                        rectangle.setOutlineColor(Color::Black);
                        rectangle.setOutlineThickness(1);
                        appWindow1.draw(rectangle);
                    }
                }

                CircleShape ant;
                ant.setRadius(5);
                ant.setPosition(std::get<0>(grid[posx][posy])+size/2,std::get<1>(grid[posx][posy])+size/2);
                ant.setFillColor(Color::Red);
                appWindow1.draw(ant);

                    std::cout<<posx<<" "<<posy<<" "<<iter<<std::endl;
                    iter++;
                    if(std::get<2>(grid[posx][posy])==false){
                        if(dir==0){
                            posy++;
                        }
                        else if(dir==1){
                            posx++;
                        }
                        else if(dir==2){
                            posy--;
                        }
                        else if(dir==3){
                            posx--;
                        }
                        dir = (dir+1)%4;
                    }
                    else{
                        if(dir==0){
                            posy--;
                        }
                        else if(dir==1){
                            posx--;
                        }
                        else if(dir==2){
                            posy++;
                        }
                        else if(dir==3){
                            posx++;
                        }
                        dir = (dir+3)%4;
                    }

                    std::get<2>(grid[posx][posy])= !std::get<2>(grid[posx][posy]);

                appWindow1.display();
            }
          }
            appWindow.clear(Color::Black);
            for(int i=0;i<n;i++){
                for(int j=0;j<n;j++){
                    rectangle.setPosition(std::get<0>(grid[i][j]),std::get<1>(grid[i][j]));
                    if(std::get<2>(grid[i][j])==false){
                        rectangle.setFillColor(Color::White);
                    }
                    else{
                        rectangle.setFillColor(Color(125,125,125));
                    }
                    rectangle.setOutlineColor(Color::Black);
                    rectangle.setOutlineThickness(1);
                    appWindow.draw(rectangle);
                }
            }
            appWindow.display();

    }
  }
    return 0;
}
