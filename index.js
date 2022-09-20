// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    let hqLocation = 42;
    let calculateDistance = hqLocation - pickupLocation;
    let distanceInBlocks = Math.abs(calculateDistance);
    return distanceInBlocks;
}

function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(adress1, adress2) {
    let calculateDistance = Math.abs(adress1 - adress2);
    let distanceInFeet = calculateDistance * 264;
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    let calculateDistanceInBlocks = Math.abs(start - destination);
    let calculateDistance = calculateDistanceInBlocks * 264;
    let farePrice;
    if (calculateDistance <= 400) {
        farePrice = 0;
    }
    else if (calculateDistance > 400 && calculateDistance <= 2000) {
        farePrice = (calculateDistance - 400) * 0.02;
    }
    else if (calculateDistance > 2000 && calculateDistance <= 2500) {
        farePrice = 25;
    }
    else {
        farePrice = "cannot travel that far"
    }


    return farePrice;
}