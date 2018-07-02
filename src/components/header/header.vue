<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src=" seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title"></div>
                <span class="brand"></span>
                <span class="name">{{seller.name}}</span>
            </div>
        </div>
        <div class="bulletin-wrapper"></div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props: {
            seller: {
                type: Object
            }
        }
    };
</script>

<style lang="stylus" type="stylesheet/stylus">
</style>
