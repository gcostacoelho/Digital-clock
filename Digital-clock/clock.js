setInterval (function(){
    let newHourDate = new Date();
    let hour = newHourDate.getHours();
    let min = newHourDate.getMinutes();
    let sec = newHourDate.getSeconds();

    min = zero(min);
    sec = zero(sec);
    
    let date = newHourDate.getDate();
    let month = newHourDate.getMonth();
    let year = newHourDate.getFullYear();

    var newMon = month + 1;

    document.getElementById('hour').textContent = hour + ':' + min + ':' + sec;
    document.getElementById('date').textContent = date + '/' + newMon + '/' + year;
},1000)

function zero(x){
       if (x < 10){
            x = '0' + x;
        } return x;
}