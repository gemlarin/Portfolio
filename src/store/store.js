import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
    
    },
    mutations:{
        updateTopOffset: (state, height) =>{  
            state.totop = height;
        },
    },
    getters:{
        getZipCode: state => {
            return state.leadData.zipcode
        }
    },
    actions: {
        showLoader: (context, show) => {
            context.commit('updateShowloader', show)
        }
    }
})