// =============================
// Nội dung bức thư
// =============================
var letterContent = "Hello Vy yiyi, dù hơi muộn màng nhưng anh vẫn muốn gửi đến em lời chúc mừng nhân dịp kỷ niệm 1 tháng chúng ta chính thức bên nhau. Cảm ơn bé đã luôn đi cùng anh, yêu thương và động viên anh. Anh biết rằng bản thân còn nhiều điều thiếu sót, và trên chặng đường phía trước còn nhiều khó khăn, hy vọng chúng ta sẽ cùng nhau vượt qua nheeee. Iu embe của anh nhìuuuu <3";

// Tốc độ gõ chữ
var durationWrite = 50;

// =============================
// Hiệu ứng gõ chữ
// =============================
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    var letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
        }, durationWrite * index);
    });
}

// =============================
// Hiệu ứng khi mở web
// =============================
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

// =============================
// Nhạc nền
// =============================
const music = document.getElementById("bgMusic");

// =============================
// Nút mở thiệp
// =============================
var openBtn = document.querySelector(".openBtn");

openBtn.addEventListener("click", () => {

    // Phát nhạc
    music.play();

    // Hiển thị thiệp
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

// =============================
// Mở / đóng thiệp
// =============================
var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {

    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {

        setTimeout(effectWrite, 500);

    } else {

        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);

    }
});