import React, { useState, useCallback, useEffect } from "react";
import stile from "./travel.module.css";
import { IoFlame } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getBlazesTravels } from "../../../redux/helper/getData";
import { deleteBlazesTravel, createBlazeTravel } from "../../../helper/blazes";

function Travel({
  _id,
  id_user,
  img_travel,
  author,
  name,
  countries,
  places_number,
  price,
}) {
  const { blazesTravels, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isBlazed, setIsBlazed] = useState(false);

  const blazeResolve = useCallback(
    (_id) => {
      const blazeResolved = blazesTravels.data.find((blaze) => {
        return blaze.id_travel === _id;
      });

      if (blazeResolved) setIsBlazed(true);
      if (!blazeResolved) setIsBlazed(false);
    },
    [blazesTravels.data]
  );
  const blazeOperation = async () => {
    // const control = blazesTravels.data.find(
    //   (blaze) => blaze.id_post === id_travel
    // );

    // console.log(control);

    if (!isBlazed) {
      blazeResolve(_id);
      const blaze = await createBlazeTravel(auth.userInfo._id, _id);
      dispatch(getBlazesTravels(blaze.id_user));
    } else {
      blazeResolve(_id);
       await deleteBlazesTravel(auth.userInfo._id, _id);
      dispatch(getBlazesTravels(auth.userInfo._id));
    }
  };

  useEffect(() => {
    blazeResolve(_id);
  }, [blazeResolve, _id]);

  return (
    <div className={stile.travel}>
      <section className={stile.description}>
        <h1 className={stile.title}>{name}</h1>
        <b className={stile.author}>{author}</b>

        <img
          src={
            (img_travel !== null) === true
              ? `https://blazerstravels.onrender.com${img_travel}`
              : " "
          }
          className={stile.image}
          alt="viaggio foto copertina"
        />

        <section className={stile.countries}>
          {countries.length > 0
            ? countries.map((country, index) => (
                <span key={index}>{country}</span>
              ))
            : "nessuna info"}
        </section>

        <section className={stile.price}>
          prezzo:<span>{price}€</span>
        </section>

        <span className={stile.footTravel}>
          <IoFlame
            className={
              isBlazed === true ? stile.blazeIconBlazed : stile.blazeIcon
            }
            onClick={blazeOperation}
          />
        </span>
      </section>
    </div>
  );
}

export default Travel;
