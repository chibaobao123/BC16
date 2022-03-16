function SinhVien(){
    this.maSV = '';
    this.tenSV = '';
    this.emails = '';
    this.sdt = '';
    this.passwords = '';
    this.birthdays = '';
    this.khoaHoc = '';
    this.diemToan = 0;
    this.diemLy = 0;
    this.diemHoa = 0;
    this.diemRenLuyen = 0;
    this.tinhDiemTB = function () { 
        let output = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) + Number(this.diemRenLuyen))/4;
        return output.toFixed(2);
    }
}