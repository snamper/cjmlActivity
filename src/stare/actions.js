import *as types from './types'

export default {
    increment:({commit})=>{
        commit(types.INCREMENT);
    },
    decrement:({commit})=>{
        commit(types.DECREMENT);
    },
    addOdd:({commit,state})=>{
        if(state.mutations.count%2===0){
            commit(types.INCREMENT);
        }
    },
    AsyncAdd:({commit})=>{
        new Promise(function(resolve){
            setTimeout(function(){
                commit(types.INCREMENT);
                resolve()
            },2000)
        })
    }
}