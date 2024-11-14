const countdown = document.getElementById("countdown");
setTimeout(function () {
    countdown.innerText = "10";
    setTimeout(function () {
        countdown.innerText = "9";
        setTimeout(function () {
            countdown.innerText = "8";
            setTimeout(function () {
                countdown.innerText = "7";
                setTimeout(function () {
                    countdown.innerText = "6";
                    setTimeout(function () {
                        countdown.innerText = "5";
                        setTimeout(function () {
                            countdown.innerText = "4";
                            setTimeout(function () {
                                countdown.innerText = "3";
                                setTimeout(function () {
                                    countdown.innerText = "2";
                                    setTimeout(function () {
                                        countdown.innerText = "1";
                                        setTimeout(function () {
                                            countdown.innerText = "Happy Independence Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
