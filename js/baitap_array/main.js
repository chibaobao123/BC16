document.getElementById("btnInSanPham").onclick = () => {
    let soLuong = document.getElementById("soLuongSanPham").value;
    console.log(soLuong);
    
    let html = renderCard(soLuong);

    document.getElementById("btnXoa").style.display = "block";
    document.getElementById("content").innerHTML = html;
}

document.getElementById("btnXoa").onclick = () => {
    let soLuong = 0;
    
    let html = renderCard(soLuong);

    document.getElementById("btnXoa").style.display = "none";
    document.getElementById("content").innerHTML = html;
}

document.getElementById("btnXuLy").onclick = () => {
    let num = document.getElementById("giaTri").value;

    let soLanXuatHien = renderSoLanXuatHien(num);
    let soLeMin = renderSoLeMin();
    let tong = renderTong();
    let ketQuaLapLai = renderKetQuaLapLai()

    document.getElementById("soLanXuatHien").innerHTML = soLanXuatHien;
    document.getElementById("soLeNhoNhat").innerHTML = soLeMin;
    document.getElementById("ketQuaTong").innerHTML = tong;
    document.getElementById("ketQuaLapLai").innerHTML = ketQuaLapLai;
}