class Food {
    constructor(maMon, tenMon, loai, giaMon, khuyenMai, tinhTrang) {
        this.maMon = maMon;
        this.tenMon = tenMon;
        this.loai = loai;
        this.giaMon = giaMon;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang;
    }

    tinhGiaKhuyenMai() {
        return (this.giaMon * this.khuyenMai) / 100;
    }
}

export default Food;
