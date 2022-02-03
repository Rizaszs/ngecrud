import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ makanans, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp. {makanan.harga}</td>
              <td className="d-flex justify-content-center">
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => editData(makanan.id)}
                >
                  editData
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(makanan.id)}
                >
                  hapusData
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
