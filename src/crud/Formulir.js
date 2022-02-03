import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Formulir = ({
  handleSubmit,
  handleChange,
  nama,
  deskripsi,
  harga,
  id,
}) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4>{id ? "Edit data" : "Tambah data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                placeholder="Masukan makanan"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
