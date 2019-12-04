const notification = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const alert = document.getElementById("Layer_1");
const notes = document.getElementById("bell-icon");
const save = document.querySelector(".save");

const trafficWidget = document.querySelector("#traffic-chart");
const trafficRate = document.querySelector(".traffic-nav");

const namesList = [
    { name: "Dan Oliver"},
    { name: "Dawn Wood" },
    { name: "Professor Humperdink" },
    { name: "Paul Rudd" },
    { name: "RZA" },
    { name: "Martin Scorsese" },
];

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

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            data: [750, 1250, 1000, 1100, 1450, 1250, 3000, 3450, 2000, 1700, 2200],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderWidth: 2,
            lineTension: 0.1,
            pointRadius: 3,
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderColor: "rgb(115, 119, 191)"
        }
    ]
};

let trafficOptions = {
    responsive: true,
    aspectRatio: 2.5,
    animation: {
        duration: 2000
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficWidget, {
    type: "line",
    data: trafficData,
    options: trafficOptions
});

trafficRate.addEventListener('click', e => {
    const rate = document.querySelectorAll(".traffic-nav-link");
    for (let i = 0; i < rate.length; i++){
        rate[i].classList.remove("active");
    }
    console.log(rate);
    if (e.target.tagName === 'LI'){
        let button = e.target;
        const buttonFound = button.classList;
        for (let i = 0; i < buttonFound.length; i++){
            if(buttonFound[i] === 'hourly'){
                buttonFound.add("active");
                trafficChart.data.labels = ["4am","5am","6am","7am","8am","9am","10am","11am","12pm",
                "1pm","2pm"];
                trafficChart.data.datasets[0].data = [30,25,49, 25, 10, 23, 20, 12, 38, 42, 36];
                trafficChart.update();
            } else if (buttonFound[i] === 'daily') {
                buttonFound.add("active");
                trafficChart.data.labels = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
                trafficChart.data.datasets[0].data = [400, 250, 490, 125, 107, 230, 208];
                trafficChart.update();
            } else if (buttonFound[i] === 'weekly'){
                buttonFound.add("active");
                trafficChart.data.labels = ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"];
                trafficChart.data.datasets[0].data = [750, 1450, 1490, 1250, 1070, 2301, 2082, 1412, 1338, 2442, 2336];
            } else if (buttonFound[i] === 'monthly'){
                buttonFound.add("active");
                trafficChart.data.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                trafficChart.data.datasets[0].data = [11750, 14250, 14900, 12500, 10700, 23010, 20820, 14120, 13380, 12442, 23360, 14000];
                trafficChart.update();
            }
        }
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
});
const search = document.querySelector(".search");
function myFunction(){
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    search.parentNode.appendChild(a);
    let filter = search.value.toLowerCase();
    let filteredData = namesList.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    b = document.createElement("DIV");
    a.appendChild(b);
    /*make the matching letters bold:*/
    b.innerHTML = "<strong>" + filteredData + "</strong>";
    b.innerHTML += filteredData;
    /*insert a input field that will hold the current array item's value:*/
    b.innerHTML += "<input type='hidden' value='" + filteredData + "'>";

    /*execute a function when someone clicks on the item value (DIV element):*/
    b.addEventListener("click", () => {
        /*insert the value for the autocomplete text field:*/
        search.value = this.getElementsByTagName("input")[0].value;
      
    });

    if (filteredData) {
        for (let i = 0; i < filteredData.length; i++) {
            let searchFound = filteredData[i];
            b = searchFound;
            console.log(b);
        }

    }
    
}

$(function () {
    var users = [
        "Victoria Chamber",
        "Dale Byrd",
        "Dawn Wood",
        "Dan Oliver",
        "John Smith",
        "Jane Doe",
        "Robert Jacobs",
        "Lacie Andrews"
    ];
    $('.message-user').autocomplete({
        source: users
    });
});