import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        updateShowloader:true
    },
    mutations:{
        updateTopOffset: (state, height) =>{  
            state.totop = height;
        },
        showLoader:(state)=>{
            state.updateShowloader = true;
        },
        hideLoader:(state)=>{
            state.updateShowloader = false;
        }
    },
    getters:{
        getShowLoader: state => {
            return state.updateShowloader
        }
    },
    actions: {
        showLoader: (context) => {
            context.commit('showLoader')
        },
        hideLoader: (context) => {
            context.commit('hideLoader')
        }
    }
})