/**
 * BT 1
 * Khối 1
 * - Lương 1 ngày (salary)
 * - Số ngày làm (day)
 * Khối 2
 * - B1: Tạo biến và gán giá trị cho biến: salary, day
 * - B2: Tìm tới thẻ và lấy giá trị: (getElementByID).value
 * - B3: Tính lương
 *      salary = salary * day
 * Rút gọn: salary *= day;
 * - B4: Gắn sự kiện cho button
 * - B5: Thay đổi nội dung thẻ p
 * - B6: Hiển thị màn hình
 * Khối 3
 * - Lương của nhân viên (salary)
 */

// BT 1
function salaryOfWorker(){
    var salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    console.log(salary, day);
    salary = Number(salary) * Number(day);
    document.getElementById("txtSalary").innerHTML = "Lương: " + salary;
}
document.getElementById("btnSalary").onclick = salaryOfWorker;
