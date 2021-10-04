/**
 * BT 5
 * Khối 1:
 * - Số có 2 chữ số (num)
 * Khối 2:
 * - B1: Khai báo biến (num, ten, unit, sum)
 * - B2: Tạo function
 * - B2: Tìm tới thẻ và lấy giá trị getElementByID.value (num, ten, unit, sum)
 * - B3: Lập công thức lấy phần chục (ten)
 *      ten = Math.floor(num/10)
 * - B4: Lập công thức lấy phần đơn vị (unit)
 *      unit = num % 10
 * - B5: Tính tổng
 *      sum = ten + unit
 * - B6: Hiện thị kết quả ra màn hình
 * Khối 3: 
 * - Tổng của 2 chữ số (sum)
 */
var num;
var unit;
var ten;
var sum;
function sum(){
    num = document.getElementById("number").value;
    console.log(num);
    ten = Math.floor(Number(num)/10);
    unit = Number(num) % 10;
    sum = Number(ten) + Number(unit);
    
    document.getElementById("txtSum").innerHTML = "Tổng số có 2 chữ số: " + sum;
}
document.getElementById("btnSum").onclick = sum;