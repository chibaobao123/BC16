/*
    Các tính năng es6 sử dụng trong bài
    for of, destructuring object, spread operator, dynamic key, for in, string template
*/

document.querySelector('#btnXacNhan').onclick = function () {
    // let maNhanVien = document.querySelector('#maNhanVien').value;
    let arrInput = document.querySelectorAll('#frmNhanVien input, #frmNhanVien select');
    // console.log('maNhanVien' ,arrInput[0].value);
    // console.log('tenNhanVien' ,arrInput[1].value);
    // console.log('arrInput',arrInput);
    let nhanVien = {};
    for (let input of arrInput) {
        let {id,value,className,style} = input;
        nhanVien = {...nhanVien,[id]:value}
    }
    // console.log('nhanVien',nhanVien);
    //Hiển thị thông tin ra giao diện
    //nhanVien = {maNhanVien:'1',tenNhanVien:'Nguyễn Văn A',chucVu:'Giám đốc',luongCanBan:'1000',soGioLam:100,soNgayNghi:'5'}
    let htmlNhanVien = '';
    for(let key in nhanVien) {
        htmlNhanVien += `
            <tr>
                <th>${key}</th>
                <th>${nhanVien[key]}</th>
            </tr>
        `
    }
    document.querySelector('tbody').innerHTML = htmlNhanVien;

    /*
        output: `<tr>
            <th>key</th>
            <th>value</th>
        </tr>` 
    */
    
}


// let {style}=document.getElementById('id').style 

//import: Là cú pháp cho phép file export được sử dụng ở file hiện tại

import {NhanVien,arr,DOMAIN} from '../models/NhanVien.js';
//import default: có thể đổi tên từ file export được và nhớ không có dấu {}
import NhanVienABC from '../models/NhanVien.js';

let nv = new NhanVien();

console.log('nhanVien',nv);

let nhanVien = new NhanVienABC();
console.log('nv',nhanVien);