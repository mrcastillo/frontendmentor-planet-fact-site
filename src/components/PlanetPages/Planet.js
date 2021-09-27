import React, { useState, useEffect } from "react";
import source from "../../assets/icon-source.svg";
import { Link, useRouteMatch } from "react-router-dom";
import _ from "lodash";

export default function Planet(props) {
    const planet = props.planet;
    const planetSelector = document.getElementsByClassName("planet-page-info-select");
    let { path, url } = useRouteMatch();

    const switchInfo = (event) => {
        const planetSelector = document.getElementsByClassName("planet-page-info-select");
        const clickedSelector = event.currentTarget;

        //Change all selectors to have no id
        _.forEach(planetSelector, (selector) => {
            selector.id = "";
        })
        //Change the selected selector to have selected ID to have a colored border under it
        clickedSelector.id = "selected"
    };

    const returnImage = () => {
        if(url === `${planet.url}/surface`) {
            return (
                <img src={planet.planetImage} alt={"planet image"} />
            )
        } else
            return (
                <img src={planet.planetImage} alt={"planet image"} />
     
            )
    }
    console.log(planet)
    return(

        <React.Fragment>
            <div className={"planet-page-planet-image"}>
                <img src={planet.planetImage} alt={"planet image"} />
            </div>

            <div className={"planet-page-planet-image-desktop"}>
                <img src={planet.planetImage} alt={"planet image"} />
            </div>

            <div className={"planet-page-text-info-mobile"}>
                <div className={"planet-page-planet-name"}>
                    <h1>{planet.planetName}</h1>
                </div>
                <div className={"planet-page-planet-bio"}>
                    <p>{planet.planetContent.content}</p>
                </div>
                <a href={planet.planetContent.source} className={"planet-page-planet-wiki"}>
                    <p>Source : <span> Wikipedia</span></p>
                    <div className={"planet-wiki-icon"}>
                        <img src={source} alt={"wiki"} />
                    </div>
                </a>
            </div>

            <div className={"planet-page-text-info-tablet"}>

                <div className={"planet-page-text-info"}>
                    <div className={"planet-page-planet-name"}>
                        <h1>{planet.planetName}</h1>
                    </div>
                    <div className={"planet-page-planet-bio"}>
                        <p>{planet.planetContent.content}</p>
                    </div>
                    <a href={planet.planetContent.source} className={"planet-page-planet-wiki"}>
                        <p>Source : <span> Wikipedia</span></p>
                        <div className={"planet-wiki-icon"}>
                            <img src={source} alt={"wiki"} />
                        </div>
                    </a>
                </div>
                

                <div className={"planet-page-info-select-box-tablet"}>
                    <Link to={planet.url} onClick={switchInfo} className={"selected planet-page-info-select"}>
                        <span>01</span>
                        <p>OVERVIEW</p>
                    </Link>

                    <Link to={`${planet.url}/structure`} onClick={switchInfo} className={"planet-page-info-select"}>
                        <span>02</span>
                        <p>INTERNAL STRUCTURE</p>
                    </Link>

                    <Link to={`${planet.url}/surface`} onClick={switchInfo} className={"planet-page-info-select"}>
                        <span>03</span>
                        <p>SURFACE GEOLOGY</p>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}