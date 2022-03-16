
function tinhTongSoChan2(num){
    let tong = 0;
    // console.log(num);
    for(let i = 0; i <= num; i++){
        // console.log(i);
        if(i % 2 == 0){
            tong += i;
        }
    }
    return tong;
}

function tinhGiaThua(num){
    let giaiThua = 1;
    // console.log(num);
    for(let i = 1; i <= num; i++){
        // console.log(i);
        giaiThua *= i;
    }
    return giaiThua;
}

function ktChanLe(num){
    let chanLe = '';

    if (num % 2 == 0){
        chanLe = '<div class="text-center text-danger">Đây là số chẵn: ' + num + '</div>';
    } else {
        chanLe = '<div class="text-center text-warning">Đây là số lẻ: ' + num + '</div>';
    }

    return chanLe;
}

function kiemTraSoNguyenTo(n){
    // biến cò hiệu
    let flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    return flag;
}

function xuatKq(num){
    let numChuoi='';

    for (let i = 2; i <= num; i++){
        let ktr = kiemTraSoNguyenTo(i);
        if(ktr){
            numChuoi += '<div class="text-center"><span>' + i + '</span></div>'
        }
    }
    return numChuoi;
}