# Compound Interest Calculator

A web-based tool to calculate compound interest over a range of years. This tool was created to help my dad with financial planning by providing an easy-to-use interface and downloadable PDF reports.

## Features

- Calculates compound interest based on principal, interest rate, and duration.
- Interest rates vary depending on the amount in Rs:
  - ₹0.5 → 6% annual interest
  - ₹1 → 12% annual interes
  - ₹1.5 → 18% annual interest
  - ₹2 → 24% annual interest
  - ₹2.5 → 30% annual interest
  - ₹3 → 36% annual interest
- Displays detailed year-by-year calculations.
- Allows users to download the results in a **PDF** format with bold and spaced headings for better readability.
- Formats numbers with commas for better clarity (e.g., 66,53,180.79).

## Technologies Used

- **HTML**: For structure.
- **CSS**: For styling the interface.
- **JavaScript**: For the logic and dynamic behavior.
- **jsPDF**: To generate downloadable PDFs.

## How to Use

1. Open the calculator in a web browser by visiting the [live website](https://bhanu374.github.io/Interest/). 
2. Enter the following details:
   - **Principal Amount**: The starting amount in Rs.
   - **Amount in Rs**: Choose from the list of values (1, 1.5, 2, 2.5, or 3) to determine the interest rate.
   - **Start Year** and **End Year**: Define the duration for calculation.
3. Click on the **Calculate** button.
4. View the results displayed on the page.
5. To save the results, click on the **Download PDF** button.

## Project Structure

- `index.html`: The main HTML file.
- `styles.css`: The CSS file for styling.
- `script.js`: The JavaScript file containing the calculator logic and PDF generation code.


## Motivation

I built this project to help my dad easily calculate compound interest for various scenarios. By automating the calculations and providing downloadable reports, I aimed to simplify his financial planning tasks.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute or provide feedback to enhance this project!
