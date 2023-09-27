let input = prompt ('jam masuk', '')





const hour_start = 8
const hour_end = 18 

function input_hour_in(hour) {

    if (hour >= hour_start && hour <= hour_end) {
        alert('buka')
        console.log('buka')
    }   else {
            alert('klinik belum buka')
            return
        }                   

}




const total_patiens_per_room = 5
let total_in_room = 0

function apdate_total_in_room() {
    total_in_room = total_in_room + 1

    if (total_in_room < 5) {
       alert('masuk')
    }   else {
        alert('kelebihan')
        return
        } 

}




let queque_patiens = 0

function update_queque() {
    
        if (queque_patiens >= 1) {
            alert('update')
            update_total_in_room()
            queque_patiens = queque_patiens -1
        }
     else  (queque== 'in') {
        queque_patiens = queque_patiens -1
    }
}




let total_patiens_in_day = 0
const total_patiens_per_day = 100

function patiens_in_day() {
    if (total_patiens_in_day < 100) {
        alert('daftar')
    }   else {
            alert('ruang penuh')
            update_queque('in')
            return
        } 
}

