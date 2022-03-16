// // prototype

// function Product() {
//     this.id = "";
//     this.name = "";
//     this.price = "";
//     this.img = "";
//     this.showInfo = function () {
//       console.log("Info");
//     };
//   }
  
//   let obj1 = new Product();
//   console.log(obj1);
  
//   let obj2 = new Product();
//   console.log(obj2);

var sinhVien = new SinhVien();
// console.log(sinhVien);

document.querySelector("button.btn").onclick = function () {
  //Lấy thông tin người dùng
  sinhVien.maSinhVien = document.querySelector("#txtMaSV").value;
  sinhVien.tenSinhVien = document.querySelector("#txtTenSV").value;
  sinhVien.loaiSinhVien = document.querySelector("#loaiSV").value;
  sinhVien.diemToan = document.querySelector("#txtDiemToan").value;
  sinhVien.diemVan = document.querySelector("#txtDiemVan").value;
  //Kiểm tra giá trị
  console.log("sinhVien", sinhVien);
  //Hiển thị thông tin lên giao  diện
  document.querySelector("#spanTenSV").innerHTML = sinhVien.tenSinhVien;
  document.querySelector("#spanMaSV").innerHTML = sinhVien.maSinhVien;
  document.querySelector("#spanLoaiSV").innerHTML = sinhVien.loaiSinhVien;
  var diemTrungBinh = sinhVien.tinhDiemTrungBinh();
  document.querySelector("#spanDTB").innerHTML = diemTrungBinh;
  var ketQuaXepLoai = sinhVien.xepLoai();
  document.querySelector("#spanXepLoai").innerHTML = ketQuaXepLoai;
};


// bổ sung thuộc tính cho lớp dối tượng mà ko làm ảnh hưởng tới lớp đó (ví dụ làm việc nhóm  nhiều người mà ko muốn làm ảnh hưởng tới code của người tạo ra lớp đối tượng đó)
function xuLySV() {
    SinhVien.prototype.diemAnh = '';

    let sv = new SinhVien();
    sv.diemAnh = 5;

    console.log('SV:',sv);
    console.log('diem anh:',sv.diemAnh);
}

xuLySV()