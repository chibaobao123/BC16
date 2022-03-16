document.querySelector("#btnSVCaoDiemNhat").onclick = function () {
  // Input: Tên sinh viên, điểm => tìm ra được sinh viên có điểm cao nhất

  //Lấy ra các thẻ tr vì input (tên sinh viên và điểm trên thẻ tr)

  var arrTr = document.querySelectorAll("#tblBody tr");
  var output = "";
  //Định nghĩa sinh viên có điểm cao nhất
  var hoTenCaoNhat = arrTr[0].cells[2].innerHTML; //Lấy tr đầu tiên thẻ td thứ 2 lấy ra tên người đầu tiên
  var diemCaoNhat = arrTr[0].cells[3].innerHTML; //Lấy tr đầu tiên thẻ td thứ 3 lấy ra điểm người đầu tiên
  for (var index = 0; index < arrTr.length; index++) {
    //Lấy ra thẻ tr sau mỗi lần duyệt
    var tr = arrTr[index];
    //tr sẽ có chứa các td => để lấy các thẻ td ta dùng tr.cells
    var hoTen = tr.cells[2].innerHTML;
    var diem = tr.cells[3].innerHTML;

    //Mỗi lần duyệt qua thẻ tr thì lấy điểm của dòng tr đó so sánh với diemCaoNhat
    if (diem > diemCaoNhat) {
      //Nếu tr nào có điểm cao hơn tr đầu tiên thì gán lại điểm cao nhất và họ tên người cao nhất
      diemCaoNhat = diem;
      hoTenCaoNhat = hoTen;
    }
  }
  //Sau khi tìm người có điểm cao nhất thì tạo chuỗi kết quả hiển thị ra giao diện
  output = hoTenCaoNhat + " - điểm: " + diemCaoNhat;
  document.querySelector("#svGioiNhat").innerHTML = output;
  console.log(arrTr);
};

document.querySelector("#btnSVThapDiemNhat").onclick = function () {
  //Input: lấy input từ giao diện

  var arrTr = document.querySelectorAll("#tblBody tr"); //Lấy ra 7 thẻ tr

  //Lấy ra thẻ tr đầu tiên
  var trDauTien = arrTr[0];
  //Lấy họ tên và điểm của sinh viên đầu tiên làm sinh viên yếu nhất
  var hoTenThapNhat = trDauTien.cells[2].innerHTML; //(cells[2] là td thứ 2 trong tr đó )
  var diemThapNhat = trDauTien.cells[3].innerHTML; //(cells[3] là td thứ 3 trong tr đó);

  for (var index = 0; index < arrTr.length; index++) {
    //Lấy ra từng thẻ tr mỗi lần duyệt
    var tr = arrTr[index];
    //Lấy ra họ tên, và điểm của từng thẻ tr
    var hoTen = tr.cells[2].innerHTML;
    var diem = tr.cells[3].innerHTML;
    //So sánh điểm của từng thẻ tr với diemThapNhat
    if (diem < diemThapNhat) {
      diemThapNhat = diem; //Nếu điểm của tr đó thấp hơn điểm thấp nhất thì lấy điểm thấp nhất gán = điểm của tr đó
      hoTenThapNhat = hoTen;
    }
  }

  //Sau khi duyệt xong các thẻ tr => tạo ouput từ điểm thấp nhất và họ tên thấp nhất
  var output = hoTenThapNhat + " - điểm: " + diemThapNhat;
  //in output ra giao diện
  document.querySelector("#svYeuNhat").innerHTML = output;
};

document.getElementById("btnSoSVGioi").onclick = () => {
  let output = 0;
  let arrTr = document.querySelectorAll("#tblBody tr");
  for (let i = 0; i < arrTr.length; i++) {
    let tr = arrTr[i];
    let diem = tr.cells[3].innerHTML;
    if (diem >= 8) {
      output++;
    }
    //   console.log(diem);
  }
  document.getElementById("soSVGioi").innerHTML = output;
};

document.getElementById("btnSVDiemHon5").onclick = () => {
  let output = "";
  let arrTr = document.querySelectorAll("#tblBody tr");
  for (let i = 0; i < arrTr.length; i++) {
    let tr = arrTr[i];
    let diem = tr.cells[3].innerHTML;
    let ten = tr.cells[2].innerHTML;
    if (diem > 5) {
      output += ten + " <br> ";
    }
    //   console.log(diem);
  }
  document.getElementById("dsDiemHon5").innerHTML = output;
};

let arrNum = [7, 4, 5, 9, 15, 27, 16];

sapXepTangDan();

function sapXepTangDan() {
  let tg;
  for (let i = 0; i < arrNum.length - 1; i++) {
    for (let j = i + 1; j < arrNum.length; j++) {
      if (arrNum[i] > arrNum[j]) {
        tg = arrNum[i];
        arrNum[i] = arrNum[j];
        arrNum[j] = tg;

        // console.log(tg);
        // console.log(arrNum[j]);
        // console.log(arrNum[i]);
      }
    }
  }
  //   console.log(arrNum);
}

// document.querySelector('#btnSapXepTang').onclick = () => {
//     let arrTr = document.querySelectorAll("#tblBody tr");
//     for (let i = 0; i < arrTr.length -1 ; i++) {

//         // console.log(arrTr[i].innerHTML)

//         for (let j = i + 1; j < arrTr.length; j++) {
//             if (arrTr[i].cells[3].innerHTML > arrTr[j].cells[3].innerHTML) {
//                 // chỉ sắp xếp điểm
//             //   tg = arrTr[i].cells[3].innerHTML;
//             //   arrTr[i].cells[3].innerHTML = arrTr[j].cells[3].innerHTML;
//             //   arrTr[j].cells[3].innerHTML = tg;

//                 //sắp xếp lại tất cả các thẻ tr
//               tg = arrTr[i].innerHTML;
//               arrTr[i].innerHTML = arrTr[j].innerHTML;
//               arrTr[j].innerHTML = tg;

//             }
//           }
//     }
// }

document.querySelector("#btnSapXepTang").onclick = () => {
  let arrTr = document.querySelectorAll("#tblBody tr");
  console.log(
    JSON.stringify(tableToJson(arrTr))
  );
};

function tableToJson(table) {
  var tableObject = [];

  for (i = 0; i < table.length; i++) {
    var row = [];
    for (j = 0; j < table[i].children.length; j++) {
      row.push(table[i].children[j].innerHTML);
    }
    tableObject.push(row);
  }

  return tableObject;
}
