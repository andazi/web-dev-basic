const container = document.querySelector(".container");
// const medias = document.querySelectorAll(".media");
const likeBtns = document.querySelectorAll(".heart");
const profileSettings = document.querySelector(".profile-toggle");


const onlineMedias = {
    "Kerin Gedge": "https://images.unsplash.com/photo-1578956919791-af7615c94b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80",
    "Bon vivant": "https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "Karina Vorozheava": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "Hanmer Zh": "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "Roberta Sorge": "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "Tom Burnberg": "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "Brooke Lark": "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "hang niu": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80",
    "zhengtao tang": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "Jamie Street": "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    "Charlesdeluvio": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "Lilas Yohane": "https://images.unsplash.com/photo-1564436872-f6d81182df12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "Baiq Daling": "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "Kyaw Tun": "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "Karsten Winegeart": "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "Mae Mu": "https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "IIya Shishikhin": "https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1dGUlMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "timothy Dykes": "https://images.unsplash.com/photo-1613176875041-c1d4d62648bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMHNuYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "CA Creative": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "Timothy Dykes": "https://images.unsplash.com/photo-1613176875265-8d8da7d7674f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBzbmFrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "Bruna Branco": "https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "Tangerin Newt": "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "Klara Kulikova": "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",

};

const myMedia = () => {

    for (let onlineMedia in onlineMedias) {
        let newMedia = document.createElement("div");
        newMedia.classList.add("media");
        newMedia.innerHTML = `<img class="img" title=${onlineMedias} src=${onlineMedias[onlineMedia]}>
                                <div class="show-like">
                                    <span class="heart"></span>
                                </div>
                                <div class="like">
                                    <span class="heart"></span>
                                </div>
                                <div class="bottom">
                                    <h3 class="img-title">${onlineMedia}</h3>
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
                                </div>`;
        container.appendChild(newMedia);


        // double clicking the image

        newMedia.addEventListener("dblclick", (e) => {
            let mediaImage = e.target;
            mediaImage.classList.toggle("liked-img");
            let likes = e.target.nextElementSibling.firstElementChild;
            likes.classList.toggle("liked");
        })

        // clicking the like button

        // newMedia.addEventListener("click", (e) => {
        //     likeBtn.classList.toggle("liked");
        //     let likes = e.target.parentNode.previousElementSibling;
        //     likes.classList.toggle("liked-img");
        // })
    };

    // // clicking the like button

    // for (let likeBtn of likeBtns) {
    //     likeBtn.addEventListener("click", (e) => {
    //         likeBtn.classList.toggle("liked");
    //         let likes = e.target.parentNode.previousElementSibling;
    //         likes.classList.toggle("liked-img");
    //     })
    // };

    myMedia();


    profileSettings.addEventListener("click", (e) => {
        profileSettings.classList.toggle("view-profile");
        let settings = profileSettings.nextElementSibling;
        settings.classList.toggle('view-profile');
    });
