import React from "react";
import { Accordion } from "react-bootstrap";
import TextInputFormComponent from "../Components/forms/TextInputFormComponent";
import { capitalFirstWord } from "../helper/FormHelpers";

const DataMempelai = ({ panggilanPria, lengkapPria, priaAnakKe, namaBapakPria, namaIbuPria, panggilanWanita, lengkapWanita, wanitaAnakKe, namaBapakWanita, namaIbuWanita, handleInputChange }) => {
  return (
    // <div>
      <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <i className="bi bi-person-heart me-2"></i>
          <div className="labelForm">Data Mempelai</div>
        </Accordion.Header>
        <Accordion.Body>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="labelForm">Mempelai Wanita</div>
              </Accordion.Header>
              <Accordion.Body>
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Nama Panggilan"
                  name="panggilanWanita"
                  value={capitalFirstWord(panggilanWanita)}
                  placeholder="Masukan Nama Panggilan"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Nama Lengkap"
                  name="lengkapWanita"
                  value={capitalFirstWord(lengkapWanita)}
                  placeholder="Masukan Nama Lengkap"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Putri ..."
                  name="wanitaAnakKe"
                  value={capitalFirstWord(wanitaAnakKe)}
                  placeholder="Masukan Anak Ke"
                  errorText="Belum Diisi"
                  note="Contoh : ke-2 atau kedua"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Nama Bapak"
                  name="namaBapakWanita"
                  value={capitalFirstWord(namaBapakWanita)}
                  placeholder="Masukan Nama Lengkap"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Nama Ibu"
                  name="namaIbuWanita"
                  value={capitalFirstWord(namaIbuWanita)}
                  placeholder="Masukan Nama Lengkap"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="labelForm">Mempelai Pria</div>
              </Accordion.Header>
              <Accordion.Body>
              <TextInputFormComponent
                classEffect="formTambah mt-3"
                validasi={true}
                  label="Nama Panggilan"
                  name="panggilanPria"
                  value={capitalFirstWord(panggilanPria)}
                  placeholder="Masukan Nama Panggilan"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Nama Lengkap"
                  name="lengkapPria"
                  value={capitalFirstWord(lengkapPria)}
                  placeholder="Masukan Nama Lengkap"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Putra ..."
                  name="priaAnakKe"
                  value={capitalFirstWord(priaAnakKe)}
                  placeholder="Masukan Anak Ke"
                  errorText="Belum Diisi"
                  note="Contoh : ke-2 atau kedua"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Nama Bapak"
                  name="namaBapakPria"
                  value={capitalFirstWord(namaBapakPria)}
                  placeholder="Masukan Nama Lengkap"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
                <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  validasi={true}
                  label="Nama Ibu"
                  name="namaIbuPria"
                  value={capitalFirstWord(namaIbuPria)}
                  placeholder="Masukan Nama Lengkap"
                  errorText="Nama Belum Diisi"
                  onChange={handleInputChange}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    // </div>
  );
};

export default DataMempelai;
