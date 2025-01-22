let resultText = "";

// Function to format numbers with commas
function formatNumber(number) {
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Function to determine the interest rate based on amount in Rs
function getInterestRate(amountInRs) {
  if (amountInRs === 1) return 12;
  if (amountInRs === 1.5) return 18;
  if (amountInRs === 2) return 24;
  if (amountInRs === 2.5) return 30;
  if (amountInRs === 3) return 36;
  return 0; // No interest rate if amount doesn't match
}

function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const amountInRs = parseFloat(document.getElementById("rate").value);
  const startYear = parseInt(document.getElementById("startYear").value);
  const endYear = parseInt(document.getElementById("endYear").value);

  if (
    isNaN(principal) ||
    isNaN(amountInRs) ||
    isNaN(startYear) ||
    isNaN(endYear) ||
    endYear <= startYear
  ) {
    alert(
      "Please enter valid inputs and ensure the end year is greater than the start year."
    );
    return;
  }

  const yearlyRate = getInterestRate(amountInRs);

  if (yearlyRate === 0) {
    alert(
      "Invalid amount in Rs. Please enter a valid value (1, 1.5, 2, 2.5, or 3)."
    );
    return;
  }

  let currentAmount = principal;
  const totalYears = endYear - startYear;
  resultText = `Compound Interest Results\n\n`;

  let result = `<h2>Results:</h2>`;
  for (let i = 1; i <= totalYears; i++) {
    const interest = currentAmount * (yearlyRate / 100);
    const monthlyInterest = interest / 12;
    currentAmount += interest;

    result += `
              <p><strong>Year:</strong> ${startYear + i - 1}-${
      startYear + i
    } (${formatNumber(currentAmount - interest)})</p>
              <p><strong>Monthly Interest Amount:</strong> ${formatNumber(
                monthlyInterest
              )}</p>
              <p><strong>Overall Yearly Interest:</strong> ${formatNumber(
                interest
              )}</p>
              <p><strong>${startYear + i} Amount:</strong> ${formatNumber(
      currentAmount
    )}</p>
              <hr>
          `;

    resultText += `Year: ${startYear + i - 1}-${startYear + i} (${formatNumber(
      currentAmount - interest
    )})\n`;
    resultText += `Monthly Interest Amount: ${formatNumber(monthlyInterest)}\n`;
    resultText += `Overall Yearly Interest: ${formatNumber(interest)}\n`;
    resultText += `${startYear + i} Amount: ${formatNumber(currentAmount)}\n\n`;
  }

  result += `<p><strong>Total Amount:</strong> ${formatNumber(
    currentAmount
  )}</p>`;
  resultText += `Total Amount: ${formatNumber(currentAmount)}`;
  document.getElementById("result").innerHTML = result;

  document.getElementById("downloadBtn").style.display = "block";
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Compound Interest Calculator", 10, 10);
  doc.setFont("helvetica", "normal");
  doc.text(resultText, 10, 20);
  doc.save("Compound_Interest_Results.pdf");
}
