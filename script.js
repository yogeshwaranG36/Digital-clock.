setInterval(displaytime,1000 );
function displaytime() 
{
    let datetime =new Date();
    let hrs =datetime.getHours(); 
    let min =datetime.getMinutes(); 
    let sec =datetime.getSeconds();
    if(hrs>12)
    {
        hrs = hrs - 12;
        document.getElementById("fn").innerHTML="PM"
    }
    document.getElementById("hrs").innerHTML=con(hrs);
    document.getElementById("min").innerHTML=con(min);
    document.getElementById("sec").innerHTML=con(sec);
}
function con(num)
{
    return num<10?"0"+num:num; 
}
let d= new Date()
let day=d.getDate();
let mon=1 + d.getMonth();
let yer=d.getFullYear();
let span=document.getElementById("date").innerHTML=day+"/"+mon+"/"+yer;