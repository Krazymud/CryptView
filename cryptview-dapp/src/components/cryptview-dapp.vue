<template>
    <div>
        <cv-banner/>
        <cv-component/>
        <hello-metamask/>
    </div>
</template>

<script>
import CryptViewBanner from '@/components/cv-banner'
import HelloMetamask from '@/components/hello-metamask'
import CryptviewComponent from '@/components/cv-component'
export default {
    name: 'cryptview-dapp',
    beforeCreate () {
        console.log('registerWeb3 Action dispatched from cryptview.vue')
        this.$store.dispatch('registerWeb3')
    },
    components: {
        'hello-metamask': HelloMetamask,
        'cv-component': CryptviewComponent,
        'cv-banner': CryptViewBanner
    }
}
</script>

<style scoped>

</style>
