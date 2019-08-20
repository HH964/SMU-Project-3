import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import '../pages/About';
const ParkCard = () => {
    return (
        <div className="row">

            <div className="col m4">
                <div className="card">
                    <div className="card-panel hoverable">
                        <div className="card-image">
                            <img src="https://www.gannett-cdn.com/-mm-/1637044d22191b9453b9c17456ea74428fd3761d/c=299-0-1067-768/local/-/media/2018/03/06/USATODAY/USATODAY/636559460866264567-1-Yellowstone-Kris-Wiktor-shutterstock-96972083.jpg?width=200&height=200&fit=crop" />
                            <span className="card-title text-darken-2">Yellowstone</span>
                        </div>
                        <div className="card-content">
                            <p>Yellowstone National Park, in Wyoming is a wilderness recreation
                              area atop a volcanic hot spot. Yellowstone features dramatic canyons, alpine
                              rivers, lush forests, hot springs and gushing geysers, including its most
                              famous, Old Faithful.</p>
                        </div>
                        <div className="card-action">
                            <a href="https://www.nps.gov/yell/index.htm">More Info</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col m4">
                <div className="card">
                    <div className="card-panel hoverable">
                    <div className="card-image">
                        <img src="https://www.3peakshotel.com/images/tahoe-scene.jpg" />
                        <span className="card-title text-darken-2">Lake Tahoe</span>
                    </div>
                    <div className="card-content">
                        <p>Lake Tahoe is a large freshwater lake in the Sierra Nevada Mountains,
                            straddling the border of California and Nevada. Lake Tahoe Nevada State Park 
                            includes Sand Harbor Beach and Spooner Lake.</p>
                    </div>
                    <div className="card-action">
                        <a href="https://www.fs.usda.gov/tahoe/">More Info</a>
                    </div>
                </div>
            </div>
        </div>


            <div className="col m4">
                <div className="card">
                    <div className="card-panel hoverable">
                    <div className="card-image">
                        <img src="https://d3lut3gzcpx87s.cloudfront.net/image_encoded/aHR0cHM6Ly9zaWxrc3RhcnQuczMuYW1hem9uYXdzLmNvbS81YTk3MTRmMGZkYmE0YjU0MDgzZTEwN2E=/250x250" />
                        <span className="card-title text-darken-2">Yosemite</span>
                    </div>
                    <div className="card-content">
                        <p>Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed
                          for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista
                          of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.
                          </p>
                    </div>
                    <div className="card-action">
                        <a href="https://www.nps.gov/yose/index.htm">More Info</a>
                    </div>
                </div>
            </div>
            </div>

        </div>

    );

};

export default ParkCard;