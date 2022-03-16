
document.getElementById('inPhanTu').onclick = () => {
    let arr = [17,25,79,84,25,17,44,-3,-9,-25,17];
    let string = '';

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            string += arr[i] + ' '; 
        }
    }

    document.getElementById('ketQua').innerHTML = string;
}