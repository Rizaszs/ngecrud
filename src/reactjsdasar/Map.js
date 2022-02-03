import React from "react";

const makanans = [
  {
    nama: "soto",
    harga: 10000,
  },
  {
    nama: "bakso",
    harga: 12000,
  },
  {
    nama: "pecel lele",
    harga: 15000,
  },
  {
    nama: "ayam geprek",
    harga: 20000,
  },
];

//reduce

const total_bayar = makanans.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0,
);

const Map = () => {
  return (
    <div>
      <h2>Map sederhana</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1}.{makanan.nama} - {makanan.harga}
          </li>
        ))}
      </ul>
      <h2>Map filter lebih dari 12000</h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 12000)
          .map((makanan, index) => (
            <li>
              {index + 1}.{makanan.nama} - {makanan.harga}
            </li>
          ))}
      </ul>
      <h2>Total harga = {total_bayar}</h2>
    </div>
  );
};

export default Map;
