import './App.css';
import React, { useEffect, useState } from 'react';
import CustomizeThumbnail from "./images/customize-thumbnail.png"
import ReactPlayer from "react-player";
import { url } from 'inspector';
// import newVideo from "./video/newVideo.mp4"


type MyVideo = {

  id: number,
  url: string | undefined,
  title:string,
  description:string,
  user:string,
}


const initialVideos: MyVideo[] = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=sellkoKeucE&t=1s",
    title: "What's On My iPhone | How to Customize Your iOS HomeScreen with Pastel App Icons and Widgets (iOS15)",
    description: "A minimal, cozy and pastel aesthetic iOS setup for a more focused and calming digital experience.",
    user: "maisyleigh",
  },
  // {
  //   url:"https://www.youtube.com/watch?v=sellkoKeucE&t=1s",
  //   id: 2,
  //   thumbnail: "./images/cat-thumbnail.png",
  //   title: "Tuesday vibes ~ lofi hip hop radio - music to put you in a better mood",
  //   description: "Tuesday vibes ~ lofi hip hop radio - music to put you in a better mood-https://youtu.be/sellkoKeucE",
  //   user: "TONY'S RELAXATION (LoFi & CHILL)",
  // },
  //  {
  //   url:"https://www.youtube.com/watch?v=zJN3Kg0d4vM&t=1s",
  //   id: 3,
  //   thumbnail: "pastel-wax-thumbnail.png",
  //   title: "Pastel Color Wax Sealing🍡Araland",
  //   description: "Hi guys!🤗 It's been a while since I did a wax sealing video.Thank you for waiting💞",
  //   user: "ARA LAND",
  // },
  // {
  //   id: 4,
  //   thumbnail: "ghibli-thumbnail.png",
  //   title: "Best studio ghibli piano relaxing music 🎶 Spirited Away, Castle in the Sky, Howl's Moving Castle,...",
  //   description: "Best studio ghibli piano relaxing music 🎶 Spirited Away, Castle in the Sky, Howl's Moving Castle,...",
  //   user: "Robert E Fuller",
  // },
  // {
  //   id: 5,
  //   thumbnail: "owl-thumbnail.png",
  //   title: "Little Owl Reveals First Egg 🦉🥚 on Camera",
  //   description: "I have little owls nesting in one of my boxes. Here is the first egg. Keep watching to see dad deliver a meal to his hungry mate.",
  //   user: "Robert E Fuller",
  // },
]

type FormValues = { 
  videoTitle: {value: string},
  videoDescription: {value: string},
  userName: {value: string}
} & EventTarget



function App() {
  
  const [videos, setVideos] = useState<MyVideo[]>(initialVideos)
  // const [imageURL, setImageURL] = useState<string>("")
  const [videoFilePath, setVideoFilePath] = useState<string | undefined>(undefined)
 
  
//the data type must be respected by your setter function as well. 
//you are setting the data type of imageURL, not setImageURL because that is a /function/



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const customTarget = e.target as FormValues; //casting 
    let videoTitle = customTarget.videoTitle.value;
    let videoDescription = customTarget.videoDescription.value;
    let userName = customTarget.userName.value;
    console.log("videoFilePath", videoFilePath)
    console.log("videos", videos)
    const lastInArray = videos[0]
    //it cant be the last in the array because you are spreading underneath the new object, so your "last"
    //id is always going to be 1 so, you get repeating ids
    //you need to find the beginning of the array and basically do that whole shebang but with
    //the first one 

    
    console.log("lastInArray", lastInArray)
    
    setVideos(
      [ 
        {
          id: lastInArray.id + 1,
          url: videoFilePath,
          title: videoTitle,
          description: videoDescription,
          user: userName,  
        },
        ...videos, 
      ]
    )
    videoTitle=""
    videoDescription=""
    userName=""
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const customTarget = e.target as FormValues; //casting 
    const files = e.target.files
    // const firstFile = files ? files[0] : null
    if (files) {
      const firstFile = files[0]
      console.log("firstFile", firstFile)
      const url = URL.createObjectURL(firstFile)
      console.log("url",url)
      setVideoFilePath(url)
    }

    // console.log("firstFile", firstFile)
    //how to convert file to blob or media source
    
    // console.log("e.target.file[0]",e.target.files[0])
  }



  
  return (
    <div className="App">
      <div>
        <nav style={{display:"flex", flexDirection:"row", justifyContent: "space-between", alignItems: "center",
          padding: " 5px 2%"  
        }}>
        <div><h1>YouToob</h1></div>
        <div>
        <input/>
        <button>Search</button>
        </div>
        <div>
         
        </div>
        </nav>
        
        <form 
          style={{display: "flex", padding: "5px 2%"}} 
          onSubmit={(e) => handleSubmit(e)}
        >
         
        <input name='videoTitle' placeholder='Video Title'></input>
        <input name='videoDescription' placeholder='Video Description'></input>
        <input name='userName' placeholder='User Name'></input>
        <input 
          type='file' 
          accept='video/mp4' 
          name='newVideo'
          onChange={(e)=> handleImageChange(e)}
        />
        <button>Upload new video</button>
       </form>
       
      
       

       {videos.map((video) => 
          <div 
            key={video.id} 
            className='video-and-description' 
            style={{display: "flex", padding:"5px 2%"}}
          >
           <ReactPlayer 
            url={video.url}
            playing={false}
            controls
           />
           {/* <img src={video.thumbnail}/> */}
           
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
