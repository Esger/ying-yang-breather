(function () {

    var count = 0;
    var halfTime = 2500;
    var yinyang = document.getElementById('Layer_1');
    var whiteLeft = document.getElementsByClassName('whiteLeft')[0];
    var whiteRight = document.getElementsByClassName('whiteRight')[0];
    var blackLeft = document.getElementsByClassName('blackLeft')[0];
    var blackRight = document.getElementsByClassName('blackRight')[0];

    function onAnimationIteration() {
        if (count % 4 == 0) {
            console.log('hele cyclus', count);
            // blackLeft boven whiteRight
            yinyang.appendChild(blackLeft);
            yinyang.appendChild(whiteLeft);
            setTimeout(function () {
                // console.log('kwart cyclus', count);
                yinyang.insertBefore(whiteLeft, blackLeft);
                yinyang.insertBefore(whiteRight, blackRight);
            }, halfTime);
        } else if (count % 2 == 0) {
            // console.log('halve cyclus', count);
            yinyang.appendChild(whiteRight);
            yinyang.appendChild(blackRight);
            setTimeout(function () {
                // console.log('driekwart cyclus', count);
                yinyang.insertBefore(whiteLeft, blackRight);
                yinyang.appendChild(whiteRight);
            }, halfTime);
        }
        count++;
    }

    document.addEventListener("animationiteration", onAnimationIteration, true);

    onAnimationIteration();

})();
