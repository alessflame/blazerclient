import { useCallback, useState, useEffect } from "react";
// import {fetchComments} from "../get";
import { useSelector } from "react-redux";

function useComments(id_post) {
  const [commentsList, setCommentsList] = useState([]);
  const { users, comments } = useSelector((state) => state);

  const resolveComments = useCallback(async () => {
    //filtro i commenti relativi ad un singolo post recuperandoli dallo stato globale

    const commentsResolved = [];

    const postComments = comments.data.filter(
      (comment) => comment.id_post === id_post
    );

    postComments.forEach((comment) => {
      const findUser = users.data.find(
        (user) => comment.id_user === user._id
      );

      commentsResolved.push({
        id_comment: comment.id_comment,
        image: `https://blazertravels.herokuapp.com${findUser.iconAvatar}`,
        username: findUser.username,
        content: comment.content,
      });
    });

    // console.log(commentsResolved);

    setCommentsList(commentsResolved);
  }, [comments.data, id_post, users.data]);

  useEffect(() => {
    resolveComments();
  }, [resolveComments]);

  return [commentsList];
  //ritorno la lista dei commenti
}

export default useComments;
