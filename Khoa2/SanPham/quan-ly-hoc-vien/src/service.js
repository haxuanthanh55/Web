export const xepLoai=(cpa)=>{
    if(cpa>=3.6) return 'Xuất sắc';
    if(cpa>=3.2) return 'Giỏi';
    if(cpa>=2.5) return 'Khá';
    if(cpa>=2.0) return 'Trung bình';
    return 'Yếu';
}
export const chuanHoaNghiepVu=(e)=>{
    const xepLoaiCuoi=xepLoai(e.cpa);
    return {...e,xepLoaiCuoi};
}