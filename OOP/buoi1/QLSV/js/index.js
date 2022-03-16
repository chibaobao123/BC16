document.getElementById("btnHienThiThongTin").onclick = () => {
    let maSV = document.getElementById("txtMaSV").value;
    let tenSV = document.getElementById("txtTenSV").value;
    let loaiSV = document.getElementById("loaiSV").value;
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemVan = document.getElementById("txtDiemVan").value;
    let diemTB = tinhDiemTB(diemToan,diemVan);
    let loai = xepLoai(diemTB);

    document.getElementById("spanMaSV").innerHTML = maSV;
    document.getElementById("spanTenSV").innerHTML = tenSV;
    document.getElementById("spanLoaiSV").innerHTML = loaiSV;
    document.getElementById("spanDTB").innerHTML = diemTB;
    document.getElementById("spanXepLoai").innerHTML = loai;
    
}

function tinhDiemTB(toan,van){
    let tb = 0;
    tb= (Number(toan) + Number(van))/2;
    return tb;
}

function xepLoai(num){
    let loai = '';

    if(num > 5){
        loai = 'Đậu';
    } else {
        loai = 'Rớt';
    }
    
    return loai;
}