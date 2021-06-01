class LiveManager {
    constructor(item, name = 'shadubois') {
        this.item = item;
        this.name = name;
        this.item.value = this.isLive()
    }

    isLive() {
        $.getJSON('https://api.twitch.tv/kraken/streams/' + this.name, function (channel) {
            if (channel["stream"] == null) {
                return false
            } else {
                return true
            }
        });
    }
}