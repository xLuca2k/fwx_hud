const formatNumber = function(number) {
    return number/100
}

const hud = new Vue({
    el: '.container',

    mounted: function() {
        window.addEventListener('message', this.listener);
        this.handleResize()
        window.addEventListener("resize", this.handleResize)

        window.addEventListener("keydown", this.keyHandler);

        this.updateDate()
        setInterval(this.updateDate, 5000);

        setTimeout(this.survivalIniter, 500)

    }
})