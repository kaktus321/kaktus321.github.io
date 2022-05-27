let modal = document.querySelector('#my_modal');
let btn = document.querySelector('#my_btn');
let body = document.body;

    btn.addEventListener("click", btnHandler);

function btnHandler(e) {
    e.preventDefault();
    modal.classList.toggle("open");
    body.classList.toggle("noscroll");
}
