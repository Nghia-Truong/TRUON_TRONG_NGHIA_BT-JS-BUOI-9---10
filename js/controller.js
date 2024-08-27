// Hàm hiển thị DSNV
function renderDSNV(dsnv) {
    var contentHTML = ""
    for (var i = 0; i < dsnv.length; i++) {
        nv = dsnv[i]
        var trString = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoVaTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNV}</td>
            <td><button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button><button class="btn btn-success" onclick="suaNV('${nv.taiKhoan}')">Cập nhật</button></td>
        </tr>`
        contentHTML += trString
    }
    document.getElementById('tableDanhSach').innerHTML = contentHTML
}

// Hàm xóa nhân viên
function xoaNhanVien(taiKhoan) {
    var index = DSNV.findIndex(function (nv) {
        return nv.taiKhoan == taiKhoan;
    });
    DSNV.splice(index, 1)
    var dataJson = JSON.stringify(DSNV)
    localStorage.setItem("DSNV_JSON", dataJson)
    renderDSNV(DSNV);
}

// hàm hiển thị thông tin nhân viên
function hienThiThongTinNV(data) {
    document.getElementById('tknv').value = data.taiKhoan
    document.getElementById('name').value = data.hoVaTen
    document.getElementById('email').value = data.email
    document.getElementById('password').value = data.matKhau
    document.getElementById('datepicker').value = data.ngayLam
    document.getElementById('luongCB').value = data.luongCB
    document.getElementById('chucvu').value = data.chucVu
    document.getElementById('gioLam').value = data.gioLam
}

// Hàm tính tổng lương cho nhân viên
function tinhTongLuong(chucVu, luongCB) {
    switch (chucVu) {
        case "Sếp":
            return luongCB * 3;
        case "Trưởng phòng":
            return luongCB * 2;
        case "Nhân viên":
            return luongCB;
        default:
            return 0;
    }
}
// Hàm xếp loại nhân viên
function xepLoai(gioLam) {
    if (gioLam >= 192) return "Xuất sắc";
    if (gioLam >= 176) return "Giỏi";
    if (gioLam >= 160) return "Khá";
    return "Trung bình";
}

// hàm lấy thông tin
function layThongTin() {
    var taiKhoan = document.getElementById('tknv').value
    var hoVaTen = document.getElementById('name').value
    var email = document.getElementById('email').value
    var matKhau = document.getElementById('password').value
    var ngayLam = document.getElementById('datepicker').value
    var luongCB = document.getElementById('luongCB').value
    var chucVu = document.getElementById('chucvu').value
    var gioLam = document.getElementById('gioLam').value
    var nv = new NhanVien(taiKhoan, hoVaTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam)
    return nv
}