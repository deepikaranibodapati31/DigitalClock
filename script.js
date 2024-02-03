
function Clock(){

const a =new Date();

const b=a.getHours();
const c=a.getMinutes();
const d=a.getSeconds();

document.getElementById("demo").innerHTML=`${b} : ${c} : ${d}`
}
setInterval(Clock,1000)

  