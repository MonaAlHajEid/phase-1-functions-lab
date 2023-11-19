// Code your solution in this file!



function distanceFromHqInBlocks(someValue) {
    // 42nd Street is the headquarters
    const hqLocation = 42;
  
    // Calculate the distance from headquarters in blocks
    return Math.abs(someValue - hqLocation);
  }
  
  function distanceFromHqInFeet(someValue) {
    // Reuse the distanceFromHqInBlocks function
    const blocks = distanceFromHqInBlocks(someValue);
  
    // Each block in Manhattan is 264 feet long
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    // Calculate the number of feet traveled
    const blocks = Math.abs(start - destination);
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    // Calculate the distance in feet
    const feet = distanceTravelledInFeet(start, destination);
  
    // Calculate the fare based on the given conditions
    if (feet <= 400) {
      return 0; // First 400 feet are free
    } else if (feet > 400 && feet <= 2000) {
      // 2 cents per foot for distance between 400 and 2000 feet
      return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
      // Flat fare of $25 for distance between 2000 and 2500 feet
      return 25;
    } else {
      // Cannot travel that far for distances over 2500 feet
      return 'cannot travel that far';
    }
  }
  
  // Export the functions for testing
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  } 
  = require('../index.js');

  