export const xepLoai=(cpa)=>{ //xếp loại
    if(cpa>=3.6) return 'Xuất sắc';
    if(cpa>=3.2) return 'Giỏi';
    if(cpa>=2.5) return 'Khá';
    if(cpa>=2.0) return 'Trung bình';
    return 'Yếu';
}
export const chuanHoaNghiepVu=(e)=>{
    let xepLoaiCuoi=xepLoai(e.cpa);
    let canhBao=false;
    let hocBong=false;
    //nợ môn >5%
    if(e.phanTramNo>5){
        canhBao=true;
        if(xepLoaiCuoi==='Xuất sắc') xepLoaiCuoi='Giỏi';
        else if(xepLoaiCuoi==='Giỏi') xepLoaiCuoi='Khá';
        else if(xepLoaiCuoi==='Khá') xepLoaiCuoi='Trung bình';
    }
    if(e.phanTramNo===0 && e.daDongHocPhi===true &&e.renLuyen >=80 &&e.gpa >=3.2){
        hocBong=true;
    }
    return {...e,xepLoaiCuoi,canhBao,hocBong};
}
