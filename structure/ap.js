// js for clock and time fucntionality
function updateClock() {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'long',    // "April"
      day: 'numeric',   // "6"
      hour: 'numeric',  // "2"
      minute: '2-digit',
      hour12: true      // "pm"
    };
    const formatted = now.toLocaleString('en-US', options);
    document.getElementById('clock').textContent = formatted;
  }

  updateClock();
  setInterval(updateClock, 1000);




  