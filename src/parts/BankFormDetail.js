import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function BookingDetail() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    }
  };
  useEffect(() => {
    axios
      .get("bank", config)
      .then((res) => {
        console.log(res);
        setData(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="d-flex flex-column align-items-center text-center pb-5">
          <h2 className="h2">Daftar Bank</h2>
          <span className="text-gray-400">Daftar bank yang tersedia</span>
        </div>
        <form className="form-inline mb-3">
          <input
            className="form-control mr-sm-2"
            style={{ height: 48.5 }}
            type="text"
            placeholder="Search"
            onChange={(e) => searchItems(e.target.value)}
          />
        </form>
        <div className="d-flex flex-column align-items-center">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Bank</th>
                <th scope="col">Alamat</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {searchInput.length > 1
                ? filteredResults.map((item, index) => {
                    return (
                      <tr key={`${index}`}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <Button
                          type="link"
                          className="text-orange"
                          href={`/bank/id=${item.id}`}
                        >
                          <td>Lihat detail</td>
                        </Button>
                      </tr>
                    );
                  })
                : data.map((item, index) => {
                    return (
                      <tr key={`${index}`}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <Button
                          type="link"
                          className="text-orange"
                          href={`/detail-antrian-bank/${item.id}`}
                          
                        >
                          <td>Lihat detail</td>
                        </Button>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </Fade>
    </section>
  );
}
