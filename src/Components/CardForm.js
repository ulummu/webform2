import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./CardForm.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const initialValues = {
  tema: "",
  paket: "",
  bahasa: "",
  foto: "",
  linkFoto: "",
  namaAwal: "",
  panggilanWanita: "",
  lengkapWanita: "",
  wanitaAnakKe: "",
  namaIbuWanita: "",
  namaBapakWanita: "",
  panggilanPria: "",
  lengkapPria: "",
  priaAnakKe: "",
  namaIbuPria: "",
  namaBapakPria: "",
  akad: "",
  namaAcaraAkad: "",
  lainnyaAkad: "",
  hariAkad: "",
  pukulAkad: "",
  zonaWaktuAkad: "",
  tempatAkad: "",
  mapsAkad: "",
  namaAcaraResepsi: "",
  hariResepsi: "",
  resepsi: "",
  lainnyaResepsi: "",
  pukulResepsi: "",
  zonaWaktuResepsi: "",
  tempatResepsi: "",
  mapsResepsi: "",
  musik: "",
  loveStory: "",
  live: "",
  nomorRek: "",
  namaBank: "",
  atasNama: "",
  nomorRek2: "",
  namaBank2: "",
  atasNama2: "",
  daftarHadir: "",
  nomorCatin: "",
  alamat: "",
  namaPenerima: "",
  rsvp: "",
  waKonfirmasi: "",
  pakaiFilter: "",
  filterig: "",
  frame: "",
};
export default function CardForm(props) {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [visible, setVisible] = useState(false);
  const [visibleGold, setVisibleGold] = useState(false);
  const [visibleAkad, setVisibleAkad] = useState(false);
  const [visibleResepsi, setVisibleResepsi] = useState(false);
  const [visibleFilter, setVisibleFilter] = useState(false);
  // const capitalize = (s) =>
  //   s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  const [data, setData] = useState("");
  const [noCatin, setNoCatin] = useState("");
  const [dataResepsi, setDataResepsi] = useState("");
  const [dataGold, setDataGold] = useState(0);
  const [temp, setTemp] = useState("");
  const [filter, setFilter] = useState("");

  // useEffect(() => {}, [dataGold]);
  const capitalFirstWord = (e) => {
    var words = e.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };
  useEffect(() => {}, [values]);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      if (dataGold === 1) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=6281215372042&text=" +
          "1. Tema : " +
          values.tema +
          "%0a%0a2. Bahasa Undangan : " +
          values.bahasa +
          "%0a%0a3. Paket Undangan Web : " +
          values.paket +
          "%0a%0a4. Foto Undangan : " +
          values.foto +
          "%0a%0a5. Filter Instagram : " +
          values.pakaiFilter +
          filter +
          "%0a%0a6. Nama yang didahulukan : " +
          values.namaAwal +
          "%0a%0a7. Mempelai Wanita %0a-Nama Panggilan : " +
          values.panggilanWanita +
          "%0a-Nama Lengkap : " +
          values.lengkapWanita +
          "%0a-Nama Kedua Orang Tua : Putri " +
          values.wanitaAnakKe +
          " dari Bapak " +
          values.namaBapakWanita +
          " dan Ibu " +
          values.namaIbuWanita +
          "%0a%0a8. Mempelai Pria %0a-Nama Panggilan : " +
          values.panggilanPria +
          "%0a-Nama Lengkap : " +
          values.lengkapPria +
          "%0a-Nama Kedua Orang Tua : Putra " +
          values.priaAnakKe +
          " dari Bapak " +
          values.namaBapakPria +
          " dan Ibu " +
          values.namaIbuPria +
          "%0a%0a9. Rincian Acara %0a-Acara 1 " +
          data +
          "%0a-Hari, Tanggal Bulan Tahun : " +
          values.hariAkad +
          ", " +
          values.akad +
          "%0a-Pukul " +
          values.pukulAkad +
          " " +
          values.zonaWaktuAkad +
          "%0a-Tempat acara : " +
          values.tempatAkad +
          "%0a-Maps acara : " +
          values.mapsAkad +
          "%0a%0a-Acara 2 " +
          dataResepsi +
          "%0a-Hari, Tanggal Bulan Tahun : " +
          values.hariResepsi +
          ", " +
          values.resepsi +
          "%0a-Pukul " +
          values.pukulResepsi +
          " " +
          values.zonaWaktuResepsi +
          "%0a-Tempat acara : " +
          values.tempatResepsi +
          "%0a-Maps acara : " +
          values.mapsResepsi +
          "%0a%0a10. Musik : " +
          values.musik +
          "%0a%0aData Tambahan Paket Gold %0a%0a1. Love Story : " +
          temp +
          "%0a%0a2. Live Streaming : " +
          values.live +
          "%0a%0a3. Wedding Gift %0a%0a-Amplop Digital 1%0a-Nomor Rekening 1 : " +
          values.nomorRek +
          "%0a-Nama Bank 1 : " +
          values.namaBank +
          "%0a-Atas Nama 1 : " +
          values.atasNama +
          "%0a%0a-Amplop Digital 2%0a-Nomor Rekening 2 : " +
          values.nomorRek2 +
          "%0a-Nama Bank 2 : " +
          values.namaBank2 +
          "%0a-Atas Nama 2 : " +
          values.atasNama2 +
          "%0a%0a-Kirim Hadiah%0a-Alamat : " +
          values.alamat +
          "%0a-Nama Penerima : " +
          values.namaPenerima +
          "%0a-WA Konfirmasi Amplop/Penerima : " +
          values.waKonfirmasi +
          "%0a%0a4. Reservasi Kehadiran via WA : " +
          values.daftarHadir +
          noCatin;
        // "%0a%0a5. QR Code RSVP : " +
        // values.rsvp;
      } else {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=6281215372042&text=" +
          "1. Tema : " +
          values.tema +
          "%0a%0a2. Bahasa Undangan : " +
          values.bahasa +
          "%0a%0a3. Paket Undangan Web : " +
          values.paket +
          "%0a%0a4. Foto Undangan : " +
          values.foto +
          "%0a%0a5. Filter Instagram: " +
          values.pakaiFilter +
          filter +
          "%0a%0a6. Nama yang didahulukan : " +
          values.namaAwal +
          "%0a%0a7. Mempelai Wanita %0a-Nama Panggilan : " +
          values.panggilanWanita +
          "%0a-Nama Lengkap : " +
          values.lengkapWanita +
          "%0a-Nama Kedua Orang Tua : Putri " +
          values.wanitaAnakKe +
          " dari Bapak " +
          values.namaBapakWanita +
          " dan Ibu " +
          values.namaIbuWanita +
          "%0a%0a8. Mempelai Pria %0a-Nama Panggilan : " +
          values.panggilanPria +
          "%0a-Nama Lengkap : " +
          values.lengkapPria +
          "%0a-Nama Kedua Orang Tua : Putra " +
          values.priaAnakKe +
          " dari Bapak " +
          values.namaBapakPria +
          " dan Ibu " +
          values.namaIbuPria +
          "%0a%0a9. Rincian Acara %0a-Acara 1" +
          data +
          "%0a-Hari, Tanggal Bulan Tahun : " +
          values.hariAkad +
          ", " +
          values.akad +
          "%0a-Pukul " +
          values.pukulAkad +
          " " +
          values.zonaWaktuAkad +
          "%0a-Tempat acara : " +
          values.tempatAkad +
          "%0a-Maps acara : " +
          values.mapsAkad +
          "%0a%0a-Acara 2 " +
          dataResepsi +
          "%0a-Hari, Tanggal Bulan Tahun : " +
          values.hariResepsi +
          ", " +
          values.resepsi +
          "%0a-Pukul " +
          values.pukulResepsi +
          " " +
          values.zonaWaktuResepsi +
          "%0a-Tempat acara : " +
          values.tempatResepsi +
          "%0a-Maps acara : " +
          values.mapsResepsi +
          "%0a%0a10. Musik : " +
          values.musik;
      }
    }
    // console.log(dataGold);
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };
  const checkSpecialChar = (e) => {
    var key = e.keyCode;
    if (key === 53 || key === 55) {
      e.preventDefault();
      e.stopPropagation();
    }
    // if (/[$%&*?#@^]/.test(e.key)) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "daftarHadir" && e.target.value === "Iya") {
      setVisible(!visible);
    } else if (e.target.name === "daftarHadir" && e.target.value === "Tidak") {
      setVisible(false);
      setNoCatin("");
    }
    if (e.target.name === "pakaiFilter" && e.target.value === "Iya") {
      setVisibleFilter(!visible);
    } else if (e.target.name === "pakaiFilter" && e.target.value === "Tidak") {
      setVisibleFilter(false);
    }
    if (e.target.name === "paket" && e.target.value === "Gold") {
      setVisibleGold(!visible);
      setDataGold(1);
    } else if (
      e.target.name === "paket" &&
      (e.target.value === "Silver" || e.target.value === "Bronze")
    ) {
      setVisibleGold(false);
      setDataGold(0);
    }
    if (e.target.name === "namaAcaraAkad" && e.target.value === "Lainnya") {
      setVisibleAkad(!visibleAkad);
    } else if (
      e.target.name === "namaAcaraAkad" &&
      (e.target.value === "Akad" || e.target.value === "Pemberkatan")
    ) {
      setVisibleAkad(false);
    }
    if (e.target.name === "namaAcaraResepsi" && e.target.value === "Lainnya") {
      setVisibleResepsi(!visibleResepsi);
    } else if (
      e.target.name === "namaAcaraResepsi" &&
      (e.target.value === "Resepsi" || e.target.value === "Walimatul Ursy")
    ) {
      setVisibleResepsi(false);
    }
    if (!!values.lainnyaAkad) {
      setData("%0a-Acara : " + values.lainnyaAkad);
    } else {
      setData("%0a-Acara : " + values.namaAcaraAkad);
    }
    if (!!values.lainnyaResepsi) {
      setDataResepsi("%0a-Acara : " + values.lainnyaResepsi);
    } else {
      setDataResepsi("%0a-Acara : " + values.namaAcaraResepsi);
    }
    if (e.target.name === "nomorCatin") {
      setNoCatin("%0a-Nomor Calon Pengantin : " + e.target.value);
    }
    if (!!values.filterig) {
      setFilter(
        "%0a-Tema Filter Instagram : " +
          values.filterig +
          "%0a-Frame : " +
          values.frame
      );
    }
    if (dataGold === 1) {
      setTemp(encodeURI(values.loveStory));
      setValues({
        ...values,
        [name]: value,
      });
    }
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="m-auto mt-5 mb-5 align-self-center Card ">
            <Card.Header as="h3" className="card-header">
              <img src={logo} alt="logo" className="logo me-2" />
              Form Undangan Website
            </Card.Header>
            <Card.Body>
              <Form.Label className="judul">
                Silakan Isi Data Secara Lengkap
              </Form.Label>
              <Form
                className="form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">Tema Undangan</Form.Label>
                  <Form.Select
                    name="tema"
                    value={values.tema}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Silakan Pilih Tema
                    </option>
                    <option value="Tema P">Tema P</option>
                    <option value="Tema Q">Tema Q</option>
                    <option value="Tema W">Tema W</option>
                    <option value="Tema X">Tema X</option>
                    <option value="Tema Y">Tema Y</option>
                    <option value="Tema Z">Tema Z</option>
                    <option value="Tema AA">Tema AA</option>
                    <option value="Tema AC">Tema AC</option>
                    <option value="Tema AD">Tema AD</option>
                    <option value="Tema AE">Tema AE</option>
                    <option value="Tema AF">Tema AF</option>
                    <option value="Tema AG">Tema AG</option>
                    <option value="Tema 01">Tema 01</option>
                    <option value="Tema 02">Tema 02</option>
                    <option value="Tema 03">Tema 03</option>
                    <option value="Tema 04">Tema 04</option>
                    <option value="Tema Jawa">Tema Jawa</option>
                    <option value="Tema Minang">Tema Minang</option>
                    <option value="Tema Aqiqah">Tema Aqiqah</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Tema Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">Bahasa Undangan</Form.Label>
                  <Form.Select
                    name="bahasa"
                    value={values.bahasa}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Silakan Pilih Bahasa
                    </option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Inggris">Inggris</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Bahasa Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">Paket Undangan</Form.Label>
                  <Form.Select
                    name="paket"
                    value={values.paket}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Silakan Pilih Paket
                    </option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Bronze">Bronze</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Paket Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">Foto Undangan</Form.Label>
                  <Form.Select
                    name="foto"
                    value={values.foto}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Pilih
                    </option>
                    <option value="Dengan Foto">Dengan Foto</option>
                    <option value="Tanpa Foto">Tanpa Foto</option>
                    <option value="Animasi">Animasi</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Foto Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label className="mb-0">Filter Instagram</Form.Label>
                  <Form.Label className="labelFormFilter">
                    Dengan tambahan biaya.
                  </Form.Label>
                  <Form.Select
                    name="pakaiFilter"
                    value={values.pakaiFilter}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled hidden>
                      Silakan Pilih
                    </option>
                    <option value="Iya">Iya</option>
                    <option value="Tidak">Tidak</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Filter Belum Dipilih
                  </Form.Control.Feedback>
                  <Form.Label className="labelTutor">
                    Contoh Filter bisa dilihat{" "}
                    <a
                      className="tutor"
                      href="https://undangandigimo.com/katalog-filter/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Disini
                    </a>
                  </Form.Label>
                </Form.Group>
                {visibleFilter && (
                  <Form.Group>
                    <Form.Group className="mt-1">
                      <Form.Label className="labelForm">
                        Tema Filter Instagram
                      </Form.Label>
                      <Form.Select
                        name="filterig"
                        value={values.filterig}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" hidden>
                          Silakan Pilih Filter
                        </option>
                        <option value="Filter Wedding P">
                          Filter Wedding P
                        </option>
                        <option value="Filter Wedding Q">
                          Filter Wedding Q
                        </option>
                        <option value="Filter Wedding W">
                          Filter Wedding W
                        </option>
                        <option value="Filter Wedding X">
                          Filter Wedding X
                        </option>
                        <option value="Filter Wedding Y">
                          Filter Wedding Y
                        </option>
                        <option value="Filter Wedding Z">
                          Filter Wedding Z
                        </option>
                        <option value="Filter Wedding AA">
                          Filter Wedding AA
                        </option>
                        <option value="Filter Wedding AC">
                          Filter Wedding AC
                        </option>
                        <option value="Filter Wedding AD">
                          Filter Wedding AD
                        </option>
                        <option value="Filter Wedding AE">
                          Filter Wedding AE
                        </option>
                        <option value="Filter Wedding 01">
                          Filter Wedding 01
                        </option>
                        <option value="Filter Wedding 02">
                          Filter Wedding 02
                        </option>
                        <option value="Filter Wedding Jawa">
                          Filter Wedding Jawa
                        </option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Filter Belum Dipilih
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="labelForm">Pilih Frame</Form.Label>
                      <Form.Select
                        name="frame"
                        value={values.frame}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled hidden>
                          Pilih
                        </option>
                        <option value="Frame 1">Frame 1</option>
                        <option value="Frame 1 dan 2">Frame 1 dan 2</option>
                        <option value="Frame 1, 2 dan 3">
                          Frame 1, 2 dan 3
                        </option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Frame Belum Dipilih
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Group>
                )}

                <Form.Group className="mb-2">
                  <Form.Label className="labelForm">
                    Nama yang didahulukan
                  </Form.Label>
                  <Form.Select
                    name="namaAwal"
                    value={values.namaAwal}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Pilih
                    </option>
                    <option value="Wanita">Wanita</option>
                    <option value="Pria">Pria</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Nama Belum Dipilih
                  </Form.Control.Feedback>
                </Form.Group>

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
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Panggilan"
                              className="mb-3"
                            >
                              <Form.Control
                                name="panggilanWanita"
                                value={capitalFirstWord(values.panggilanWanita)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Nama Panggilan"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Lengkap"
                              className="mb-3"
                            >
                              <Form.Control
                                name="lengkapWanita"
                                value={capitalFirstWord(values.lengkapWanita)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                minLength={4}
                                placeholder="Masukan Nama Lengkap"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Lengkap Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Putri ..."
                              className="mb-1"
                            >
                              <Form.Control
                                name="wanitaAnakKe"
                                value={capitalFirstWord(values.wanitaAnakKe)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Anak Ke"
                              />
                              <Form.Text muted>
                                Contoh : ke-2 atau kedua
                              </Form.Text>
                              <Form.Control.Feedback type="invalid">
                                Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Bapak"
                              className="mb-3"
                            >
                              <Form.Control
                                name="namaBapakWanita"
                                value={capitalFirstWord(values.namaBapakWanita)}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Nama Bapak"
                                // defaultValue="Putri Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Bapak Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Ibu"
                              className="mb-3"
                            >
                              <Form.Control
                                name="namaIbuWanita"
                                value={capitalFirstWord(values.namaIbuWanita)}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Nama Ibu"
                                // defaultValue="Putri Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Ibu Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <div className="labelForm">Mempelai Pria</div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Panggilan"
                              className="mb-3"
                            >
                              <Form.Control
                                name="panggilanPria"
                                value={capitalFirstWord(values.panggilanPria)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Nama Panggilan"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Lengkap"
                              className="mb-3"
                            >
                              <Form.Control
                                name="lengkapPria"
                                value={capitalFirstWord(values.lengkapPria)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Nama Lengkap"
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Lengkap Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Putra ..."
                              className="mb-1"
                            >
                              <Form.Control
                                name="priaAnakKe"
                                value={capitalFirstWord(values.priaAnakKe)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Anak Ke"
                              />
                              <Form.Text muted>
                                Contoh : ke-2 atau kedua
                              </Form.Text>
                              <Form.Control.Feedback type="invalid">
                                Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Bapak"
                              className="mb-3"
                            >
                              <Form.Control
                                name="namaBapakPria"
                                value={capitalFirstWord(values.namaBapakPria)}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Nama Bapak"
                                // defaultValue="Putri Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Bapak Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nama Ibu"
                              className="mb-3"
                            >
                              <Form.Control
                                required
                                name="namaIbuPria"
                                value={capitalFirstWord(values.namaIbuPria)}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Masukan Nama Ibu"
                                // defaultValue="Putra Dari "
                              />
                              <Form.Control.Feedback type="invalid">
                                Nama Ibu Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

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
                            <Form.Group className="mb-3">
                              <Form.Label className="labelForm">
                                Acara
                              </Form.Label>
                              <Form.Select
                                name="namaAcaraAkad"
                                value={values.namaAcaraAkad}
                                onChange={handleInputChange}
                                required
                              >
                                <option value="" disabled hidden>
                                  Silakan Pilih
                                </option>
                                <option value="Akad Nikah">Akad Nikah</option>
                                <option value="Pemberkatan">Pemberkatan</option>
                                <option value="Lainnya">Lainnya</option>
                              </Form.Select>
                              {visibleAkad && (
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Acara "
                                  className="formTambah mt-3"
                                >
                                  <Form.Control
                                    name="lainnyaAkad"
                                    value={capitalFirstWord(values.lainnyaAkad)}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    placeholder="Masukan Nama Acara"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Nama Acara Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              )}
                              <Form.Control.Feedback type="invalid">
                                Acara Belum Dipilih
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                              <Col sm={3}>
                                <Form.Select
                                  required
                                  className="hari"
                                  name="hariAkad"
                                  value={values.hariAkad}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Hari
                                  </option>
                                  <option value="Senin">Senin</option>
                                  <option value="Selasa">Selasa</option>
                                  <option value="Rabu">Rabu</option>
                                  <option value="Kamis">Kamis</option>
                                  <option value="Jumat">Jumat</option>
                                  <option value="Sabtu">Sabtu</option>
                                  <option value="Minggu">Minggu</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Hari Belum Dipilih
                                </Form.Control.Feedback>
                              </Col>
                              <Col sm={9}>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Tanggal Bulan Tahun"
                                  className="formTanggal mb-3"
                                >
                                  <Form.Control
                                    name="akad"
                                    value={capitalFirstWord(values.akad)}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    placeholder="Masukan Hari, Tanggal Bulan Tahun"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Tanggal Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Pukul"
                                >
                                  <Form.Control
                                    required
                                    name="pukulAkad"
                                    value={values.pukulAkad}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="pukul"
                                  />
                                  <Form.Text muted>
                                    Format : .. s/d ..
                                  </Form.Text>
                                  <Form.Control.Feedback type="invalid">
                                    waktu Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                              <Col>
                                <Form.Select
                                  required
                                  className="zona"
                                  name="zonaWaktuAkad"
                                  value={values.zonaWaktuAkad}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Zonasi
                                  </option>
                                  <option value="WIB">WIB</option>
                                  <option value="WITA">WITA</option>
                                  <option value="WIT">WIT</option>
                                </Form.Select>
                              </Col>
                            </Row>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Tempat Acara"
                              className="mb-3 mt-3"
                            >
                              <Form.Control
                                name="tempatAkad"
                                value={capitalFirstWord(values.tempatAkad)}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Masukan Tempat Acara"
                              />
                              <Form.Control.Feedback type="invalid">
                                Tempat Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Link Google Maps"
                              className="mb-1"
                            >
                              <Form.Control
                                name="mapsAkad"
                                value={values.mapsAkad}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Masukan Maps"
                              />
                              <Form.Control.Feedback type="invalid">
                                Maps Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <Form.Label className="labelTutor">
                              Tutorial Salin Maps{" "}
                              <a
                                className="tutor"
                                href="https://www.youtube.com/watch?v=07ihVwltHvQ"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Klik Disini
                              </a>
                            </Form.Label>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <div>Acara 2</div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Form.Group className="mb-3">
                              <Form.Label>Acara</Form.Label>
                              <Form.Select
                                name="namaAcaraResepsi"
                                value={capitalFirstWord(
                                  values.namaAcaraResepsi
                                )}
                                onChange={handleInputChange}
                              >
                                <option value="" disabled hidden>
                                  Silakan Pilih
                                </option>
                                <option value="Resepsi">Resepsi</option>
                                <option value="Walimatul Ursy">
                                  Walimatul Ursy
                                </option>
                                <option value="Lainnya">Lainnya</option>
                              </Form.Select>
                              {visibleResepsi && (
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Acara "
                                  className="formTambah mt-3"
                                >
                                  <Form.Control
                                    name="lainnyaResepsi"
                                    value={values.lainnyaResepsi}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Masukan Nama Acara"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Nama Acara Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              )}
                              <Form.Control.Feedback type="invalid">
                                Acara Belum Dipilih
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                              <Col sm={3}>
                                <Form.Select
                                  className="hari"
                                  name="hariResepsi"
                                  value={values.hariResepsi}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Hari
                                  </option>
                                  <option value="Senin">Senin</option>
                                  <option value="Selasa">Selasa</option>
                                  <option value="Rabu">Rabu</option>
                                  <option value="Kamis">Kamis</option>
                                  <option value="Jumat">Jumat</option>
                                  <option value="Sabtu">Sabtu</option>
                                  <option value="Minggu">Minggu</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Hari Belum Dipilih
                                </Form.Control.Feedback>
                              </Col>
                              <Col sm={9}>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Tanggal Bulan Tahun"
                                  className="formTanggal mb-3"
                                >
                                  <Form.Control
                                    name="resepsi"
                                    value={capitalFirstWord(values.resepsi)}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Masukan Hari, Tanggal Bulan Tahun"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Tanggal Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Pukul"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="pukulResepsi"
                                    value={values.pukulResepsi}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="pukul"
                                  />
                                  <Form.Text muted>
                                    Format : .. s/d ..
                                  </Form.Text>
                                  <Form.Control.Feedback type="invalid">
                                    waktu Belum Diisi
                                  </Form.Control.Feedback>
                                </FloatingLabel>
                              </Col>
                              <Col>
                                <Form.Select
                                  className="zona"
                                  name="zonaWaktuResepsi"
                                  value={values.zonaWaktuResepsi}
                                  onChange={handleInputChange}
                                  type="text"
                                >
                                  <option value="" disabled hidden>
                                    Zonasi
                                  </option>
                                  <option value="WIB">WIB</option>
                                  <option value="WITA">WITA</option>
                                  <option value="WIT">WIT</option>
                                </Form.Select>
                              </Col>
                            </Row>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Tempat Acara"
                              className="mb-3"
                            >
                              <Form.Control
                                name="tempatResepsi"
                                value={capitalFirstWord(values.tempatResepsi)}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Masukan Tempat Acara"
                              />
                              <Form.Control.Feedback type="invalid">
                                Tempat Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Link Google Maps"
                              className="mb-1"
                            >
                              <Form.Control
                                name="mapsResepsi"
                                value={values.mapsResepsi}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Masukan Maps"
                              />
                              <Form.Control.Feedback type="invalid">
                                Maps Belum Diisi
                              </Form.Control.Feedback>
                            </FloatingLabel>
                            <Form.Label className="labelTutor">
                              Tutorial Salin Maps{" "}
                              <a
                                className="tutor"
                                href="https://www.youtube.com/watch?v=07ihVwltHvQ"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Klik Disini
                              </a>
                            </Form.Label>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <i className="bi bi-music-note-beamed me-2"></i>
                      <div className="labelForm">Musik</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-2">
                        <Form.Label className="labelForm">
                          Backsound Undangan
                        </Form.Label>
                        <Form.Control
                          required
                          name="musik"
                          value={values.musik}
                          onChange={handleInputChange}
                          type="text"
                          placeholder="Masukkan Link Youtube"
                        />
                        <Form.Control.Feedback type="invalid">
                          Musik Belum Diisi
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Label className="labelTutor">
                        Tutorial Salin Backsound{" "}
                        <a
                          className="tutor"
                          href="https://www.youtube.com/watch?v=DmWVqg3mfps"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Klik Disini
                        </a>
                      </Form.Label>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {visibleGold && (
                  <>
                    <label className="mt-1">
                      Data Tambahan Khusus Paket Gold
                    </label>
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
                              value={values.loveStory}
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
                              value={values.live}
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
                              <Accordion.Header>
                                <i className="bi bi-envelope me-2"></i>Amplop
                                Digital 1
                              </Accordion.Header>
                              <Accordion.Body>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nomor Rekening"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="nomorRek"
                                    value={values.nomorRek}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nomor Rekening"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Bank"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="namaBank"
                                    value={values.namaBank}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nama Bank"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Atas Nama"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="atasNama"
                                    value={capitalFirstWord(values.atasNama)}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Atas Nama Bank"
                                  />
                                </FloatingLabel>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <i className="bi bi-envelope me-2"></i>Amplop
                                Digital 2
                              </Accordion.Header>
                              <Accordion.Body>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nomor Rekening"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="nomorRek2"
                                    value={values.nomorRek2}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nomor Rekening"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Bank"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="namaBank2"
                                    value={values.namaBank2}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nama Bank"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Atas Nama"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="atasNama2"
                                    value={capitalFirstWord(values.atasNama2)}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Atas Nama Bank"
                                  />
                                </FloatingLabel>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <i className="bi bi-gift me-2"></i>Kirim Hadiah
                              </Accordion.Header>
                              <Accordion.Body>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Alamat"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="alamat"
                                    value={values.alamat}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Alamat"
                                  />
                                </FloatingLabel>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Nama Penerima"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    name="namaPenerima"
                                    value={capitalFirstWord(
                                      values.namaPenerima
                                    )}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nama Penerima"
                                  />
                                </FloatingLabel>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Nomor WA Konfirmasi "
                            className="mt-3"
                          >
                            <Form.Control
                              name="waKonfirmasi"
                              value={values.waKonfirmasi}
                              onChange={handleInputChange}
                              type="text"
                              placeholder="Masukan Nomor"
                            />
                            <Form.Control.Feedback type="invalid">
                              Nomor Belum Diisi
                            </Form.Control.Feedback>
                          </FloatingLabel>
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
                            <Form.Label>
                              Reservasi Kehadiran Lewat WA
                            </Form.Label>
                            <Form.Select
                              name="daftarHadir"
                              value={values.daftarHadir}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled hidden>
                                Silakan Pilih
                              </option>
                              <option value="Iya">Iya</option>
                              <option value="Tidak">Tidak</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Daftar Hadir Belum Dipilih
                            </Form.Control.Feedback>
                            {visible && (
                              <FloatingLabel
                                controlId="floatingInput"
                                label="Nomor Calon Pengantin "
                                className="formTambah mt-3"
                              >
                                <Form.Control
                                  name="nomorCatin"
                                  value={values.nomorCatin}
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
                    {/* <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <i className="bi bi bi-qr-code me-2"></i>
                          <div>QR Code RSVP</div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form.Group className="mb-2">
                            <Form.Label>QR Code RSVP</Form.Label>
                            <Form.Select
                              name="rsvp"
                              value={values.rsvp}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled hidden>
                                Silakan Pilih
                              </option>
                              <option value="Iya">Iya</option>
                              <option value="Tidak">Tidak</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              RSVP Belum Dipilih
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion> */}
                  </>
                )}
                <Form.Label className="nb">
                  <strong>NB</strong> : Jika ada tambahan data atau yang
                  lainnya, silakan hubungi admin
                </Form.Label>
                <Button type="submit" className="Button mb-2">
                  <i className="bi bi-whatsapp me-2"></i>
                  Kirim
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
