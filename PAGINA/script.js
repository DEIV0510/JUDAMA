function E(selector, parent) {
    if (selector instanceof HTMLElement) {
        return selector;
    }
    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach((elem) => 
        elem.classList.remove(className)
    );
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;
        
        if (hasClass(target, "tab")) {
            radioClass(target, "active");


            E(".tab-content.visible").forEach((content) => {
                content.classList.remove("visible");
            });

            let linkedTab = E("." + target.id)[0];
            if (linkedTab) {
                radioClass(linkedTab, "visible");
            }
        }
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}

tabs(".menu-nav");

let currentItem1 = 4;
const loadMoreBtn1 = document.querySelector("#load-more-1");
if (loadMoreBtn1) {
    loadMoreBtn1.onclick = () => {
        let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
        for (let i = currentItem1; i < currentItem1 + 4; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'inline-block';
            }
        }
        currentItem1 += 4;
        if (currentItem1 >= boxes.length) {
            loadMoreBtn1.style.display = 'none';
        }
    };
}

let currentItem2 = 4;
const loadMoreBtn2 = document.querySelector("#load-more-2");
if (loadMoreBtn2) {
    loadMoreBtn2.onclick = () => {
        let boxes = [...document.querySelectorAll(".box-container-2 .box-2")];
        for (let i = currentItem2; i < currentItem2 + 4; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'inline-block';
            }
        }
        currentItem2 += 4;
        if (currentItem2 >= boxes.length) {
            loadMoreBtn2.style.display = 'none';
        }
    };
}

let currentItem3 = 4;
const loadMoreBtn3 = document.querySelector("#load-more-3");
if (loadMoreBtn3) {
    loadMoreBtn3.onclick = () => {
        let boxes = [...document.querySelectorAll(".box-container-3 .box-3")];
        for (let i = currentItem3; i < currentItem3 + 4; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'inline-block';
            }
        }
        currentItem3 += 4;
        if (currentItem3 >= boxes.length) {
            loadMoreBtn3.style.display = 'none';
        }
    };
}

function getReservations() {
    return JSON.parse(localStorage.getItem('reservations')) || [];
}

function saveReservations(reservations) {
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

function renderReservations() {
    const reservations = getReservations();
    const reservationsTable = document.querySelector("#reservationsTable tbody"); 
    reservationsTable.innerHTML = "";

    reservations.forEach((reservation, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${reservation.eventName}</td>
            <td>${reservation.applicant}</td>
            <td><input type="date" value="${reservation.eventDate}" onchange="updateReservation(${index}, 'eventDate', this.value)"></td>
            <td><input type="time" value="${reservation.eventTime}" onchange="updateReservation(${index}, 'eventTime', this.value)"></td>
            <td>
                <button onclick="deleteReservation(${index})">Cancelar</button>
            </td>
        `;
        reservationsTable.appendChild(row);
    });
}

document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const eventName = document.getElementById("eventName").value;
    const applicant = document.getElementById("applicant").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;

    if (eventName && applicant && eventDate && eventTime) {
        const reservations = getReservations();
        reservations.push({ eventName, applicant, eventDate, eventTime });
        saveReservations(reservations);
        renderReservations();

        this.reset();
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

function updateReservation(index, key, value) {
    const reservations = getReservations();
    reservations[index][key] = value;
    saveReservations(reservations);
    renderReservations();
}

function deleteReservation(index) {
    const reservations = getReservations();
    reservations.splice(index, 1);
    saveReservations(reservations);
    renderReservations();
}

document.addEventListener("DOMContentLoaded", renderReservations);
