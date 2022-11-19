

// get the coordinates
// if there is an obstacle in front, rotate the car
// move forward if there is no obstacle
// try to move to the next position
// mark the position as done

#include<Arduino.h>
#include <bits/stdc++.h>

using namespace std;


int wayPoints[3][2] = {{0,1}, {4,5}, {1,2}};

// get the distance
long double toRadians(const long double degree)
{
    long double one_deg = (M_PI) / 180;
    return (one_deg * degree);
}

long double distance(long double lat1, long double long1,
                     long double lat2, long double long2)
{
    // Convert the latitudes
    // and longitudes
    // from degree to radians.
    lat1 = toRadians(lat1);
    long1 = toRadians(long1);
    lat2 = toRadians(lat2);
    long2 = toRadians(long2);
     
    // Haversine Formula
    long double dlong = long2 - long1;
    long double dlat = lat2 - lat1;
 
    long double ans = pow(sin(dlat / 2), 2) +
                          cos(lat1) * cos(lat2) *
                          pow(sin(dlong / 2), 2);
 
    ans = 2 * asin(sqrt(ans));
 
    // Radius of Earth in
    // Kilometers, R = 6371
    // Use R = 3956 for miles
    long double R = 6371;
     
    // Calculate the result
    ans = (ans * R) * 1000;
 
    return ans;
}



void makeOrientation(float initialLat, float initialLon, float destLat, float destLon) {
    
    char rotateDirection = 'L'; // default value

    while (true) {
        // if the orientation is in line
        return;

        // if the orientation is not in line
        // initially it rotates right
        // if it increase the bias in orientation rotate left

        if (rotateDirection == 'L') {
            // rotate left
            // wait sometime
            // if it increases the bias
            rotateDirection = 'R';
        }else {
            // rotate right
            // wait sometime
        }
    }
}



// send character 'F'
void moveForward(float lat, float lon, float destLat, float destLon) {
        if (!checkObstacle(lat, lon)) {
            // send character 'F'
            // wait 1 sec
            // send character 'S'

            return;
        } else {
            // send character 'S'
            rotate(lat, lon);
            // send character  'F'
            // wait 1 sec
            // send character 'S'
            // get current coordinates
            float currentLat, currentLon;
            makeOrientation(currentLat, currentLon, destLat, destLon);
            return;
        }
}

// send character 'L' or 'R'
void rotate(float lat, float lon) {
    while(checkObstacle(lat, lat)) {
        // rotate
    }
    return;
}

bool checkObstacle(float lat, float lon) {
    // if found return True

    // if not return False
}

bool hasReached(float lat, float lan) {
    // if reached true
}

void run(int wayPoints[][2]) {

    // current position
    float initialLat = 0, initialLan = 0, currentLat = 0, currentLan = 0;

    int length = sizeof(wayPoints) / sizeof(wayPoints[0]);
    for (int i=0; i<length; i++) {
        if (i==0) {
            makeOrientation(initialLat, initialLan, wayPoints[0][0], wayPoints[0][1]);
        }
        while(true) {
            moveForward(initialLat, initialLan, wayPoints[i][0], wayPoints[i][1]);
            if (hasReached(wayPoints[i][0], wayPoints[i][1])) {
                initialLat = wayPoints[i][0];
                initialLan = wayPoints[i][1];
                break;
            }

            // get the current coordinates
            initialLat = currentLat;
            initialLan = currentLan;
        }
    }


}


void setup() {
    
}

void loop() {
    run(wayPoints);
}