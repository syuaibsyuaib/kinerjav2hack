//$('body').append('<script src="https://cdn.jsdelivr.net/gh/syuaibsyuaib/kinerjav2hack@v1.0.1/kinerjav2hack.js"></script>')

/*

let isi = {}
$("#id_opmt_kinerja_utama_detail option").each(function(e,h){
  isi[$(h).text()] = $(h).val()
})

https://jsongrid.com/json-grid
*/

var modalLoading = `<div class="modal" id="loadingModal" tabindex="-1" role="dialog" aria-labelledby="loadingModalLabel" data-backdrop="static">
  <div class="modal-dialog" style="height: 95%;" role="document">
  <div class="modal-content" style="top:30%;width: fit-content;border: none;box-shadow: none;background-color: transparent;margin: auto;">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif">
  </div>
</div>
</div>`



let nip = ($('.info p').text()).match(/\d+/)[0]
let gs = 'https://script.google.com/macros/s/AKfycbxN3_x0sEclDesQ_kPxDKPlCSJhhlWCRyog2iFg0CqSdV6CYXB2vGCtlqsUDmnDBW5S/exec'

let nipStafSekolah, klasifikasi

fetch(`${gs}?mode=ambilNip`)
  .then(res => {
    return res.json()
  })
  .then(rep => {
    nipStafSekolah = rep[0]
    klasifikasi = rep[1]
    $('body').prepend(modalLoading)
    $('nav').append('<button class="navbar-custom-menu" style="background-color:red;color:white;padding:17px 30px;border:none;margin-right:5px" onclick="tambahbaru()">IMPORT</button><button class="navbar-custom-menu" style="background-color:red;color:white;padding:17px 30px;border:none;margin-right:5px" onclick="kinerjahack()">INJECT</button>')
  })

