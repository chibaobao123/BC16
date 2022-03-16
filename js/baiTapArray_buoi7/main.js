let arrTong = [];

document.getElementById("btnKetQua").onclick = () => {
  let num = Number(document.getElementById("inputNumber").value);
  // console.log(num);
  document.getElementById("inputNumber").value = "";

  let boolean = ktrSoNguyen(num);
  // console.log(boolean);

  if (num == null) {
    alert("Bạn phải nhập vào 1 số tự nhiên.");
  } else if (boolean) {
    // console.log("Đây là số nguyên: " + boolean);
    let array = pushNumber(num);
    arrTong.push(num);
    let newArr = [...array];
    let tong = tinhTongSoDuong(array);
    let tongCong = tongSoDuong(array);
    let min = renderMin(array);
    let minDuong = renderMinDuong(array);
    let chanCuoi = renderChanCuoi(array);
    let arrTangDan = newArr.sort(function (a, b) {
      return a - b;
    });
    let soNguyenToDauTien = timSoNguyenToDauTien(array);

    document.getElementById("tongHaiMang").innerHTML = arrTong;
    document.getElementById("arrayNumber").innerHTML = array;
    document.getElementById("tongSoDuong").innerHTML = tong;
    document.getElementById("tongCacSoDuong").innerHTML = tongCong;
    document.getElementById("min").innerHTML = min;
    document.getElementById("minDuong").innerHTML = minDuong;
    document.getElementById("chanCuoi").innerHTML = chanCuoi;
    document.getElementById("arrTangDan").innerHTML = arrTangDan;
    document.getElementById("soNguyenToDauTien").innerHTML = soNguyenToDauTien;
  } else {
    alert("Bạn phải nhập vào 1 số tự nhiên.");
  }
};

document.getElementById("btnKetQuaDoiViTri").onclick = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  // console.log(num);
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";

  let boolean1 = ktrSoNguyen(num1);
  let boolean2 = ktrSoNguyen(num2);
  // console.log(boolean);

  if (num1 == null || num2 == null) {
    alert("Bạn phải nhập thiếu.");
  } else if (num1 == num2) {
    alert("Hai số không được trùng nhau.");
  } else if (boolean1 && boolean2) {
    let array = [...arr];
    let newArr = doiViTri(array, num1, num2);

    document.getElementById("arrayNumber2").innerHTML = newArr;
  } else {
    alert("Bạn phải nhập vào 1 số tự nhiên.");
  }
};

document.getElementById("btnKetQuaSoThuc").onclick = () => {
  let string = document.getElementById("soThuc").value.trim();

  document.getElementById("soThuc").value = "";

  console.log(string);

  if (string == "") {
    alert("Mãng số thực không hợp lệ !!!");
  } else {
    let arr = ktrSoThuc(string);

    if (arr == "-1") {
      alert("Mãng không hợp lệ !!");
    } else {
      let array = renderSoNguyen(arr);
      console.log(array);
      arrTong.push(arr);

      document.getElementById("arraySoThuc").innerHTML = arr;
      document.getElementById("tongSoNguyenToTrongMangSoThuc").innerHTML = array[0];
      document.getElementById("SoNguyenToTrongMangSoThuc").innerHTML = array[1];
      document.getElementById("tongHaiMang").innerHTML = arrTong;
    }
  }
};

document.getElementById("btnKqCau10").addEventListener("click", () => {
  let soLuongAmDuong = soSanhAmDuong(arrTong);
  let soLuongDuong = soLuongAmDuong[0];
  let soLuongAm = soLuongAmDuong[1];

  console.log(s);

  if (soLuongAm > soLuongDuong){
    document.getElementById("spanSoSanh").innerHTML = " > ";
  } else if (soLuongAm < soLuongDuong) {
    document.getElementById("spanSoSanh").innerHTML = " < ";

  } else {
    document.getElementById("spanSoSanh").innerHTML = " = ";

  }

  document.getElementById('soSanhDuong').innerHTML=(soLuongDuong);
  document.getElementById('soSanhAm').innerHTML=(soLuongAm);
});
