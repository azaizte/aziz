const btn_search = document.getElementById("btnsearch");
const search_name = document.getElementById("inputname")[0];
const search_password = document.getElementById("inputPassword2")[0];
const data_section = document.getElementById("add_data")[0];

btn_search.addEventListener("click", (event) => {
  searchData();
});

function searchData() {
  if (search_name != "" && search_password != "") {
    show_data();
    wa();
    alert("berhasil checkout");
  } else {
    alert("anda belum login");
  }
}

function show_data() {
  const data_name = JSON.parse(localStorage.getitem("name"));
  const data_email = JSON.parse(localStorage.getitem("email"));
  const data_show = JSON.parse(localStorage.getItem("data_show"));
  data_show.push({
    name: data_name,
    password: data_password,
  });
  localStorage.setItem("data_show", JSON.stringify(data_show));
  if (typeof data_show !== "undefined") {
    $(`.data`).remove();
    for (let i = 0; i < data_show.length; i++) {
      $(`#add_data`).append(
        ` <tr id="` +
          i +
          `" class+"data">
      <td></td>
      <td>` +
          tambah_data[i].name +
          `</td>
      
      <td>` +
          tambah_data[i].password +
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

function data() {
  const data_name = JSON.parse(localStorage.getitem("name"));
  const data_email = JSON.parse(localStorage.getitem("email"));
  const data_password = JSON.parse(localStorage.getitem("password"));
  const data_phone = JSON.parse(localStorage.getitem("phone"));

  const orderan_quantity = JSON.parse(localStorage.getItem("quantity"));
  const orderan_total = JSON.parse(localStorage.getItem("total"));
  const orderan_pesanan = JSON.parse(localStorage.getItem("pesanan"));
  const data = JSON.parse(localStorage.getItem("data"));
  data.push({
    quantity: orderan_quantity,
    total: orderan_total,
    pesanan: orderan_pesanan,
    name: data_name,
    email: data_email,
    password: data_password,
    phone: data_phone,
  });
  localStorage.setItem("data", JSON.stringify(data));

  const search_value = search_name.value.toLowerCase();
  const search_value2 = search_password.value.toLowerCase();
  const data_filtered = data.clice(0);
}

function wa() {
  // const formData = new FormData(form);
  // const data = new URLSearchParams(formData);
  // const objData = Object.fromEntries(data);
  const message = formatmessage();
  window.open("http://wa.me/6281283862685?text=" + encodeURIComponent(message));
  console.log(message);

  // format pesan whatsapp

  const formatmessage = (obj) => {
    return `
  Data Customer
    Nama: ${JSON.parse(localStorage.getItem("name"))}
   
    password: ${JSON.parse(localStorage.getItem("password"))}
    Email:  ${JSON.parse(localStorage.getItem("email"))}
    No HP: ${JSON.parse(localStorage.getItem("phone"))}
    
  
  Data Pesanan
  ${JSON.parse(localStorage.getItem("quantity"))}
  ${JSON.parse(localStorage.getItem("total"))}
  ${JSON.parse(localStorage.getItem("pesanan"))}

  
  terima kasih.`;
  };
}
// data_section.innerHTML = "";
// for (let i = 0; i < data_filtered.length; i++) {
//   if (data_filtered[i].toLowerCase().includes(search_value)) {
//     data_section.innerHTML += "<td>" + data_filtered[i] + "</td>";
//   }
// }

/* <td>` +
          tambah_data[i].email +
          `</td>
          <td>` +
          tambah_data[i].phone +
          `</td> */
