//Content untuk Halaman Detail Antrian Bank
import React, { Component } from "react";
import ImageAntrianBank from "assets/images/image-detail-queue.png";
import Button from "elements/Button";
import Fade from "react-reveal/Fade"
import { Link , useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";


export default class ContentAntrianBank extends Component {
    state = { 
        currentTime: ``,
        kcp : {},
        
    }

    componentDidMount() {
        this.getCurrentTime();

        setInterval(()=> this.getCurrentTime(), 1000)
        const config = {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          };
          this.getCurrentTime();
          
          var id = window.location.href.substring(window.location.href.lastIndexOf('/') +1)

         

          //fetching data KCP
          axios.get(`bank/${id}`, config).then((res) => {
            console.log(res);
            this.setState({ kcp: res.data });
            
          });
      
    }

    componentWillUnmount() {
        clearInterval(this.getCurrentTime);

    }

    getCurrentTime = () => {
        this.setState({
            currentTime: moment().format('LL'),

        });
    }
    render() {
        const {currentTime} = this.state;
        return (
            <Fade bottom>
                <div className="container">
                    <div className="flex-container">
                        <div className="flex-left">
                            <div className="font-weight-bold beranda">
                                <h3 className="font-weight-bold line-height-1 mb-3">
                                    Info Antrian Hari Ini ({currentTime})
                                </h3>
                            </div>
                            <p
                                className="mb-4 font-weight-light text-blue-500 w-75"
                                style={{lineHeight: "170%"}}
                            >
                                Bank : {this.state.kcp?.data?.name}


                            </p>
                            <p
                                className="mb-4 font-weight-light text-blue-500 w-75"
                                style={{lineHeight: "170%"}}
                            >
                                Alamat : {this.state.kcp?.data?.address}


                            </p>

                            <p
                                className="mb-4 font-weight-light text-blue-500 w-75"
                                style={{lineHeight: "170%"}}
                            >
                                Nomor Antrian yang sedang dilayani saat ini : {this.state.kcp?.data?.booking_slot != 0 ? this.state.kcp?.data?.booking_slot : "-" }


                            </p>

                            <div className="d-flex flex-row justify-content-between">
                                <div>
                                    <Link to="/daftar-bank">
                                        <Button className="btn px-5 text-danger" >
                                            Kembali
                                        </Button>
                                    </Link>

                                </div>
                                <div>
                                    <Link to="/booking-antrian">
                                        <Button className="btn px-5 btn-sm mr-4" hasShadow isPrimary>
                                            Booking untuk Besok
                                        </Button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="flex-right mb-3">
                                <img 
                                    src={ImageAntrianBank}
                                    alt="image"
                                    className="img-fluid img-beranda img-antrian "
                                
                                />
                        </div>

                    </div>
                </div>
                
            </Fade>
        );
    }
}