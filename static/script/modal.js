const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const closeBtns = document.querySelectorAll(".close");
const index1Btns = document.querySelectorAll("[index='1']");
const page2 = document.querySelector(".page2");

// Open modal1 after 5 seconds
setTimeout(() => {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}, 5000);

// Show modal2 after 5 seconds if page2 is visible
function showSecondModal() {
  if (page2 && !page2.classList.contains("hidden")) {
    setTimeout(() => {
      modal2.style.display = "block";
      document.body.classList.add("modal-open");

      // Set the time to count down from (2 minutes and 59 seconds)
      var timeLeft = 179; // in seconds

      // Get the countdown element
      const countdownEl = document.getElementById("countdown");

      // Update the countdown every second
      const countdownInterval = setInterval(() => {
        // Calculate the minutes and seconds left
        const minutesLeft = Math.floor(timeLeft / 60);
        const secondsLeft = timeLeft % 60;

        // Add leading zeros to the minutes and seconds if necessary
        const formattedMinutes = minutesLeft.toString().padStart(2, "0");
        const formattedSeconds = secondsLeft.toString().padStart(2, "0");

        // Update the countdown element with the new time
        countdownEl.innerHTML = `<span style="color:#3296DF;"> ${formattedMinutes} : ${formattedSeconds} </span><span style="color:#FFFFFF">time left...</span>`;

        // Subtract one second from the time left
        timeLeft--;

        // If the countdown has finished, stop the interval
        if (timeLeft < 0) {
          clearInterval(countdownInterval);
          countdownEl.textContent = "Time's up!";
        }
      }, 1000);
    }, 5000);
  }
}

// Close the modals when the close button is clicked
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", () => {
    modal.style.display = "none";
    modal2.style.display = "none";
    document.body.classList.remove("modal-open");
  });
}

for (let i = 0; i < index1Btns.length; i++) {
  index1Btns[i].addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });
}

// Call the function initially to check if the second modal should be shown
showSecondModal();

// Call the function whenever the visibility of page2 changes
const observer = new MutationObserver(showSecondModal);
observer.observe(page2, { attributes: true, attributeFilter: ["class"] });
