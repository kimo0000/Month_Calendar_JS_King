const monthEl = document.querySelector("header h1");
const dateEl = document.querySelector("header p");
const daysEl = document.querySelector(".date");

const dateNow = new Date();

const arrayMonth = [
  "janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "May",
  "Juin",
  "Juillet",
  "Aout",
  "September",
  "October",
  "Novembre",
  "Decembre",
];
const month = arrayMonth[dateNow.getMonth()];

const arrayDays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
const days = arrayDays[dateNow.getDate()];
// console.log(dateNow.getDate());
// console.log(month);
// console.log(days);

// const date = dateNow.toDateString();
// console.log(date.slice(-7));

monthEl.innerText = month;
dateEl.innerText = `${days}, ${
  dateNow.getDate() < 10 ? "0" + dateNow.getDate() : dateNow.getDate()
} ${month} ${dateNow.getFullYear()}`;

function getDays() {
  let days = `<p class="empty"></p>`;
  for (let i = 1; i <= 31; i++) {
    //   console.log(i);
    days += `<p>${i}</p>`;
  }

  // console.log(days);
  daysEl.innerHTML = days;

  const day = document.querySelectorAll("p");
  // console.log(day);

  day.forEach((el) => {
    // console.log(el.textContent)
    // console.log(dateNow.getDate().toString());
    const thisDay = dateNow.getDate().toString();
    if (el.textContent === thisDay) {
      //  console.log("Yes");
      el.classList.add("active");
    }
  });
}

getDays();
