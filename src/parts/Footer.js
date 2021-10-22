import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer className="spacing-sm">
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width: 350}}>
            <IconText />
            <p className="brand-tagLine">
            Luangkan Waktu Anda Untuk Sesuatu yang Berharga.
            </p>
          </div>
          <div className= "col-auto mr-5">
            <h6 className="mt-2">Tautan</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/daftar-bank">
                  Daftar Bank
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/booking-antrian">
                  Booking Antrian
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/beranda">
                  Info Antrian
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3 mr-5">
            <h6 className="mt-2">Kantor BRI Pusat</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Gedung BRI
                  Jl. Jenderal Sudirman Kav.44-46
                  Jakarta 10210
                  Indonesia
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="mt-2">Hubungi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:callbri@bri.co.id"
                >
                  callbri@bri.co.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:14017">
                  14017/1500017
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright©2021 | Created by Front End & Back End Group B
          </div>
        </div>
      </div>
    </footer>
  );
}
