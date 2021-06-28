import pygame
import math

class Robot:
    def __init__(self, startpos, robotimg, width, follow=None):
        self.leader=False #robot leader?
        self.follow= follow #who to follow?

        self.x,self.y =startpos
        self.theta=0
        self.w = width
        self.u = 30 #pix/sec
        self.W = 0  #rad/sec

        self.m2p=3779.52 #meters to pixel

        self.img = pygame.image.load(robotimg) #skin for robot
        self.rotated = self.img
        self.rect = self.rotated.get_rect(center=(self.x,self.y))

        
    def move(self):
        pass

    def following(self):
        pass

    def dist(self,point1,point2):
        (x1,y1) = point1
        (x2,y2) = point2
        x1 = float(x1)
        x2 = float(x2)
        y1 = float(y1)
        y2 = float(y2)

        #calculation
        px = (x1-x2)**2
        py = (y1-y2)**2
        distance = (px+py)**0.5
        return distance


    def draw(self,map):
        map.blit(self.rotated,self.rect)

    def trail(self):
        pass

class Envir:
    def __init__(self,dimensions) -> None:
        #COLORS
        self.black = (0,0,0)
        self.white = (255,255,255)
        self.green = (0, 255, 0)
        self.red = (255,0,0)
        self.blue = (0,0,255)
        self.yellow = (255,255,0)

        #MAP DIMS
        self.height,self.width=dimensions
        #window settings
        pygame.display.set_caption("diff drive")
        self.map=pygame.display.set_mode((self.width,self.height))




    def write_info(self):
        pass

    def robot_frame(self):
        pass




#initialization area


pygame.init()
running=True
iterations =0

start = (200,200)
dims = (600,1200)
environment = Envir(dims)
robot = Robot(start,r'./car.png',width=80,follow=None)
















#animation loop
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    environment.map.fill(environment.black)
    robot.draw(environment.map)

    pygame.display.update()
    iterations+=1

