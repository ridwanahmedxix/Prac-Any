
function myTime() {
    let myDate = new Date() ;
    let hr,min = (myDate.getMinutes() < 10 ) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
       sec = (myDate.getSeconds() < 10 ) ? "0" + myDate.getSeconds() : myDate.getSeconds() ,
       M = (myDate.getHours() >=12 ) ? "PM" :"AM" ;


    if(myDate.getHours () == 0 ){
        hr = 12 ;
    }else if (myDate.getHours () > 12) {
       hr = myDate.getHours() - 12 ;
    }else{
      hr = myDate.getHours() ;
    }

    let CurentTime = hr + ":" + min + ":" + sec + ":"



}