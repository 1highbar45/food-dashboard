class DanhSachMonAn {
    constructor() {
        this.danhSach = [];
    }

    nhanDanhSachMonAn(danhSach) {
        this.danhSach = danhSach;
    }

    themMonAn(food) {
        this.danhSach.push(food);
    }

    // timKiemMonAn(id){
    //     if(id){
    //         return this.danhSach.find(mon=>mon.maMon===id);
    //     }
    //     return -1;
    // }
    timKiemMonAn(maMon){
        if(maMon){
            return this.danhSach.find(food=>food.maMon===maMon);
        }
        return -1;
    }

    capNhatMonAn(food) {
        let index = -1;
        for (let i = 0; i < this.danhSach.length; i++) {
            if (this.danhSach[i].maMon === food.maMon) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            this.danhSach[index] = food;
        }
    }

    xoaMonAn(maMon) {
        var index = -1;
        for (var i = 0; i < this.danhSach.length; i++) {
            if (this.danhSach[i].maMon === maMon) {
                index = i;
                break; // thoát khỏi vòng for khi đã tìm được món ăn cần tìm
            }
        }

        if (index !== -1) {
            this.danhSach.splice(index, 1);
        }
    }
}

export default DanhSachMonAn