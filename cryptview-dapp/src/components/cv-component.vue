<template>
    <div class="cv-container">
    </div>
</template>

<script>
export default {
    name: 'cryptview',
    mounted () {
        console.log('dispatching getContractInstance')
        this.$store.dispatch('getContractInstance')
    }
}
</script>

<style scoped>

</style>
