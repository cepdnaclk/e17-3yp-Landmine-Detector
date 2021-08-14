import pygame as pg
import sys

#sample code from
#https://betterprogramming.pub/making-grids-in-python-7cf62c95f413

#CONSTANTS
SCREENSIZE = WIDTH,HEIGHT = 800,800
BLACK = (0,0,0)
GREY = (160,160,160)
RED = (255,0,0)
PADDING = PADTOPBOTTOM, PADLEFTRIGHT = 100,100
DIVS = 10
#cell size
CELL_WIDTH   = (WIDTH - (PADLEFTRIGHT*2))//DIVS
CELL_HEIGHT  = (HEIGHT - (PADTOPBOTTOM*2))//DIVS
GRID=[]
FLAG = False
SELECTED_BLOCK = [0,0,1]

#Global VARS using a dictionary
_VARS = {'surf':False}

# This is the main game loop, it constantly runs until you press the Q KEY
# or close the window.
# CAUTION: THis will run as fast as you computer allows,
# if you need to set a specific FPS look at tick methods.

def main():
    pg.init()
    _VARS['surf'] = pg.display.set_mode(SCREENSIZE)


    while True:
        checkEvents()
        _VARS['surf'].fill(GREY)
        drawGrid()
        pg.display.update()


def drawGrid():


    for i in range(PADTOPBOTTOM,HEIGHT-PADTOPBOTTOM,CELL_HEIGHT):
        temp = []
        for j in range(PADLEFTRIGHT,WIDTH-PADLEFTRIGHT,CELL_WIDTH):
            temp.append([0,i,j])
        GRID.append(temp)


    for i in range(len(GRID)):
        for j in range(len(GRID[i])):
            if(GRID[i][j][0]==0):
                pg.draw.rect(_VARS['surf'], BLACK, pg.Rect(GRID[i][j][1],GRID[i][j][2], CELL_WIDTH,CELL_HEIGHT),2)
            elif(i==SELECTED_BLOCK[0] and j ==SELECTED_BLOCK[1]):
                if(SELECTED_BLOCK[2]==1):
                    pg.draw.rect(_VARS['surf'], RED, pg.Rect(GRID[i][j][1],GRID[i][j][2], CELL_WIDTH,CELL_HEIGHT))
                    SELECTED_BLOCK[2]=0
                else:
                    pg.draw.rect(_VARS['surf'], RED, pg.Rect(GRID[i][j][1],GRID[i][j][2], CELL_WIDTH,CELL_HEIGHT),2)
                    SELECTED_BLOCK[2]=1
                pg.time.delay(200)


def onCLick(pos,):
    if pos[0]<WIDTH-PADLEFTRIGHT and pos[0]>PADLEFTRIGHT and pos[1]<HEIGHT-PADTOPBOTTOM and pos[1]>PADTOPBOTTOM:
        GRID[SELECTED_BLOCK[0]][SELECTED_BLOCK[1]][0]=0
        x = (pos[0]-PADTOPBOTTOM)//CELL_WIDTH
        y = (pos[1]-PADLEFTRIGHT)//CELL_HEIGHT
        GRID[x][y][0]=1
        SELECTED_BLOCK[0] = x
        SELECTED_BLOCK[1] = y
        
        

    else:
        print("Plese select a square inside grid")



def checkEvents():
    for event in pg.event.get():
        if event.type == pg.QUIT:
            sys.exit()
        elif event.type == pg.KEYDOWN and event.key == pg.K_q:
            pg.quit()
            sys.exit()
        elif event.type == pg.MOUSEBUTTONDOWN:
            pos = pg.mouse.get_pos()
            print(pos[0],CELL_WIDTH,pos[1])
            onCLick(pos)

if __name__ == '__main__':
    main()

