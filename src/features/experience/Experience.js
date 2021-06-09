// Manage experience gains
import store from '../../store'

//let ud = store.getState().user.user_data
class Experience {
	constructor() {
		this.registered_mods = []
		setInterval(this.update_loop.bind(this), 60000)
	}
	
	update_loop() {
		store.dispatch({
			type: 'experience/increment'
		})
	}

	register_mod(mod: Dict) {
		if('mult' in mod) {
			
		}
		this.register_mod.push(mod)
	}
}

export default Experience