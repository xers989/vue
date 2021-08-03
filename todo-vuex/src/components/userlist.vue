<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">
            {{user.name}}
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    
    created() {
        this.getUsers();
    },
    computed:{
        ...mapState([
            'todos',
            'users'
        ])
//        users() {
//            return this.$store.state.users;
//        },
//        todos() {
 //           return this.$store.state.todos;
 //       }
    },
    methods:{
        ...mapActions(['getUsers'])
        //getUsers(){
        //    this.$store.dispatch('getUsers');
        //}
    }

}
</script>