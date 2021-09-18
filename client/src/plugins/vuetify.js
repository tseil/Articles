import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import fr from 'vuetify/lib/locale/fr'

Vue.use(Vuetify)

export default new Vuetify({
    lang: {
        locales: { fr },
        current: 'fr',
    },
    theme: {
        themes: {
            light: {
                primary: '#eb5e3a',
                secondary: '#5c5c5b',
            },
        },
    },
})