class LiveManager {
    constructor(div_id, name = 'shadubois') {
        this.item = document.getElementById(div_id);
        this.name = name;
        this.item.value = this.isLive();
    }

    isLive() {
        $.getJSON('https://api.twitch.tv/kraken/streams/' + this.name, function (channel) {
            if (channel["stream"] == null) {
                return false;
            } else {
                return true;
            }
        });
    }
}