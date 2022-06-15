import React, { useRef, useState } from "react";
import stile from "./createTravel.module.css";
import { allCountries } from "../../../json/allCountries";
import { GrPowerReset } from "react-icons/gr";
import { CgImage } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { createTravel as create } from "../../../helper/create";
import { addNewTravel } from "../../../redux/slices/travelsSlice";
import { openModal } from "../../../redux/slices/modalSlice";

function CreateTravel() {
  const [countriesList, setCountriesList] = useState(allCountries);
  const [showCountriesList, setShowCountriesList] = useState(false);
  const [countriesSelected, setCountriesSelected] = useState([]);

  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();
  const formRef = useRef(null);

  const insertCountriesSelected = (e) => {
    const countryExists = countriesSelected.find((country) => {
      return country === e.target.value;
    });

    if (!countryExists)
     countriesSelected.push(e.target.value);

    console.log(countriesSelected);
  };

  const newTravel = async(e) => {
    e.preventDefault();
   const newTravel= await create(
      formRef.current,
      {
        id_user: auth.userInfo._id,
        author: auth.userInfo.fullname,
      },
      countriesSelected
    );

    formRef.current.reset();
     setCountriesSelected([]);

     if(newTravel.travel){
     dispatch(addNewTravel(newTravel.travel));
     }
     
     dispatch(openModal(newTravel.message));
  };

  return (
    <div className={stile.container}>
      <form ref={formRef} method="post" className={stile.form}>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" placeholder="nome" />

        <b
          className="button"
          onClick={() => setShowCountriesList(!showCountriesList)}
        >
          {" "}
          {showCountriesList === true ? "Conferma" : "seleziona paesi"}{" "}
        </b>

        <span className={stile.resetIcon}>
          {" "}
          <GrPowerReset
            style={{ color: "blue" }}
            onClick={() => setCountriesSelected([])}
          />{" "}
        </span>

        <span className={stile.selectSpan}>
          <select
            className={stile.select}
            multiple={true}
            onChange={(e) => insertCountriesSelected(e)}
          >
            {showCountriesList === true
              ? countriesList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))
              : countriesSelected.map((country, index) => (
                  <option key={index} disabled={true}>
                    {country}{" "}
                  </option>
                ))}
          </select>
        </span>

        <div className={stile.btnFile}>
          <span className={stile.iconImage}>
            <CgImage />
          </span>
          <input name="file" type="file" />
        </div>

        <label htmlFor="places_number">Posti disponibili</label>
        <input
          className={stile.number}
          type="number"
          name="places_number"
          placeholder="Numero di posti"
          min={0}
        />

        <label htmlFor="price">Prezzo</label>
        <input
          className={stile.number}
          type="number"
          name="price"
          placeholder="Inserisci il prezzo"
          min={0}
        />

        <input
          type="submit"
          value="Pubblica viaggio"
          onClick={(e) => newTravel(e)}
        />
      </form>
    </div>
  );
}

export default CreateTravel;
