var rover = {
    direction: 'N',
    position: { x: 0, y: 0 },
    travelLog: []
};


function turnLeft(rover) {
    console.log("turnLeft was called! current direction: " + rover.direction);
    
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;
        case 'E':
            rover.direction = 'N';
            break; 
        case 'S':
            rover.direction = 'E';
            break; 
        case 'W':
            rover.direction = 'S';
            break;
        
        default:
            console.log('Not a valid direction');
            break;
    }
    
    console.log("new direction: " + rover.direction);
}

function turnRight(rover) {
    console.log("turnRight was called! current direction: " + rover.direction);

    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break; 
        case 'S':
            rover.direction = 'W';
            break; 
        case 'W':
            rover.direction = 'N';
            break;
        
        default:
            console.log('Not a valid direction');
            break;
    }
    
    console.log("new direction: " + rover.direction);
}

function moveForward(rover) {
    console.log("moveForward was called");
    console.log("Previous position X: " + rover.position.x + " Y: " + rover.position.y)
    rover.travelLog.push({ x: rover.position.x, y: rover.position.y });

    switch (rover.direction) {
        case 'N':
            rover.position.y--;
            break;
        case 'E':
            rover.position.x++;
            break; 
        case 'S':
            rover.position.y++;
            break; 
        case 'W':
            rover.position.x--;
            break;
        
        default:
            break;
    }

    console.log("New position X: " + rover.position.x + " Y: " + rover.position.y)
}

function makeMultipleMovements(commands) {
    debugger
    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        
        switch (command) {
            case 'f':
                moveForward(rover);
                break;
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;

            default:
                break;
        }
    }

    console.log(rover.travelLog);
}