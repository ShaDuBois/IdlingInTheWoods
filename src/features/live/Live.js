import store from '../../store'

function dictIsEmpty(obj) { // MOVE IN UTILS ?
	return Object.keys(obj).length === 0;
}

function Live() {
	const headers = store.getState().user.headers
	if(!dictIsEmpty(headers)) {
		fetch(
            'https://api.twitch.tv/helix/streams?user_login=' + this.stream_name,
            {
                "headers": this.login_manager.headers()
            }
        ).then(resp => resp.json())
        .then(resp => {
            let live = resp['data'];
			if(live.length === 0) {
				store.dispatch({
					type: 'live/reset'
				})
			} else {
				store.dispatch({
					type: 'live/set'
				})
			}
        });
	}
}

function liveUpdater() {
	return setInterval(() => Live(), 60000);
}

export default liveUpdater