import React from 'react'
import { Accordion, FloatingLabel, Form } from 'react-bootstrap'
import TextInputFormComponent from './forms/TextInputFormComponent'
import SelectFormComponent from './forms/SelectFormComponent'
import { pakaiFilterPackages } from '../helper/FormConstants'


const DataWeddingGift = ({ loveStory, live, nomorRek, namaBank, atasNama, nomorRek2, namaBank2, atasNama2, alamat, namaPenerima, waKonfirmasi, visibl, nomorCatin, daftarHadir, checkSpecialChar, capitalFirstWord, handleInputChange}) => {
  return (
    <>
    <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <i className="bi bi-chat-heart me-2"></i>Love Story
          </Accordion.Header>
          <Accordion.Body>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Ceritakan ceritamu disini"
            >
              <Form.Control
                className="lovestory"
                name="loveStory"
                value={loveStory}
                onKeyDown={checkSpecialChar}
                onChange={handleInputChange}
                as="textarea"
                placeholder="Ceritakan ceritamu disini"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <i className="bi bi-youtube me-2"></i>Live Streaming
          </Accordion.Header>
          <Accordion.Body>
            <Form.Group className="mb-2">
              <Form.Label>Akun Media Sosial</Form.Label>
              <Form.Control
                name="live"
                value={live}
                onChange={handleInputChange}
                type="text"
                placeholder="Masukan Link Media Sosial"
              />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <i className="bi bi bi-box2 me-2"></i>
            <div>Wedding Gift</div>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-envelope me-2"></i>
                      Amplop Digital 1
                    </Accordion.Header>
                    <Accordion.Body>
                      <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Nomor Rekening"
                      name="nomorRek"
                      value={nomorRek}
                      placeholder="Nomor Rekening"
                      onChange={handleInputChange}
                      />
                      <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Nama Bank"
                      name="namaBank"
                      value={namaBank}
                      placeholder="Nama Bank"
                      onChange={handleInputChange}
                      />
                      <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Atas Nama"
                      name="atasNama"
                      value={capitalFirstWord(atasNama)}
                      placeholder="Atas Nama"
                      onChange={handleInputChange}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-envelope me-2"></i>
                      Amplop Digital 2
                    </Accordion.Header>
                    <Accordion.Body>
                    <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Nomor Rekening"
                      name="nomorRek2"
                      value={nomorRek2}
                      placeholder="Nomor Rekening"
                      onChange={handleInputChange}
                      />
                      <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Nama Bank"
                      name="namaBank2"
                      value={namaBank2}
                      placeholder="Nama Bank"
                      onChange={handleInputChange}
                      />
                      <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Atas Nama"
                      name="atasNama2"
                      value={capitalFirstWord(atasNama2)}
                      placeholder="Atas Nama"
                      onChange={handleInputChange}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-gift me-2"></i>Kirim
                      Hadiah
                    </Accordion.Header>
                    <Accordion.Body>
                    <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Alamat"
                      name="alamat"
                      value={alamat}
                      placeholder="Alamat"
                      onChange={handleInputChange}
                      />
                    <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Nama Penerima"
                      name="namaPenerima"
                      value={namaPenerima}
                      placeholder="Nama Penerima"
                      onChange={handleInputChange}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <TextInputFormComponent
                      validasi={false}
                      classEffect="mb-3" 
                      label="Nomor WA Konfirmasi"
                      name="waKonfirmasi"
                      value={waKonfirmasi}
                      placeholder="Masukkan Nomor"
                      onChange={handleInputChange}
                      />
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <i className="bi bi bi-whatsapp me-2"></i>
            <div>Reservasi Kehadiran Lewat WA</div>
          </Accordion.Header>
          <Accordion.Body>
          <Form.Group className="mb-2">
            <SelectFormComponent 
            label="Resevasi Kehadiran Lewat WA"
            name="daftarHadir"
            validasi={true}
            value={daftarHadir}
            optionsTitle="Silakan Pilih"
            options={pakaiFilterPackages}
            errorText="Daftar Hadir Belum Dipilih"
            onChange={handleInputChange}
            />
              {visibl && (
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nomor Calon Pengantin "
                  className="formTambah mt-3"
                >
                  <Form.Control
                    validasi={true}
                    name="nomorCatin"
                    value={nomorCatin}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="Masukan Nomor"
                  />
                  <Form.Control.Feedback type="invalid">
                    Nomor Belum Diisi
                  </Form.Control.Feedback>
                </FloatingLabel>
              )}
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  </>
  )
}

export default DataWeddingGift