import { fetchDuLieu } from "./api.js";
import { chuanHoaNghiepVu,duLieuTrang} from "./service.js";
import { renderTable,inTBaoLoi ,renderPhanTrang, hienThiLoading} from "./ui.js";
import { kiemTraHopLe } from "./validation.js";
import { luuVaoBoNho, docTuBoNho } from "./utils.js";
let state={
    danhSach:[],trangHienTai:1,soLuong:8,tuKhoa:''
}
const khoiTao=async()=>{
    try{
        hienThiLoading(true);
        const dataCu = docTuBoNho('danhSachSV');
        if (dataCu) {
            state.danhSach = dataCu;
        } else {
            const duLieuGoc = await fetchDuLieu();
            state.danhSach = duLieuGoc.map(e => chuanHoaNghiepVu(e));
            luuVaoBoNho('danhSachSV', state.danhSach);
        }
        hienThiLoading(false);
        renderAll();
    }catch(error){
        hienThiLoading(false);
        inTBaoLoi(error.message);
    }
}
const renderAll=()=>{
    let danhSachLoc=state.danhSach;
    if (state.tuKhoa !== '') {
        const tuKhoaThuong = state.tuKhoa.toLowerCase();
        danhSachLoc = danhSachLoc.filter(e => 
            e.tenSV.toLowerCase().includes(tuKhoaThuong) || 
            e.maSV.toLowerCase().includes(tuKhoaThuong)
        );
    }
    let tongSoTrang=parseInt(danhSachLoc.length/state.soLuong);
    let phanDu=danhSachLoc.length%state.soLuong;
    if(phanDu>0){
        tongSoTrang=tongSoTrang+1;
    }
    const hienThi=duLieuTrang(danhSachLoc,state.trangHienTai,state.soLuong);
    renderTable(hienThi);
    renderPhanTrang(tongSoTrang,state.trangHienTai);
    const nutTrang=document.querySelectorAll('.btn-trang');
    nutTrang.forEach(e=>{
        e.addEventListener('click',()=>{
            state.trangHienTai=parseInt(e.dataset.trang);
            renderAll();
        });
    });
};
const oTimKiem = document.querySelector('#o-tim-kiem');
let thoiGianCho = null;
if (oTimKiem) {
    oTimKiem.addEventListener('input', (event) => {
        hienThiLoading(true);
        clearTimeout(thoiGianCho);
        thoiGianCho = setTimeout(() => {
            state.tuKhoa = event.target.value.trim();
            state.trangHienTai = 1;
            renderAll(); 
            hienThiLoading(false);
        }, 800);
    });
}
khoiTao();
const modal = document.querySelector('#modal-sv');
const btnMoModal = document.querySelector('#btn-mo-modal');
const btnDongModal = document.querySelector('#btn-dong-modal');
const editIndexInput = document.querySelector('#edit-index');
const modalTitle = document.querySelector('#modal-title');
if (btnMoModal) {
    btnMoModal.addEventListener('click', () => {
        modalTitle.innerText = "Thêm sinh viên mới";
        editIndexInput.value = "-1";
        document.querySelector('#them-maSV').value = '';
        document.querySelector('#them-tenSV').value = '';
        document.querySelector('#them-gpa').value = '';
        document.querySelector('#them-cpa').value = '';
        document.querySelector('#them-phanTramNo').value = '';
        document.querySelector('#them-renLuyen').value = '';
        document.querySelector('#them-hocPhi').checked = false;
        modal.showModal();
    });
}
if (btnDongModal) {
    btnDongModal.addEventListener('click', () => {
        modal.close(); 
    });
}
const nutLuuThem = document.querySelector('#btn-luu-them');
if (nutLuuThem) {
    nutLuuThem.addEventListener('click', () => {
        const maSV = document.querySelector('#them-maSV').value.trim();
        const tenSV = document.querySelector('#them-tenSV').value.trim();
        const gpa = parseFloat(document.querySelector('#them-gpa').value) || 0;
        const cpa = parseFloat(document.querySelector('#them-cpa').value) || 0;
        const phanTramNo = parseFloat(document.querySelector('#them-phanTramNo').value) || 0;
        const renLuyen = parseFloat(document.querySelector('#them-renLuyen').value) || 0;
        const daDongHocPhi = document.querySelector('#them-hocPhi').checked;
        const svData = { maSV, tenSV, gpa, cpa, phanTramNo, renLuyen, daDongHocPhi };
        if (!kiemTraHopLe(svData)) return;
        const svChuanHoa = chuanHoaNghiepVu(svData);
        const indexSua = parseInt(editIndexInput.value);
        if (indexSua === -1) {
            state.danhSach.unshift(svChuanHoa); 
        } else {
            state.danhSach[indexSua] = svChuanHoa; 
        }
        luuVaoBoNho('danhSachSV', state.danhSach);
        modal.close();
        state.trangHienTai = 1;
        renderAll();
    });
}
const modalXoa = document.querySelector('#modal-xoa');
const btnDongXoa = document.querySelector('#btn-dong-xoa');
const btnXacNhanXoa = document.querySelector('#btn-xac-nhan-xoa');
const xoaMaSVText = document.querySelector('#xoa-masv-text');
let maSVDangChonDeXoa = ''; 
const tbody = document.querySelector('#hien-thi');
if (tbody) {
    tbody.addEventListener('click', (event) => {
        const btn = event.target;
        const maSV = btn.dataset.masv; 
        if (btn.classList.contains('btn-xoa')) {
            maSVDangChonDeXoa = maSV; 
            xoaMaSVText.innerText = maSV; 
            modalXoa.showModal(); 
        }
        if (btn.classList.contains('btn-sua')) {
            const index = state.danhSach.findIndex(e => e.maSV === maSV);
            if (index !== -1) {
                const sv = state.danhSach[index];
                modalTitle.innerText = "Chỉnh sửa thông tin";
                editIndexInput.value = index; 
                document.querySelector('#them-maSV').value = sv.maSV;
                document.querySelector('#them-tenSV').value = sv.tenSV;
                document.querySelector('#them-gpa').value = sv.gpa;
                document.querySelector('#them-cpa').value = sv.cpa;
                document.querySelector('#them-phanTramNo').value = sv.phanTramNo;
                document.querySelector('#them-renLuyen').value = sv.renLuyen;
                document.querySelector('#them-hocPhi').checked = sv.daDongHocPhi;
                modal.showModal();
            }
        }
    });
}
if (btnDongXoa) {
    btnDongXoa.addEventListener('click', () => modalXoa.close());
}
if (btnXacNhanXoa) {
    btnXacNhanXoa.addEventListener('click', () => {
        state.danhSach = state.danhSach.filter(e => e.maSV !== maSVDangChonDeXoa);
        luuVaoBoNho('danhSachSV', state.danhSach);
        modalXoa.close();
        renderAll();
    });
}