$(function() {
    // 2. Make the circle grow by 10px every 250ms.
    function growCircle() {
        const circle = $('#circle');
        let size = circle.width();
        setInterval(() => {
            size += 10
            circle.css({
                width: size + 'px',
                height: size + 'px'
            });
        }, 250);
    }
    // growCircle();

    // 3. Remove the circle when you click on it
    $('#circle').click(function() {
        $(this).remove();
    });

    // 4. Put 3 text inputs on the screen with labels: width, growth amount, interval.
    $('#start4').click(function() {
        let width = parseInt($('#width').val());
        const growthAmount = parseInt($('#growthAmount').val());
        const interval = parseInt($('#interval').val());

        const circle = $('#circle');
        circle.css({
            width: width + 'px',
            height: width + 'px'
        });

        setInterval(() => {
            width += growthAmount;
            circle.css({
                width: width + 'px',
                height: width + 'px'
            });
        }, interval);
    });

    // 5, 6, 7. Add another text input labeled "Number circles"
    $('#start').click(function() {
        const width = parseInt($('#width').val());
        const growthAmount = parseInt($('#growthAmount').val());
        const interval = parseInt($('#interval').val());
        const numCircles = parseInt($('#numberCircles').val());

        for (let i = 0; i < numCircles; i++) {
            createCircle(width, growthAmount, interval);
        }
    });
    function createCircle(width, growthAmount, interval) {
        const circle = $('<div>', {
            class: 'circle',
            css: {
                width: width + 'px',
                height: width + 'px',
                backgroundColor: getRandomColor(),
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: 1,
            },
        });
        $('body').append(circle);

        setInterval(() => {
            width += growthAmount;
            circle.css({
                width: width + 'px',
                height: width + 'px'
            });
        }, interval);

        circle.click(function() {
            $(this).remove();
        });

        let capacityInterval = null;
        circle.mouseover(function() {
            let capacity = 1;
            capacityInterval = setInterval(() => {
                capacity -= 0.1;
                $(this).css('opacity', capacity);
            }, 250);
        });
        circle.mouseout(function() {
            clearInterval(capacityInterval);
            $(this).css('opacity', 1);
        });
    }
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})