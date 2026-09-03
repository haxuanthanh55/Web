export const renderTable=(ds)=>{
    const tbody=document.querySelector('#hien-thi');
    if(ds.length===0){
        tbody.innerHTML=`<tr><td colspan="7" class="text-center">Không có dữ liệu</td></tr>`;
        return;
    }
    tbody.innerHTML=ds.map(e=>`
        <tr>
            <td>${e.maSV}</td>
            <td>${e.tenSV}</td>
            <td>${e.gpa}</td>
            <td>${e.cpa}</td>
            <td>${e.daDongHocPhi? 'Đã đóng': 'Còn nợ'}</td>
            <td>${e.phanTramNo}</td>
            <td>${e.xepLoaiCuoi}</td>
        </tr>`).join('');
}
export const inTBaoLoi=(e)=>{
    document.querySelector('hien-thi').innerHTML=`<tr><td colspan="7" class="text-center text-error">${e}</td></tr>`;
}