let chart1 = document.getElementById('traffic-chart').getContext('2d');
let trafficData = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,

        }]
    },
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    }
}
);