const container = document.querySelector(".container");
const likeBtns = document.querySelectorAll(".heart");
// const likeWords = document.querySelectorAll(".like-word");

for (let likeBtn of likeBtns) {
    likeBtn.addEventListener("click", (e) => {
        likeBtn.classList.toggle("liked");
        let likes = e.target.parentNode.previousElementSibling
        likes.classList.toggle("liked-img");
        console.dir(likes)


    })
}

let newMedia =` <div class="media">
    <img class="img" title="image" src="src/images/andazi.jpg">
        <div class="show-like">
            <span class="heart"></span>
        </div>
        <div class="like">
            <span class="heart"></span>
        </div>
        <div class="bottom">
            <h3 class="img-title">Andazi</h3>
            <div class="options">
                <div class="follow">
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                </div>
                <div class="toggle-options">
                    <span class="circle"></span>
                    <span class="circle"></span>
                    <span class="circle"></span>
                </div>
            </div>
        </div>
</div>`;

