import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import CreateTravel from "../../components/CreateTravel/CreateTravel";
import SectionPosts from "../../components/SectionPost/SectionPosts";
import SectionTravels from "../../components/SectionTravels/SectionTravels";
import {v4 as uuidv4} from "uuid"

import { getPostById } from "../../../helper/get";

import {
  getBlazesPosts,
  getBlazesTravels,
} from "../../../redux/helper/getData";

function Home() {
  const [showCreateTravel, setShowCreateTravel] = useState(false);
  const [showBlazesTravels, setShowBlazesTravels] = useState(false);
  const [listBlazes, setListBlazes] = useState([]);
  const [listBlazesTravels, setListBlazesTravels] = useState([]);

  const { auth, blazesPosts, blazesTravels, posts, travels } = useSelector((state) => state);

  // const blazed = useCallback(async () => {
  //   const posts = [];
  //   if (blazesPosts.data.length > 0) {
  //     blazesPosts.data.forEach(async (blaze) => {
  //       const post = await getPostById(blaze.id_post);
  //       posts.push(post);
  //     });
  //   }

  //   console.log("quesoooo", posts);

  //   setListBlazes(posts);
  // }, [blazesPosts.data]);

  const blazedTravel= useCallback(()=>{

    let travelsList=[];

    blazesTravels.data.forEach((blaze)=>{
     let travel = travels.data.find((travel)=>{
        return travel._id===blaze.id_travel
      });
    if(!travel){
      travel={_id:blaze.id_travel, img_travel:"/cover/lake.jpg", 
      author:"unknown", name:"Il viaggio non esiste più", place_number:0, price:0, id_user:blaze.id_user, countries:["no countries"]}
    }

         travelsList.push(travel)

    })

    setListBlazesTravels(travelsList);

  },[blazesTravels.data, travels.data])
  
  
 

  const blazed=useCallback(()=>{

    let postsList=[];

    blazesPosts.data.forEach((blaze)=>{
     let post = posts.data.find((post)=>{
        return post._id===blaze.id_post
      });
      
      if(!post){
        post= {_id: blaze.id_post, author:"unknow", content:"Il post non esiste. Sarà eliminato", id_user:blaze.id_user};
       }
   
      postsList.push(post)

    })

    setListBlazes(postsList);

  },[blazesPosts.data, posts.data])
  
  
  
   useEffect(() => {
    blazedTravel();
     blazed();
   }, [blazed, blazedTravel]);


  return (
    <div>
      {auth.userInfo.isAgency === true ? (
        <section style={{ padding: "125px 90px" }}>
          <b
            className="button"
            onClick={() => setShowCreateTravel(!showCreateTravel)}
          >
            {showCreateTravel === true ? "Chiudi" : "Crea viaggio"}
          </b>
        </section>
      ) : null}

      {showCreateTravel === true && auth.userInfo.isAgency === true ? (
        <CreateTravel />
      ) : (
        " "
      )}

      <CreatePost />

      <h2 className="textPage">
        I {showBlazesTravels === true ? "Viaggi" : "Posts"} che hai salvato
      </h2>

      <span>
        <b
          className="button"
          style={{ margin: "5px 20px" }}
          onClick={() => setShowBlazesTravels(!showBlazesTravels)}
        >
          {showBlazesTravels && true ? "Blazes di Post" : "Blazes di Viaggi"}
        </b>
      </span>

      {showBlazesTravels === true ? (
        <SectionTravels travels={{data:listBlazesTravels}} />
      ) : (
        <SectionPosts
          posts={{data:listBlazes}}
          message={"Nessun Post salvato tra i tuoi Blazes"}
        />
      )}
    </div>
  );
}

export default Home;
