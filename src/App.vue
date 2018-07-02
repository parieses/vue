<template>
  <div id="app">
    <v-header :seller = seller></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
          <router-link v-bind:to="'goods'">商品</router-link>
      </div>
      <div class="tab-item">
          <router-link v-bind:to="'ratings'">评论</router-link>
      </div>
      <div class="tab-item">
          <router-link v-bind:to="'seller'">商家</router-link>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header';
  const ERR_OK = 0; // 定义状态码
  export default {
      data() {
        return {
            seller: {
            }
        };
      },
      created() {
         this.$http.get('/api/seller').then((respons) => {
           respons = respons.body;
            if (respons.errno === ERR_OK) {
               this.seller = respons.data;
               console.log(this.seller);
           };
         });
      },
    components: {
        'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/mixin.styl";/*引用伪类*/
  #app
    .tab
      display:flex
      width:100%
      height:40px
      line-height: 40px
      /*border-bottom: 1px solid rgba(7,17,27,0.1)!*手机不适用*!*/
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex:1
        text-align:center
        & > a
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.router-link-active
            color:rgb(240,20,20)
  /*.tab{*/
    /*display: flex;*/
    /*width: 100%;*/
    /*height: 40px;*/
    /*line-height: 40px;*/
  /*}*/
  /*.tab-item{*/
    /*flex: 1;*/
    /*text-align: center;*/
  /*}*/
</style>
