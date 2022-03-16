let mangSV = [];
let ktr = new Validation();

document.getElementById("xacNhan").onclick = () => {
  let sv = new SinhVien();

  sv.maSV = document.querySelector("#txtMaSV").value;
  sv.tenSV = document.querySelector("#txtTenSV").value;
  sv.emails = document.querySelector("#txtEmail").value;
  sv.sdt = document.querySelector("#txtSdt").value;
  sv.passwords = document.querySelector("#txtPass").value;
  sv.birthdays = document.querySelector("#txtNgaySinh").value;
  sv.khoaHoc = document.querySelector("#khSV").value;
  sv.diemToan = document.querySelector("#txtDiemToan").value;
  sv.diemLy = document.querySelector("#txtDiemLy").value;
  sv.diemHoa = document.querySelector("#txtDiemHoa").value;
  sv.diemRenLuyen = document.querySelector("#txtRenLuyen").value;

  //   console.log("Sinh viên: ", sv);

  //   let infoSV = `
  //         <tr>
  //             <th>${sv.maSV}</th>
  //             <th>${sv.tenSV}</th>
  //             <th>${sv.emails}</th>
  //             <th>${sv.birthdays}</th>
  //             <th>${sv.khoaHoc}</th>
  //             <th>${sv.tinhDiemTB()}</th>
  //             <th></th>
  //         </tr>

  //     `;

  //   console.log(infoSV);

  //   cách 1:

  //   //Tạo ra giao diện

  //   // B1: Tạo ra thẻ tr
  //   // document.createElement('tên thẻ'): Cú pháp tạo ra 1 thẻ html = js
  //   var trSinhVien = document.createElement("tr");

  //   //82: Tạo ra lần lượt các thẻ td => chứa nội dung thông tin sinh viên
  //   var tdMasinhVien = document.createElement("td");

  //   //<td>nội dung innerHTML</td>
  //   tdMasinhVien.innerHTML = sv.maSV;

  //   var tdTenSinhVien = document.createElement("td");
  //   tdTenSinhVien.innerHTML = sv.tenSV;
  //   var tdEmail = document.createElement("td");
  //   tdEmail.innerHTML = sv.emails;
  //   var tdBirth = document.createElement("td");
  //   tdBirth.innerHTML = sv.birthdays;
  //   var tdKhoaHoc = document.createElement("td");
  //   tdKhoaHoc.innerHTML = sv.khoaHoc;
  //   var tdDiemTB = document.createElement("td");
  //   tdDiemTB.innerHTML = sv.tinhDiemTB();

  //   //td chức năng
  //   var tdChucNang = document.createElement("td");
  //   var btnXoa = document.createElement("button");
  //   btnXoa.className = "btn btn-danger";
  //   btnXoa.innerHTML = "Xoa";
  //   btnXoa.onclick = function () {
  //     //remove là hàm xóa đi thẻ chính nó
  //     // var td = btnXoa.parentElement;
  //     // var tr = td.parentElement;
  //     // tr.remove();

  //     // đi ra thẻ tr gần nhất
  //     //closest(selector): Trả về 1 đối tượng selector gần nhất chứa phần tử đó
  //     btnXoa.closest('tr').remove();
  //   };
  //   tdChucNang.appendChild(btnXoa);

  //   //B3: đưa thẻ td vào trong tr
  //   trSinhVien.appendChild(tdMasinhVien);
  //   trSinhVien.appendChild(tdTenSinhVien);
  //   trSinhVien.appendChild(tdEmail);
  //   trSinhVien.appendChild(tdBirth);
  //   trSinhVien.appendChild(tdKhoaHoc);
  //   trSinhVien.appendChild(tdDiemTB);
  //   trSinhVien.appendChild(tdChucNang);

  //   //B4: Đưa thẻ tr vào thẻ có sẫn trên giao diện (tbody)

  //   document.querySelector("#tbodySinhVien").appendChild(trSinhVien);

  let valid = true;

  // if (sv.maSV.trim() === "") {
  //   document.querySelector("#spanMaSV").innerHTML =
  //     "Mã sinh viên không được bỏ trống !";
  //   // return; //dừng hàm
  //   valid = false;
  // } else {
  //   document.querySelector("#spanMaSV").innerHTML = "";
  // }

  // if (sv.tenSV.trim() === "") {
  //   document.querySelector("#spanTenSV").innerHTML =
  //     "Tên sinh viên không được bỏ trống !";
  //   // return; //dừng hàm
  //   valid = false;

  // } else {
  //   document.querySelector("#spanTenSV").innerHTML = "";
  // }

  //check maSV
  valid =
    valid &&
    ktr.ktrRong(sv.maSV, "#spanMaSV", "Mã sinh viên") &&
    ktr.ktrDoDai(sv.maSV, "#spanMaSV", 4, 10) && 
    ktr.ktrTrungMa(sv.maSV, mangSV ,"#spanMaSV");

  //check tenSV
  valid &=
    ktr.ktrRong(sv.tenSV, "#spanTenSV", "Tên sinh viên") &&
    ktr.ktrDoDai(sv.tenSV, "#spanTenSV", 6, 30) &&
    ktr.ktrChuoiKyTu(sv.tenSV, "#spanTenSV");

  //check emails
  valid &=
    ktr.ktrRong(sv.emails, "#spanEmailSV", "Email") &&
    ktr.ktrDoDai(sv.emails, "#spanEmailSV", 12, 100) &&
    ktr.ktrEmail(sv.emails, "#spanEmailSV");

  //check sdt
  valid &=
    ktr.ktrRong(sv.sdt, "#spanSdt", "Số điện thoại") &&
    ktr.ktrDoDai(sv.sdt, "#spanSdt", 10, 11) &&
    ktr.ktrSo(sv.sdt, "#spanSdt");

  //check pass
  valid &=
    ktr.ktrRong(sv.passwords, "#spanMatKhau", "Mật khẩu") &&
    ktr.ktrDoDai(sv.passwords, "#spanMatKhau", 10, 20);

  //check diem
  valid &=
    ktr.ktrRong(sv.diemToan, "#spanToan", "Điểm toán") &&
    ktr.ktrSo(sv.diemToan, "#spanToan") &&
    ktr.ktrDiem(sv.diemToan, "#spanToan");
  valid &=
    ktr.ktrRong(sv.diemLy, "#spanLy", "Điểm lý") &&
    ktr.ktrSo(sv.diemLy, "#spanLy") &&
    ktr.ktrDiem(sv.diemLy, "#spanLy");
  valid &=
    ktr.ktrRong(sv.diemToan, "#spanHoa", "Điểm hóa") &&
    ktr.ktrSo(sv.diemToan, "#spanHoa") &&
    ktr.ktrDiem(sv.diemToan, "#spanHoa");
  valid &=
    ktr.ktrRong(sv.diemRenLuyen, "#spanRenLuyen", "Số điện thoại") &&
    ktr.ktrSo(sv.diemRenLuyen, "#spanRenLuyen") &&
    ktr.ktrDiem(sv.diemRenLuyen, "#spanRenLuyen");

  if (!valid) {
    return; //dừng hàm
  }
  // cách 2:

  // đưa thông tin sinh viên vào mảng (mangSV)
  mangSV.push(sv);
  //   console.log("Mảng sinh vien: ", mangSV);

  let html = renderTableSV(mangSV);
  document.getElementById("tbodySinhVien").innerHTML = html;

  resetForm();

  //lưu localStorage
  luuLocalStorage();
};

