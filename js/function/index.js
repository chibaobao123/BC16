// function tinhTongSoChan(){

//     // console.log("hello")
//     let tong = 0;
//     let numInp = parseInt(document.getElementById('txtSoNguyen').value)
//     // console.log(numInp)

//     for(let i = 0; i <= numInp; i++){
//         if(i % 2 == 0){
//             tong += i;
//             // console.log(tong);
//         }

//     }
//     document.getElementById("ketQua").innerHTML = tong;
// }

function xuatKqTinhTongSoChan(){
    let numInp = parseInt(document.getElementById('txtSoNguyen').value);
    let kq = tinhTongSoChan2(numInp);
    // console.log(kq);
    document.getElementById('ketQua').innerHTML = kq;
}

function xuatKqgiaithua(){
    let numInp = parseInt(document.getElementById('txtN').value);
    let kq = tinhGiaThua(numInp);
    // console.log(kq);
    document.getElementById('ketQuaGiaiThua').innerHTML = kq;
}

function xetChanLe(){
    let numInp = parseInt(document.getElementById('soTheDiv').value);
    let kq = ktChanLe(numInp);
    // console.log(kq);
    document.getElementById('divBT6').innerHTML = kq;
}

function xuatKqSoNguyenTo(){
    let numInp = parseInt(document.getElementById('iSo').value);
    let kq = kiemTraSoNguyenTo(numInp);
    // console.log(kq);
    let output = '';
    let divOutput = xuatKq(numInp);

    if(kq){
        output = "<div class='text-center'>Đây là số nguyên tố: " + numInp + "</div>" + divOutput;
    }else{
        output = "<div class='text-center'>Đây không phải là số nguyên tố: " + numInp + "</div>";
    }

    document.getElementById('divSoNguyenTo').innerHTML = output;
}