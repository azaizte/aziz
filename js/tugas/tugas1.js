
let userName = prompt("siapa anda", '');

if (userName === 'aziz') {

  let pass = prompt('Password?', '');

  if (pass === 'stfq') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}


let name = ''
let password = ''
let orang_login = ''


function input_data() {
  
}


function hapus() {
  if (userName == '' || pass == '') {
    alert('isi')
  }
}







// const form = document.querySelector('.daftar')
// const info = document.querySelector('.name')


 
  

//   const name = form.name.value
//   const polaregex = /^[a-zA-Z]{1,15}$/

//   if (polaregex.test(name)) {
//     info.textContent = 'nama valid'
//     console.log(form.name.value)
//   } else {
//     info.textContent = 'isi hanya huruf kapital dan besar'
//   }

