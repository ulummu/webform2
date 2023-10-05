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
    // console.log(values);
    window.location.href =
      "https://api.whatsapp.com/send/?phone=6281215372042&text=" +
      encodeURIComponent(`
1. Tema : ${values.tema}\n
2. Bahasa Undangan : ${values.bahasa}\n
3. Paket Undangan Web : ${values.paket}\n
4. Filter Instagram: ${values.pakaiFilter}
  ${filter}\n
5. Nama yang didahulukan : ${values.namaAwal}\n
6. Mempelai Wanita
-Nama Panggilan : ${values.panggilanWanita}
-Nama Lengkap : ${values.lengkapWanita}
-Nama Kedua Orang Tua : Putri ${values.wanitaAnakKe} dari Bapak ${values.namaBapakWanita} dan Ibu ${values.namaIbuWanita}\n
7. Mempelai Pria
-Nama Panggilan : ${values.panggilanPria}
-Nama Lengkap : ${values.lengkapPria}
-Nama Kedua Orang Tua : Putra ${values.priaAnakKe} dari Bapak ${values.namaBapakPria} dan Ibu ${values.namaIbuPria}\n
8. Rincian Acara\n
-Acara 1
-${data}
-Hari, Tanggal Bulan Tahun : ${values.hariAkad}, ${values.akad}
-Pukul ${values.pukulAkad} ${values.zonaWaktuAkad}
-Tempat acara : ${values.tempatAkad}
-Maps acara : ${values.mapsAkad}\n
-Acara 2
-${dataResepsi}
-Hari, Tanggal Bulan Tahun : ${values.hariResepsi}, ${values.resepsi}
-Pukul ${values.pukulResepsi} ${values.zonaWaktuResepsi}
-Tempat acara : ${values.tempatResepsi}
-Maps acara : ${values.mapsResepsi}\n
9. Musik : ${values.musik}\n
10. Love Story : ${values.loveStory}\n
11. Live Streaming : ${values.live}\n
12. Wedding Gift
-Amplop Digital 1
-Nomor Rekening 1 : ${values.nomorRek}
-Nama Bank 1 : ${values.namaBank}
-Atas Nama 1 : ${values.atasNama}\n
-Amplop Digital 2
-Nomor Rekening 2 : ${values.nomorRek2}
-Nama Bank 2 : ${values.namaBank2}
-Atas Nama 2 : ${values.atasNama2}\n
-Kirim Hadiah
-Alamat : ${values.alamat}
-Nama Penerima : ${values.namaPenerima}\n
-WA Konfirmasi Amplop/Penerima : ${values.waKonfirmasi}\n
13. Reservasi Kehadiran via WA : ${values.daftarHadir} 
${noCatin}`);
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
  visibleResepsi,
  setFilter,
  setValues,
  setVisibleAkad,
  setVisibleResepsi,
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
    setData("Acara : " + values.lainnyaAkad);
  } else {
    setData("Acara : " + values.namaAcaraAkad);
  }
  if (!!values.lainnyaResepsi) {
    setDataResepsi("Acara : " + values.lainnyaResepsi);
  } else {
    setDataResepsi("Acara : " + values.namaAcaraResepsi);
  }
  if (event.target.name === "nomorCatin") {
    setNoCatin("-Nomor Calon Pengantin : " + event.target.value);
  }
  if (dataGold === 1) {
    // setTemp(encodeURI(values.loveStory));
    setValues({
      ...values,
      [name]: value,
    });
  }
  if (!!values.filterig) {
    setFilter(
      `-Tema Filter Instagram : ${values.filterig}\n-Frame : ${values.frame}`
    );
  }
  setValues({
    ...values,
    [name]: value,
  });
};
