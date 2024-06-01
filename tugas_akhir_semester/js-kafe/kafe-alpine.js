document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "robusta", foto: "1 - salin.jpg", price: 20000 },
      { id: 2, name: "arabica", foto: "2 - salin.jpg", price: 30000 },
      { id: 3, name: "capuccino", foto: "3 - salin.jpg", price: 40000 },
      { id: 4, name: "expresso", foto: "5 - salin.jpg", price: 50000 },
      { id: 5, name: "wine", foto: "6 - salin.jpg", price: 60000 },
    ],
  }));

  Alpine.store("cart", {
    items: JSON.parse(localStorage.getItem("pesanan")) ? JSON.parse(localStorage.getItem("pesanan")) : [],
    total: JSON.parse(localStorage.getItem("total")) ? JSON.parse(localStorage.getItem("total")) : 0,
    quantity: JSON.parse(localStorage.getItem("quantity")) ? JSON.parse(localStorage.getItem("quantity")) : 0,
    add(newItem) {
      //cek apakah ada barang yag sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      $("#checkoutBtn").removeClass("disabled");
      $("#checkoutBtn").attr("href");

      // jika blm ada / cart kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sdh ada, cek barangnya beda / sama dgn ada di cart
        this.items = this.items.map((item) => {
          //jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika sdh ada, tambah quantity dan total
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
      localStorage.setItem("pesanan", JSON.stringify(this.items));
      localStorage.setItem("total", JSON.stringify(this.total));
      localStorage.setItem("quantity", JSON.stringify(this.quantity));

      //console.log(this.total);
    },

    remove(id) {
      //ambil item yg mau di remove
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lbh dr 1
      if (cartItem.quantity > 1) {
        //telusuri satu satu
        this.items = this.items.map((item) => {
          // jika bkn barang yg di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
        $(`#${id}`).remove();
        localStorage.setItem("quantity", JSON.stringify(this.quantity));
        let quantity2 = new Array();
        quantity2 = JSON.parse(localStorage.getItem("quantity")) ? JSON.parse(localStorage.getItem("quantity")) : 0;
        if (quantity2 < 1) {
          $("#checkoutBtn").addclass("disabled");
          $("#checkoutBtn").attr("href");
        }
      }
      localStorage.setItem("pesanan", JSON.stringify(this.items));
      localStorage.setItem("total", JSON.stringify(this.total));
      localStorage.setItem("quantity", JSON.stringify(this.quantity));
    },
  });
});

// konversi rupiah
const rupiah = (number) => {
  // if (number <= 0) {
  //   number = 0;
  // }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
//form validation
function cek() {
  const checkoutButton = document.querySelector(".href");
  checkoutButton.disabled = true;
  let list = new Array();
  list = JSON.parse(localStorage.getItem("quantity")) ? JSON.parse(localStorage.getItem("quantity")) : 0;
  if (list !== 0) {
    checkoutButton.disabled = false;
    checkoutButton.classList.remove("disabled");
    $("#checkoutBtn").removeClass("disabled");
    $("#checkoutBtn").attr("href");
  } else {
    return false;
  }
}
cek();

//kirim data ketika tombol checkout diklik
checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // const formData = new FormData(form);
  // const data = new URLSearchParams(formData);
  // const objData = Object.fromEntries(data);
  const message = formatmessage();
  window.open("http://wa.me/6281283862685?text=" + encodeURIComponent(message));
  console.log(message);
});

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

// TOTAL: ${rupiah(total)}
// ${(list) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`}
