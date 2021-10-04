/**
 * BT 2
 * Khối 1:
 * - 5 số thực (num1, num2, num3, num4, num5)
 * Khối 2:
 * - B1: Tạo function
 * - B2: Khai báo biến, tìm tới thẻ và lấy giá trị getElementByID.value (num1, num2, num3, num4, num5)
 * - B3: Tính trung bình
 *      average = (num1 + num2 + num3 + num4 + num5)/5
 * - B4: Gắn sự kiện cho button
 * - B5: Thay đổi nội dung thẻ p
 * - B6: Hiển thị ra màn hình
 * Khối 3: 
 * - Giá trị trung bình của 5 số thực (average)
 */

function average(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var average = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))/5;
    console.log(average);
    document.getElementById("txtAverage").innerHTML = "Số trung bình: " + average;
}
document.getElementById("btnAverage").onclick = average;
