import React, { useState } from "react";
import ProfileDescription from "../../components/ProfileDescription/ProfileDescription";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SectionPosts from "../../components/SectionPost/SectionPosts";
import SectionTravels from "../../components/SectionTravels/SectionTravels";

function User() {
  const [showTravels, setShowTravels] = useState(false);
  const { id } = useParams();

  const { posts, users, travels } = useSelector((state) => state);

  const findUser = (id) => {
    return users.data.find((user) => user._id === id);
  };
  //trovo l'utente specifico dall'elenco degli utenti

  const filterPosts = () => {
    const postsfilter = posts.data.filter((post) => post.id_user === id);
    return { data: postsfilter };
  };
  //filtro i posts in base all'id dell'utente

  const filterTravels = () => {
    const data = travels.data.filter((travel) => travel.id_user === id);
    return { data: data };
  }; //filtro i post in base all'id dell'utente

  return (
    <div>
      <ProfileDescription {...findUser(id)} />
      {findUser(id).isAgency === true ? (
        <b className="button" onClick={() => setShowTravels(!showTravels)}>
          Viaggi offerti
        </b>
      ) : (
        " "
      )}

      {showTravels === true ? (
        <SectionTravels travels={filterTravels()} />
      ) : (
        " "
      )}

      <h2 className="textPage">
        tutti i posts di <ins>{findUser(id).username}</ins>
      </h2>

      <SectionPosts posts={filterPosts()} />
    </div>
  );
}

export default User;
