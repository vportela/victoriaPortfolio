/* 1. Create functions that will take in an object
    Each function will return me a different field (should have 10 min in total), one function per field */

    const home1 = {
      type: "house",
      age: 1950,
      isBig: false,
      color: null,
      roofType: undefined,
      rooms: ["bedroom", "bathroom", "living room", "office"],
      floors: ["carpet", "tile", "hard wood"],
      howManyBedrooms: 3,
      howManyBathrooms: 2,
      capacity: undefined,
    }
    
    const home2 = {
      type: "apartment",
      age: 1970,
      isBig: true,
      color: undefined,
      roofType: null,
      rooms: ["bedroom", "bathroom", "living room", "office"],
      floors: ["tile", "carpet",],
      howManyBedrooms: 8,
      howManyBathrooms: 4,
      capacity: null,
    }
    
         const home3 = {
      type: "mansion",
      age: 2020,
      isBig: true,
      color: "white",
      roofType: "tile",
      rooms: ["bedroom", "bathroom", "living room", "office", "poolroom", "sitting room", "kitchen"],
      floors: ["marble", "rare wood", "fancy carpet"],
      howManyBedrooms: undefined,
      howManyBathrooms: 8,
      capacity: null,
    }
    
    console.log("home1: ", home1)
    console.log("--------------HomeType------------")
    
    const findHomeType = (typeOfHome) => {
        //console.log("home object", typeOfHome)
      return typeOfHome.type
     
    }
    
    const homeType = findHomeType(home1)
    console.log("this house is a/an: ",homeType)

    const homeType2 = findHomeType(home2)
    console.log("this house is a/an: ",homeType2)
    
    const homeType3 = findHomeType(home3)
    console.log("this house is a/an: ",homeType3)
    
    
    
    
    
    console.log("--------------HomeAge------------")
    
    const findHomeAge = (ageOfHome) => {
      return ageOfHome.age
     
    }
    
    const homeAge = findHomeAge(home1)
    console.log("this home was built in: ",homeAge)

    const homeAge2 = findHomeAge(home2)
    console.log("this home was built in ",homeAge2)
    
    const homeAge3 = findHomeAge(home3)
    console.log("this home was built in: ",homeAge3)
    
    
    
    
     console.log("--------------Homesize------------")
    
    const findHomeSize = (sizeOfHome) => {
      return sizeOfHome.isBig
     
    }
    
    const homeSize = findHomeSize(home1)
    console.log("this home is big: ",homeSize)

    const homeSize2 = findHomeSize(home2)
    console.log("this home is big ",homeSize2)
    
    const homeSize3 = findHomeSize(home3)
    console.log("this home is big: ",homeSize3)
    
    
    
    
      console.log("--------------Homesize------------")
    
    const findHomeColor = (colorOfHome) => {
      return colorOfHome.color
     
    }
    
    const homeColor = findHomeColor(home1)
    console.log("The color of this house is: ",homeColor)

    const homeColor2 = findHomeColor(home2)
    console.log("The color of this house is: ",homeColor2)
    
    const homeColor3 = findHomeColor(home3)
    console.log("The color of this house is: ",homeColor3)
    
    
    
    
    console.log("--------------RoofType------------")
    
    const findHomeRoofType = (homeRoofType) => {
      return homeRoofType.roofType
     
    }
    
    const typeOfRoof = findHomeRoofType(home1)
    console.log("type of roof: ",typeOfRoof)

    const typeOfRoof2 = findHomeRoofType(home2)
    console.log("type of roof:",typeOfRoof2)
    
    const typeOfRoof3 = findHomeRoofType(home3)
    console.log("type of roof: ",typeOfRoof3)
    
    
    
     console.log("--------------Rooms------------")
    
    const findHomeRooms = (roomsOfHome) => {
      return roomsOfHome.rooms
     
    }
    
    const listOfRooms = findHomeRooms(home1)
    console.log("list of rooms: ",listOfRooms)

    const listOfRooms2 = findHomeRooms(home2)
    console.log("list of rooms:",listOfRooms2)
    
    const listOfRooms3 = findHomeRooms(home3)
    console.log("list of rooms: ",listOfRooms3)
    
    
    
    
          console.log("--------------Floors------------")
    
    const findHomeFloorTypes = (typesOfHomeFlooring) => {
      return typesOfHomeFlooring.floors
     
    }
    
    const listOfFloors = findHomeFloorTypes(home1)
    console.log("list of floors: ",listOfFloors)

    const listOfFloors2 = findHomeFloorTypes(home2)
    console.log("list of floors: ",listOfFloors2)
    
    const listOfFloors3 = findHomeFloorTypes(home3)
    console.log("list of floors: ",listOfFloors3)
    
    
    
    
     console.log("--------------HowManyBedRooms------------")
    
    const findHowManyBedroomsInHome = (howManyBedrooms) => {
      return howManyBedrooms.howManyBedrooms
     
    }
    
    const numberOfBedrooms = findHowManyBedroomsInHome(home1)
    console.log("number of bedrooms: ",numberOfBedrooms)

    const numberOfBedrooms2 = findHowManyBedroomsInHome(home2)
    console.log("number of bedrooms: ",numberOfBedrooms2)
    
    const numberOfBedrooms3 = findHowManyBedroomsInHome(home3)
    console.log("number of bedrooms: ",numberOfBedrooms3)
    
    
    
    
    console.log("--------------HowManyBathRooms------------")
    
    const findHowManyBathroomsInHome = (howManyBathrooms) => {
      return howManyBathrooms.howManyBathrooms
     
    }
    
    const numberOfBathrooms = findHowManyBathroomsInHome(home1)
    console.log("number of bathrooms: ",numberOfBathrooms)

    const numberOfBathrooms2 = findHowManyBathroomsInHome(home2)
    console.log("number of bathrooms: ",numberOfBathrooms2)
    
    const numberOfBathrooms3 = findHowManyBathroomsInHome(home3)
    console.log("number of bathrooms: ",numberOfBathrooms3)
    
    
    
     
    console.log("--------------HomeCapacity------------")
    
    const findCapacityOfHome = (homeCapacity) => {
      return homeCapacity.capacity
     
    }
    
    const howMuchCapacity = findCapacityOfHome(home1)
    console.log("capacity of home: ",howMuchCapacity)

    const howMuchCapacity2 = findCapacityOfHome(home2)
    console.log("capacity of home: ",howMuchCapacity2)
    
    const howMuchCapacity3 = findCapacityOfHome(home3)
    console.log("capacity of home: ",howMuchCapacity3)
    
    
    console.log("--------------Bedroom Override------------")
    
  /*  home1.howManyBedrooms = 200
    console.log("home1 after bedroom number change", home1) */
    
    
    const overRideHomeBedroomNumber = (numberOfBedroomsUpdated) => {
      
      return numberOfBedroomsUpdated
    }
    const updatedBedrooms = overRideHomeBedroomNumber(home1.howManyBedrooms = 250)
    console.log("number of bedrooms after updating", updatedBedrooms)
    console.log("number of bedrooms after updating", home1)
    
    
    
    
      console.log("--------------HomeType Override------------")
    

    
    
    const overrideHomeType = (homeTypeUpdated) => {
      
      return homeTypeUpdated
    }
    const updatedHomeType = overrideHomeType(home1.type = "shack")
    console.log("home type after updating", updatedHomeType)
    console.log("home type after updating", home1)
    
    
    
    console.log("--------------HomeAge Override------------")
    

    
    
    const overrideHomeAge = (homeAgeUpdated) => {
      
      return homeAgeUpdated
    }
    const updatedHomeAge = overrideHomeAge(home1.age = 2015)
    console.log("home age after updating", updatedHomeAge)
    console.log("home age after updating", home1)
    
    
    
      console.log("--------------Home Capacity Override------------")
    

    
    
    const overrideHomeCapacity = (homeCapacityUpdated) => {
      
      return homeCapacityUpdated
    }
    const updatedHomeCapacity = overrideHomeCapacity(home1.capacity = "big")
    console.log("home capacity after updating", updatedHomeCapacity)
    console.log("home capacity after updating", home1)
    
    
    
     console.log("--------------Home Color Override------------")
    

    
    
    const overrideHomeColor = (homeColorUpdated) => {
      
      return homeColorUpdated
    }
    const updatedHomeColor = overrideHomeColor(home1.color = "pink")
    console.log("home color after updating", updatedHomeColor)
    console.log("home color after updating", home1)
    
    
     console.log("--------------Home Color Override------------")
    

    
    
    const overrideHomeFloor = (homeFloorUpdated) => {
      
      return homeFloorUpdated
    }
    const updatedHomeFloor = overrideHomeColor(home1.floors = undefined)
    console.log("home flooring after updating", updatedHomeFloor)
    console.log("home flooring after updating", home1)
    
    
    
    
    console.log("--------------Home bathroom Override------------")
    

    
    
    const overrideHomeBathrooms = (homeBathroomUpdated) => {
      
      return homeBathroomUpdated
    }
    const updatedHomeBathroom = overrideHomeColor(home1.howManyBathrooms = 1)
    console.log("home flooring after updating", updatedHomeBathroom)
    console.log("home flooring after updating", home1)
    
    
    
    
       console.log("--------------Home size Override------------")
    

    
    
    const overrideHomeSize = (homeSizeUpdated) => {
      
      return homeSizeUpdated
    }
    const updatedHomeSize = overrideHomeSize(home1.isBig = true)
    console.log("home flooring after updating", updatedHomeSize)
    console.log("home flooring after updating", home1)
    
    
    
    
    
    console.log("--------------Home roof type Override------------")
    

    
    
    const overrideHomeRoofType = (homeRoofTypeUpdated) => {
      
      return homeRoofTypeUpdated
    }
    const updatedHomeRoofType = overrideHomeSize(home1.roofType = null)
    console.log("home flooring after updating", updatedHomeRoofType)
    console.log("home flooring after updating", home1)
    
    
    
    console.log("--------------Home rooms Override------------")
    

    
    
    const overrideHomeRooms = (homeRoomsUpdated) => {
      
      return homeRoomsUpdated
    }
    const updatedRoomsType = overrideHomeSize(home1.rooms = ["toilet room", "fancy room", "banana room"])
    console.log("home flooring after updating", updatedRoomsType)
    console.log("home flooring after updating", home1)