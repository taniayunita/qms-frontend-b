import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

export default class ContentBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: ``,
      kcpName: [],
      services: [],
      services_id: null,
      bank_id: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "services_id") {
      this.setState({
        services_id: e.target.value,
      });
    } else if (e.target.name === "bank_id") {
      this.setState({
        bank_id: e.target.value,
      });
    }

    console.log(this.state);

  }
  handleSubmit(e) {
    e.preventDefault();
    const booking = {
      service_id: parseInt(this.state.services_id),
      bank_id: parseInt(this.state.bank_id)
      ,
    };
    // console.log(booking);
    axios
      .post("book/create", booking, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("Success!", "Booking Nomor Antrin Berhasil.", "success");
        }
      })
      .catch((err) => {
        Swal.fire("Perhatian!", "Anda telah memiliki nomor Antrian!", "error");
      });
  }
  componentDidMount() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    this.getCurrentTime();
    // setInterval(()=> this.getCurrentTime(), 1000);

    //fetching data KCP
    axios.get("bank", config).then((res) => {
      console.log(res);
      this.setState({ kcpName: res.data?.data });
      this.setState({ bank_id: res.data?.data[0].id });
    });

    //fetching data Pelayanan
    axios.get("service/list", config).then((res) => {
      console.log(res);
      this.setState({ services: res.data?.data });
      this.setState({ services_id: res.data?.data[0].ID });
    });
  }

  componentWillUnmount() {
    clearInterval(this.getCurrentTime);
  }

  getCurrentTime = () => {
    this.setState({
      currentTime: moment().add(1, "days").format("LL"),
    });
  };

  render() {
    const { currentTime } = this.state;
    return (
      <div className="container spacing-sm">
        <Fade bottom>
          <div className="d-flex flex-column align-items-center text-center pb-5">
            <h2> Booking Nomor Antrian</h2>
            <span className="text-gray-400">
              Mohon mengisi form untuk mendapatkan nomor antrian
            </span>
          </div>
          <form
            className="d-flex flex-column align-items-start text-center pb-5"
            onSubmit={this.handleSubmit}
          >
            <p className="mb-4 font-weight-light text-gray-700">
              Book Antrian untuk Pelayanan Besok ({currentTime})
            </p>
            <div className="container row d-flex flex column">
              <p className="mb-2 font-weight-light text-gray-700">
                Bank Tujuan
              </p>
              <div className="input-group mb-3">
                <select
                  className="custom-select"
                  id="inputGroupSelect02"
                  value={this.state.bank_id}
                  onChange={(e) => this.onChange(e)}
                  name="bank_id"
                >
                  {this.state.kcpName.map((kcp) => (
                    <option value={kcp.id}>{kcp.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="container row d-flex flex column pb-3">
              <p className="mb-2 font-weight-light text-gray-700">
                Keperluan Layanan
              </p>
              <div className="input-group mb-3">
                <select
                  className="custom-select"
                  id="inputGroupSelect02"
                  value={this.state.services_id}
                  onChange={(e) => this.onChange(e)}
                  name="services_id"
                >
                  {this.state.services.map((kcp) => (
                    <option value={kcp.ID}>{kcp.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <Button type="submit" className="btn px-5" hasShadow isPrimary>
              Dapatkan Nomor Antrian
            </Button>
          </form>
        </Fade>
      </div>
    );
  }
}
