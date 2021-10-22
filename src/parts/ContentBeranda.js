import React from "react";
import ImageBeranda from "assets/images/image-beranda.png";
import Button from "elements/Button";
import Fade from "react-reveal/Fade"
import { Link } from "react-router-dom";


export default function ContentBeranda (props) {
    return (
        <Fade bottom>
            <div className="container">
                <div className="flex-container">
                    <div className="flex-left flexo-2"> 
                        <div className="font-weight-bold line-height-1 mb-3 text-orange beranda">
                            Hemat Waktu Anda,
                            <br/>
                            Booking Antrian Sekarang
                        </div>
                        <p
                            className="mb-4 font-weight-light text-gray-500"

                        >
                            Dapatkan kemudahan memperoleh pelayanan dengan melakukan
                            booking nomor antrian melalui aplikasi minimal H-1

                        </p>



                        <Link to="/booking-antrian">

                            <Button className="btn px-5" hasShadow isPrimary>
                                Booking Antrian
                            </Button>
                        </Link>
                    </div>

                    <div className="flex-right mb-3 flexo-1">
                            <img 
                                src={ImageBeranda}
                                alt="image"
                                className="img-fluid img-beranda"
                            
                            />
                    </div>

                </div>
            </div>
            
        </Fade>
    );
}
