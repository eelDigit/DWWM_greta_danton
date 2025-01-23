import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";


const Countries = (props) => {

    //  le useState permet de modifier l'état d'une donée
    const [data, setData] = useState([]);//on récupere les donnée dans un tableau vide 
    const [sortData, setSortData] = useState([]);// permet le trie des donées
    const [rangeValue, setrangeValue] = useState(36);

    const [selectedRadio, setSelectedRadio] = useState("");
    const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];


    //  le useEffect permet de génerer des effets de bord 
    //  ici le fait d'ajouter une dépendence permet de stopper la requette qui se fait en boucle 
    useEffect(() => {
        // permet de faire une requette en get vers l'API   


        console.log(axios.get(
            // "http://restcountries.com/v2/all?fields=name,population,region,capital,flag"
            "https://restfulcountries.com /api/v1/countries/Nigeria"

        ));

        // .then((res) => setData(res.data));

        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);

            //permet de trier en fonction des populations 
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            })
            sortedArray.length = rangeValue;
            setSortData(sortedArray)
        }
        sortedCountry();
    }, [data, rangeValue])



    return (
        <div className="countries">
            <div className="sort_container"  >
                <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setrangeValue(e.target.value)} />

                <ul>
                    {radio.map((radio) => {
                        return (
                            <li key={radio} >
                                <input type="radio" id={radio} value={radio} checked={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
                                <label htmlFor={radio} > {radio} </label>
                            </li>
                        )
                    })}

                </ul>
            </div>
            <div className="countries_liste" >
                {sortData
                    .filter((country) => country.region.includes(selectedRadio))
                    .map((country) => <Card country={country} key={country.name} />)}
            </div>
        </div>
    );
};

export default Countries;