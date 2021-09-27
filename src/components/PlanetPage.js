import React, { useState, useEffect } from "react"
import _ from "lodash";
import source from "../assets/icon-source.svg";

import PlanetData from "../assets/PlanetData";

function PlanetPage(props) {
    //Get the current URL, this lets us know which planet is selected.
    const url = props.history.location.pathname;

    
    //Get the current planet name. We can get this from the params in props.
    const currentPlanetName = props.match.params.planet;
    //Init variable that will store the current planet information
    var currentPlanet = {};
    
    var planetList = [];
    //Function that will select the planet based on the currentPlanetName and return the JSON data for us in currentPlanet
    _.forEach(PlanetData, (planet) => {
        planetList.push(planet.name.toLowerCase());
        if(planet.name.toLowerCase() === currentPlanetName){
            currentPlanet = planet;
        }
    });
    _.forEach(planetList, (planet) => { 
        console.log(planet)
    });
    
    
    
    //State variable for our Planet <3
    const [ planet, setPlanet ] = useState(currentPlanet);
    const [ planetSection, setPlanetSection ] = useState("overview");
    const selectorArray = document.getElementsByClassName("planet-page-info-select");

    const resetContent = () => {
        _.forEach(selectorArray, (element) => {
            element.className = "planet-page-info-select";
        });

        selectorArray[0].classList.add(`${currentPlanetName}-select-bg`);
        selectorArray[3].classList.add(`${currentPlanetName}-select-bg`);
        setPlanetSection("overview");
    };

    //Function that switches the information based on planet selector box.
    const switchInfo = (event) => {
        //Remove CSS style from all selector boxes
        _.forEach(selectorArray, (element) => {
            element.className = "planet-page-info-select";
        })

        const target = event.currentTarget;
        const targetId = event.currentTarget.id;

        switch(targetId) {
            case "overview":
                target.classList.add(`${currentPlanetName}-select-bg`);
                setPlanetSection("overview");
                return;
            case "structure":
                target.classList.add(`${currentPlanetName}-select-bg`);
                setPlanetSection("structure");
                return;

            case "surface":
                target.classList.add(`${currentPlanetName}-select-bg`);
                setPlanetSection("geology");
                return;
        }
    };

    //When the URL changes, set the planet!
    useEffect(() => {
        window.scrollTo(0, 0)
        
        setPlanet({
            ...currentPlanet
        });

        resetContent()
    }, [url]);
    
    /*
        Click the button, checks what planet section we are in, 
    */
    return (
        <div className={"planet-page-info-container"}>
            <div className={"planet-page-info-select-box-mobile"}>
                <div onClick={switchInfo} id={"overview"} className={"planet-page-info-select"}>OVERVIEW</div>
                <div onClick={switchInfo} id={"structure"} className={"planet-page-info-select"}>STRUCTURE</div>
                <div onClick={switchInfo} id={"surface"} className={"planet-page-info-select"}>SURFACE</div>
            </div>

            
    
            {/* Start of the planet info stuff, this is below menu*/}
            <div className={"planet-page-planet-image"}>
                <img src={planet.images[planetSection]} alt={"planet image"} />
            </div>

            <div className={"planet-page-planet-image-desktop"}>
                <img src={planet.images[planetSection]} alt={"planet image"} />
            </div>

            <div className={"planet-page-text-info-mobile"}>
                <div className={"planet-page-planet-name"}>
                    <h1>{planet.name}</h1>
                </div>
                <div className={"planet-page-planet-bio"}>
                    <p>{planet[planetSection].content}</p>
                </div>
                <a href={planet[planetSection].source} className={"planet-page-planet-wiki"}>
                    <p>Source : <span> Wikipedia</span></p>
                    <div className={"planet-wiki-icon"}>
                        <img src={source} alt={"wiki"} />
                    </div>
                </a>
            </div>

            <div className={"planet-page-text-info-tablet"}>
                <div className={"planet-page-text-info"}>
                    <div className={"planet-page-planet-name"}>
                        <h1>{planet.name}</h1>
                    </div>
                    <div className={"planet-page-planet-bio"}>
                        <p>{planet[planetSection].content}</p>
                    </div>
                    <a href={planet[planetSection].source} className={"planet-page-planet-wiki"}>
                        <p>Source : <span> Wikipedia</span></p>
                        <div className={"planet-wiki-icon"}>
                            <img src={source} alt={"wiki"} />
                        </div>
                    </a>
                </div>
                

                <div className={"planet-page-info-select-box-tablet"}>
                    <div onClick={switchInfo} id={"overview"} className={"planet-page-info-select"}>
                        <span>01</span>
                        <p>OVERVIEW</p>
                    </div>

                    <div onClick={switchInfo} id={"structure"} className={"planet-page-info-select"}>
                        <span>02</span>
                        <p>INTERNAL STRUCTURE</p>
                    </div>

                    <div onClick={switchInfo} id={"surface"} className={"planet-page-info-select"}>
                        <span>03</span>
                        <p>SURFACE GEOLOGY</p>
                    </div>
                </div>
            </div>
            {/* End of the planet info stuff*/}

            <div className={"planet-page-stat-box"}>
                <div className={"planet-page-stat"}>
                    <div className={"planet-page-stat-name"}>
                        <p>ROTATIONAL TIME</p>
                    </div>
                    <div className={"planet-page-stat-stat"}>
                        <h3>{planet.rotation}</h3>
                    </div>
                </div>

                <div className={"planet-page-stat"}>
                    <div className={"planet-page-stat-name"}>
                        <p>REVOLUTION TIME</p>
                    </div>
                    <div className={"planet-page-stat-stat"}>
                        <h3>{planet.revolution}</h3>
                    </div>
                </div>

                <div className={"planet-page-stat"}>
                    <div className={"planet-page-stat-name"}>
                        <p>RADIUS</p>
                    </div>
                    <div className={"planet-page-stat-stat"}>
                        <h3>{planet.radius}</h3>
                    </div>
                </div>

                <div className={"planet-page-stat"}>
                    <div className={"planet-page-stat-name"}>
                        <p>AVERGE TEMP</p>
                    </div>
                    <div className={"planet-page-stat-stat"}>
                        <h3>{planet.temperature}</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlanetPage