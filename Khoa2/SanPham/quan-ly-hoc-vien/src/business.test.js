import { describe, it, expect } from 'vitest';
import { xepLoai, chuanHoaNghiepVu, duLieuTrang } from './service.js';

describe('Kiểm thử đơn vị và Test case biên cho các hàm nghiệp vụ', () => {

    // 1. Kiểm thử hàm xepLoai với các giá trị biên của CPA
    it('1. Xep loai hoc luc - Test bien CPA', () => {
        expect(xepLoai(1.9)).toBe('Yếu');
        expect(xepLoai(2.0)).toBe('Trung bình');
        expect(xepLoai(2.4)).toBe('Trung bình');
        expect(xepLoai(2.5)).toBe('Khá');
        expect(xepLoai(3.1)).toBe('Khá');
        expect(xepLoai(3.2)).toBe('Giỏi');
        expect(xepLoai(3.6)).toBe('Xuất sắc');
    });

    // 2. Kiểm thử logic cảnh báo và hạ bậc khi nợ môn > 5% trong chuanHoaNghiepVu
    it('2. Chuan hoa nghiep vu - Canh bao khi no mon > 5%', () => {
        const svBinhThuong = { cpa: 3.8, phanTramNo: 0, daDongHocPhi: true, renLuyen: 90, gpa: 3.5 };
        const kq1 = chuanHoaNghiepVu(svBinhThuong);
        expect(kq1.canhBao).toBe(false);
        expect(kq1.xepLoaiCuoi).toBe('Xuất sắc');

        const svNoMon = { cpa: 3.8, phanTramNo: 10, daDongHocPhi: true, renLuyen: 90, gpa: 3.5 };
        const kq2 = chuanHoaNghiepVu(svNoMon);
        expect(kq2.canhBao).toBe(true);
        expect(kq2.xepLoaiCuoi).toBe('Giỏi'); // Bị hạ bậc từ Xuất sắc xuống Giỏi
    });

    // 3. Kiểm thử điều kiện xét học bổng
    it('3. Dieu kien hoc bong trong chuanHoaNghiepVu', () => {
        const svDat = { cpa: 3.5, phanTramNo: 0, daDongHocPhi: true, renLuyen: 85, gpa: 3.3 };
        expect(chuanHoaNghiepVu(svDat).hocBong).toBe(true);

        const svChuaDongHP = { cpa: 3.5, phanTramNo: 0, daDongHocPhi: false, renLuyen: 85, gpa: 3.3 };
        expect(chuanHoaNghiepVu(svChuaDongHP).hocBong).toBe(false);
    });

    // 4. Kiểm thử hàm phân trang duLieuTrang
    it('4. Test phan trang duLieuTrang', () => {
        const ds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(duLieuTrang(ds, 1, 4)).toEqual([1, 2, 3, 4]);
        expect(duLieuTrang(ds, 2, 4)).toEqual([5, 6, 7, 8]);
    });
});