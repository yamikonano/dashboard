import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            tags: [],
            blocked:[],
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        ADD_TAG(state,{tag}){
            state.tags.push(tag)
        },
        REMOVE_TAG(state,{tag}){
            const index = state.tags.indexOf(tag)
            if(index>-1){
                state.tags.splice(index,1)
            }
        },
        ADD_BLOCK(state,{block}){
            state.blocked.push(block)
        },
        REMOVE_BLOCK(state,{block}){
            const index = state.blocked.indexOf(block)
            state.blocked.splice(index,1)
        }

    },
    actions:{
        addTag(context,{tag}){
            context.commit('ADD_TAG',{tag})
        },
        removeTag(context,{tag}){
            context.commit('REMOVE_TAG',{tag})
        },
        addBlock(context,{block}){
            context.commit('ADD_BLOCK',{block})
        },
        removeBlock(context,{block}){
            context.commit('REMOVE_BLOCK',{block})
        }
    }
})
export default store