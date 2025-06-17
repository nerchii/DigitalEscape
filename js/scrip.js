if (screen.width <= 480) {
    window.location.href = 'mobile_index.html';
}



// draggable elements
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (elmnt.querySelector(".draggable_div_header")) {
        elmnt.querySelector(".draggable_div_header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.querySelectorAll(".draggable_div").forEach(function (element) {
    dragElement(element);
});



// copy link to me button
function copyCode() {
    const code = document.getElementById("code_block").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    })
    ;
}

// screen size notification popup
let popupDismissed = false;

function checkWindowSize() {
    const minWidth = 1800;
    const minHeight = 900;
    const popup = document.getElementById('popup');

    if ((window.innerWidth < minWidth || window.innerHeight < minHeight) && !popupDismissed) {
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
    }
}
function includeHTML() {
    const elements = document.querySelectorAll('[include-html]');
    elements.forEach(el => {
        const file = el.getAttribute('include-html');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute('include-html');
                if (typeof initPopup === 'function') initPopup();
            });
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('closePopup');

    closeBtn.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
        popupDismissed = true;
    });

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
});



// modal photo
var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

