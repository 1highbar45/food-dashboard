import Food from "../../models/v1/Food.js";
document.getElementById("btnThemMon").addEventListener('click', themMon);
function themMon() {
    const maMon = document.getElementById("foodID").value;
    const tenMon = document.getElementById("tenMon").value;
    const loaiMon = document.getElementById("loai").value;
    const giaMon = document.getElementById("giaMon").value;
    const khuyenMai = document.getElementById("khuyenMai").value;
    const tinhTrang = document.getElementById("tinhTrang").value;
    // input  type là file 
    let hinhAnh = document.getElementById("hinhMon").files[0];
    const moTa = document.getElementById("moTa").value;

    if (!hinhAnh) return;

    // Chuyển Đối tượng File thành string dạng base64 để hiển thị lên trang giao diện web
    const fileReader = new FileReader();
    fileReader.readAsDataURL(hinhAnh);
    fileReader.onload = function(event) {
        hinhAnh = event.target.result;

        const food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhAnh, moTa);

        hienThiMon(food);
    };
}

function hienThiMon(food) {
    document.getElementById("imgMonAn").src = food.hinhAnh;
    document.getElementById("spMa").innerHTML = food.maMon;
    document.getElementById("spTenMon").innerHTML = food.tenMon;
    document.getElementById("spLoaiMon").innerHTML = food.loaiMon;
    document.getElementById("spGia").innerHTML = food.giaMon;
    document.getElementById("spKM").innerHTML = food.khuyenMai;
    document.getElementById("spGiaKM").innerHTML = food.tinhGiaKhuyenMai();
    document.getElementById("spTT").innerHTML = food.tinhTrang;
    document.getElementById("pMoTa").innerHTML = food.moTa;
}