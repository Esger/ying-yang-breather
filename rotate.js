(function () {

    var count = 0;
    var halfTime = 2500;
    var yinyang = document.getElementById('Layer_1');
    var parts = document.getElementsByClassName('part');
    var whiteLeft = document.getElementsByClassName('whiteLeft')[0];
    var whiteRight = document.getElementsByClassName('whiteRight')[0];
    var blackLeft = document.getElementsByClassName('blackLeft')[0];
    var blackRight = document.getElementsByClassName('blackRight')[0];
    var typeSwitch = document.getElementsByName('animationType');
    var animationType = typeSwitch[0].checked ? 'swing' : 'continuous';

    function onAnimationIteration() {
        if (animationType == 'continuous') {
            if (count % 4 == 0) {
                // console.log('hele cyclus', count);
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
        } else if (count % 2 == 0) {
            yinyang.appendChild(blackLeft);
            yinyang.appendChild(whiteLeft);
            setTimeout(function () {
                yinyang.insertBefore(whiteLeft, blackLeft);
                yinyang.insertBefore(whiteRight, blackRight);
            }, halfTime);
            setTimeout(function () {
                yinyang.insertBefore(whiteLeft, blackLeft);
            }, 2 * halfTime);
            setTimeout(function () {
                yinyang.appendChild(whiteLeft);
                yinyang.insertBefore(whiteRight, blackLeft);
            }, 3 * halfTime);

        }
        count++;
    }

    function setSwingClass() {
        for (var i = 0; i < parts.length; i++) {
            if (animationType == 'continuous') {
                parts[i].classList.remove('swing');
            } else {
                parts[i].classList.add('swing');
            }
        }
    }

    function changeAnimationType() {
        animationType = typeSwitch[0].checked ? 'swing' : 'continuous';
        setSwingClass();
        // convert htmlCollection to array
        document.removeEventListener('animationiteration', onAnimationIteration);
        parts = Array.prototype.slice.call(parts);
        parts.sort(function (a, b) {
            return a.dataset.order - b.dataset.order;
        });
        for (var j = 0; j < parts.length; j++) {
            yinyang.appendChild(yinyang.removeChild(parts[j]));
        }
        addAnimationEventListener();
    }

    function addAnimationEventListener() {
        document.addEventListener('animationiteration', onAnimationIteration, true);
    }

    setSwingClass();
    addAnimationEventListener();
    typeSwitch[0].addEventListener('change', changeAnimationType);
    typeSwitch[1].addEventListener('change', changeAnimationType);

    onAnimationIteration();

})();
