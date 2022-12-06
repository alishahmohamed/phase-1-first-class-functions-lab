
// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (){
    
    let firstTwoDrivers = [...drivers]
    return (firstTwoDrivers.slice(0 , 2))

}
const returnLastTwoDrivers = function(){
    let LastTwoDrivers = [...drivers]

    return (LastTwoDrivers.slice(2,4))

}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
  }

  const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function( drivers, func){
    return ( func (returnFirstTwoDrivers || returnLastTwoDrivers));
}
