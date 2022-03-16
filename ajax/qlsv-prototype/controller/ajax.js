// console.log(axios);

function getData() {
  // gọi hàm axios truyền vào obj
  let promise = axios({
    url: "./data/data.txt", //đường dẫn đến file hoặc link api back-end cung cấp
    method: "GET",
    responseType: "text",
  });

  /*
    promise là đối tượng có 2 phương thức cần nhớ:
     + then () : Nhận vào 1 hàm khi request thành công
     + catch(): Nhận vào 1 hàm khi request thất bại
  */

  //xử lý thành công
  promise.then(function (kq) {
    console.log(kq);
    document.querySelector("#content").innerHTML = "họ và tên : " + kq.data;
  });

  //xử lý thất bại
  promise.catch(function (err) {
    console.log(err);
  });
}

getData();

function getDataXML() {
  // gọi hàm axios truyền vào obj
  let promise = axios({
    url: "./data/data.xml", //đường dẫn đến file hoặc link api back-end cung cấp
    method: "GET",
    responseType: "document",
  });

  /*
      promise là đối tượng có 2 phương thức cần nhớ:
       + then () : Nhận vào 1 hàm khi request thành công
       + catch(): Nhận vào 1 hàm khi request thất bại
    */

  //xử lý thành công
  promise.then(function (kq) {
    console.log(kq);

    //   cách 1:
    //   let ten = kq.data.childNodes[0].innerHTML;

    //cách 2:
    let ten = kq.data.querySelector("hoten").innerHTML;
    document.querySelector("#content_xml").innerHTML = "họ và tên : " + ten;
  });

  //xử lý thất bại
  promise.catch(function (err) {
    console.log(err);
  });
}

getDataXML();


function getDataJSON() {
    // gọi hàm axios truyền vào obj
    let promise = axios({
      url: "./data/data.json", //đường dẫn đến file hoặc link api back-end cung cấp
      method: "GET",
      responseType: "json",
    });
  
    /*
      promise là đối tượng có 2 phương thức cần nhớ:
       + then () : Nhận vào 1 hàm khi request thành công
       + catch(): Nhận vào 1 hàm khi request thất bại
    */
  
    //xử lý thành công
    promise.then(function (kq) {
      console.log(kq);
      document.querySelector("#content_json").innerHTML = "họ và tên : " + kq.data.hoTen;
    });
  
    //xử lý thất bại
    promise.catch(function (err) {
      console.log(err);
    });
  }

  getDataJSON()