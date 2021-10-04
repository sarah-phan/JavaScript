/**
 * BT 4
 * Khối 1:
 * - Chiều dài HCN (height)
 * - Chiều rộng HCN (width)
 * Khối 2:
 * - B1: Tạo function
 * - B2: Khai báo biến, tìm tới thẻ và lấy giá trị getElementByID.value (height, width, p, s)
 * - B3: Tính chu vi
 *      p = (widht + height)*2
 * - B4: Tính diện tích
 *      s = width * height
 * - B5: Gắn sự kiện cho button
 * - B6: Thay đổi nội dung thẻ p
 * - B7: Hiển thị ra màn hình
 * Khối 3:
 * - Chu vi hình chữ nhật (p)
 * - Diện tích hình chữ nhật (s)
 */

function compute(){
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    console.log(width,height);
    var p = (Number(width) + Number(height))*2;
    var s = Number(width)*Number(height);
    console.log(p,s);
    document.getElementById("txtCompute").innerHTML = "Chu vi HCN là: " + p + " Diện tích HCN là: " + s;
}
document.getElementById("btnCompute").onclick = compute;
