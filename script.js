
function updatetime(){
    const current = new Date().getMonth()+1;
    console.log(current)
    const birthday = new Date(`june 14 ${current+18} 00:00:00`);
    console.log(birthday)

    const curdate = new Date();
    console.log(curdate)
    const diff = birthday-curdate;
    console.log(diff)
    const d =Math.floor(diff/1000/60/60/24);
        console.log(d)
    const h =Math.floor((diff/100/60/60)%24);
    const m =Math.floor((diff/1000/60)%60);
    const s =Math.floor((diff/1000)%60);
    days.innerHTML =d<10?"0"+d:d;
    hours.innerHTML =h<10?"0"+h:h;
    minutes.innerHTML =m<10?"0"+m:m;
    seconds.innerHTML =s<10?"0"+s:s;
}

setInterval(updatetime,1000)