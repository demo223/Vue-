<template>
    <div>
        <h2>{{$store.state.counter}}</h2>
        <h2>平方：{{$store.getters.square}}</h2>
    </div>
</template>
<script>
export default {
    name: "helloVuex",
    data() {
        return {
            
        }
    },

}
</script>

<style>
    
</style>