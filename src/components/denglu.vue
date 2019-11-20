<template>
  <div class="block" :style="backgroundDiv">
    <el-image class="imgs" :src="src"></el-image>
    <el-image class="imgss" :src="srcs"></el-image>
    <div class="box">
      <p class="hafe">哈佛北大等院校毕业师资</p>
      <input placeholder="请输入手机号" name="cname" type="text" id="shoujihao" />
      <input placeholder="请输入验证码" name="cname" type="text" id="yanzhengma" />
      <input type="button" class="huoqu" value="获取验证码" />
      <input type="button" class="lingqu" value="免费领取" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../images/4.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      src:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/headerhuman.png",
      srcs: "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/logoa.png"
    };
  }
};
</script>

<style>
.block {
  width: 100%;
  height: 600px;
}
.block .imgs {
  width: 70%;
  height: 80%;
  margin-left: 60px;
  margin-top: 120px;
}
.block .imgss {
  width: 10%;
  height: 70px;
  margin-left: -960px;
  margin-top: 0px;
  position: absolute;
}
.box {
  width: 300px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  margin-left: 1005px;
  margin-top: -370px;
}
.hafe {
  padding: 5px;
  margin: 10px;
  font-size: 24px;
  color: #333;
}
#shoujihao {
  padding-left: 30px;
  outline: none;
  width: 240px;
  height: 40px;
  margin: 5px;
  border: 1px solid #cccccc;
  border-radius: 50px;
}
#yanzhengma {
  padding-left: 30px;
  outline: none;
  width: 110px;
  height: 40px;
  margin: 5px;
  border: 1px solid #cccccc;
  border-radius: 50px;
}
.huoqu {
  outline: none;
  width: 120px;
  height: 40px;
  margin: 5px;
  background-color: rgb(207, 7, 7);
  border-radius: 50px;
  color: white;
  border: none;
  font-size: 16px;
  text-align: center;
}
.lingqu {
  outline: none;
  width: 280px;
  height: 40px;
  margin: 10px;
  background-color: rgb(207, 7, 7);
  border-radius: 50px;
  color: white;
  border: none;
  font-size: 28px;
  text-align: center;
  box-shadow: 3px 3px 5px rgb(243, 142, 142);
}
</style>