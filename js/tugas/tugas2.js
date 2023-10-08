
let total_in_day = 0
let queque_patiens = 0
let total_in_room = 0
const hour_start = 8
const hour_end = 18 





function update_total_in_day() {
    total_in_day = total_in_day + 1
}

function update_total_in_room() {
    total_in_room = total_in_room + 1


}


//tambahan logika
function queque_nunggu() {
    if (total_in_room <= 5) {
        queque_patiens = queque_patiens + 1
    }
    else if (total_in_room > 5) {
        
    }
}




function update_queque(queque) {
    
        if (queque == 'out') {
            alert('queque keluar')
            queque_nunggu()
            queque_patiens = queque_patiens -1
        }
     else if (queque == 'in') {
        //update_total_in_room()
        alert('queque masuk')
        queque_patiens = queque_patiens +1
        }
}



function exit_room() {
    total_in_room = total_in_room -1
    total_in_day = total_in_day -1
    update_queque('out')
    alert('keluar')
    
}



function cek_antrian() {
    if (queque_patiens <= 5) {
        console.log('ada antrian')
    }
    else {
        console.log('gaada')
    }
}






function hour_in(hour){
    //cek apakah klinik buka atau tutup
    if (hour >= 8 && hour <=18) {
    alert("klinik buka")
    
    //cek apakah kuota harian masih ada atau penuh
    if (total_in_day < 100){
            update_total_in_day()
            alert("silahkan antri ruangan ")
           

                //cek apakah ruangan sudah penuh atau belum
                if (total_in_room <= 5){
                    update_total_in_room()
                    alert("silahkan masuk ruangan")
                    
                    
                } else {
                    console.log("Ruangan melebihi kapasitas harap menunggu")
                    alert('harap menunggu')
                    update_queque('in')    
                }

        } else {
            alert("Maaf Klinik telah mencapai batas maksimal pasien harian")
        }
    } else {    
        alert("Klinik Tutup")
    }
}