let kuant = {
  "Proses Draft": "17",
  "Notulensi": "14",
  "Laporan Hasil Audit": "236",
  "Notulen": "7",
  "Aplikasi": "16",
  "Surat": "5",
  "Laporan": "1128",
  "Data": "13",
  "Unit": "18",
  "Paket": "19",
  "Bahan": "21",
  "Makalah": "23",
  "Artikel": "24",
  "Jam pelajaran": "25",
  "Kali": "26",
  "Tahun": "27",
  "Tanda Jasa": "29",
  "Sertifikat": "31",
  "Sistem": "32",
  "Program": "33",
  "Jabatan": "34",
  "Rancangan": "126",
  "Simpul": "37",
  "Rumah Sakit /Puskesmas": "39",
  "Daftar": "491",
  "Algoritma": "43",
  "Dokumentasi": "44",
  "Spesifikasi": "45",
  "Panduan": "46",
  "Materi": "47",
  "Buku atau naskah": "48",
  "Abstraksi": "49",
  "Piagam": "50",
  "Tema": "52",
  "Peralatan": "53",
  "Kerusakan": "54",
  "sistem operasi": "55",
  "Berkas": "57",
  "Perbaikan": "59",
  "Nota": "60",
  "Semua Jenjang": "233",
  "Nota Usul": "64",
  "Usul": "65",
  "Naskah": "66",
  "Buku": "493",
  "Konsep Surat": "70",
  "Pegawai": "78",
  "Kegiatan": "80",
  "Berita Acara": "81",
  "Rumusan": "82",
  "Kurikulum": "83",
  "Jadwal": "84",
  "Risalah": "87",
  "Majalah": "88",
  "Tata Naskah": "90",
  "Soal": "92",
  "Peserta": "94",
  "Paket data": "95",
  "TOR": "96",
  "Unit Kerja": "97",
  "Profil jabatan sejenis": "101",
  "Matrik simulasi": "102",
  "Formulir penilaian": "104",
  "Formulir rekapitulasi penilaian": "105",
  "Kuesioner kompetensi": "106",
  "Formulir evaluasi penyelenggaraan": "107",
  "Lembar Observasi": "108",
  "Lembar Penilaian": "109",
  "Lembar assessor meeting": "110",
  "Ringkasan": "111",
  "Formulir Evaluasi": "112",
  "Laporan pelaksanaan": "113",
  "Hasil analisis": "114",
  "STTPP": "115",
  "Laporan Mengajar": "116",
  "DUPAK/PAK": "117",
  "Setiap tahun": "118",
  "Setiap Kegiatan": "119",
  "Penghargaan": "120",
  "Ijazah": "121",
  "Surat Perintah": "122",
  "Kompetensi Jabatan": "124",
  "Daftar Simulasi": "125",
  "Norma": "127",
  "Formulir": "128",
  "Hasil Identifikasi": "129",
  "Data Literatur": "130",
  "Konsep Kebijakan": "131",
  "Format bentuk laporan": "132",
  "Konsep Simulasi": "133",
  "Kumpulan bahan": "134",
  "Laporan rekomendasi": "136",
  "Kompetensi": "137",
  "Simulasi": "138",
  "Psikotes": "139",
  "Telaah": "140",
  "Buku pedoman simulasi": "141",
  "Kerangka Kajian": "142",
  "Revisi Konsep Kebijakan": "143",
  "Laporan hasil wawancara": "144",
  "Kuesioner validasi kompetensi": "145",
  "Mereview Model Kompetensi Jabatan": "146",
  "Soal simulasi": "147",
  "Draft Naskah": "148",
  "Konsep Kerangka Kajian": "149",
  "Kebijakan": "150",
  "Daftar isian": "153",
  "File": "156",
  "ljazah": "158",
  "Berita Acara, KTI dan Sinopsis": "232",
  "Hasil Evaluasi wasdalpeg": "160",
  "Form penilaian": "162",
  "Instrumen": "163",
  "RAB": "164",
  "Laporan rencana paket": "165",
  "Laporan pengumuman": "166",
  "KAK": "167",
  "Pengumuman": "168",
  "Materi pengumuman": "169",
  "Rumusan adendum": "170",
  "Surat ketetapan": "173",
  "jawaban sanggahan": "174",
  "Surat penunjukan": "175",
  "Dokumen pengadaan": "176",
  "Laporan hasil evaluasi": "177",
  "SPMK/SP/SPK": "178",
  "Surat Keputusan": "180",
  "Laporan daftar periksa": "181",
  "Berita acara pemutusan/ pelanjutan": "182",
  "Daftar SIMAK BMN/D": "183",
  "Tiap buku": "186",
  "Tiap makalah": "187",
  "Tiap majalah": "188",
  "Surat tugas": "189",
  "Tiap dokumen ekspose": "190",
  "PAK": "191",
  "Orang": "192",
  "Rencana Mutu Kontrak (RMK)": "193",
  "Bahan Peraga": "200",
  "GBPP/RBPMD dan SAP/RP": "201",
  "Naskah soal": "202",
  "Naskah Kasus": "203",
  "Per Kertas Kerja Maksimal (5 KK/PP)": "204",
  "Laporan per Program": "205",
  "Modul": "206",
  "Sertifikat Paten": "207",
  "Buku Pedoman": "208",
  "Per Kegiatan": "209",
  "Per Tahun": "210",
  "Naskah infromasi": "212",
  "Kartu": "213",
  "Tiap kali": "214",
  "Tiap jenazah": "215",
  "Bahan Tayang": "216",
  "Tiap kasus": "217",
  "Instansi": "220",
  "Unit Kompetensi": "221",
  "Referensi": "224",
  "JP": "231",
  "Data mutasi": "227",
  "Peta Jabatan": "229",
  "Moderator": "502",
  "Laporan Hasil Evaluasi": "241",
  "Laporan Hasil Reviu": "242",
  "Laporan Hasil Pemantauan": "243",
  "Laporan Hasil Kegiatan": "244",
  "Bahan/naskah": "247",
  "Daftar hadir sidang redaksi": "249",
  "Daftar hadir rapat": "250",
  "SK Kepanitiaan": "251",
  "Daftar hadir keanggotaan": "252",
  "Layanan": "253",
  "Karya": "254",
  "Tanda Terima Surat Tugas, Daftar Hadir": "258",
  "Rancangan/Draft": "259",
  "Final Standar dan Kode Etik": "260",
  "Tiap Tahun": "264",
  "Frekuensi": "265",
  "Desain": "266",
  "Tiap Lembar": "267",
  "Standar": "268",
  "Pedoman": "269",
  "Juknis": "270",
  "Konsep Lay Out": "273",
  "Eksternal": "275",
  "Standar Pedoman": "276",
  "Rutin": "277",
  "Jenis kuesioner": "279",
  "Jenis Peralatan": "280",
  "Jam": "281",
  "Rumah tangga": "282",
  "Objek": "283",
  "Kunjungan": "284",
  "Halaman": "285",
  "Tema tampilan": "286",
  "Judul": "287",
  "Satuan wilayah": "289",
  "Peta": "291",
  "Kuesioner": "292",
  "Tabel": "293",
  "Rencana jadwal": "294",
  "Pertemuan": "295",
  "Tugas Akhir": "296",
  "Gelar/ Ijasah": "297",
  "Bahan acuan": "298",
  "Dummy Tabel": "299",
  "Kerangka sampel": "300",
  "Daftar sampel": "301",
  "Metode": "304",
  "Jenis kuesioner/ peralatan": "305",
  "Paket program": "306",
  "Skripsi / Tugas Akhir": "309",
  "Tiap jam": "310",
  "Surat Keterangan": "311",
  "Daftar penimbang": "312",
  "Paket estimasi": "313",
  "Tesis": "314",
  "Surat Pernyataan": "315",
  "Naskah metode": "316",
  "Disertasi": "317",
  "Bagian Buku": "318",
  "Majalah Ilmiah Internasional": "319",
  "Majalah Ilmiah Nasional Terakreditasi": "320",
  "Prosiding": "321",
  "majalah Ilmiah Nasional Tidak Terakreditasi": "322",
  "Majalah Ilmiah Terakreditasi": "323",
  "Majalah Ilmiah Tidak Terakreditasi": "324",
  "Karya Tulis Ilmiah": "325",
  "SK": "326",
  "Surat tanda terima pendaftaran": "327",
  "Setiap penelitian": "328",
  "Produk, SK, dan Royalti": "330",
  "Produk, SK, dan lisensi": "331",
  "Bukti makalah": "335",
  "Hasil wawancara": "336",
  "Buku asli/fotokopi": "341",
  "Fotokopi kartu anggota": "352",
  "Fotokopi sertifikat": "354",
  "Fotokopi cover tesis": "360",
  "Surat permohonan": "361",
  "Fotokopi cover skripsi": "377",
  "Izin": "378",
  "Surat Keterangan/Sertifikat": "380",
  "Teori dan/atau Konsep": "386",
  "Fotokopi cover disertasi": "415",
  "Surat Keterangan/Sertifi": "424",
  "Tindakan": "428",
  "Karya tulis": "429",
  "Fotokopi cover": "509",
  "Pasien": "433",
  "Per Dokumen Harian": "435",
  "Per kali": "437",
  "Tanda terima": "512",
  "Juklak": "475",
  "Produk teknologi": "477",
  "JPL": "478",
  "Anggota Aktif": "479",
  "Per orang/jam": "480",
  "Gelar/Ijazah": "481",
  "Naskah awal": "482",
  "Naskah akhir": "483",
  "Ijin prakarsa": "484",
  "Kerangka dasar": "485",
  "Setiap kali": "486",
  "Konsep": "487",
  "Setiap jam": "488",
  "Izasah/Gelar": "489",
  "Proposal": "490",
  "Draft": "513",
  "NIP": "514",
  "Agenda": "515",
  "SPM": "516",
  "SPP": "517",
  "Kuitansi": "518",
  "Pertek": "519",
  "Lembar Disposisi": "520",
  "Arsip": "521",
  "Persen (%)": "522",
  "Indeks": "523",
  "Nilai": "524",
  "WTP": "525",
  "Keputusan": "527",
  "Jaringan": "528",
  "Buku Register": "529",
  "Bulan": "530",
  "Lembar": "531",
  "Hari Kerja": "532",
  "Metadata": "533",
  "Grafik": "534",
  "Analisis": "535",
  "Aduan": "536",
  "Foto": "537",
  "Video": "538",
  "Titik Koordinasi": "539",
  "Titik Lokasi": "540",
  "Rekomendasi": "1145",
  "SKPD": "542",
  "Kasus": "543",
  "Perjanjian": "544",
  "Perusahaan": "545",
  "Koperasi": "546",
  "Kelompok": "1137",
  "Usaha Mikro": "548",
  "LPKS": "549",
  "Koordinasi": "550",
  "Pusat Data": "551",
  "Domain": "552",
  "Sub Domain": "553",
  "Website": "554",
  "Triwulan": "555",
  "Semester": "557",
  "Tugas": "558",
  "Regulasi": "559",
  "Ruang": "560",
  "alat peraga": "778",
  "Alat pelajaran": "777",
  "LPH": "768",
  "Laporan Penilaian Kinerja": "769",
  "SK Organisasi": "766",
  "LPK": "764",
  "Sertifikat, LPK, ST": "765",
  "RPP": "763",
  "Sub Kegiatan": "793",
  "Aset": "1129",
  "Stakeholder": "1130",
  "Dokumen": "1132",
  "Indikator": "1134",
  "Ton": "1135",
  "Ton/Hektar": "1136",
  "Menara": "1138",
  "PKS": "1139",
  "Media": "1140",
  "Organisasi": "1141",
  "Form aduan": "1142",
  "Server Email": "1143",
  "Kelurahan": "1144",
  "Tindak lanjut": "1146",
  "ASN": "1147",
  "Meter": "1148",
  "Objek lahan": "1149",
  "Daftar hadir": "1150",
  "Kategori": "1151",
  "Medali": "1152",
  "Atlet": "1153",
  "Hari": "1154",
  "Wilayah": "1155",
  "Perumahan": "1156",
  "Kilogram": "1157",
  "Kapal": "1158",
  "Sampel": "1159",
  "Konsultasi": "1160",
  "Ekor": "1161",
  "Proses": "1162",
  "Straw (sperma sapi)": "1163",
  "Pasar": "1164",
  "Pelaku usaha": "1165",
  "Jiwa": "1166",
  "Exampler": "1167",
  "Jenis layanan": "1168",
  "Lintas sektor": "1169",
  "Lembaga": "1170",
  "Alat ukur takar timbang": "1171",
  "Perlengkapan": "1172",
  "Jasa": "1173",
  "Setoran": "1174",
  "Bukti Bayar": "1175",
  "SKRD": "1176",
  "Bukti": "1177"
}

