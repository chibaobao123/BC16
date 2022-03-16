let arr = [];

function ktrSoNguyen(number) {
  return Number.isInteger(number);
}

function pushNumber(number) {
  arr.push(number);
  return arr;
}

function tinhTongSoDuong(array) {
  let tong = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      tong += Number(array[i]);
    }
  }
  return tong;
}

function tongSoDuong(array) {
  let tong = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      tong += 1;
    }
  }
  return tong;
}

function renderMin(array) {
  let min = array[0];

  for (let i = 1; i < array.length; ++i) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

function renderMinDuong(array) {
  let duong, minDuong;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      duong = array[i];
      break;
    } else {
      duong = -1;
    }
  }

  minDuong = duong;

  if (minDuong >= 0) {
    for (let i = 0; i < array.length; ++i) {
      if (array[i] > 0) {
        if (minDuong >= array[i]) {
          minDuong = array[i];
          // console.log(minDuong);
        }
      }
    }
  } else {
    minDuong = "Không có số dương trong mảng !!!";
  }

  return minDuong;
}

function renderChanCuoi(array) {
  let kq;
  for (let i = array.length - 1; i < array.length && i >= 0; i--) {
    if (array[i] % 2 == 0) {
      kq = array[i];
      break;
    } else {
      kq = -1 + " (không có giá trị chẵn trong mảng)";
    }
  }

  return kq;
}

function doiViTri(array, num1, num2) {
  let giaTri1 = array[num1];
  let giaTri2 = array[num2];

  array[num1] = giaTri2;
  array[num2] = giaTri1;

  return array;
}

function kiemTraSoNguyenTo(n) {
  let flag = true;

  if (n < 2) {
    flag = false;
  } else {
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  return flag;
}

function timSoNguyenToDauTien(array){
  let soNT;
  for(let i = 0; i < array.length;i++){
    if(kiemTraSoNguyenTo(Number(array[i]))){ 
      soNT = array[i];
      break;
    }else {
      soNT = -1;
    }
  }
  return soNT;
}

function ktrSoThuc(string){
  let arr = string.split(" ");
  for(let i = 0; i < arr.length; i++){
    if(isNaN(Number(arr[i]))){
      arr = -1;
      break;
    }
  }
  return arr;
}

function renderSoNguyen(arr){
  let soNguyen = '';
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    let ktrSoNguyen = Number.isInteger(Number(arr[i]));
    console.log(ktrSoNguyen);
    if(ktrSoNguyen){
      count += 1;
      soNguyen += arr[i] + ' '

      // console.log(count, soNguyen);
    }
  }

  return [soNguyen, count];
}

function soSanhAmDuong(arr) {
  let countDuong = 0;
  let countAm = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      countDuong++;
    } else if(arr[i] < 0){
      countAm++;
    }
  }
  return [countDuong, countAm];
}