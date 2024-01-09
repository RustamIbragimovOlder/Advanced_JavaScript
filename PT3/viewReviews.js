const goToPageEl = document.querySelector(".goToPage");
const contentEl = document.querySelector(".content");
const reviewKey = "review";
const reviewList = productFromStorage();

function productFromStorage() {
    const reviewList = JSON.parse(localStorage.getItem(reviewKey));
    return reviewList;
}

const contentHtml = reviewList
    .map(
        (el) => `<article>
               <h3>${el.productName}</h3>
               <button class="reviewList-btn">Показать отзывы</button>
               <ul class="reviewList" style="display: none;">${el.review
                .map((i) => `<li>${i} --> <button class="delete" style="font-size: 8px">Удалить отзыв</button></li>`)
                .join(" ")}</ul>
            </article>`
    )
    .join(" ");

contentEl.innerHTML = contentHtml;

const reviewListEl = document.querySelectorAll(".reviewList");
const reviewListBtnEl = document.querySelectorAll(".reviewList-btn");

for (let i = 0; i < reviewListBtnEl.length; i++) {
    reviewListBtnEl[i].addEventListener("click", () => {
        if (reviewListEl[i].style.display === "none") {
            reviewListEl[i].style.display = "block";
            reviewListBtnEl[i].innerHTML = "Скрыть отзывы";
        } else {
            reviewListEl[i].style.display = "none";
            reviewListBtnEl[i].innerHTML = "Показать отзывы";
        }
    });
}

document.querySelector('ul').onclick = function (e) {
    const btn = e.target.closest('.delete');
    if (!btn) {
        return;
    }

    btn.parentElement.remove();
}

function goToPage() {
    window.open("addingReview.html", "_self");
}

goToPageEl.addEventListener("click", goToPage);

