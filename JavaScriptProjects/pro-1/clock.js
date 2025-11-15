
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

    document.getElementsByClassName("H")[0].innerHTML = CurentTime ;
    document.getElementsByClassName("M")[0].innerHTML = M ;
    
    let myday = [ "Sunday"  ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday" ]
     mymonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     day = myDate.getDate()

     let currentDate = myday[myDate.getDay()] + "," + mymonth[myDate.getMonth()] + day ;
     
     document.getElementsByClassName("date")[0].innerHTML = currentDate ;
}

myTime() ;
setInterval(function(){
    myTime() ;
})