class Food {
    constructor(maMon, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhAnh, moTa) {
        this.maMon = maMon;
        this.tenMon = tenMon;
        this.loai = loai;
        this.giaMon = giaMon;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang;
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
    }

    tinhGiaKhuyenMai() {
        return (this.giaMon * this.giaKhuyenMai) / 100;
    }
}

export default Food;