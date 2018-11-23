(function () {
    /* Listen for a transition! */
    // var transitionEvent = whichTransitionEvent();

    // transitionEvent && yinyang[0].addEventListener(transitionEvent, OnTransitionEnd);
    // console.log(transitionEvent);
    // webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend

    var count = 0;
    var yinyang = document.getElementById('Layer_1_1_');

    document.addEventListener("animationiteration", function () {
        count++;
        if (count % 2 == 0) {
            console.log('yo', count);
            var whiteRight = document.querySelectorAll('whiteRight');
            var blackRight = document.querySelectorAll('blackRight');
            yinyang.insertBefore(yinyang.removeChild(whiteRight), blackRight);
        }
    }, true);

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
