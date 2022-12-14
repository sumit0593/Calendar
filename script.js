var dt = new Date();


function renderDate() {
    dt.setDate(1)
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var day = dt.getDay();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();



    document.getElementById("date_str").innerHTML = dt.getFullYear();
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    var cells = "";
    for (x = day; x > 0; x--) {
        cells += `<div></div>`;
    }
    for (let i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += `<div class="today">${i}</div>`;
        } else {
            cells += `<div>${i}</div>`;
        }
    }

    document.getElementsByClassName("days")[0].innerHTML = cells;
}
function moveDate(para) {
    if(para == 'prev'){
        dt.setMonth(dt.getMonth() -1);
        
    }else if(para == 'next'){
        dt.setMonth(dt.getMonth()+1);
    }
    renderDate();
}