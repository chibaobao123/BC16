var arr = ["A", "B", "C", "D", "E", "F"];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.push("Tèo") // thêm cuối
console.log(arr)

console.log(arr.pop()); // xóa đuôi
console.log(arr);

arr.unshift("Tèo") // thêm dầu
console.log(arr)

console.log(arr.shift()) // xóa dầu
console.log(arr)

var arr_1 = ["A", "B", "C", "D", "E", "F"];
console.log(arr)

arr_1.splice(3,1) // xóa 1 ptu ra khỏi mảng
console.log(arr_1)

