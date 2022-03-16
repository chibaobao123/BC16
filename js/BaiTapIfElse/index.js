function inRaSoTangDan() {
    let so1 =  parseInt(document.getElementById("soThuNhat_b1").value);
    let so2 =  parseInt(document.getElementById("soThuHai_b1").value);
    let so3 =  parseInt(document.getElementById("soThuBa_b1").value);

    let daySoInRa = ''; 

    if(so1 >= so2 && so2 >= so3) {
        daySoInRa = so3 + ' - ' + so2 + ' - ' + so1;
    } else if( so2 >= so3 && so3 >= so1) {
        daySoInRa = so1 + ' - ' + so3 + ' - ' + so2;
    } else if (so3 >= so1 && so1 >= so2) {
        daySoInRa = so2 + ' - ' + so1 + ' - ' + so3;
    } else if (so3 >= so2 && so2 >= so1){
        daySoInRa = so1 + ' - ' + so2 + ' - ' + so3;
    } else if (so1 >= so3 && so3 >= so2){
        daySoInRa = so2 + ' - ' + so3 + ' - ' + so1;
    } else {
        daySoInRa = '<p>Loi tính toán</p>'
    }
 
    document.getElementById("ketQuaBai1").innerHTML = daySoInRsa;
}

function inRaSoLonNhat() {
    let so1 =  parseInt(document.getElementById("soThuNhat_b2").value);
    let so2 =  parseInt(document.getElementById("soThuHai_b2").value);
    let so3 =  parseInt(document.getElementById("soThuBa_b2").value);

    let max = ''; 

    if(so1 > so2 > so3 || so1 > so2 && so2 >= so3) {
        max = so1;
    } else if (so2 > so3 > so1 || so2 > so1 && so1 >= so3) {
        max = so2;
    } else {
        max = so3;
    }
 
    document.getElementById("ketQuaBai2").innerHTML = max;
}

function inRaSoChan() {
    let so1 =  parseInt(document.getElementById("soThuNhat_b3").value);
    let so2 =  parseInt(document.getElementById("soThuHai_b3").value);
    let so3 =  parseInt(document.getElementById("soThuBa_b3").value);

    let soChan = ''; 

    if(so1 % 2 == 0 && so2 % 2 == 0 && so3 % 2 == 0){
        soChan = so1 + ' - ' + so2 + ' - ' + so3;
    }
    
    if(so1 % 2 == 0){soChan += so1 + ' '}
    if(so2 % 2 == 0){soChan += so2 + ' '}
    if(so3 % 2 == 0){soChan += so3}

    document.getElementById("ketQuaBai3").innerHTML = soChan;
}

function inNgayThangNamTiep(){
    let ngay =  parseInt(document.getElementById("ngay").value);
    let thang =  parseInt(document.getElementById("thang").value);
    let nam =  parseInt(document.getElementById("nam").value);

    let ngayTiep = '';
    let thangTiep = '';
    let namTiep = '';

    

    if(ngay == '31' && thang == '1' || ngay == '31' && thang == '3' || ngay == '31' && thang == '5' || ngay == '31' && thang == '7' || ngay == '31' && thang == '8' || ngay == '31' && thang == '10' ){
        ngayTiep = ngay + 1;
        thangTiep = thang + 1;
        namTiep = nam;
    } else if (ngay == '30' && thang == '4' ||ngay == '30' && thang == '6' ||ngay == '30' && thang == '9' ||ngay == '30' && thang == '11'){
        ngayTiep =  1;
        thangTiep = thang + 1;
        namTiep = nam;
    } else if (ngay == '28' && thang == '2' || ngay == '29' && thang == '2'){
        ngayTiep =  1;
        thangTiep = thang + 1;
        namTiep = nam;
    } else if (ngay == '31' && thang == '12'){
        ngayTiep =  1;
        thangTiep = 1;
        namTiep = nam + 1;
    } else {
        ngayTiep = ngay + 1;
        thangTiep = thang;
        namTiep = nam;
    }

    document.getElementById("ngayKetQua").value = ngayTiep;
    document.getElementById("thangKetQua").value = thangTiep;
    document.getElementById("namKetQua").value = namTiep;

}

function tangSize() {
    let fontSize = window.getComputedStyle(document.getElementById('doanVanBan')).fontSize;
    let size = fontSize.slice(0,2);
    let kq = (Number(size) + 1) + 'px';

    // console.log(fontSize,size,kq);

    document.getElementById('doanVanBan').style.fontSize = kq;
}

function giamSize() {
    let fontSize = window.getComputedStyle(document.getElementById('doanVanBan')).fontSize;
    let size = fontSize.slice(0,2);
    let kq = (Number(size) - 1) + 'px';

    // console.log(fontSize,size,kq);

    document.getElementById('doanVanBan').style.fontSize = kq;
}