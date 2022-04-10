<template>
  <div class="head">
    <div class="head-container">
      <div class="left-box">
        <router-link to="/">M</router-link>
      </div>
      <div class="right-box">
        <div>
          <el-input placeholder="请输入商品信息" size="medium">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="right-box-text">
          <router-link to="/allShop" active-class="on">全部商品</router-link>
          <router-link to="/xxx" active-class="on">捐赠</router-link>
        </div>
        <div class="line"></div>
        <div class="right-icon">
          <router-link to="/login">
            <i class="el-icon-user"></i>
          </router-link>
          <router-link to="/shopCar" class="shopCar">
            <i class="el-icon-shopping-cart-2"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="scroll">
      <div class="nav" :class="navBarFixed == true ? 'navBarWrap' : ''">
        <ul class="nav-sub">
          <li>
            <router-link to="/" active-class="active">首页</router-link>
          </li>
          <li>
            <router-link to="/" active-class="active">全部</router-link>
          </li>
          <li>
            <router-link to="/" active-class="active">后台管理系统</router-link>
          </li>
          <li>
            <router-link to="/" active-class="active">XMall小程序</router-link>
          </li>
          <li>
            <router-link to="/" active-class="active">XPay支付系统</router-link>
          </li>
          <li>
            <router-link to="/" active-class="active"
              >XBool开发平台</router-link
            >
          </li>
          <li>
            <router-link to="/" active-class="active">宣传视频</router-link>
          </li>
          <li>
            <router-link to="/" active-class="active">Github</router-link>
          </li>
          <li>
            <router-link to="/" active-class="active">商用授权</router-link>
          </li>
        </ul>
      </div>
    </div>
    <button @click="fn">点击传参</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      navBarFixed: false,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },

  methods: {
    fn() {
      this.$router.push({
        name: "homedetails",
        params: { productId: 150642571432852 },
      });
    },
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      //  当滚动超过 90 时，实现吸顶效果
      if (scrollTop > 100) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
};
</script>

<style>
.head {
  width: 100%;
  height: 100px;
  background: #000;
}
.head-container {
  width: 1220px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  font-weight: bolder;
  text-align: center;
  line-height: 40px;
}
.right-box {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #c8c8c8;
}
.right-box a {
  white-space: nowrap;
  padding: 0 25px;
}
.right-box-text {
  display: flex;
}
.line {
  width: 1px;
  height: 16px;
  background: #c8c8c8;
}
.right-icon {
  display: flex;
}
.right-box-text a {
  padding: 0 15px;
}
.right-icon a {
  padding: 0 15px;
  font-size: 16px;
  position: relative;
}
.right-box div {
  margin: 0 20px;
}
.shopCar::after {
  display: block;
  content: "0";
  width: 14px;
  height: 14px;
  position: absolute;
  right: 0;
  top: 0;
  background: #ccc;
  border-radius: 50%;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 14px;
}
.box {
  height: 2000px;
}
.nav {
  width: 100%;
  box-sizing: border-box;
  background: #f7f7f7;
  text-align: center;
  height: 90px;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
}

.nav-sub {
  width: 1220px;
  margin: 0 auto;
  /* background:yellow; */
  font-size: 12px;
  font-size: #666;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.nav-sub li {
  box-sizing: border-box;
  height: 90px;
  line-height: 90px;
  margin: 0 10px;
}
.nav-sub li:hover {
  color: #5692ed;
}
.active {
  font-weight: bolder;
}
.on {
  color: #fff;
}
</style>
