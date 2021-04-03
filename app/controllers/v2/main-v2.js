import Food from "../../models/v2/Food-v2.js";
import DanhSachMonAn from '../../models/v2/FoodList-v2.js';

const list = new DanhSachMonAn();

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

    fileReader.onload = function (event) {
        hinhAnh = event.target.result;

        const food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhAnh, moTa);
        list.themMonAn(food); 
        hienThiDanhSachMonAn(list.danhSach);
    };

}


function hienThiDanhSachMonAn(list) { 
    let tbody = document.getElementById("tbodyFood");
    let htmlContent = "";

    for (let i = 0; i < list.length; i++) {
        var monAn = list[i];
        htmlContent += `
            <tr>
                <td>${monAn.maMon}</td> 
                <td>${monAn.tenMon}</td> 
                <td>${monAn.loaiMon}</td> 
                <td>${monAn.giaMon}</td> 
                <td>${monAn.khuyenMai}</td> 
                <td>${monAn.tinhGiaKhuyenMai()}</td> 
                <td>${monAn.tinhTrang}</td>    
            </tr> 
        `; 

    } 
    tbody.innerHTML=htmlContent;
}

