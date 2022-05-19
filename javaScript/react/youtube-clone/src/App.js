import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


//create page that looks like youtube explore page
//images with text on the right side
//an add button so you can upload an image and add title/description etc.
//when you click upload video open a drop down menu that lets you upload a thumbnail, a title,
//description and user name etc. 
//the new video should pop up at the top of the list. 

//1. create input for uploading new title ------------done
//2. create input for uploading new description -----------done
//3. create input for uploading new user name ------------done
//4. make it add this new entry to the top of the list --------------done
//5. clear old text when new entry is submitted ----------done
//5. make it upload a thumbnail ----- done

//------- stretch goals ------------
//1. show/hide the add video form with button click
//2. when you click on a thumbnail it will take you to a new page
//3. add top nav
//4. add side nav
//5. when all fields are good to go, upload button turns green, otherwise red.

const initialVideos = [
  {
    id: 1,
    thumbnail: "customize-thumbnail.png",
    title: "What's On My iPhone | How to Customize Your iOS HomeScreen with Pastel App Icons and Widgets (iOS15)",
    description: "A minimal, cozy and pastel aesthetic iOS setup for a more focused and calming digital experience.",
    user: "maisyleigh",
  },
  {
    id: 2,
    thumbnail: "cat-thumbnail.png",
    title: "Tuesday vibes ~ lofi hip hop radio - music to put you in a better mood",
    description: "Tuesday vibes ~ lofi hip hop radio - music to put you in a better mood-https://youtu.be/sellkoKeucE",
    user: "TONY'S RELAXATION (LoFi & CHILL)",
  },
   {
    id: 3,
    thumbnail: "pastel-wax-thumbnail.png",
    title: "Pastel Color Wax Sealing🍡Araland",
    description: "Hi guys!🤗 It's been a while since I did a wax sealing video.Thank you for waiting💞",
    user: "ARA LAND",
  },
  {
    id: 4,
    thumbnail: "ghibli-thumbnail.png",
    title: "Best studio ghibli piano relaxing music 🎶 Spirited Away, Castle in the Sky, Howl's Moving Castle,...",
    description: "Best studio ghibli piano relaxing music 🎶 Spirited Away, Castle in the Sky, Howl's Moving Castle,...",
    user: "Robert E Fuller",
  },
  {
    id: 5,
    thumbnail: "owl-thumbnail.png",
    title: "Little Owl Reveals First Egg 🦉🥚 on Camera",
    description: "I have little owls nesting in one of my boxes. Here is the first egg. Keep watching to see dad deliver a meal to his hungry mate.",
    user: "Robert E Fuller",
  },
]

function App() {

  const[videos, setVideos] = useState(initialVideos)
  const [imageURL, setImageURL] = useState("")

  const handleImageChange = (e) => {

    setImageURL(URL.createObjectURL(e.target.files[0]))
    console.log("e.target.file[0]",e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("ive been clicked")
    const lastInArray = initialVideos[initialVideos.length - 1]
    // console.log(e.target.videoTitle.value)
    // console.log(e)
    setVideos(
      [ 
        {
          id: lastInArray.id + 1,
          thumbnail: imageURL,
          title: e.target.videoTitle.value,
          description: e.target.videoDescription.value,
          user: e.target.userName.value,
          
        },
        ...initialVideos, 
      ]
    )

    e.target.videoTitle.value=""
    e.target.videoDescription.value=""
    e.target.userName.value=""

    
  }

  // on load, upload form is hidden
  //when nav + button is clicked, show upload form
  const [hideForm, setHideForm] = useState(true)
  const showHide = (hideForm) => {
    // console.log("ive been clicked")
    if (hideForm === true) {
      // console.log("form is true")
    }
  }


  return (
    <div className="App">
      <div >
        <nav 
          style={{
            display:"flex", 
            flexDirection:"row", 
            justifyContent: "space-between", 
            alignItems: "center",
            padding: " 5px 2%"  
          }}
        >
        <div><h1>YouToob</h1></div>
        <div>
        <input/>
        <button>Search</button>
        </div>
        <div>
          <button onClick={showHide(hideForm)}>+</button>
        </div>
        

        </nav>
        
        <form style={{display: "flex", padding: "5px 2%"}} onSubmit={(e) => handleSubmit(e)}>
         
          <input name='videoTitle' placeholder='Video Title'></input>
          <input name='videoDescription' placeholder='Video Description'></input>
          <input name='userName' placeholder='User Name'></input>
          <input type='file' id='input' accept='image/png, image/jpg, image/jpeg' 
            name='thumbnail' placeholder='Upload video' onChange={handleImageChange}/>

          <button>Upload new video</button>
        </form>
        {/* <img src={imageURL}/> */}
        {videos.map((video) => 
           <div 
            key={video.id} 
            className='video-and-description' 
            style={{display: "flex", padding:"5px 2%"}}
           >
           <img src={video.thumbnail}/>
           
           <div style={{padding: "5px 2%"}}>
             <h4>{video.title}</h4>
             <p> {video.description}</p>
             <h5>{video.user}</h5>
           </div>
         </div>
        )}
       
        
      </div>
    </div>
  );
}

export default App;
