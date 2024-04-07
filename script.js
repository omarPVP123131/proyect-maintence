        // Datos de ejemplo más realistas para la gráfica de barras
        var awarenessData = {
          labels: ['Concientes', 'Por Concientizar', 'Estado'],
          datasets: [{
              label: 'Poblacion',
              backgroundColor: ['#36a2eb', '#FF0037',  '#ff6383'],
              data: [955, 5123, 3222]  // Porcentajes de personas a favor y en contra
          }]
        };

        // Configuración de la gráfica de barras
        var awarenessOptions = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true,
                  max: 10000
              }
          }
        };

        // Obtén el contexto del lienzo de la gráfica de barras
        var awarenessCanvas = document.getElementById('awarenessCanvas').getContext('2d');

        // Crea la gráfica de barras
        var awarenessChart = new Chart(awarenessCanvas, {
          type: 'bar',
          data: awarenessData,
          options: awarenessOptions
        });

        // Ajusta el tamaño de la gráfica de barras para limitar la altura
        var chartContainer = document.getElementById('awareness-chart');
        var maxChartHeight = 350; // Ajusta según sea necesario

        awarenessCanvas.canvas.style.height = maxChartHeight + 'px';
        chartContainer.style.maxHeight = maxChartHeight + 'px';

        // Datos de ejemplo más realistas para la gráfica de dona
        var awarenessDoughnutData = {
          labels: ['Concientes', 'Por Concientizar', 'Estado'],
          datasets: [{
              label: 'Poblacion',
              backgroundColor: ['#36a2eb', '#FF0037',  '#ff6383'],
              data: [955, 5123, 3222]  // Porcentajes de personas a favor y en contra
          }]
        };

        // Obtén el contexto del lienzo de la gráfica de dona
        var awarenessDoughnut = document.getElementById('awarenessDoughnut').getContext('2d');

        // Crea la gráfica de dona
        var doughnutChart = new Chart(awarenessDoughnut, {
          type: 'doughnut',
          data: awarenessDoughnutData,
          options: {
              responsive: true,
              maintainAspectRatio: false
          }
        });