//ubah nama bulan 3 huruf menjadi angka dengan format yyyy-mm-dd
function ubahBulan(parm) {
  switch (parm) {
    case 'Jan':
      return '01'
      break;
    case 'Feb':
      return '02'
      break;
    case 'Mar':
      return '03'
      break;
    case 'Apr':
      return '04'
      break;
    case 'May':
      return '05'
      break;
    case 'Jun':
      return '06'
      break;
  }
}

function kinerjahack() {
  var aktifitas = 2 //aktifitas SKP
  var skp = 3 //SKP tahunan
  var tgl = 1 //tanggal
  var kuantitas = 4 //kuantitas
  var jamMulai = 5
  var jamSelesai = 6
  var proses = 7 //proses
  var kegiatan = 9
  var i = 10
  var banyakRow = $('#table tbody tr').length
  var resetRow = 1
  var blnAktif = $('#bln_skp').val()
  var thnAktif = $('#thn_skp').val()

  var objKirim = {
    "tanggal": "",
    "aktifitas": "",
    "qty": "",
    "qtydd": "",
    "jam mulai": "",
    "jam selesai": "",
    "skp": "",
    "id kegiatan": ""
  }

  $('#table tbody td').each(function (e, h) {
    var tglFull, akt, qty, qtydd, mulai, selesai, klas, idkegiatan

    if (e == aktifitas) {
      akt = $(h).text()
      aktifitas += 11
      objKirim["aktifitas"] = akt
      // console.log(akt)
    }

    if (e == skp) {
      // console.log($(h).text())
      klas = klasifikasi[$(h).text()]
      skp += 11
      objKirim["skp"] = klas
      // console.log(klas)
    }

    if (e == tgl) {
      var tglMentah = $(h).text()
      //01 Apr 2022
      // console.log(tglMentah)
      var bln = ubahBulan(tglMentah.substr(3, 3))
      var tanggal = tglMentah.substr(0, 2)
      var tahun = tglMentah.substr(7, 4)

      tglFull = `${tahun}-${bln}-${tanggal}`

      tgl += 11
      objKirim["tanggal"] = tglFull
      // console.log(tglFull)
    }

    if (e == kuantitas) {
      //1 Data
      qtydd = kuant[($(h).text()).match(/[A-Za-z]+/)[0]]
      qty = ($(h).text()).match(/[0-9]+/)[0]
      kuantitas += 11
      // console.log(qty)
      // console.log(qtydd)
      objKirim["qty"] = qty
      objKirim["qtydd"] = qtydd
    }

    if (e == jamMulai) {
      var jamM = $(h).text()
      //08:30:00
      // mulai = jamM.substr(0, 5)
      mulai = "13:30"
      jamMulai += 11
      // console.log(mulai)
      objKirim["jam mulai"] = mulai
    }

    if (e == jamSelesai) {
      var jamS = $(h).text()
      // selesai = jamS.substring(0, 5)
      selesai = "15:30"
      jamSelesai += 11
      // console.log(selesai)
      objKirim["jam selesai"] = selesai
    }

    if (e == kegiatan) {
      idkegiatan = ($($(h).children()[0]).attr('onclick')).match(/\((\d+)/)[1]
      kegiatan += 11
      objKirim["id kegiatan"] = idkegiatan
    }

    if (e == i) {
      // if (tglFull != undefined && akt != undefined && qty != undefined && qtydd != undefined && mulai != undefined && selesai != undefined && klas != undefined ) {
      kirim(objKirim["tanggal"], objKirim["aktifitas"], objKirim["qty"], objKirim["qtydd"], objKirim["jam mulai"], objKirim["jam selesai"], objKirim["skp"], objKirim["id kegiatan"], thnAktif, blnAktif, banyakRow, resetRow, nip)
      resetRow++
      // }
      i += 11
    }
  })

}

function kirim(parmTgl, parmAktifitas, parmKuantitas, parmDd, parmJamMulai, parmJamSelesai, parmKinerja, parmIdKegiatan, parmThnAktif, parmBlnAktif, parmBanyakRow, parmResetRow, parmNip) {

  let urlTambah = "https://kinerjav2.pareparekota.go.id/c_aktifitas/aksi_tambah_skp_30"

  let cariSkp = "https://kinerjav2.pareparekota.go.id/c_aktifitas/cari_skp_30"
  let payloadCariSkp = "bln=3&thn=2022"

  if (location.protocol == 'http:') {
    urlTambah = "http://kinerjav2.pareparekota.go.id/c_aktifitas/aksi_tambah_skp_30"
  }

  let jamMT = "08:30"
  let jamST = "12:00"
  let jamMU = "13:30"
  let jamSU = "15:30"

  nipStafSekolah.forEach(va => {
    if (parmNip == va) {
      jamMT = "07:00"
      jamST = "09:00"
      jamMU = "09:30"
      jamSU = "13:00"
    }
  })


  let payloadTambah = {
    "id_opmt_aktifitas_30": "0",
    "tanggal": parmTgl,
    "aktifitas": parmAktifitas,
    "kuantitas": parmKuantitas,
    "id_dd_kuantitas": parmDd,
    "jam_mulai": jamMT,
    "jam_selesai": jamST,
    "id_opmt_kinerja_utama_detail": parmKinerja
  }

  let payloadUbah = {
    "id_opmt_aktifitas_30": parmIdKegiatan,
    "tanggal": parmTgl,
    "aktifitas": parmAktifitas,
    "kuantitas": parmKuantitas,
    "id_dd_kuantitas": parmDd,
    "jam_mulai": jamMU,
    "jam_selesai": jamSU,
    "id_opmt_kinerja_utama_detail": parmKinerja
  }

  // console.log(payload)
  $('#loadingModal').modal('show')
  fetch(urlTambah, {
    method: 'POST',
    body: JSON.stringify(payloadTambah),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).then(res => {
    return res.text()
  }).then(resp => {
    fetch(urlTambah, {
      method: 'POST',
      body: JSON.stringify(payloadUbah),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(resubah => {
      console.log(resubah.status)
      if (resubah.status == '200') {
        console.log(parmResetRow)
        if (parmResetRow == parmBanyakRow) {
          $('#loadingModal').modal('hide')
        }
      }
      return resubah.text()
    }).then(respubah => {
      console.log(respubah)
      cari_skp()
    }).catch(err => {
      alert(err)
      $('#loadingModal').modal('hide')
    })
  }).catch(errr => {
    alert(errr)
    $('#loadingModal').modal('hide')
  })
}

function tambahbaru() {
  let urlTambah = "http://kinerjav2.pareparekota.go.id/c_aktifitas/aksi_tambah_skp_30"

  if (location.protocol == 'https:') {
    urlTambah = "https://kinerjav2.pareparekota.go.id/c_aktifitas/aksi_tambah_skp_30"
  }
  $('#loadingModal').modal('show')
  fetch(`${gs}?nip=${nip}`)
    .then(res => {
      return res.text()
    })
    .then(resp => {
      let hasil = JSON.parse(resp)
      hasil.forEach(bkn => {
        fetch(urlTambah, {
          method: 'POST',
          body: JSON.stringify(bkn),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(res => {
          return res.text()
        }).then(resp => {
          $('#loadingModal').modal('hide')
        }).catch(errr => {
            $('#loadingModal').modal('show')
            alert(errr)
          })
      });
      alert("Berhasil...")
      cari_skp()
    }).catch(err => {
      $('#loadingModal').modal('hide')
      alert(err)
    })
}