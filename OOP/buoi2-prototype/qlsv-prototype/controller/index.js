let mangSV = [];

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

  // cách 2:

  // đưa thông tin sinh viên vào mảng (mangSV)
  mangSV.push(sv);
  //   console.log("Mảng sinh vien: ", mangSV);

  let html = renderTableSV(mangSV);
  document.getElementById("tbodySinhVien").innerHTML = html;

  resetForm();

  
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
      if(mangSV[i].maSV === svUpdate.maSV) {
        mangSV[i].maSV = svUpdate.maSV
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
    console.log(inputList);
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
            <th>${arrSV[i].tinhDiemTB()}</th>
            <th>
            <button class="btn btn-outline-danger" onclick="xoaSV('${
              arrSV[i].maSV
            }')">Xóa</button>
            <button class="btn btn-outline-primary" onclick="chinhSua('${
              arrSV[i].maSV
            }')">chỉnh sửa</button>
            </th>
        </tr>
    `;
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
