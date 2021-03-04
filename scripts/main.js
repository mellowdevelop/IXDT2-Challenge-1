var ctx = document.getElementById('fuelChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Liftoff', 'First cycle', 'Second cycle', 'Third cycle', 'Fourth cycle'],
        datasets: [{
            label: 'Fuel',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [50, 50, 45, 35, 30]
        }]
    },

    // Configuration options go here
    options: {}
});
var barctx = document.getElementById('foodChart').getContext('2d');
var myChart = new Chart(barctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Food', 'Hunger'],
        datasets: [{
            label: 'Food supply',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var piectx = document.getElementById('distancePieChart').getContext('2d');
var myDoughnutChart = new Chart(piectx, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            data:[150, 200]
        }],
        labels: [
            'Traveled',
            'To go'
        ]
        },
    options: {
        circumference: Math.PI,
        rotation: -Math.PI
    }
});