const notification = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const alert = document.getElementById("Layer_1");
const notes = document.getElementById("bell-icon");

notification.innerHTML = `
    <div class="notification-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="notification-banner-close">x</p>
    </div>`
;

notification.addEventListener('click', e => {
    if (e.target.classList.contains("notification-banner-close")){
        notification.style.display = "none";
    }
});

function toggleDropDown() {
    document.getElementById("notifications").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
notes.addEventListener('click', e => {
    if (!e.target.matches('Layer_1')) {
        toggleDropDown();
    }
});

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

const dailyCanvas = document.getElementById("daily-chart");
// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
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
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

send.addEventListener('click', () => {
    if(user.value === '' && message.value === ''){
        alert('Please fill out user and message fields before sending');
    }
    else if (user.value === '') {
        alert('Please fill out the user field before sending');
    }
    else if (message.value === '') {
        alert('Please fill out the message field before sending');
    }
    else {
        alert(`The message was sent to: ${user.value}!`);
    }
})