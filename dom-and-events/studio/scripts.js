// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right")
    const left = document.getElementById("left")
    let rocketPosionX = 0
    let rocketPosionY = 0
    let altitude = 0

    // HTML Elements
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementId("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackGround");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const abortMission = document.getElementById("missionAbort");
    const landing = document.getElementById("landing");
    const rocket = document.getElementById("rocket")



    takeOffButton.addEventListener("click", function(){
        let shouldTakeOff = confirm("Is the shuttle ready??");
        if(shouldTakeOff){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 
            "blue";
            spaceShuttleHeight.innerHTML = altitude

        }
    })
    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0"
    })  
    abortMission.addEventListener("click", function(){
        let conformation = window.confirm("Confirm that you want to abort the mission.");
        if (conformation) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0"
        }
    })
    this.document.addEventListener("click", function(event) {
        if(event.target.id === "left") {
            rocketPosionX -= 10
            rocket.style.marginLeft = rocketPosionX + 'px';
        }
        if(event.target.id === "right") {
            rocketPosionX += 10
            rocket.style.marginRight = rocketPosionX + 'px';
        }
        if(event.target.id === "up") {
            rocketPosionY += 10
            rocket.style.marginTop = rocketPosionY + 'px';
            altitude =+ 1000;
            spaceShutt
        }
        if(event.target.id === "down") {
            rocketPosionY -= 10
            rocket.style.marginBottom = rocketPosionY + 'px';

        }
    });

});

