import { Link } from "react-router-dom";
import arrow from "../assets/icon-chevron.svg";

export default function PlanetIndex() {
    return (
        <div className={"app-menu-planet-wrapper"}>
            {/* Mercury */}
            <Link to={"/mercury"} className={"app-menu-planet-box"}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot mercury-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>MERCURY</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>

            {/* VENUS */}
            <Link to={"/venus"} className={"app-menu-planet-box"}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot venus-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>VENUS</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>

            {/* EARTH */}
            <Link to={"/earth"} className={"app-menu-planet-box"}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot earth-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>EARTH</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>

            {/* MARS */}
            <Link to={"/mars"} className={"app-menu-planet-box"}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot mars-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>MARS</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>

            {/* JUPITAR */}
            <Link to={"/jupiter"} className={"app-menu-planet-box"}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot jupiter-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>JUPITER</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>

            {/* SATURN */}
            <Link to={"/saturn"} className={"app-menu-planet-box"}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot saturn-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>SATURN</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>

            {/* URANUS */}
            <Link to={"/uranus"} className={"app-menu-planet-box"}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot uranus-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>URANUS</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>

            {/* Neptune */}
            <Link to={"/neptune"} className={"app-menu-planet-box"} style={{"border":"none"}}>
                <div className={"app-menu-planet-dot"}>
                    <div className={"app-menu-dot neptune-dot"}></div>
                </div>

                <div className={"app-menu-planet-text"}>
                    <p>NEPTUNE</p>
                </div>

                <div className={"app-menu-planet-arrow"}>
                    <img src={arrow} alt={"chevron"} />
                </div>
            </Link>
        </div>
    )
}