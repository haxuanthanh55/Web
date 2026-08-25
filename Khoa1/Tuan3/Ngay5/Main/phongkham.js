let congViecNhom=[
    {id:1,tenTask:"Thiết kế Database",hoanThanh:false}
];

function luuTienDo(){
    const tienDo=JSON.stringify(congViecNhom);
    localStorage.setItem('DataNhom12',tienDo);
}

function taiTienDo(){
    const layTuKho=localStorage.getItem('DataNhom12');
    if(layTuKho){
        try{
            congViecNhom=JSON.parse(layTuKho);
        }
        catch{
            congViecNhom=[];
        }
    }
}
function chuyenTrangThai(idCanDoi){
    for(let i=0;i<congViecNhom.length;i++){
        if(congViecNhom[i].id===idCanDoi){
            congViecNhom[i].hoanThanh=!congViecNhom[i].hoanThanh;
            break;
        }
    }
    luuTienDo();
}
taiTienDo();
chuyenTrangThai(1);
console.log(congViecNhom);