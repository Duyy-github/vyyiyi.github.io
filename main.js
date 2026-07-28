// =============================
// Nội dung bức thư (Tiếng Việt chuẩn)
// =============================
const letterContent = "Hello Vy yiyi,\n\nDù hơi muộn màng nhưng anh vẫn muốn gửi đến em lời chúc mừng nhân dịp kỷ niệm 1 tháng chúng ta chính thức bên nhau 💕.\n\nCảm ơn bé đã luôn đồng hành, yêu thương và truyền động lực cho anh. Anh biết bản thân vẫn còn nhiều điều thiếu sót, và chặng đường phía trước chắc chắn sẽ có lúc khó khăn, nhưng anh tin chỉ cần chúng ta cùng nắm tay thì mọi chuyện đều sẽ vượt qua nheeee ✨.\n\nIu embe của anh nhìuuuu <3";

// Tốc độ gõ chữ (ms)
const durationWrite = 40;
let writeTimeout;

// =============================
// Hiệu ứng gõ chữ
// =============================
function effectWrite() {
    const boxLetter = document.querySelector(".letterContent");
    boxLetter.innerHTML = "";
    
    let index = 0;
    
    function type() {
        if (index < letterContent.length) {
            boxLetter.innerHTML += letterContent.charAt(index);
            index++;
            writeTimeout = setTimeout(type, durationWrite);
        }
    }
    
    type();
}

// =============================
// Hiệu ứng khi tải trang
// =============================
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 300);
});

// =============================
// Nhạc nền & Tương tác Nút
// =============================
const music = document.getElementById("bgMusic");
const openBtn = document.querySelector(".openBtn");

openBtn.addEventListener("click", () => {
    // Phát nhạc nhẹ nhàng
    if (music) {
        music.play().catch(err => console.log("Trình duyệt chặn tự động phát âm thanh:", err));
    }

    // Hiển thị thiệp
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

// =============================
// Mở / Đóng thiệp
// =============================
const cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 600);
    } else {
        clearTimeout(writeTimeout);
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 600);
    }
});