// Initialize mood data
const moodData = [];
const moodChartElement = document.getElementById('moodChart');

// Log Mood Button
document.getElementById('logMood').addEventListener('click', () => {
  const mood = document.querySelector('input[name="mood"]:checked');
  const thoughts = document.getElementById('thoughts').value;

  if (!mood) {
    alert('Please select a mood!');
    return;
  }

  const moodEntry = {
    date: new Date().toLocaleString(),
    mood: mood.value,
    thoughts,
  };

  moodData.push(moodEntry);
  alert('Mood logged successfully!');
  updateChart();
});

// Update Chart
function updateChart() {
  const moodCounts = {
    happy: 0,
    neutral: 0,
    sad: 0,
    angry: 0,
    anxious: 0,
  };

  moodData.forEach((entry) => {
    moodCounts[entry.mood]++;
  });

  const chartData = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        label: 'Mood Distribution',
        data: Object.values(moodCounts),
        backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#F44336', '#9C27B0'],
      },
    ],
  };

  if (moodChart) moodChart.destroy();

  moodChart = new Chart(moodChartElement, {
    type: 'bar',
    data: chartData,
  });
}

let moodChart;
