export const checkSpecialChar = (e) => {
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
export const capitalFirstWord = (e) => {
  var words = e.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};
export const handleSubmit = (
  event,
  values,
  temp,
  dataGold,
  data,
  dataResepsi,
  noCatin,
  filter,
  setValidated
) => {
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
        "%0a%0a5. Filter Instagram : " +
        values.pakaiFilter +
        filter +
        "%0a%0a6. Nama yang didahulukan : " +
        values.namaAwal +
        "%0a%0a7. Mempelai Wanita %0a-Nama Panggilan :" +
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
export const handleFormInput = (
  event,
  values,
  temp,
  filter,
  visible,
  dataGold,
  data,
  dataResepsi,
  noCatin,
  visibleAkad,
  visibleFilter,
  visibleGold,
  visibleResepsi,
  setFilter,
  setValues,
  setVisibleAkad,
  setVisibleResepsi,
  setVisibleGold,
  setVisible,
  setVisibleFilter,
  setDataGold,
  setDataResepsi,
  setData,
  setNoCatin,
  setTemp
) => {
  const { name, value } = event.target;
  if (event.target.name === "daftarHadir" && event.target.value === "Iya") {
    setVisible(!visible);
  } else if (
    event.target.name === "daftarHadir" &&
    event.target.value === "Tidak"
  ) {
    setVisible(false);
    setNoCatin("");
  }
  if (event.target.name === "pakaiFilter" && event.target.value === "Iya") {
    setVisibleFilter(!visible);
  } else if (
    event.target.name === "pakaiFilter" &&
    event.target.value === "Tidak"
  ) {
    setVisibleFilter(false);
  }
  if (event.target.name === "paket" && event.target.value === "Gold") {
    setVisibleGold(!visible);
    setDataGold(1);
  } else if (
    event.target.name === "paket" &&
    (event.target.value === "Silver" || event.target.value === "Bronze")
  ) {
    setVisibleGold(false);
    setDataGold(0);
  }
  if (
    event.target.name === "namaAcaraAkad" &&
    event.target.value === "Lainnya"
  ) {
    setVisibleAkad(!visibleAkad);
  } else if (
    event.target.name === "namaAcaraAkad" &&
    (event.target.value === "Akad" || event.target.value === "Pemberkatan")
  ) {
    setVisibleAkad(false);
  }
  if (
    event.target.name === "namaAcaraResepsi" &&
    event.target.value === "Lainnya"
  ) {
    setVisibleResepsi(!visibleResepsi);
  } else if (
    event.target.name === "namaAcaraResepsi" &&
    (event.target.value === "Resepsi" ||
      event.target.value === "Walimatul Ursy")
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
  if (event.target.name === "nomorCatin") {
    setNoCatin("%0a-Nomor Calon Pengantin : " + event.target.value);
  }
  if (dataGold === 1) {
    setTemp(encodeURI(values.loveStory));
    setValues({
      ...values,
      [name]: value,
    });
  }
  if (!!values.filterig) {
    setFilter(
      "%0a-Tema Filter Instagram : " +
        values.filterig +
        "%0a-Frame : " +
        values.frame
    );
  }
  setValues({
    ...values,
    [name]: value,
  });
};
