(function($) {
    $.fn.carousel = function(options) {
        var defaults = {
            pixelsOffset: 125,
            circular: false
        }

        var settings = $.extend(defaults, options);

        var leftUIEl = $('<div class="carousel-arrow-left"><span>Влево</span></div>');
        var rightUIEl = $('<div class="carousel-arrow-right"><span>Вправо</span></div>');
        this.before(leftUIEl);
        this.after(rightUIEl);
        var elementsList = $('.carousel-list', this);

        var pixelsOffset = settings.pixelsOffset;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            } else if (settings.circular) {
                currentLeftValue = minimumOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            } else if (settings.circular) {
                currentLeftValue = maximumOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });
    }
})(jQuery);
