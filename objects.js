/* 1. Create functions that will take in an object
    Each function will return me a different field (should have 10 min in total), one function per field */

    const home1 = {
        type: "house",
        age: 1950,
        isBig: false,
        color: null,
        roofType: undefined,
        rooms: ["bedroom", "bathroom", "living room", "office"],
      }
      
      const home2 = {
        type: "apartment",
        age: 1970,
        isBig: true,
        color: null,
        roofType: undefined,
        rooms: ["bedroom", "bathroom", "living room", "office"],
      }
      
      console.log("home: ", home1)
      
      const findHomeType = (typeOfHome) => {
          console.log("home object", typeOfHome)
        return typeOfHome.type
       
      }
      
      const homeType = findHomeType(home1)
      console.log("this house is a: ",homeType )
      
      /* const addTwoNumbers = (myObject) => {
        const addingNumbers = x+y
        return addingNumbers
      }
      const addition = addTwoNumbers(home)
      console.log(addition) */
      
      /* 
      const houseAge = home.age
      console.log("houseAge",houseAge)
      
      const room = home.rooms
      console.log("room: ", room)
      
      const firstRoom = room[0]
      console.log("firstRoom: ", firstRoom)
      
      home.age = 1962
      console.log("home after changing age", home) */
      
      /* const findHouseType = (typeOfHouse) => {
        return "type"
      }
      const theHomeType = typeOfHouse(home[0])
      console.log(theHomeType) */