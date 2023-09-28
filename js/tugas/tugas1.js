
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



function nyoba() {
  alert('berhasil')
}