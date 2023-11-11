let nama = [];
let password = [];


function simpan_data() {
  nama = document.getElementById("username");
  password = document.getElementById("password");
  nama.push(nama.values)
  password.push(password.values)
  console.log(simpan_data)
  alert(masuk)
}

function hapus_data() {
  nama = [];
  password = [];
  nama.pop(nama.values)
  password.pop(password.values)
}

function register() {
  let register_nama = document.getElementById("username").value;
  let register_password = document.getElementById("password").value;
  if (nama != "" && password != "") {
    alert("data sudah ada, silahkan login");
  } else {
    if (register_nama == "" || register_password == "") {
      alert("Mohon masukan data");
    } else {
      simpan_data();
    }
  }
}

function login() {
  let login_nama = document.getElementById("username").value;
  let login_password = document.getElementById("password").value;
  if (nama == login_nama && password == login_password) {
    alert("login sukses");
  } else {
    alert("login gagal");
  }
}

function logout() {
  if (nama == "" && password == "") {
    alert("anda belum login");
  } else {
    hapus_data();
    alert("anda telah logout");
  }
}



["username1"=>"password1", "username2"=>"password2"]