// khai báo đối tượng trong js: obj = {};
// mục tiêu của đối tượng => đưa biến và hàm về đúng vị trí của nó

var hocVien = {
  maHV: "0605",
  tenHV: "Bao",
  hienThiThongTin: function () {
    console.log("ma hoc vien : ", hocVien.maHV);
    console.log("ten hoc vien : ", hocVien.tenHV);
  },
};

//truy xuất biến trong đối tượng

// cách 1: [đối tượng].tenThuocTinh
console.log("ma hoc vien : ", hocVien.maHV);
console.log("ten hoc vien : ", hocVien.tenHV);

// cách 2: đối tượng]['tenThuocTinh]
console.log("ma hoc vien : ", hocVien["maHV"]);
console.log("ten hoc vien : ", hocVien["tenHV"]);

// truy xuất hàm trong đối tượng
hocVien.hienThiThongTin();
hocVien['hienThiThongTin']();


let sinhVien = {
    maSV: '',
    tenSV: '',
    loaiSV: '',
    diemToan: 0,
    diemVan:0,
    tinhDiemTB: function() {
        //2 cách lấy giá trị có sẳn của đối tượng
        let tb= (Number(this.diemToan) + Number(this.diemVan))/2;
        // let tb= (Number(sinhVien.diemToan) + Number(sinhVien.diemVan))/2;

        return tb;
    },
    xepLoai: function() {
        let loai = '';
        let dtb = this.tinhDiemTB()
        if(dtb >= 5 && dtb <= 10){
            loai = 'Đậu';
        } else if(dtb < 5 && dtb >=0) {
            loai = 'Rớt';
        } else {
            loai = 'không hợp lệ'
        }
        
        return loai;
    }
}

document.getElementById("btnHienThiThongTin").onclick = () => {
    sinhVien.maSV = document.getElementById("txtMaSV").value;
    sinhVien.tenSV = document.getElementById("txtTenSV").value;
    sinhVien.loaiSV = document.getElementById("loaiSV").value;
    sinhVien.diemToan = document.getElementById("txtDiemToan").value;
    sinhVien.diemVan = document.getElementById("txtDiemVan").value;

    // kiểm tra giá trị người dùng nhập vào
    console.log("sinh viên: ", sinhVien);

    //hiển thị thông tin ra giao diện
    document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
    document.getElementById("spanTenSV").innerHTML = sinhVien.tenSV;
    document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
    document.getElementById("spanDTB").innerHTML = sinhVien.tinhDiemTB();
    document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai();
}

