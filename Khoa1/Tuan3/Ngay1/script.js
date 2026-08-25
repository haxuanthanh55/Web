const room=document.querySelector('#room-101');
room.classList.remove("available");
room.classList.add("booked");
const room2=document.querySelector('#room-102');
room2.classList.toggle("booked");
const room3=document.querySelector("#room-103");
room3.classList.remove("cleaning");
room3.classList.add("available");
if(room3.classList.contains("vip")){
    room3.textContent+="-Ưu tiên";
}