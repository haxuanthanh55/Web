export const renderTable=(ds)=>{
    const tbody=document.querySelector('#hien-thi');
    if(ds.length===0){
        tbody.innerHTML=`<tr><td colspan="8" class="text-center">Không có dữ liệu</td></tr>`;
        return;
    }
    tbody.innerHTML=ds.map(e=>{
        let canhBao='';
        let hocBong='';
        let haBac='';
        let noMon='';
        let hocPhi='Chưa đóng'
        if(e.canhBao===true){
            canhBao='canh-bao';
            haBac='<br><span class="text-error">Hạ bậc</span>';
            noMon='text-error';
        }
        if(e.hocBong===true){
            hocBong='<br><span class="hocbong">Học bổng</span>';
        }
        if(e.daDongHocPhi===true){
            hocPhi='Đã đóng';
        }
        return `
        <tr class="${canhBao}">
            <td>${e.maSV}</td>
            <td>${e.tenSV} ${hocBong}</td>
            <td>${e.gpa}</td>
            <td>${e.cpa}</td>
            <td>${hocPhi}</td>
            <td class="${noMon}">${e.phanTramNo}</td>
            <td>${e.renLuyen}</td>
            <td>${e.xepLoaiCuoi} ${haBac}</td>
            <td class="cot-chuc-nang">
                <button class="btn-sua" data-masv="${e.maSV}">Sửa</button>
                <button class="btn-xoa" data-masv="${e.maSV}">Xóa</button>
            </td>
        </tr>`
    }).join('');
}
export const inTBaoLoi=(e)=>{
    document.querySelector('#hien-thi').innerHTML=`<tr><td colspan="8" class="text-center text-error">${e}</td></tr>`;
}
export const renderPhanTrang=(tongSoTrang, trangHienTai)=>{
    const container=document.querySelector('#phan-trang');
    if(!container)return;
    let html='';
    for(let i=1;i<=tongSoTrang;i++){
        let classHienTai='';
        if(i===trangHienTai){
            classHienTai='btn-active';
        }
        html+=`<button class="btn-trang ${classHienTai}" data-trang="${i}">${i}</button> `;
    }
    container.innerHTML=html;
}
export const hienThiLoading = (dangTai) => {
    const loading = document.querySelector('#loading');
    const bang = document.querySelector('.table-ds');
    if (loading && bang) {
        if (dangTai === true) {
            loading.style.display = 'block';
            bang.style.display = 'none';
        } else {
            loading.style.display = 'none';
            bang.style.display = 'table';
        }
    }
};