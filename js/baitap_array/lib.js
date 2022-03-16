function renderCard(num) {
  let html = "";
  for (let i = 0; i < num; i++) {
    html += "<div class='col-4 mt-2'>";
    html += "<div class='card text-white bg-dark'>";
    html +=
      "<img class='card-img-top' src='https://picsum.photos/300' alt='random-img'>";
    html += "<div class='card-body'>";
    html += "<h4 class='card-title'>Product name</h4>";
    html += "<p class='card-text'>Product price</p>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  return html;
}

var arr = [8, 9, 9, 1, 3, 5, 9, 7, 7];

function renderSoLanXuatHien(num) {
  let count = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
          count++;
        }
    }

    if(count == 0) {
      count = " Số không tồn tại trong mãng";
    }
  
  
  return count;
}

function renderSoLeMin() {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
  }
  return min;
}

function renderTong() {
  let tong = 0;

  for (let i = 0; i < arr.length; i++) {
    tong += Number(arr[i]);
  }
  return tong;
}

function renderKetQuaLapLai() {
  let kq = "";

  let a = [],
    b = [],
    prev;

  let xuat = "";

  arr.sort();
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);

      // console.log("a : ", a);
      // console.log("b : ", b);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }
  // console.log("a : ", a);
  // console.log("b : ", b);

  for (let i = 0; i < a.length; i++) {
    if (b[i] > 1) {
      xuat = a[i] + " ( " + b[i] + " lần ) " + " - ";
      kq += xuat;
    }
  }

  return kq;
}
