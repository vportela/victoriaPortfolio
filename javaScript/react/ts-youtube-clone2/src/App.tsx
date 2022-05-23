import './App.css';
import React, { useEffect, useState } from 'react';
import CustomizeThumbnail from "./images/customize-thumbnail.png"
import ReactPlayer from "react-player";
import { url } from 'inspector';


type MyVideo = {

  id: number,
  url: string | undefined,
  title:string,
  description:string,
  user:string,
  likes: number,
  dislikes: number
}


const initialVideos: MyVideo[] = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=sellkoKeucE&t=1s",
    title: "What's On My iPhone | How to Customize Your iOS HomeScreen with Pastel App Icons and Widgets (iOS15)",
    description: "A minimal, cozy and pastel aesthetic iOS setup for a more focused and calming digital experience.",
    user: "maisyleigh",
    likes: 9876,
    dislikes: 0,
  },
  // {
  //   url:"https://www.youtube.com/watch?v=sellkoKeucE&t=1s",
  //   id: 2,
  //   title: "Tuesday vibes ~ lofi hip hop radio - music to put you in a better mood",
  //   description: "Tuesday vibes ~ lofi hip hop radio - music to put you in a better mood-https://youtu.be/sellkoKeucE",
  //   user: "TONY'S RELAXATION (LoFi & CHILL)",
  //   likes: 500,
  //   dislikes: 0,
  // },
  //  {
  //   url:"https://www.youtube.com/watch?v=zJN3Kg0d4vM&t=1s",
  //   id: 3,
  //   title: "Pastel Color Wax Sealing🍡Araland",
  //   description: "Hi guys!🤗 It's been a while since I did a wax sealing video.Thank you for waiting💞",
  //   user: "ARA LAND",
  //   likes: 374578,
  //   dislikes: 0,
  // },
]

type FormValues = { 
  videoTitle: {value: string},
  videoDescription: {value: string},
  userName: {value: string}
} & EventTarget

type CommentValues = {
  commentSection: {value: string}
} & EventTarget

type MyComment = {
  id: number,
  user: string,
  text: string
} 

const initialComments: MyComment[] = [
  {
    id: 1,
    user: "TunaParty",
    text: "nice",
  },
  {
    id: 2,
    user: "TunaParty",
    text: "niceeee",
  },
] 

//------ baby steps adding comments ------
// each video has a comment section starting with 0 comments
// add comment when button is clicked


function App() {
  
  const [videos, setVideos] = useState<MyVideo[]>(initialVideos)
  const [videoFilePath, setVideoFilePath] = useState<string | undefined>(undefined)
  const [comments, setNewComments] = useState<MyComment[]>(initialComments)
 
  
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
    const firstInArray = videos[0]
    
    console.log("lastInArray", firstInArray)
    
    setVideos(
      [ 
        {
          id: firstInArray.id + 1,
          url: videoFilePath,
          title: videoTitle,
          description: videoDescription,
          user: userName,
          likes: 0,
          dislikes: 0
        },
        ...videos, 
      ]
    )
    videoTitle=""
    videoDescription=""
    userName=""
  }

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const customTarget = e.target as FormValues; //casting 
    const files = e.target.files
    // const firstFile = files ? files[0] : null
    if (files) {
      const firstFile = files[0]
      // console.log("firstFile", firstFile)
      const url = URL.createObjectURL(firstFile)
      // console.log("url",url)
      setVideoFilePath(url)
    }
  }



  const handleDelete = (video: MyVideo) => {
    setVideos(videos.filter((video2) => video2.id !== video.id))
  }

  const handleLike = (clickedVideo: MyVideo) => {
    console.log("clickedVideo", clickedVideo)

    const newLikesMap = videos.map(video => {
       if(video.id === clickedVideo.id) {
        return {
          ...video, 
          likes: clickedVideo.likes + 1 
        }
         
       }
       return video
       
      });
    console.log("newLikesMap", newLikesMap)

    setVideos(newLikesMap)   
  }

  const handleDislike = (clickedVideo: MyVideo) => {
    console.log("clickedVideo", clickedVideo)

    const newLikesMap = videos.map(video => {
       if(video.id === clickedVideo.id) {
        return {
          ...video, 
          dislikes: clickedVideo.dislikes + 1 
        }
         
       }
       return video
       
      });
    console.log("newLikesMap", newLikesMap)

    setVideos(newLikesMap)   
  }

  const handleAddComment = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("e.target", e.target)
    console.log("e", e)
    const customTarget = e.target as CommentValues; //casting 
    console.log("customTarget", customTarget)
    let commentSectionVar = customTarget.commentSection.value
    console.log("comment value", commentSectionVar)
    const firstInArray = comments[0]

    setNewComments(
      [
        {
          id: firstInArray.id + 1,
          user: "TunaParty",
          text: commentSectionVar
        },
       
          ...comments
       
      
      ]
    )

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
          onChange={(e)=> handleVideoUpload(e)}
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
             <h5>Likes {video.likes} </h5>
             <h5>Dislikes {video.dislikes}</h5>
             <button onClick={() => handleLike(video)} >Like!</button>
             <button onClick={() => handleDislike(video)}>Dislike!</button>
             <hr></hr>
             <button onClick={(e) => handleDelete(video)} >Delete Video</button>
             <hr></hr>
             
             
             <div>
              <h3>Comments</h3>
              <div>
                <div>
                  <h4 style={{color: "grey"}}>{comments ? "" : "No Comments"}</h4>
                  {comments.map((comment) =>
                  <div key={comment.id}>
                    <h4>{comment.user}</h4>
                    <p>{comment.text}</p>
                  </div>
                  )}
                </div>
                <form onSubmit={(e) => handleAddComment(e)}>
                  <input type="text" name='commentSection'></input>
                  <button>Add comment</button>
                </form>
               
             </div>
           </div>
             
             
             
           </div>
         </div>
        )}
       
        
      </div>
    </div>
  );
}

export default App;
