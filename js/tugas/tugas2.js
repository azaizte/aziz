
let total_in_day = 0
let queque_patiens = 0
let total_in_room = 0
const hour_start = 8
const hour_end = 18 





function update_total_in_day(){
    total_in_day = total_in_day + 1
}

function update_total_in_room() {
    total_in_room = total_in_room + 1


}

function exit_room() {
    total_in_room = total_in_room -1
    alert('keluar')
}






function update_queque(queque) {
    
        if (queque == 'out') {
            alert('update')
            update_total_in_room()
            queque_patiens = queque_patiens -1
        }
     else  (queque== 'in') 
        queque_patiens = queque_patiens +1
    
}





function patiens_in_day() {
    if (total_patiens_in_day < 100) {
        alert('daftar')
    }   else {
            alert('ruang penuh')
            update_queque('in')
            return
        } 
}



// function input_hour_in(hour) {

//     if (hour >= hour_start && hour <= hour_end) {
//         alert('buka')
//         console.log('buka')
//     }   else {
//             alert('klinik belum buka')
//             return
//         }                   

// }


function hour_in(hour){
    //cek apakah klinik buka atau tutup
    if (hour >= 8 && hour <=18) {
    alert("silahkan masuk klinik")
    
    //cek apakah kuota harian masih ada atau penuh
    if (total_in_day < 100){
            update_total_in_day()
            alert("silahkan masuk ruangan pemeriksaan")
           

                //cek apakah ruangan sudah penuh atau belum
                if (total_in_room < 5){
                    update_total_in_room()
                    alert("silahkan")
                    
                } else {
                    console.log("Ruangan melebihi kapasitas harap menunggu")
                    //update antrian
                    update_queue("in")
                    return
                        

                }

        } else {
            alert("Maaf Klinik telah mencapai batas maksimal pasien harian")
        }
    } else {    
        alert("Klinik Tutup")
    }
}
