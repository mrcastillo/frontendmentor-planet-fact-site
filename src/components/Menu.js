import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import hamburger from "../../src/assets/icon-hamburger.svg";
import PlanetData from "../assets/PlanetData";
import _ from "lodash";

export default function Menu(props) {
    const url = useLocation();
    
    const planetMenuElements = document.getElementsByClassName("app-menu-planet-select");
    var currentPlanet = null;

    _.forEach(PlanetData, (planet) => {
        if(planet.name.toLowerCase() === url.pathname.substring(1)){
            currentPlanet = planet;
        }
    });

    if(currentPlanet === null) {
        currentPlanet = PlanetData[2];
    }
    useEffect(() => {
        _.forEach(planetMenuElements, (elements) => {
            elements.className = "app-menu-planet-select";
        });

        switch(currentPlanet.name.toLowerCase()) {
            case "mercury" :
                planetMenuElements[0].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
            case "venus" :
                planetMenuElements[1].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
            
            case "mars" :
                planetMenuElements[3].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
            case "jupiter" :
                planetMenuElements[4].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
            case "saturn" :
                planetMenuElements[5].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
            case "uranus" :
                planetMenuElements[6].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
            case "neptune" :
                planetMenuElements[7].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
            default :
                planetMenuElements[2].classList.add(`${currentPlanet.name.toLowerCase()}-border-top`);
                return;
        }
    },[url])

    return (
        <div className={"app-menu-top"}>
            {/* Mobile Code */}
                <div className={"app-menu-text-mobile"}>
                    <h3>THE PLANETS</h3>
                </div>
                <div className={"app-menu-icon-mobile"}>
                    <Link to={"/"} className={"app-menu-icon-box"}>
                        <img src={hamburger} alt={"hamburger icon"} />
                    </Link>
                </div>
            {/* Mobile Code */}

            {/* Tablet Code */}
                <div className={"app-menu-text-tablet"}>
                    <h3>THE PLANETS</h3>
                </div>
                <div className={"app-menu-planet-selector-tablet"}>
                    <Link to={"/mercury"} id={"mercury"} className={`app-menu-planet-select`}>
                        MERCURY
                    </Link>
                    <Link to={"/venus"} id={"venus"} className={`app-menu-planet-select`}>
                        VENUS
                    </Link>
                    <Link to={"/earth"} id={"earth"} className={`app-menu-planet-select`}>
                        EARTH
                    </Link>
                    <Link to={"/mars"} id={"mars"} className={`app-menu-planet-select`}>
                        MARS
                    </Link>
                    <Link to={"/jupiter"} id={"jupiter"} className={`app-menu-planet-select`}>
                        JUPITER
                    </Link>
                    <Link to={"/saturn"} id={"saturn"} className={`app-menu-planet-select`}>
                        SATURN
                    </Link>
                    <Link to={"/uranus"} id={"uranus"} className={`app-menu-planet-select`}>
                        URANUS
                    </Link>
                    <Link to={"/neptune"}id={"neptune"} className={`app-menu-planet-select`}>
                        NEPTUNE
                    </Link>
                </div>
            {/* Tablet Code */}
        </div>
    )
}