setInterval(() => {
    d = new Date();
    h_time = d.getHours();
    m_time = d.getMinutes();
    s_time = d.getSeconds();
    weekday = d.toLocaleString("default", { weekday: "long" })

    am_pm = h_time > 12 ? 'PM' : 'AM';

    document.getElementById("hour").innerHTML = h_time;
    document.getElementById("minute").innerHTML = m_time;
    document.getElementById("second").innerHTML = s_time;
    document.getElementById("am_pm").innerHTML = am_pm;
    document.getElementById("days").innerHTML = weekday;

}, 1000);