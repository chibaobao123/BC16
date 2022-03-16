function Validation () {
    this.kiemTraRong = function (value,selectorError) {
        if(value.trim() === '') {
            document.querySelector(selectorError).innerHTML = 'Mã sinh viên không được bỏ trống !';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}


