document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('radarChart').getContext('2d');
  
    const yearData = {
      2020: {
        skills: ['Python'],
        values: [60],
        info: ['Started B.Tech', 'Joined VarSITy Volunteer'],
        badges: []
      },
      2021: {
        skills: ['Python', 'Event Management'],
        values: [70, 50],
        info: ['CodeChef Committee', 'EPIC Member'],
        badges: []
      },
      2022: {
        skills: ['Python', 'Data Science'],
        values: [80, 65],
        info: ['Verzeo Internship', 'Compiler Lab Projects'],
        badges: []
      },
      2023: {
        skills: ['Python', 'Power BI', 'SQL'],
        values: [85, 75, 70],
        info: ['New India Assurance Internship', 'InternPe', 'EPIC Interim Head'],
        badges: ['powerbi.png', 'sql.png']
      },
      2024: {
        skills: ['Linux', 'Git', 'Cloud'],
        values: [90, 80, 75],
        info: ['Nasdaq Internship', 'AWS Course', 'IEEE Publication'],
        badges: ['git.png', 'linux.png', 'aws.png']
      },
      2025: {
        skills: ['ML', 'Portfolio Building'],
        values: [95, 90],
        info: ['Graduate Program at Stevens', 'Dashboard Project'],
        badges: []
      }
    };
  
    const radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [],
        datasets: [{
          label: 'Skill Proficiency',
          data: [],
          backgroundColor: 'rgba(0, 128, 128, 0.2)',
          borderColor: 'teal',
          pointBackgroundColor: 'teal',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.3
          }
        },
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            pointLabels: {
              font: {
                size: 14
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                weight: 'bold'
              }
            }
          }
        }
      }
    });
  
    const yearButtons = document.querySelectorAll('.year-buttons button');
    const infoPanel = document.getElementById('infoPanel');
    const badgesRow = document.getElementById('badgesRow');
  
    yearButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const year = btn.getAttribute('data-year');
        const data = yearData[year];
  
        radarChart.data.labels = data.skills;
        radarChart.data.datasets[0].data = data.values;
        radarChart.update();
  
        infoPanel.innerHTML = `
          <h3>Activities in ${year}</h3>
          <ul>${data.info.map(item => `<li>${item}</li>`).join('')}</ul>
        `;
  
        badgesRow.innerHTML = data.badges.map(src =>
          `<img src="assets/images/${src}" alt="${src.split('.')[0]}" class="badge-icon">`
        ).join('');
      });
    });
  
    // Optional: Auto-load the latest year on first load
    document.querySelector('.year-buttons button[data-year="2025"]').click();
  });
  