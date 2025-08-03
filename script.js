document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('radarChart').getContext('2d');
  
    const yearData = {
      2020: {
        skills: ['Python','C','Communication'],
        values: [50,40,60],
        info: ['Pursuing B.Tech in Computer Science', 'Joined VarSITy -The social Service Club'],
        badges: []
      },
      2021: {
        skills: ['Python','C','Communication','Java'],
        values: [70, 50,70,50],
        info: ['Promoted as Varsity mentor','Executive member at EPIC -Entrepreneurship Club','Acting mentor in MOSAIC Theatre Club'],
        badges: []
      },
      2022: {
        skills: ['Python','C','Communication','Java','Data Structures','Operating Systems'],
        values: [80,65,75,50,70,60],
        info: ['Promoted as Head of Entrepreneurship Cell','Verzeo Internship', 'Compiler Lab Projects','Joined Finance Research club as Analytics head'],
        badges: []
      },
      2023: {
        skills: ['Python','C','Communication','Java','Data Structures','Operating Systems','R Programming','DBMS','SQL','Big Data','Data Science','Machine Learning','Power BI'],
        values: [85, 65, 78,50,70,65,70,80,60,75,85,80,87],
        info: ['New India Assurance Internship - Data Analyst', 'InternPe -Python', 'EPIC Interim Head','Finance Club Head','MOSAIC acting head','CodeChef Executive member'],
        badges: []
      },
      2024: {
        skills: ['Python','C','Communication','Java','Data Structures','Operating Systems','R Programming','DBMS','SQL','Big Data','Data Science','Machine Learning','Ansible','Jenkins','Oracle','Git','Power BI'],
        values: [90,60,85,65,80,70,80,75,85,80,85,80,75,70,75,70,87],
        info: ['Nasdaq Internship - Cloud Computing Engineer', 'IEEE Publication and Conference','EPIC Interim Head','Finance Club Head','MOSAIC acting head','Codechef Events Head'],
        badges: []
      },
      2025: {
        skills: ['Python','C','Communication','Java','Data Structures','Operating Systems','R Programming','DBMS','SQL','Big Data','Data Science','Machine Learning','Ansible','Jenkins','Oracle','Git','AWS','Power BI'],
        values: [90,60,85,65,80,70,80,75,85,80,85,80,75,70,75,70,50,87],
        info: ['Pursuing Masters in DataScience from Stevens Institute of Technology'],
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
  