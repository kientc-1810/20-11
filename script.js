let accData = {};

fetch("teachers.json")
    .then(response => response.json())
    .then(data => {
        accData = data.reduce((map, item) => {
            const normalizedAcc = item.acc.trim().toLowerCase();
            map[normalizedAcc] = item.image;
            return map;
        }, {});
        console.log("Loaded teacher data:", accData);
    })
    .catch(err => console.error("Không load được JSON:", err));

document.getElementById("cardForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const accInput = document.getElementById("acc").value.trim().toLowerCase();

    if (accData[accInput]) {
        const imagePath = accData[accInput];
        window.location.href = `card.html?image=${encodeURIComponent(imagePath)}`;
    } else {
        alert("Bạn không phải thành viên tổ chức FPT Education");
    }
});