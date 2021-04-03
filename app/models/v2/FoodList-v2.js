// function DanhSachMonAn() {
//     this.danhSach = [];
// }

// DanhSachMonAn.prototype.nhanDanhSachMonAn = function(danhSach) {
//     this.danhSach = danhSach;
// }
class DanhSachMonAn{     
    constructor(){
        this.danhSach=[];
    }
    nhanDanhSachMonAn(danhSach){
        this.danhSach=danhSach;
    }
    themMonAn(food){
        this.danhSach.push(food);
    }
}

export default DanhSachMonAn    