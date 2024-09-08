import { useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';

// Register necessary components for the Polar Area chart
Chart.register(ArcElement, RadialLinearScale, Tooltip, Legend);

const FreelancerIncomeTracker = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [labels, setLabels] = useState([]);

  // Function to add income data
  const addIncome = (event) => {
    event.preventDefault();
    const project = event.target.project.value;
    const income = parseFloat(event.target.income.value);

    // Update chart data
    setLabels([...labels, project]);
    setIncomeData([...incomeData, income]);

    // Reset the form
    event.target.reset();
  };

  // Data for the Polar Area chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',  // Red
          'rgba(54, 162, 235, 0.5)',  // Blue
          'rgba(255, 206, 86, 0.5)',  // Yellow
          'rgba(75, 192, 192, 0.5)',  // Green
          'rgba(153, 102, 255, 0.5)', // Purple
          'rgba(255, 159, 64, 0.5)',  // Orange
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Freelancer Income Tracker</h2>

      {/* Polar Area Chart */}
      <div className="bg-[#C9DABF] text-[#5F6F65] p-5 rounded-lg shadow-md">
        <PolarArea data={chartData} />
      </div>

      {/* Input Form */}
      <form onSubmit={addIncome} className="mt-4">
        <input
          type="text"
          name="project"
          placeholder="Project Name"
          className="mr-2 p-2"
          required
        />
        <input
          type="number"
          name="income"
          placeholder="Income Earned"
          className="mr-2 p-2"
          required
        />
        <button
          type="submit"
          className="bg-[#9CA986] text-white px-4 py-2 rounded-lg"
        >
          Add Income
        </button>
      </form>
    </div>
  );
};

export default FreelancerIncomeTracker;
