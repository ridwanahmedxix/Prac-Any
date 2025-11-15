
function myTime() {
    let myDate = new Date() ;
    let hr,min = (myDate.getMinutes() < 10 ) ? "0" + myDate.getMinutes() : myDate.getMinutes() ;
}