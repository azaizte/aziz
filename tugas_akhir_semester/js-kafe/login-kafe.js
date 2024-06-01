// Klik di luar elemen
const navbar = document.querySelector(".navbar");
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
// const sc = document.querySelector('#shopping-cart-button');

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }

  if (!sb.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }

  // if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
  //   shoppingCart.classList.remove('active');
  // }
});

//ambil data user dari form
function register() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let userarray = new Array();
  userarray = JSON.parse(localStorage.getItem("name")) ? JSON.parse(localStorage.getItem("name")) : [];
  if (
    userarray.some((v) => {
      return v.name == name;
      alert("data sudah ada");
    })
  ) {
  } else {
    if (name !== "" && password !== "" && phone !== "" && email !== "") {
      userarray.push({
        name: name,
        password: password,
        phone: phone,
        email: email,
      });
      alert("berhasil daftar");
      localStorage.setItem("name", JSON.stringify(userarray));
      add_data();
    } else {
      alert("masukkan data dengan benar");
    }
  }
}

function add_data() {
  show_data();
}

function show_data() {
  // alert("data akan di tampilkan");
  let tambah_data = JSON.parse(localStorage.getItem("name"));
  if (typeof tambah_data !== "undefined") {
    $(`.data`).remove();
    for (let i = 0; i < tambah_data.length; i++) {
      $(`#add_data`).append(
        ` <tr id="` +
          i +
          `" class+"data">
      <td></td>
      <td>` +
          tambah_data[i].name +
          `</td>
      <td>` +
          tambah_data[i].email +
          `</td>
      <td>` +
          tambah_data[i].password +
          `</td>
      <td>` +
          tambah_data[i].phone +
          `</td>
          <td><button onclick="hapus_data(` +
          i +
          `,'` +
          tambah_data[i].name +
          `')">Hapus Data</button></td>
      </tr>
      `
      );
    }
  }
}

function login() {
  //ambil data dr form
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  let userarray = new Array();
  userarray = JSON.parse(localStorage.getItem("name")) ? JSON.parse(localStorage.getItem("name")) : [];
  if (
    userarray.some((v) => {
      return v.name == name && v.password == password && v.phone == phone && v.email == email;
      alert("login sukses");
    })
  ) {
    let curent_user = userarray.filter((v) => {
      return v.name == name && v.password == password && v.phone == phone && v.email == email;
    })[0];

    localStorage.setItem("userlogin", JSON.stringify(curent_user));
  } else {
    name == "";
    alert("masukan data");
  }
}

function logout() {
  localStorage.removeItem("userlogin");
}

function hapus_data(id, name) {
  $(`#${id}`).remove();
  let userarray = JSON.parse(localStorage.getItem("name"));
  $(userarray, { name: name }).remove();
  localStorage.setItem("name", JSON.stringify(userarray));
}

//search
document.querySelector("#search").addEventListener("keyup", function searchTable() {
  //Dapatkan data dari input search
  const searchValue = document.querySelector("#search").value.toUpperCase();
  //Dapatkan semua baris body tabel
  const tableLine = document.querySelector("#add_data").querySelectorAll("tr");
  //for loop #1 (digunakan untuk melewatkan semua baris)
  for (let i = 0; i < tableLine.length; i++) {
    var count = 0;
    //Dapatkan semua kolom dari setiap baris
    const lineValues = tableLine[i].querySelectorAll("td");
    //for loop #2 (digunakan untuk meneruskan semua kolom)
    for (let j = 0; j < lineValues.length - 1; j++) {
      //Periksa apakah ada kolom baris yang dimulai dengan string pencarian masukan
      if (lineValues[j].innerHTML.toUpperCase().startsWith(searchValue)) {
        count++;
      }
    }
    if (count > 0) {
      //Jika ada kolom yang berisi nilai pencarian, blok tampilan
      tableLine[i].style.display = "";
    } else {
      //Jika tidak, tidak tampilkan apa pun
      tableLine[i].style.display = "none";
    }
  }
});

/**
 * pemisah dom

//kaga kepake js DOM
//pemesanan
let total = 0;
let hasiltotal = document.getElementById("hasiltotal");
let harga = 0;

const listbarang = document.querySelectorAll("#item");
//console.log(listbarang);

listbarang.forEach((item) => {
  item.addEventListener("click", function (e) {
    var pilihmenu = e.target;
    //console.log(pilihmenu);
    harga = pilihmenu.querySelector("#cost");
    //console.log(harga);
    //console.log(harga.innerHTML);
    if (pilihmenu.classList.contains("pilih")) {
      pilihmenu.classList.remove("pilih");
      total -= parseFloat(harga.innerHTML);
    } else {
      pilihmenu.classList.add("pilih");
      total += parseFloat(harga.innerHTML);
    }
    //console.log(total);
    hasiltotal.innerHTML = "total : Rp " + total;
  });
});
 */

show_data();
