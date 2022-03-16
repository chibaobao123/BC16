let ktr = new Validation();
let nv = new NhanVien();
let mangNV;

function getApiNV() {
  var promise = axios({
    url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien",
    method: "GET",
  });

  promise.then(function (res) {
    // console.log(res);

    let data = res.data;
    mangNV = data;
    // console.log(data);
    // console.log(mangNV);

    renderTable(mangNV);
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

getApiNV();

function renderTable(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    let tongLuong = data[i].luongCoBan * data[i].heSoChucVu;

    let xepLoai;
    if (data[i].soGioLamTrongThang > 110) {
      xepLoai = "Xuất sắc";
    } else if (
      data[i].soGioLamTrongThang <= 110 &&
      data[i].soGioLamTrongThang >= 95
    ) {
      xepLoai = "Giỏi";
    } else {
      xepLoai = "khá";
    }

    html += `
                  <tr class="text-center">
                      <th>${data[i].maNhanVien}</th>
                      <th>${data[i].tenNhanVien}</th>
                      <th>${data[i].chucVu}</th>
                      <th>${Number(data[i].luongCoBan).toLocaleString()}</th>
                      <th>${Number(tongLuong).toLocaleString()}</th>
                      <th>${data[i].soGioLamTrongThang}</th>
                      <th>${xepLoai}</th>
                      
                      <th>
                      <button class="btn btn-danger" onclick="xoaNV(${
                        data[i].maNhanVien
                      })">Xóa</button>
                      <button class="btn btn-primary" onclick="chinhSua(${
                        data[i].maNhanVien
                      })">Chỉnh sửa</button>
                      </th>
                  </tr>
              `;
  }

  document.querySelector("#tblNhanVien").innerHTML = html;
}

// --------------------------------POST: Thêm dữ liệu về phía server để server lưu trữ
document.querySelector("#btnThemNhanVien").onclick = function () {
  //Tạo ra format data như backend yêu cầu để chữa dữ liệu từ người dùng nhập

  nv.maNhanVien = document.querySelector("#maNhanvien").value;
  nv.tenNhanVien = document.querySelector("#tenNhanvien").value;
  nv.heSoChucVu = document.querySelector("#loaiNhanvien").value;
  nv.luongCoBan = document.querySelector("#LuongCoBan").value;
  nv.soGioLamTrongThang = document.querySelector("#soGioLam").value;

  //đối với chức vụ ==> lấy ra được innerHTML của option được chọn

  let slChucVu = document.getElementById("loaiNhanvien");

  // slChucVu,options ==> trả ra 3 thẻ option (mãng)
  // console.log(slChucVu.options);

  // lấy vị trí option được chọn : .seclectedIndex
  var index = slChucVu.selectedIndex;

  nv.chucVu = slChucVu.options[index].innerHTML;

  // console.log(nv);

  let valid = true;

  //check maNV
  valid &=
    ktr.ktrRong(nv.maNhanVien, "#error_required_maNhanvien", "Mã sinh viên") &&
    ktr.ktrSo(nv.maNhanVien, "#error_required_maNhanvien") &&
    ktr.ktrDoDai(nv.maNhanVien, "#error_required_maNhanvien", 4, 6) &&
    ktr.ktrTrungMa(nv.maNhanVien, mangNV, "#error_required_maNhanvien");

  //check tenNV
  valid &=
    ktr.ktrRong(
      nv.tenNhanVien,
      "#error_required_tenNhanvien",
      "Tên sinh viên"
    ) &&
    ktr.ktrDoDai(nv.tenNhanVien, "#error_required_tenNhanvien", 3, 100) &&
    ktr.ktrChuoiKyTu(nv.tenNhanVien, "#error_required_tenNhanvien");

  //check LuongCB
  valid &=
    valid &&
    ktr.ktrRong(nv.luongCoBan, "#error_required_luongCB", "Lương") &&
    ktr.ktrSo(nv.luongCoBan, "#error_required_luongCB") &&
    ktr.ktrLuongCB(nv.luongCoBan, "#error_required_luongCB");

  //check gioLam
  valid &=
    valid &&
    ktr.ktrRong(nv.soGioLamTrongThang, "#error_required_gioLam", "Giờ làm") &&
    ktr.ktrSo(nv.soGioLamTrongThang, "#error_required_gioLam") &&
    ktr.ktrGioLam(nv.soGioLamTrongThang, "#error_required_gioLam");

  if (!valid) {
    return; //dừng hàm
  }

  postNV(nv);
};

function postNV(nv) {
  let promise = axios({
    url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien",
    method: "POST",
    data: nv,
  });

  promise.then(function (res) {
    console.log(res.data);
    getApiNV();
    resetForm();
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

function resetForm() {
  const inputList = document.querySelectorAll("input");
  // console.log(inputList);
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].value = "";
  }
}

function xoaNV(maNV) {
  let promise = axios({
    url:
      "http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=" +
      maNV,
    method: "DELETE",
  });

  promise.then(function (res) {
    // console.log(res.data);
    getApiNV();
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

function chinhSua(maSV) {
  let promise = axios({
    url:
      "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=" +
      maSV,
    method: "GET",
  });

  promise.then(function (res) {
    // console.log(res.data);
    let nv = res.data;
    //Đưa dữ liệu lên form
    document.querySelector("#maNhanvien").value = nv.maNhanVien;
    document.querySelector("#maNhanvien").disabled = true;
    document.querySelector("#tenNhanvien").value = nv.tenNhanVien;
    document.getElementById("loaiNhanvien").value = nv.heSoChucVu;
    document.querySelector("#LuongCoBan").value = nv.luongCoBan;
    document.querySelector("#soGioLam").value = nv.soGioLamTrongThang;

    document.getElementById("btnCN").style.display = "block";
    document.getElementById("btnThem").style.display = "none";
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

document.querySelector("#btnCapNhat").onclick = () => {
  let nvUpdate = new NhanVien();

  nvUpdate.maNhanVien = document.querySelector("#maNhanvien").value;
  document.querySelector("#maNhanvien").disabled = false;
  nvUpdate.tenNhanVien = document.querySelector("#tenNhanvien").value;
  nvUpdate.heSoChucVu = document.querySelector("#loaiNhanvien").value;
  nvUpdate.luongCoBan = document.querySelector("#LuongCoBan").value;
  nvUpdate.soGioLamTrongThang = document.querySelector("#soGioLam").value;

  let slChucVu = document.getElementById("loaiNhanvien");
  var index = slChucVu.selectedIndex;
  nvUpdate.chucVu = slChucVu.options[index].innerHTML;

  // console.log(nvUpdate);

  let valid = true;

  //check tenNV
  valid &=
    ktr.ktrRong(
      nvUpdate.tenNhanVien,
      "#error_required_tenNhanvien",
      "Tên sinh viên"
    ) &&
    ktr.ktrDoDai(nvUpdate.tenNhanVien, "#error_required_tenNhanvien", 3, 100) &&
    ktr.ktrChuoiKyTu(nvUpdate.tenNhanVien, "#error_required_tenNhanvien");

  //check LuongCB
  valid &=
    valid &&
    ktr.ktrRong(nvUpdate.luongCoBan, "#error_required_luongCB", "Lương") &&
    ktr.ktrSo(nvUpdate.luongCoBan, "#error_required_luongCB") &&
    ktr.ktrLuongCB(nvUpdate.luongCoBan, "#error_required_luongCB");

  //check gioLam
  valid &=
    valid &&
    ktr.ktrRong(
      nvUpdate.soGioLamTrongThang,
      "#error_required_gioLam",
      "Giờ làm"
    ) &&
    ktr.ktrSo(nvUpdate.soGioLamTrongThang, "#error_required_gioLam") &&
    ktr.ktrGioLam(nvUpdate.soGioLamTrongThang, "#error_required_gioLam");

  if (!valid) {
    return; //dừng hàm
  }
  document.getElementById("btnCN").style.display = "none";
  document.getElementById("btnThem").style.display = "block";
  capNhatNV(nvUpdate);
};

function capNhatNV(nv) {
  let promise = axios({
    url:
      "http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=" +
      nv.maNhanVien,
    method: "PUT",
    data: nv,
  });

  promise.then(function (res) {
    console.log(res.data);
    getApiNV();
    resetForm();
  });

  promise.catch(function (err) {
    console.log(err);
  });
}
