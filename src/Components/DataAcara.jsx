import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import { namaHari, nameAcaraAkad, nameAcaraResepsi, zona } from '../helper/FormConstants'
import SelectWithVisible from '../Components/forms/SelectWithVisible'
import TextInputFormComponent from '../Components/forms/TextInputFormComponent'
import { capitalFirstWord } from '../helper/FormHelpers'
import SelectWithClass from '../Components/forms/SelectWithClass'
import FormTutorial from '../Components/forms/FormTutorial'

const DataAcara = ({ namaAcaraAkad, lainnyaAkad, visiblAkad, hariAkad, akad, pukulAkad, zonaWaktuAkad, tempatAkad, mapsAkad, namaAcaraResepsi, lainnyaResepsi, visiblResepsi, hariResepsi, resepsi, pukulResepsi, zonaWaktuResepsi, tempatResepsi, mapsResepsi, handleInputChange}) => {
  return (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="bi bi-calendar2-check me-2"></i>
              <div className="labelForm">Rincian Acara</div>
            </Accordion.Header>
            <Accordion.Body>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="labelForm">Acara 1</div>
                  </Accordion.Header>
                  <Accordion.Body>

                    {/* Akad dan Lainnya */}
                  <SelectWithVisible
                      classEffect="labelForm"
                      validasi={true}
                      name="namaAcaraAkad"
                      label="Acara"
                      value={namaAcaraAkad}
                      optionsTitle="Silakan Pilih Acara"
                      options={nameAcaraAkad}
                      errorText="Acara Belum Dipilih"
                      onChange={handleInputChange}
                      visible={visiblAkad}
                      namaTambah="lainnyaAkad"
                      labelTambah="Nama Acara"
                      placeholderTambah="Nama Acara"
                      valueTambah={lainnyaAkad}
                      errorTextTambah="Nama Acara Belum Diisi"
                      onChangeTambah={handleInputChange}
                    
                    />

                    {/* Hari dan Tanggal */}
                    <Row>
                      <Col sm={3}>
                        <SelectWithClass
                        validasi={true}
                        classEffect="hari"
                        name="hariAkad"
                        value={hariAkad}
                        optionsTitle="Hari"
                        options={namaHari}
                        errorText="Hari Belum Dipilih"
                        onChange={handleInputChange}
                        />
                      </Col>
                      <Col sm={9}>
                        <TextInputFormComponent
                        validasi={true} 
                        classEffect="formTanggal mb-3"
                        label="Tanggal Bulan Tahun"
                        name="akad"
                        value={capitalFirstWord(akad)}
                        placeholder="Masukan Hari, Tanggal Bulan Tahun"
                        errorText="Tanggal Belum Diisi"
                        onChange={handleInputChange}
                        />
                      </Col>
                    </Row>

                    {/* Waktu dan Zona */}
                    <Row>
                      <Col>
                      <TextInputFormComponent
                      validasi={true} 
                        label="Pukul"
                        placeholder="Pukul"
                        name="pukulAkad"
                        value={pukulAkad}
                        note="Format : ... s/d ..."
                        errorText="Waktu Belum diisi"
                        onChange={handleInputChange}
                      />
                      </Col>
                      <Col>
                      <SelectWithClass 
                      classEffect="zona"
                      validasi={true}
                      name="zonaWaktuAkad"
                      value={zonaWaktuAkad}
                      optionsTitle="Zonasi"
                      options={zona}
                      errorText="Zona Belum Dipilih"
                      onChange={handleInputChange}
                      />
                      </Col>
                    </Row>

                    {/* Tempat Akad */}
                    <TextInputFormComponent
                    validasi={true}
                    classEffect="mb-3 mt-2" 
                    name="tempatAkad"
                    label="Tempat Acara"
                    placeholder="Tempat Acara"
                    value={capitalFirstWord(tempatAkad)}
                    errorText="Tempat Belum Diisi"
                    onChange={handleInputChange}
                    />
                    {/* Maps Akad */}
                    <TextInputFormComponent
                    validasi={true} 
                    classEffect="mb-1"
                    name="mapsAkad"
                    label="Link Google Maps"
                    placeholder="Masukkan Link"
                    value={mapsAkad}
                    errorText="Link Belum Diisi"
                    onChange={handleInputChange}
                    />
                    <FormTutorial 
                    label="Tutorial Salin Maps"
                    linkTutorial="https://www.youtube.com/watch?v=07ihVwltHvQ"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div>Acara 2</div>
                  </Accordion.Header>
                  <Accordion.Body>

                    {/* Resepsi dan Lainnya */}
                  <SelectWithVisible
                      validasi={false}
                      name="namaAcaraResepsi"
                      label="Acara"
                      value={namaAcaraResepsi}
                      optionsTitle="Silakan Pilih Acara"
                      options={nameAcaraResepsi}
                      errorText="Acara Belum Dipilih"
                      onChange={handleInputChange}
                      visible={visiblResepsi}
                      namaTambah="lainnyaResepsi"
                      labelTambah="Nama Acara"
                      placeholderTambah="Nama Acara"
                      valueTambah={lainnyaResepsi}
                      errorTextTambah="Nama Acara Belum Diisi"
                      onChangeTambah={handleInputChange}
                    
                    />

                    {/* Hari dan Tanggal */}
                    <Row>
                      <Col sm={3}>
                        <SelectWithClass
                        validasi={false}
                        classEffect="hari"
                        name="hariResepsi"
                        value={hariResepsi}
                        optionsTitle="Hari"
                        options={namaHari}
                        errorText="Hari Belum Dipilih"
                        onChange={handleInputChange}
                        />
                      </Col>
                      <Col sm={9}>
                        <TextInputFormComponent
                        validasi={false} 
                        classEffect="formTanggal mb-3"
                        label="Tanggal Bulan Tahun"
                        name="resepsi"
                        value={capitalFirstWord(resepsi)}
                        placeholder="Masukan Hari, Tanggal Bulan Tahun"
                        errorText="Tanggal Belum Diisi"
                        onChange={handleInputChange}
                        />
                      </Col>
                    </Row>

                    {/* Waktu dan Zona */}
                    <Row>
                      <Col>
                      <TextInputFormComponent
                      validasi={false}
                        label="Pukul"
                        placeholder="Pukul"
                        name="pukulResepsi"
                        value={pukulResepsi}
                        note="Format : ... s/d ..."
                        errorText="Waktu Belum diisi"
                        onChange={handleInputChange}
                      />
                      </Col>
                      <Col>
                      <SelectWithClass
                      validasi={false} 
                      classEffect="zona"
                      name="zonaWaktuResepsi"
                      value={zonaWaktuResepsi}
                      optionsTitle="Zonasi"
                      options={zona}
                      errorText="Zona Belum Dipilih"
                      onChange={handleInputChange}
                      />
                      </Col>
                    </Row>

                    {/* Tempat Resepsi */}
                    <TextInputFormComponent
                    validasi={false}
                    classEffect="mb-3 mt-2" 
                    name="tempatResepsi"
                    label="Tempat Acara"
                    placeholder="Tempat Acara"
                    value={capitalFirstWord(tempatResepsi)}
                    errorText="Tempat Belum Diisi"
                    onChange={handleInputChange}
                    />
                    {/* Maps Resepsi */}
                    <TextInputFormComponent
                    validasi={false} 
                    classEffect="mb-1"
                    name="mapsResepsi"
                    label="Link Google Maps"
                    placeholder="Masukkan Link"
                    value={mapsResepsi}
                    errorText="Link Belum Diisi"
                    onChange={handleInputChange}
                    />
                    <FormTutorial 
                    label="Tutorial Salin Maps"
                    linkTutorial="https://www.youtube.com/watch?v=07ihVwltHvQ"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
  )
}

export default DataAcara