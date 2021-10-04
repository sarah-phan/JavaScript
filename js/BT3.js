/**
 * BT 3
 * Khối 1:
 * - Số tiền USD (usd)
 * Khối 2:
 * - B1: Khai báo biến constant cho tỷ giá 23,500 (rate)
 * - B2: Tạo function
 * - B3: Khai báo biến, tìm tới thẻ và lấy giá trị getElementByID.value (usd, vnd)
 * - B4: Quy đổi usd sang vnd
 *      vnd = usd * rate
 * - B5: Gắn sự kiện cho button
 * - B6: Thay đổi nội dung thẻ p
 * - B7: Hiển thị ra màn hình
 * Khối 3: 
 * - Số tiền VND sau khi đổi (vnd)
 */

const rate = 23500;
function exchangeRate(){
    var usd = document.getElementById("money").value;
    var vnd = Number(usd) * Number(rate);
    
    document.getElementById("txtExchange").innerHTML = (new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(usd)) + " quy đổi sang VND = " + (new Intl.NumberFormat('vn-VN', {style: 'currency', currency: 'VND'}).format(vnd));
}
document.getElementById("btnExchange").onclick = exchangeRate;