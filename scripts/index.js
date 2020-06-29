// Index 

const bus = new Vue();
const vuetifyOptions = { };


Vue.use(Vuetify);


const app = new Vue({ 
	el: '#app',

	vuetify: new Vuetify(vuetifyOptions),
	template:
	`
<v-app v-cloak>
	<transition mode="out-in" name="fade">
		<menu-app></menu-app>
	</transition>
</v-app>`
});