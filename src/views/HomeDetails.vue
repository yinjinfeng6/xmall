<template>
  <div class="detail">
    <div class="detail-main" v-for="(item, index) in product" :key="index">
      <div class="main-box">
        <div class="box-wrapper">
          <div class="wrapper-list">
            <ul class="store-list">
              <li
                class="store-list-item"
                v-for="(item, index) in item.productImageBig"
                :key="index"
              >
                <router-link to=""
                  ><img :src="item" alt="" class="store-imgs"
                /></router-link>
              </li>
            </ul>
          </div>
          <div class="wrapper-thumb">
            <div class="big">
              <img :src="item.productImg" alt="" class="big-thumb" />
            </div>
          </div>
        </div>
        <div class="box-banner">
          <div class="banner-title">
            <h4>{{ item.productName }}</h4>
            <h6>
              <span>{{ item.subTitle }}</span>
              <div>
                <em>¥</em><i>{{ item.salePrice }}</i>
              </div>
            </h6>
          </div>
          <div class="banner-num">
            <div class="params-name">数量</div>
            <div class="banner-control">
              <button class="sub" @click="subfn">-</button>
              <input type="text" v-model="num" />
              <button class="add" @click="addfn">+</button>
            </div>
          </div>
          <div class="banner-buy">
            <button class="addcart" @click="addcart">加入购物车</button>
            <button class="buy" @click="buy">现在购买</button>
          </div>
        </div>
      </div>
      <div class="main-info">
        <div class="info-title">
          <h2>产品信息</h2>
          <div></div>
        </div>
        <div class="info-con">
          <img :src="item.productImageBig" alt="" class="con-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../api/index";
export default {
  name: "HomeDetails",
  components: {},
  data() {
    return {
      product: null,
      num: 1,
      products: [],
    };
  },
  props: ["productId"],

  methods: {
    async addcart() {
      let obj = {
        id: this.product[0].productId,
        img: this.product[0].productImg,
        name: this.product[0].productName,
        num: this.num,
        price: this.product[0].salePrice,
        check: true,
      };
      let { data } = await request.post("/carts", obj);
    },
    buy() {
      alert("购买页没写！！！");
    },
    subfn() {
      this.num--;
      if (this.num < 1) {
        this.num = 1;
      }
    },
    addfn() {
      this.num++;
    },
    async getDetails(productId) {
      let { data } = await request.post("/detail", { productId });
      // console.log(data);
      this.product = data.data;
      // console.log(this.product);
    },
  },
  created() {
    this.getDetails(this.productId);
  },
};
</script>

<style scoped>
/* info开始 */
.main-info {
  background: #fff;
}
.info-title {
  height: 60px;
  padding: 0 10px 0 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 1px 7px rgb(0, 0, 0 / 6%);
  background: linear-gradient(#fbfbfb, #ececec);
  line-height: 60px;
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info-con {
  width: 100%;
  text-align: center;
}
.info-con img {
  width: 990px;
}
/* info结束 */
/* banner开始 */
.banner-buy {
  padding: 30px 0 0 10px;
  border-top: 1px solid #ebebeb;
}
.banner-buy button {
  width: 145px;
  height: 50px;
  line-height: 48px;
  border: 1px solid #5c81e3;
  color: #fff;
  background: #678ee7;
  font-size: 12px;
  border-radius: 4px;
}
.banner-buy .buy {
  border: 1px solid #e1e1e1;
  background: #f9f9f9;
  color: #646464;
  margin-left: 10px;
}
.banner-num {
  padding: 29px 0 8px 10px;
  border-top: 1px solid #ebebeb;
  display: flex;
  align-items: center;
}
.params-name {
  padding-right: 20px;
  font-size: 14px;
  line-height: 36px;
  color: #8d8d8d;
}
.banner-control {
  height: 40px;
  padding-top: 4px;
}
.banner-control button {
  width: 34px;
  height: 37px;
  line-height: 37px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
}
.banner-control input {
  width: 36px;
  height: 18px;
  border: none;
  border-radius: 3px;
  line-height: 18px;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  margin-top: 7px;
  cursor: pointer;
}
.box-banner {
  width: 450px;
  margin-left: 10px;
}
.banner-title {
  overflow: hidden;
  padding: 8px 8px 18px 10px;
}
.banner-title h4 {
  font-size: 24px;
  color: #000;
  margin-bottom: 13px;
  line-height: 1.25;
}
.banner-title h6 {
  font-size: 14px;
  line-height: 1.5;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.banner-title h6 div {
  color: #d44d44;
  font-weight: 700;
  text-align: right;
  line-height: 20px;
}
.banner-title h6 i {
  font-style: normal;
  font-size: 24px;
  padding-left: 2px;
}
/* banner结束 */

/* wrapper开始 */
.wrapper-thumb {
  width: 460px;
}
.wrapper-thumb .big {
  box-sizing: border-box;
  width: 100%;
  padding-left: 20px;
}
.wrapper-thumb .big .big-thumb {
  width: 100%;
}
.store-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.store-list-item {
  width: 80px;
  height: 80px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  cursor: pointer;
}
.store-list-item .store-imgs {
  width: 100%;
  height: 100%;
}
.wrapper-list {
  width: 80px;
  display: flex;
}
.store-list {
  width: 100%;
}
.box-wrapper {
  display: flex;
  width: 540px;
}
.detail {
  background: #ededed;
  padding-top: 20px;
}
.detail-main {
  width: 1220px;
  margin: 0 auto;
}
.main-box {
  display: flex;
  margin: 20px 0;
  padding: 60px;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgb(0, 0, 0 / 10%);
}
/* wrapper结束 */
</style>