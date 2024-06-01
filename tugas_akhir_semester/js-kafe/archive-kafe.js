function show_data() {
  let tambah_archive = JSON.parse(localStorage.getItem("name")) || [];
  if (typeof tambah_archive != "undifined") {
    // jQuery(".data").remove();
    for (let i = 0; i < tambah_archive.length; i++) {
      jQuery("#tableBody").append(
        `<tr class= "text-center" id="` +
          i +
          `" class="data">
        
         
                    <td>` +
          tambah_archive[i].name +
          `</td>
                    <td>` +
          tambah_archive[i].email +
          `</td>
                    <td>` +
          tambah_archive[i].password +
          `</td>
                    <td>` +
          tambah_archive[i].phone +
          `</td>
         
          
         
\
                    <td class= "text-center">
                    <button class="btn mx-auto rounded-4 bg-gradient btn-primary border-radius-4" onclick="hapus_data(` +
          `')">keluar</button>
         
          </td>
                </tr>`
      );
    }
  }
}

show_data();

//tidak difungsikan dulu

// function hapus_data(id, owner, jenis, jam_masuk, jam_keluar, total_jam, bayarMobil, bayarMotor) {
//   let arr = JSON.parse(localStorage.getItem("kendaraan"));
//   _.find(arr, ["owner", owner]);
//   _.find(arr, ["jenis", jenis]);
//   _.find(arr, ["jam_masuk", jam_masuk]);
//   jam_keluar = prompt("masukan jam keluar:");
//   if (jam_keluar < jam_masuk) {
//     return alert("maaf jam tidak valid");
//   }
//   // kalkulasi pembayaran parkir mobil || motor
//   total_jam = jam_keluar - jam_masuk;
//   if (jenis == "mobil") {
//     bayarMobil = total_jam * 5000;
//     if (bayarMobil == 0) {
//       alert("Wios Tong Mayar, jug gera uwih");
//     } else {
//       alert(owner + " anda harus membayar " + bayarMobil);
//     }
//   } else {
//     bayarMotor = total_jam * 2000;
//     if (bayarMotor == 0) {
//       alert("Wios Tong Mayar, jug gera uwih");
//     } else {
//       alert("anda harus membayar " + bayarMotor);
//     }
//   }
//   // hapus data array
//   _.remove(arr, { owner: owner });

//   //tambah data ke archive parkir

//   tambah_archive.push({
//     owner: owner,
//     jenis: jenis,
//     tanggal: "ini tanggal",
//     pay: bayarMobil || bayarMotor,
//   });
//   localStorage.setItem("Archive Data", JSON.stringify(tambah_archive));
//   $(`#${id}`).remove();
//   localStorage.setItem("kendaraan", JSON.stringify(arr));
// }

/**
 * function untuk nambah data ke data archive parkir
 */
