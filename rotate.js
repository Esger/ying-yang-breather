(function () {
    /* Listen for a transition! */
    // var transitionEvent = whichTransitionEvent();

    // transitionEvent && yinyang[0].addEventListener(transitionEvent, OnTransitionEnd);
    // console.log(transitionEvent);
    // webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend

    var count = 0;
    var halfTime = 5000;
    var yinyang = document.getElementById('Layer_1_1_');
    var whiteLeft = document.getElementsByClassName('whiteLeft')[0];
    var whiteRight = document.getElementsByClassName('whiteRight')[0];
    var blackLeft = document.getElementsByClassName('blackLeft')[0];
    var blackRight = document.getElementsByClassName('blackRight')[0];

    function onAnimationIteration() {
        if (count % 4 == 0) {
            console.log('hele cyclus', count);
            // blackLeft boven whiteRight
            yinyang.insertBefore(yinyang.removeChild(whiteRight), blackLeft);
            setTimeout(function () {
                console.log('kwart cyclus', count);
                // blackRight boven whiteRight
                yinyang.insertBefore(yinyang.removeChild(whiteLeft), blackLeft);
                yinyang.insertBefore(yinyang.removeChild(whiteRight), blackRight);
            }, halfTime);
        } else if (count % 2 == 0) {
            console.log('halve cyclus', count);
            yinyang.appendChild(yinyang.removeChild(whiteRight));
            yinyang.appendChild(yinyang.removeChild(blackRight));
            setTimeout(function () {
                console.log('driekwart cyclus', count);
                yinyang.appendChild(yinyang.removeChild(whiteRight));
                yinyang.insertBefore(yinyang.removeChild(whiteLeft), blackRight);
                yinyang.insertBefore(yinyang.removeChild(whiteLeft), blackLeft);
            }, halfTime);
        }
        count++;
    }

    document.addEventListener("animationiteration", onAnimationIteration, true);

    onAnimationIteration();

    // animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd

    /* From Modernizr */
    function whichTransitionEvent() {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'MSTransition': 'msTransitionEnd',
            'OTransition': 'oTransitionEnd',
            'transition': 'transitionend',
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

})();
