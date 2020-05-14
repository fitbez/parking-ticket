let issueTicket = document.getElementById("tickets");
let tickets = document.getElementById("ticket");
const searchInput = document.querySelector(".search");
const searchTicket = document.querySelector("label");
const displaySearchedTicket = document.querySelector(
  ".display_searched_ticket"
);
let ticketNumber = 0;
let ticketsIssued = [];

function ticket() {
  let ticket = "";
  let today = new Date();

  ticketNumber += 1;
  ticket = `
  <div class="ticket">
  <i id="print" class="fas fa-print" onclick="window.print()"></i>
  <p>Ticket Number: ${ticketNumber}</p>
  <p class="date"> Date: ${today.toLocaleDateString()}</p>
  <div type="button" class="in">clock In</div>
  <div type="button" class="out">clock Out </div>
  </div>
  `;

  tickets.innerHTML += ticket;

  let timeIn = document.querySelectorAll(".ticket .in");
  let timeOut = document.querySelectorAll(".ticket .out");

  for (let i = 0; i < timeIn.length; i++) {
    timeIn[i].addEventListener("click", clock, false);
    timeIn[i].id = `in${i}`;
  }

  for (let i = 0; i < timeOut.length; i++) {
    timeOut[i].addEventListener("click", clock, false);
    timeOut[i].id = `out${i}`;
  }

  function clock() {
    let time, inTime, newText, id;
    id = this.id;
    time = today.toLocaleTimeString();
    newText = document.createElement("p");
    newText.className = "clock";
    newText.textContent = `clocked in at: ${time}`;
    inTime = document.getElementById(this.id);
    inTime.style.cursor = "poin";
    inTime.insertAdjacentElement("afterend", newText);
    inTime.style.display = "none";
  }

  ticketsIssued.push(ticket);
  console.log(ticketsIssued);
}

function search() {
  let ticketNo = searchInput.value;
  console.log(ticketNo);

  for (let i = 0; i < ticketsIssued.length; i++) {
    if (ticketNo <= ticketsIssued.length) {
      displaySearchedTicket.innerHTML = ticketsIssued[ticketNo - 1];
    } else {
      displaySearchedTicket.innerHTML = `<p style="background-color: red;
      padding: 10px; border-radius: 4px; margin-top: 10px; color: white">ticket number not avaialble</p>`;
    }
  }
}

console.log(searchTicket);
issueTicket.addEventListener("click", ticket);
searchTicket.addEventListener("click", search);
