# the compiler: gcc for C program, define as g++ for C++
CC = g++

# compiler flags:
#  -g     - this flag adds debugging information to the executable file
#  -Wall  - this flag is used to turn on most compiler warnings
CFLAGS  = -g -Wall -c

INCLUDES = -lsfml-graphics -lsfml-window -lsfml-system 
#g++ -c pathfinder.cpp && g++ pathfinder.o -o sfml-app -lsfml-graphics -lsfml-window -lsfml-system && ./sfml-app

# The build target 
TARGET = pathfinder

all: $(TARGET)

$(TARGET): $(TARGET).cpp
	$(CC) $(CFLAGS) $(TARGET).cpp && $(CC) $(TARGET).o -o $(TARGET) $(INCLUDES) && ./$(TARGET)  
clean:
	$(RM) $(TARGET)
