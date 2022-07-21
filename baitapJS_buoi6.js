//! Bài 1: Tìm số nguyên dương nhỏ nhất
document.getElementById('btnXemKetQua').onclick = function () {
    var sum = 0;
    for (var i = 0; ; i++) {
        sum += i;
        if (sum > 10000) {
            break;
        }
    }
    document.getElementById('soNguyenDuongNhoNhat').innerHTML = 'Số nguyên dương nhỏ nhất: ' + i;
}




//! Bài tập 2: Tính tổng
document.getElementById('btnTinhTong').onclick = function () {
    var x = Number(document.getElementById('nhapX').value);
    var n = Number(document.getElementById('nhapN').value);
    var tong = 0;
    for (var i = 1; i <= n; i++) {
        tong += x ** i;
    }
    document.getElementById('hienThiTong').innerHTML = tong;
}

//! Bài tập 3: Tính giai thừa
document.getElementById('btnTinhGiaiThua').onclick = function () {
    var n = Number(document.getElementById('nhapSoGiaiThua').value);
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    document.getElementById('hienThiGiaiThua').innerHTML = 'Giai thừa: ' + giaiThua;
}

//! Bài tập 4: Tạo thẻ div
document.getElementById('btnTaoTheDiv').onclick = function () {
    var hienThiDiv = '';
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            hienThiDiv += '<div style="background-color: red; color: white;">Div chẵn</div>'
        } else {
            hienThiDiv += '<div style="background-color: blue; color: white;">Div lẻ</div>'
        }
    }
    document.getElementById('hienThiTheDiv').innerHTML = hienThiDiv;
}