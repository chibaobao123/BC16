function getApiSV() {
  var promise = axios({
    url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien",
    method: "GET",
  });

  promise.then(function (res) {
    console.log(res);

    let data = res.data;
    // console.log(data);

    renderTable(data);
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

getApiSV();

function renderTable(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `
                  <tr>
                      <th>${data[i].maSinhVien}</th>
                      <th>${data[i].tenSinhVien}</th>
                      <th>${data[i].email}</th>
                      <th>${data[i].soDienThoai}</th>
                      <th>${data[i].loaiSinhVien}</th>
                      
                      <th>
                      <button class="btn btn-outline-danger" onclick="xoaSV('${data[i].maSinhVien}')">Xóa</button>
                      <button class="btn btn-outline-primary" onclick="chinhSua('${data[i].maSinhVien}')">chỉnh sửa</button>
                      </th>
                  </tr>
              `;
  }

  document.querySelector("#tblNhanVien").innerHTML = html;
}

// // --------------------------------POST: Thêm dữ liệu về phía server để server lưu trữ
// document.querySelector("#btnXacNhan").onclick = function () {
//   //Tạo ra format data như backend yêu cầu để chữa dữ liệu từ người dùng nhập

//   let sv = new SinhVien();
//   sv.maSinhVien = document.querySelector("#maSinhVien").value;
//   sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
//   sv.email = document.querySelector("#email").value;
//   sv.soDienThoai = document.querySelector("#soDienThoai").value;
//   sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
//   sv.diemToan = document.querySelector("#diemToan").value;
//   sv.diemLy = document.querySelector("#diemLy").value;
//   sv.diemHoa = document.querySelector("#diemHoa").value;
//   sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

//   //   console.log(sv);

//   postSinhVien(sv);
// };

// function postSinhVien(sv) {
//   let promise = axios({
//     url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
//     method: "POST",
//     data: sv, // format đúng với format back-end cung cấp
//   });

//   promise.then(function (res) {
//     console.log(res.data);
//     getApiSV();
//     resetForm();
//   });

//   promise.catch(function (err) {
//     console.log(err);
//   });
// }

// function resetForm() {
//   const inputList = document.querySelectorAll("input");
//   // console.log(inputList);
//   for (let i = 0; i < inputList.length; i++) {
//     inputList[i].value = "";
//   }
// }

// // DELETE: Nghiệp vụ xoá api
// function xoaSV(maSV) {
//   let promise = axios({
//     url:
//       "http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=" + maSV,
//     method: "DELETE",
//   });

//   promise.then(function (res) {
//     console.log(res.data);
//     getApiSV();
//   });

//   promise.catch(function (err) {
//     console.log(err);
//   });
// }

// function chinhSua(maSV) {
//   let promise = axios({
//     url:
//       "http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=" +
//       maSV,
//     method: "GET",
//   });

//   promise.then(function (res) {
//     // console.log(res.data);
//     let sinhVien = res.data;
//     //Đưa dữ liệu lên form
//     document.querySelector("#maSinhVien").value = sinhVien.maSinhVien;
//     document.querySelector("#tenSinhVien").value = sinhVien.tenSinhVien;
//     document.querySelector("#email").value = sinhVien.email;
//     document.querySelector("#diemRenLuyen").value = sinhVien.diemRenLuyen;
//     document.querySelector("#diemToan").value = sinhVien.diemToan;
//     document.querySelector("#diemLy").value = sinhVien.diemLy;
//     document.querySelector("#diemHoa").value = sinhVien.diemHoa;
//     document.querySelector("#soDienThoai").value = sinhVien.soDienThoai;
//     document.querySelector("#diemHoa").value = sinhVien.diemHoa;
//   });

//   promise.catch(function (err) {
//     console.log(err);
//   });
// }

// document.querySelector("#btnCapNhat").onclick = () => {
//   let svUpdate = new SinhVien();

//   svUpdate.maSinhVien = document.querySelector("#maSinhVien").value;
//   svUpdate.tenSinhVien = document.querySelector("#tenSinhVien").value;
//   svUpdate.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
//   svUpdate.email = document.querySelector("#email").value;
//   svUpdate.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
//   svUpdate.diemToan = document.querySelector("#diemToan").value;
//   svUpdate.diemLy = document.querySelector("#diemLy").value;
//   svUpdate.diemHoa = document.querySelector("#diemHoa").value;
//   svUpdate.soDienThoai = document.querySelector("#soDienThoai").value;
//   svUpdate.diemHoa = document.querySelector("#diemHoa").value;

// //   console.log(svUpdate);

//     capNhatSV(svUpdate);
// };

// function capNhatSV(sv) {
//   console.log(sv.maSinhVien);
//   let promise = axios({
//     url:
//       "http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=1232" +
//       sv.maSinhVien,
//     method: "PUT",
//     data: sv
//   });

//   promise.then(function (res) {
//     console.log(res.data);
//     getApiSV();
//     resetForm();
//   });

//   promise.catch(function (err) {
//     console.log(err);
//   });
// }
