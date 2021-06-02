class LiveManager {
    constructor(div_id, name = 'shadubois') {
        this.item = document.getElementById(div_id);
        this.name = name;
        this.item.innerHTML = this.isLive();
    }

    isLive() {
        $.getJSON('https://api.twitch.tv/helix/streams/?channel=' + this.name, function (channel) {
            console.log(channel);
            if (channel["stream"] == null) {
                return false;
            } else {
                return true;
            }
        });
    }
}