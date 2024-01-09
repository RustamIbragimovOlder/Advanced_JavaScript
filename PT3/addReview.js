// скрипт для страницы addFeedback.html. Сохранение отзывов

const productNameEl = document.querySelector(".product-name");
const reviewEl = document.querySelector(".review");
const saveReviewEl = document.querySelector(".btn-save-review");
const errorMessage = document.querySelector(".error");
const goToPageEl = document.querySelector(".goToPage");
const reviewKey = "review";

function saveReview() {
    const productName = productNameEl.value.trim();
    const review = reviewEl.value.trim();
    if (productName && review) {
        saveReviewStorage(productName, review);
    } else {
        errorMessage.textContent = "Оба поля должны быть заполнены";
    }
}

function saveReviewStorage(productNameIn, reviewIn) {
    if (localStorage.getItem(reviewKey)) {
        const reviewList = JSON.parse(localStorage.getItem(reviewKey));
        let index = -1;
        for (let i = 0; i < reviewList.length; i++) {
            if (reviewList[i].productName === productNameIn) {
                index = i;
            }
        }
        if (index === -1) {
            reviewList.push({ productName: productNameIn, review: [reviewIn] });
        } else {
            reviewList[index].review.push(reviewIn);
        }
        localStorage.setItem(reviewKey, JSON.stringify(reviewList));
    } else {
        localStorage.setItem(
            reviewKey,
            JSON.stringify([{ productName: productNameIn, review: [reviewIn] }])
        );
    }
}

function goToPage() {
    window.open("viewingReviews.html", "_self");
}

saveReviewEl.addEventListener("click", saveReview);
goToPageEl.addEventListener("click", goToPage);