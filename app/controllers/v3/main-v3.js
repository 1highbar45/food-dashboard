import DanhSachMonAn from "../../models/v3/FoodList-v3.js";
import Food from "../../models/v3/Food-v3.js";

const dsma = new DanhSachMonAn();

document.getElementById("btnThemMon").addEventListener("click", themMon);

function themMon() {
    let maMon = document.getElementById("foodID").value;
    let tenMon = document.getElementById("tenMon").value;
    let loaiMon = document.getElementById("loai").value;
    let giaMon = document.getElementById("giaMon").value;
    let khuyenMai = document.getElementById("khuyenMai").value;
    let tinhTrang = document.getElementById("tinhTrang").value;

    // input  type là file
    let hinhAnh = document.getElementById("hinhMon").files[0];
    let moTa = document.getElementById("moTa").value;

    // if (!hinhAnh) return;

    // Chuyển Đối tượng File thành string dạng base64 để hiển thị lên trang giao diện web
    // const fileReader = new FileReader();

    // fileReader.readAsDataURL(hinhAnh);

    // fileReader.onload = function (event) {
    //     hinhAnh = event.target.result;
    //     const food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhAnh, moTa);
    //     dsma.themMonAn(food);
    //     hienThiDanhSachMonAn(dsma.danhSach);
    // };

    let food = new Food(
        maMon,
        tenMon,
        loaiMon,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa
    );
    dsma.themMonAn(food);
    hienThiDanhSachMonAn(dsma.danhSach);
    resetForm();
}

// document.getElementById("exampleModal").addEventListener('click', function(e) {
//     let id = e.target.getAttribute("maMon");
//     if (id === "btnThemMon") {
//         const dsma = new DanhSachMonAn();

//         const maMon = document.getElementById("foodID").value;
//         const tenMon = document.getElementById("tenMon").value;
//         const loaiMon = document.getElementById("loai").value;
//         const giaMon = document.getElementById("giaMon").value;
//         const khuyenMai = document.getElementById("khuyenMai").value;
//         const tinhTrang = document.getElementById("tinhTrang").value;

//         // input  type là file
//         let hinhAnh = document.getElementById("hinhMon").files[0];
//         const moTa = document.getElementById("moTa").value;

//         if (!hinhAnh) return;

//         // Chuyển Đối tượng File thành string dạng base64 để hiển thị lên trang giao diện web
//         const fileReader = new FileReader();

//         fileReader.readAsDataURL(hinhAnh);

//         fileReader.onload = function (event) {
//             hinhAnh = event.target.result;
//             const food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhAnh, moTa);
//             dsma.themMonAn(food);
//             hienThiDanhSachMonAn(dsma.danhSach);
//         };
//     }
// });

function hienThiDanhSachMonAn(dsma) {
    let tbody = document.getElementById("tbodyFood");
    let htmlContent = "";

    for (let i = 0; i < dsma.length; i++) {
        var monAn = dsma[i];
        htmlContent += `
            <tr>
                <td>${monAn.maMon}</td> 
                <td>${monAn.tenMon}</td> 
                <td>${monAn.loaiMon}</td> 
                <td>${monAn.giaMon}</td> 
                <td>${monAn.khuyenMai}</td> 
                <td>${monAn.tinhGiaKhuyenMai()}</td> 
                <td>${monAn.tinhTrang}</td>   
                <td>
                    <button data-action="update" data-id="${
                        monAn.maMon
                    }" class="btn btn-danger">Cập nhật</button>
                    <button data-action="delete" data-id="${
                        monAn.maMon
                    }" class="btn btn-danger">Xóa</button>
                </td> 
            </tr> 
        `;
    }
    tbody.innerHTML = htmlContent;
}

document.getElementById("tbodyFood").addEventListener("click", function (e) {
    var action = e.target.getAttribute("data-action");
    // console.log('e.target',e.target);
    let id = e.target.getAttribute("data-id");
    // console.log("id",id);
    if (action === "update") {
        let monAn = dsma.timKiemMonAn(id);
        console.log(monAn);
        document.getElementById("foodID").value = monAn.maMon;
        document.getElementById("tenMon").value = monAn.tenMon;
        document.getElementById("loai").value = monAn.loaiMon;
        document.getElementById("giaMon").value = monAn.giaMon;
        document.getElementById("khuyenMai").value = monAn.khuyenMai;
        document.getElementById("tinhTrang").value = monAn.tinhTrang;

        // let food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang);

        // Bật myModal
        $("#exampleModal").modal("show");
        // Thay đổi heading
        document.getElementsByClassName("modal-title")[0].innerHTML =
            "Cập Nhật Món Ăn";
    }

    if (action === "delete") {
        dsma.xoaMonAn(id);
    }

    hienThiDanhSachMonAn(dsma.danhSach);
});

// document.getElementById("tbodyFood").addEventListener("click", function (e) {
//     let action = e.target.getAttribute("data-action");
//     // console.log('e.target',e.target);
//     let maMon = e.target.getAttribute("data-id");
//     // console.log("id",id);
//     if (action === "update") {
//         let monAn = dsma.timKiemMonAn(maMon);
//         console.log(monAn);
//         document.getElementById("foodID").value = monAn.maMon;
//         document.getElementById("tenMon").value = monAn.tenMon;
//         document.getElementById("loai").value = monAn.loaiMon;
//         document.getElementById("giaMon").value = monAn.giaMon;
//         document.getElementById("khuyenMai").value = monAn.khuyenMai;
//         document.getElementById("tinhTrang").value = monAn.tinhTrang;

//         // let food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang);

//         // Bật myModal
//         $("#exampleModal").modal("show");
//         // Thay đổi heading
//         document.getElementsByClassName("modal-title")[0].innerHTML = "Cập Nhật Món Ăn";
//     }

//     if (action === "delete") {
//         dsma.xoaMonAn(maMon);
//     }

//     hienThiDanhSachMonAn(dsma.danhSach);
// });

document.getElementById("btnCapNhat").addEventListener("click", capNhatMonAn);

function capNhatMonAn() {
    let maMon = document.getElementById("foodID").value;
    let tenMon = document.getElementById("tenMon").value;
    let loaiMon = document.getElementById("loai").value;
    let giaMon = document.getElementById("giaMon").value;
    let khuyenMai = document.getElementById("khuyenMai").value;
    let tinhTrang = document.getElementById("tinhTrang").value;

    // input  type là file
    let hinhAnh = document.getElementById("hinhMon").files[0];
    let moTa = document.getElementById("moTa").value;

    let food = new Food(
        maMon,
        tenMon,
        loaiMon,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa
    );

    dsma.capNhatMonAn(food);
    hienThiDanhSachMonAn(dsma.danhSach);
}

function resetForm() {
    document.getElementById("foodID").value = "";
    document.getElementById("tenMon").value = "";
    document.getElementById("loai").value = "";
    document.getElementById("giaMon").value = "";
    document.getElementById("khuyenMai").value = "";
    document.getElementById("tinhTrang").value = "";

    // input  type là file
    // document.getElementById("hinhMon").files[0] = "";
    document.getElementById("moTa").value = "";
}
