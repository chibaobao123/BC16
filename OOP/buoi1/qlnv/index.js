let nhanVien = {
  maNV: "",
  tenNV: "",
  chucVu:'',
  heSoChucVu: 0,
  luongCB: 0,
  gioLam: 0,
  tongLuong: function () {
    let tongLuong = Number(this.luongCB) * Number(this.heSoChucVu);
    return tongLuong;
  },
  xepLoaiTrongThang: function () {
    let gioLam = this.gioLam;
    let loai = "";

    if (gioLam > 120) {
      loai = "Nhân viên xuất sắc";
    } else if (gioLam <= 120 && gioLam > 100) {
      loai = "Nhân viên giỏi";
    } else if (gioLam <= 100 && gioLam > 80) {
      loai = "Nhân viên khá";
    } else if (gioLam <= 80 && gioLam > 50) {
      loai = "Nhân viên trung bình";
    } else {
      loai = "Không hợp lệ";
    }

    return loai;
  },
};

document.getElementById("btnXacNhan").onclick = () => {
  nhanVien.maNV = document.getElementById("maNhanVien").value;
  nhanVien.tenNV = document.getElementById("tenNhanVien").value;
  nhanVien.heSoChucVu = document.getElementById("chucVu").value;
  nhanVien.luongCB = document.getElementById("luongCoBan").value;
  nhanVien.gioLam = document.getElementById("soGioLamTrongThang").value;

  console.log(nhanVien);

  document.getElementById("text-tenNhanVien").innerHTML = nhanVien.tenNV;
  document.getElementById("text-maNhanVien").innerHTML = nhanVien.maNV;
  document.getElementById("text-tongLuong").innerHTML = nhanVien.tongLuong();
  document.getElementById("text-xepLoaiTrongThang").innerHTML = nhanVien.xepLoaiTrongThang();

  //đối với chức vụ ==> lấy ra được innerHTML của option được chọn

  let slChucVu = document.getElementById("chucVu");

  // slChucVu,options ==> trả ra 3 thẻ option (mãng)
  console.log(slChucVu.options);

  // lấy vị trí option được chọn : .seclectedIndex
  var index = slChucVu.selectedIndex;

  nhanVien.chucVu = slChucVu.options[index].innerHTML

  document.getElementById("text-chucVu").innerHTML = nhanVien.chucVu;
};
