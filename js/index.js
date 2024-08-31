var DSNV = []

var dataJson = localStorage.getItem("DSNV_JSON")
if (dataJson !== null) {
    var dataArray = JSON.parse(dataJson)
    DSNV = dataArray.map(function (item) {
        var nv = new NhanVien(
            item.taiKhoan,
            item.hoVaTen,
            item.email,
            item.matKhau,
            item.ngayLam,
            item.luongCB,
            item.chucVu,
            item.gioLam,

        )
        return nv
    })
    DSNV
    renderDSNV(DSNV)
}


document.getElementById('btnThemNV').onclick = function themNV() {
    var nhanVien = layThongTin()
    if (kiemTraHopLe()) {
        DSNV.push(nhanVien)
        var dataJson = JSON.stringify(DSNV)
        localStorage.setItem("DSNV_JSON", dataJson)
        renderDSNV(DSNV)
        alert('thêm thành công')
    } else {
        alert('vui lòng nhập lại')
    }
}

// hàm sửa NV
function suaNV(taiKhoan) {
    var index = DSNV.findIndex(function (item) {
        return item.taiKhoan == taiKhoan;
    });
    var nv = DSNV[index]
    hienThiThongTinNV(nv);
    document.getElementById('tknv').disabled = true
}

function capNhatNV() {
    var nv = layThongTin()
    var index = DSNV.findIndex(function (item) {
        return item.taiKhoan == nv.taiKhoan;
    });
    if (kiemTraHopLe()) {
        DSNV[index] = nv
        var dataJson = JSON.stringify(DSNV)
        localStorage.setItem("DSNV_JSON", dataJson)
        renderDSNV(DSNV);
        alert('cập nhật thành công')
    } else {
        alert('vui lòng nhập lại')
    }

}

document.getElementById('btnTimNV').onclick = function () {
    var loaiNhanVienCanTim = document.getElementById('searchName').value
    console.log("🚀 [ loaiNhanVienCanTim:", loaiNhanVienCanTim)
    var danhSachNhanVienCanTim = DSNV.filter(function (nvCanTim) {
        return nvCanTim.loaiNV == loaiNhanVienCanTim
    });
    console.log("🚀 [ danhSachNhanVienCanTim [ danhSachNhanVienCanTim:", danhSachNhanVienCanTim)
    renderDSNV(danhSachNhanVienCanTim)
}