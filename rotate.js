(function () {
    var yinyang = document.getElementsByClassName('rotate');

    function startRotation() {
        yinyang[0].classList.toggle('rotated');
        yinyang[1].classList.toggle('rotated');
        console.log('start rotation', yinyang[0].classList);
    }

    function reset() {
        yinyang[0].classList.toggle('reset');
        yinyang[1].classList.toggle('reset');
        console.log('reset', yinyang[0].classList);
    }

    function restore() {
        yinyang[0].classList.toggle('rotated');
        yinyang[1].classList.toggle('rotated');
        console.log('restore', yinyang[0].classList);
        reset();
    }

    /* Listen for a transition! */
    // var transitionEvent = whichTransitionEvent();

    // transitionEvent && yinyang[0].addEventListener(transitionEvent, OnTransitionEnd);
    // console.log(transitionEvent);
    // webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd

    yinyang[1].addEventListener("transitionend", function (e) {
        console.log(e.propertyName);
        reset();
        restore();
        setTimeout(function () {
            startRotation();
        });
    });

    // animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd
    setTimeout(function () {
        startRotation();
    });
    // startRotation();

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
