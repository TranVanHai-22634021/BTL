$(document).ready(function () {
    
    $("#btnDN").click(function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

        // Lấy thông tin người dùng nhập
        var enteredName = $("#txtten").val().trim();  // Loại bỏ khoảng trắng thừa
        var enteredPassword = $("#txtpwd").val().trim();  // Loại bỏ khoảng trắng thừa

        // Kiểm tra xem tên đăng nhập và mật khẩu đã được nhập hay chưa
        if (!enteredName || !enteredPassword) {
            alert("Vui lòng nhập tên đăng nhập và mật khẩu!");
            return;
        }

        // Lấy thông tin đã lưu trong localStorage khi đăng ký
        var registeredName = localStorage.getItem("tenDangNhap");
        var registeredPassword = localStorage.getItem("matKhau");

        // Kiểm tra nếu thông tin đăng nhập đã được lưu
        if (!registeredName || !registeredPassword) {
            alert("Chưa có tài khoản, vui lòng đăng ký trước.");
            return;
        }

        // Kiểm tra thông tin đăng nhập
        if (enteredName === registeredName && enteredPassword === registeredPassword) {
            // Đăng nhập thành công, hiển thị thông báo thành công và chuyển hướng
            alert("Đăng nhập thành công!");

            // Lưu trạng thái đăng nhập vào localStorage
            localStorage.setItem('isLoggedIn', 'true'); // Thêm trạng thái đăng nhập

            // Chuyển hướng đến trang chủ
            window.location.href = "../html/Trang chủ.html"; // Chuyển hướng đến trang chủ
        } else {
            // Đăng nhập thất bại, hiển thị thông báo lỗi
            alert("Tên đăng nhập hoặc mật khẩu không đúng.");
        }
    });
});