document.getElementById("capNhat").onclick = () => {
  let svUpdate = new SinhVien();

  svUpdate.maSV = document.querySelector("#txtMaSV").value;
  svUpdate.tenSV = document.querySelector("#txtTenSV").value;
  svUpdate.emails = document.querySelector("#txtEmail").value;
  svUpdate.sdt = document.querySelector("#txtSdt").value;
  svUpdate.passwords = document.querySelector("#txtPass").value;
  svUpdate.birthdays = document.querySelector("#txtNgaySinh").value;
  svUpdate.khoaHoc = document.querySelector("#khSV").value;
  svUpdate.diemToan = document.querySelector("#txtDiemToan").value;
  svUpdate.diemLy = document.querySelector("#txtDiemLy").value;
  svUpdate.diemHoa = document.querySelector("#txtDiemHoa").value;
  svUpdate.diemRenLuyen = document.querySelector("#txtRenLuyen").value;

  console.log(svUpdate);

  for (let i = 0; i < mangSV.length; i++) {
    if (mangSV[i].maSV === svUpdate.maSV) {
      mangSV[i].maSV = svUpdate.maSV;
      mangSV[i].tenSV = svUpdate.tenSV;
      mangSV[i].emails = svUpdate.emails;
      mangSV[i].sdt = svUpdate.sdt;
      mangSV[i].passwords = svUpdate.passwords;
      mangSV[i].birthdays = svUpdate.birthdays;
      mangSV[i].khoaHoc = svUpdate.khoaHoc;
      mangSV[i].diemToan = svUpdate.diemToan;
      mangSV[i].diemLy = svUpdate.diemLy;
      mangSV[i].diemHoa = svUpdate.diemHoa;
      mangSV[i].diemRenLuyen = svUpdate.diemRenLuyen;
    }
  }

  let html = renderTableSV(mangSV);
  document.getElementById("tbodySinhVien").innerHTML = html;

  resetForm();

  document.getElementById("txtMaSV").disabled = false;
  document.getElementById("capNhat").disabled = true;
  document.getElementById("xacNhan").disabled = false;
};

function resetForm() {
  const inputList = document.querySelectorAll("input");
  // console.log(inputList);
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].value = "";
  }
}

