function SinhVien () {
    this.maSinhVien ='';
    this.tenSinhVien ='';
    this.loaiSinhVien ='';
    this.diemToan ='';
    this.diemVan ='';
    this.tinhDiemTrungBinh= function (){
        var diemTrungBinh = (Number(this.diemToan) + Number(this.diemVan)) / 2;
        return diemTrungBinh;
    };
    this.xepLoai= function () {
        var diemTrungBinh = this.tinhDiemTrungBinh();
        var ketQuaXepLoai = '';
        if(diemTrungBinh >= 5) {
            ketQuaXepLoai = 'Đậu';
        }else {
            ketQuaXepLoai = 'Rớt'
        }
        return ketQuaXepLoai;
    }
}