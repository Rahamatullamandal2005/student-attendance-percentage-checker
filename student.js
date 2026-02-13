function calculateAttendance() {
  const total = Number(totalClasses.value);
  const attended = Number(attendedClasses.value);
  const required = Number(requiredPercentage.value);

  if (!total || !attended || !required) {
    alert("Please fill all fields correctly!");
    return;
  }

  if (attended > total) {
    alert("Attended cannot exceed total classes!");
    return;
  }

  const percentage = ((attended / total) * 100).toFixed(2);

  // Bunk Calculation
  let bunkable = 0;
  let tempTotal = total;
  while ((attended / tempTotal) * 100 >= required) {
    bunkable++;
    tempTotal++;
  }
  bunkable--;

  // UI Update
  resultBox.style.display = "block";

  circleText.innerText = percentage + "%";
  progress.style.width = percentage + "%";
  document.querySelector(
    ".circle"
  ).style.background = `conic-gradient(#00ff88 ${percentage}%, #444 ${percentage}%)`;

  let status = "";
  let className = "";

  if (percentage >= required + 5) {
    status = "Safe Zone 😄";
    className = "safe";
  } else if (percentage >= required) {
    status = "Warning Zone ⚠";
    className = "warning";
  } else {
    status = "Danger Zone 🚨";
    className = "danger";
  }

  bunkResult.innerText =
    bunkable > 0
      ? `You can bunk ${bunkable} more classes`
      : `Do not bunk any class!`;

  statusResult.innerText = status;
  statusResult.className = className;

  saveHistory(percentage, status);
}

function saveHistory(percent, status) {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  const today = new Date().toLocaleDateString();

  history.push({ date: today, percent, status });

  localStorage.setItem("history", JSON.stringify(history));

  loadHistory();
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const tbody = document.querySelector("#historyTable tbody");
  tbody.innerHTML = "";

  history.reverse().forEach((item) => {
    tbody.innerHTML += `
            <tr>
                <td>${item.date}</td>
                <td>${item.percent}%</td>
                <td>${item.status}</td>
            </tr>
        `;
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

window.onload = loadHistory;
