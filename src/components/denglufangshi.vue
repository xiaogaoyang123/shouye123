<template>
  <div>
    <div class="yemian">
      <div class="block">
        <img :src="imgsrc" />
        <div class="denglu">
          <div :class="n==1?class1:class2" @click="btn(1)">验证码登录</div>
          <div :class="n==2?class1:class2" @click="btn(2)">密码登陆</div>

          <div v-if="n==1" class="twomenu">
            <div class="box0">
              <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="+86" class="guishudi">
                  <el-option label="中国           +86" value="1"></el-option>
                  <el-option label="中国香港        +862" value="2"></el-option>
                </el-select>
              </el-input>
              <div style="margin-top: 30px;">
                <el-input placeholder="请输入验证码" v-model="input2" class="shuru"></el-input>
                <el-button size="medium" round>获取验证码</el-button>
                <el-button round class="denglu_dl">登陆</el-button>
                <p>新用户登陆后将自动创建账户</p>
              </div>
            </div>
          </div>
          <div v-if="n==2" class="twomenu">
            <div class="mima">
              <el-input placeholder="请输入密码" v-model="input" show-password class="mima0"></el-input>
              <div style="margin-top: 30px;">
                <el-input placeholder="请输入密码" v-model="input2" class="shuru"></el-input>
                <el-button size="medium" round>忘记密码</el-button>
                <el-button round class="denglu_dl">登陆</el-button>
            </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "@/images/1.png";
export default {
  data() {
    return {
      imgsrc: img,
      class1: "choose CActive",
      class2: "choose",
      n: 1,
      input3: "",
      select: "",
      input2: "",
      input: ""
    };
  },
  methods: {
    btn(item) {
      this.n = item;
    }
  }
};
</script>
<style>
.yemian {
  width: 100%;
  height: 600px;
  background-color: red;
}
.denglu {
  width: 400px;
  height: 450px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  left: 740px;
}
img {
  margin-left: 232px;
  margin-top: 48px;
}
.choose {
  width: 150px;
  height: 50px;
  margin-top: 50px;
  margin-left: 36px;
  margin-bottom: 50px;
  text-align: center;
  line-height: 50px;
  background-color: node;
  border-radius: 5px;
  color: gray;
  float: left;
  font-size: 20px;
}
.CActive {
  background-color: red;
  color: white;
  font-size: 20px;
}
.twomenu {
  clear: both;
  width: 400px;
  height: 300px;
  border-radius: 5px;
  margin-top: 100px;
}
.box0 {
  width: 340px;
  height: 300px;
  margin-left: 30px;
}
.el-input__inner {
  width: 90%;
}

.el-select .el-input {
  width: 130px;
}
.shuru {
  width: 60%;
  float: left;
}
.huoqu {
  outline: none;
  margin-left: 0px;
}
.denglu_dl {
  width: 305px;
  margin: 30px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
p {
  width: 100%;
  text-align: center;
  color: #777;
  font-size: 14px;
}
.mima{
    width: 305px;
    height: 300px;
    margin-top: 40px;
    margin-left: 60px;
}
.mima0 {
  width: 111%;
}
</style>