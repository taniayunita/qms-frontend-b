import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Button from 'elements/Button';
import ImageAntrian from 'assets/images/image-beranda-antrian.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContentBeranda from './ContentBeranda';
import Swal from 'sweetalert2';
import moment from 'moment';

export default function ContentDataBeranda(props) {
  const [noAntrian, setNoAntrian] = useState(null);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    }
  };

  useEffect(() => {
    axios
      .get("book", config)
      .then((res) => {
        setNoAntrian(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleButtonDone = (id) => {
    axios
      .delete(`book/done/${id}`, config)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            title: "Done!",
            text: "Layanan selesai, Terimakasih!",
            icon: "success",
            timer: 2000
          }).then(() => {
            window.location.href = "/"
          })
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Warning!",
          text: "Laynan anda belum diproses, Terimakasih!",
          icon: "warning",
          timer: 5000,
        })
      });

  }
  return (
    <Fade bottom>
      <div className='container'>
        {
          noAntrian != null ?
            <div className="flex-container">
              <div className="flex-left flexo-2">
                {/*  {noAntrian.data.no_booking} */}
                <h3 style={{ fontSize: "3.5em", fontWeight: "600" }}>{noAntrian?.no_booking}</h3>
                <p className="card-title" >Nomor Antrian : {noAntrian?.no_booking} </p>
                <p className="card-title">Bank :  {noAntrian?.bank?.name}</p>
                <p className="card-title">Alamat :  {noAntrian?.bank?.address}</p>
                <p className="card-title">Layanan :  {noAntrian?.service?.name}</p>
                <p className="card-text">Nomor antrian akan dilayani pada {` `}
                  <span>
                    {moment(noAntrian?.start_time.substring(0, 10)).format('DD MMMM YYYY')} <br />
                    pukul  {noAntrian?.start_time.substring(11, 16)} - {noAntrian?.end_time.substring(11, 16)} WIB
                  </span>s
                  {` untuk mempercepat transaksi silakan kunjungi `}
                  <a href={'https://eform.bri.co.id/'} target={'_blank'}> <span>e-form</span> </a><br />
                  <span>*Harap mendatangi kantor sebelum waktu pelayanan</span>
                </p>
                {
                  console.log(noAntrian)
                }
                <Button className="btn btn-primary p-3" onClick={() => handleButtonDone(noAntrian?.ID)}>Layanan Selesai</Button>

              </div>

              <div className="flex-right mb-3 flexo-1">
                <img
                  src={ImageAntrian}
                  alt="image"
                  className="img-fluid img-beranda"

                />
              </div>

            </div>
            : <ContentBeranda />
        }

      </div>

    </Fade>
  )
}
