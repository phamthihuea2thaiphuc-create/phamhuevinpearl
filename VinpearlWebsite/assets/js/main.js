// Các nút "Xem chi tiết" sẽ alert demo
document.querySelectorAll('.btn-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Bạn có thể chỉnh sửa link hoặc nội dung chi tiết sau này.");
    });
});