function renderTableSV(arrSV) {
  //   console.log(arrSV);
  let html = "";
  for (let i = 0; i < arrSV.length; i++) {
    html += `
        <tr>
            <th>${arrSV[i].maSV}</th>
            <th>${arrSV[i].tenSV}</th>
            <th>${arrSV[i].emails}</th>
            <th>${arrSV[i].birthdays}</th>
            <th>${arrSV[i].khoaHoc}</th>
            
            <th>
            <button class="btn btn-outline-danger" onclick="xoaSV('${arrSV[i].maSV}')">Xóa</button>
            <button class="btn btn-outline-primary" onclick="chinhSua('${arrSV[i].maSV}')">chỉnh sửa</button>
            </th>
        </tr>
    `; // <th>${arrSV[i].tinhDiemTB()}</th>
  }
  return html;
}

function xoaSV(maSVClick) {
  //Từ mã sinh viên tìm ra vị trí sinh viên ở trong mảng => Xử lý xoá
  for (let index = mangSV.length - 1; index >= 0; index--) {
    //Mỗi lần duyệt lấy ra 1 object sinh vien
    let sv = mangSV[index];
    if (sv.maSV === maSVClick) {
      //So sánh mã sinh viên trong từng object của mảng có trùng với mã sinh viên click ở giao diện hay k
      mangSV.splice(index, 1);
    }
  }

  //lưu localStorage
  luuLocalStorage();

  //Sau khi xoá xong gọi hàm tạo lại bảng table sinh viên
  let html = renderTableSV(mangSV);
  document.getElementById("tbodySinhVien").innerHTML = html;
}

function chinhSua(maSV) {
  // console.log(maSV);
  for (let index = 0; index < mangSV.length; index++) {
    //Mỗi lần duyệt lấy ra 1 object sinh vien
    let sv = mangSV[index];
    if (sv.maSV === maSV) {
      document.getElementById("txtMaSV").value = sv.maSV;
      document.getElementById("txtTenSV").value = sv.tenSV;
      document.getElementById("txtEmail").value = sv.emails;
      document.getElementById("txtSdt").value = sv.sdt;
      document.getElementById("txtPass").value = sv.passwords;
      document.getElementById("txtNgaySinh").value = sv.birthdays;
      document.getElementById("khSV").value = sv.khoaHoc;
      document.getElementById("txtDiemToan").value = sv.diemToan;
      document.getElementById("txtDiemLy").value = sv.diemLy;
      document.getElementById("txtDiemHoa").value = sv.diemHoa;
      document.getElementById("txtRenLuyen").value = sv.diemRenLuyen;
    }
  }
  document.getElementById("txtMaSV").disabled = true;
  document.getElementById("capNhat").disabled = false;
  document.getElementById("xacNhan").disabled = true;
}

function luuLocalStorage() {
  // lưu mãng sinh viên (mangSV);
  //biến đổi obj thành chuỗi
  let sMangSV = JSON.stringify(mangSV);

  //Lưu chuỗi đó vào storage
  localStorage.setItem("mangSV", sMangSV);
}

function layDuLieuStorage() {
  //ktr dữ liệu localStorage
  if (localStorage.getItem("mangSV")) {
    let sMangSV = localStorage.getItem("mangSV");

    mangSV = JSON.parse(sMangSV);

    // console.log(mangSV);

    let html = renderTableSV(mangSV);
    document.getElementById("tbodySinhVien").innerHTML = html;
  }
}

layDuLieuStorage();

document.getElementById("btnSearch").onclick = () => {
  // lấy ra từ khóa người dùng nhập vào
  let tuKhoa = document.getElementById("txtSearch").value.toLowerCase().trim();
  // console.log(tuKhoa);

  let output = [];

  for (let i = 0; i < mangSV.length; i++) {
    if (
      mangSV[i].tenSV.toLowerCase().trim().search(tuKhoa) !== -1 ||
      mangSV[i].sdt.toLowerCase().trim().search(tuKhoa) !== -1
    ) {
      output.push(mangSV[i]);
    }
  }

  let html = renderTableSV(output);
  document.getElementById("tbodySinhVien").innerHTML = html;
};

document.getElementById("txtSearch").onkeyup = () => {
  // lấy ra từ khóa người dùng nhập vào
  let tuKhoa = document.getElementById("txtSearch").value.toLowerCase().trim();
  // console.log(tuKhoa);

  let output = [];

  for (let i = 0; i < mangSV.length; i++) {
    if (
      mangSV[i].tenSV.toLowerCase().trim().search(tuKhoa) !== -1 ||
      mangSV[i].sdt.toLowerCase().trim().search(tuKhoa) !== -1
    ) {
      output.push(mangSV[i]);
    }
  }

  let html = renderTableSV(output);
  document.getElementById("tbodySinhVien").innerHTML = html;
};
