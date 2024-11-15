$(document).ready(function () {

    // Kiểm tra tên đăng nhập
    function kiemTraTenDN() {
        var ktTen = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;
        var ten = $("#txtten").val();

        if (ten === "") {
            $("#tbten").html("Không được trống");
            $("#tbten").removeClass("xanh").addClass("do");
            return false;
        } else if (!ktTen.test(ten)) {
            $("#tbten").html("Tối thiểu 2 từ, viết hoa đầu từ");
            $("#tbten").removeClass("xanh").addClass("do");
            return false;
        } else {
            $("#tbten").html("Hợp lệ");
            $("#tbten").removeClass("do").addClass("xanh");
            return true;
        }
    }
    $("#txtten").blur(kiemTraTenDN);

    // Kiểm tra email
    function kiemTraMail() {
        var ktMail = /^[\w-_~!#$%^&*()+=]{3,}@(gmail\.com|iuh\.edu\.vn)$/
        var mail = $("#txtmail").val();

        if (mail === "") {
            $("#tbmail").html("Không được trống");
            $("#tbmail").removeClass("xanh").addClass("do");
            return false;
        } else if (!ktMail.test(mail)) {
            $("#tbmail").html("Không hợp lệ");
            $("#tbmail").removeClass("xanh").addClass("do");
            return false;
        } else {
            $("#tbmail").html("Hợp lệ");
            $("#tbmail").removeClass("do").addClass("xanh");
            return true;
        }
    }
    $("#txtmail").blur(kiemTraMail);

    // kiem tra mật khẩu
    function kiemTraMK() {
        var ktMK = /^[A-Za-z0-9]{6,20}$/
        var MK = $("#txtpwd").val()

        if (MK === "") {
            $("#tbmk").html("Không được trống");
            $("#tbmk").removeClass("xanh").addClass("do");
            return false;
        } else if (!ktMK.test(MK)) {
            $("#tbmk").html("Độ dài từ 6-20 kí tự");
            $("#tbmk").removeClass("xanh").addClass("do");
            return false;
        } else {
            $("#tbmk").html("Hợp lệ");
            $("#tbmk").removeClass("do").addClass("xanh");
            return true;
        }
    }
    $("#txtpwd").blur(kiemTraMK);

    // Xử lý khi nhấn nút đăng ký
    $("#btnDK").click(function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

        if (kiemTraTenDN() && kiemTraMail() && kiemTraMK()) {
            localStorage.clear();
            var ten = $("#txtten").val();
            var mail = $("#txtmail").val();
            var matKhau = $("#txtpwd").val();
            var diaChi = $("#txtdiachi").val();

            // Lưu thông tin vào localStorage
            localStorage.setItem("tenDangNhap", ten);
            localStorage.setItem("email", mail);
            localStorage.setItem("matKhau", matKhau);
            localStorage.setItem("diaChi", diaChi);

            // Thông báo đăng ký thành công
            alert("Đăng ký thành công!");

            // Chuyển hướng sang trang đăng nhập 
            window.location.href = "../html/Đăng nhập.html";
        } else {
            alert("Vui lòng điền đầy đủ và chính xác thông tin.");
        }
    });
});
