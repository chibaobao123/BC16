//export: Cho phép function, object, array, các biến sử dụng ở các file khác mà không cần nhúng vào file .html

export function NhanVien () {
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.luongCanBan = '';
    this.soGioLam ='';
    this.soNgayNghi ='';
    this.chucVu = '';
}


export const arr = [1,2,3,4,5]

export const DOMAIN = 'https://svcy.myclass.vn/api';



//export default: Cũng giống như export tuy nhiên mỗi file chỉ được default 1 lần
export default NhanVien;