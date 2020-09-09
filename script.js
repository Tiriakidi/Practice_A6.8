function progress(event) {
    const el = $('.j-progress-bar');

    const valueMax = +el.attr('aria-valuemax');
    const valueNow = +el.attr('aria-valuenow');
    if (valueNow >= valueMax) return;

    let valueNew = valueNow + event.data;
    if (valueNew > valueMax) valueNew = valueMax;

    el.attr('aria-valuenow', valueNew);
    el.css('width', valueNew + "%");
};

$(document).ready(function() {
    $('.j-button-1').click(1, progress);
    $('.j-button-3').click(3, progress);
    $('.j-button-7').click(7, progress);
});
