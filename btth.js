
let subscriptions = [
    { id: "SUB01", name: "Nguyen Van A", plan: "Standard", price: 120000, devices: 2 },
    { id: "SUB02", name: "Tran Thi B", plan: "Family", price: 250000, devices: 5 }
];

function addSub() {
    let id = prompt("Nhập mã thuê bao:");
    let name = prompt("Nhập tên khách hàng:");

    if (!id || !name) {
        console.log("Thông tin không hợp lệ!");
        return;
    }

    subscriptions.push({
        id: id,
        name: name,
        plan: "Standard",
        price: 120000,
        devices: 2
    });

    console.log("Thêm thuê bao thành công!");
}

function listSubs() {
    console.table(subscriptions);
}

function upgradeSub() {
    let id = prompt("Nhập mã thuê bao cần nâng cấp:");
    let sub = subscriptions.find(item => item.id === id);

    if (!sub) {
        console.log("Không tìm thấy thuê bao!");
        return;
    }

    sub.plan = "Family";
    sub.price = 250000;
    sub.devices = 5;

    console.log("Nâng cấp gói cước thành công!");
}

let menuChoice;

do {
    menuChoice = prompt(`
        RIKKEISTREAM
        1. Thêm thuê bao
        2. Hiển thị danh sách
        3. Nâng cấp gói cước
        4. Thoát
        Nhập lựa chọn:
    `);

    switch (menuChoice) {
        case "1":
            addSub();
            break;
        case "2":
            listSubs();
            break;
        case "3":
            upgradeSub();
            break;
        case "4":
            console.log("Đã thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (menuChoice !== "4");
