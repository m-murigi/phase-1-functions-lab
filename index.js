// // Code your solution in this file

function distanceFromHqInBlocks(pickupLocation) {
  const headquarters = 42;
  return Math.abs(headquarters - pickupLocation);
  //difference between the two locations
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {

  const feetTravelled = Math.abs(destinationBlock - startBlock);

  const feetPerBlock = 264;
  return feetTravelled * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free sample
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
    //2 cents per foot
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // $25 for over 2000feet
  } else {
    return 'cannot travel that far'; // 
  }
 }