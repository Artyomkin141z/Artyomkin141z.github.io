const likes = document.querySelectorAll('.like');
const countLikes = document.querySelectorAll('.count-likes');

likes.forEach((like, index) => {
    like.addEventListener('click', (event) => {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: "JS"})
            .then((data)=>{
                console.log(data);
            });
        if (event.target.classList.contains('like__filled')) {
            event.target.classList.remove('like__filled');
            countLikes[index].textContent = countLikes[index].textContent - 1;
        } else {
            event.target.classList.add('like__filled');
            countLikes[index].textContent = +countLikes[index].textContent + 1;
        }
    });
});