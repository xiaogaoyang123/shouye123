<template>
  <div>
    <page />

    <el-carousel :interval="3000" arrow="always" class="d_jump" :height="imgHeight+'px'">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-row>
          <el-col>
            <img ref="imgHeight" :src="item.idView" class="banner_img" @load="imgLoad" />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>

    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="年级"></el-tab-pane>
      <el-tab-pane class="zhongban" label="中班" name="first">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="大班" name="second">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="一年级" name="third">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="二年级" name="fourth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="三年级" name="fifth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="四年级" name="sixth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="五年级" name="seventh">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="六年级" name="eighth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="初一" name="ninth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="初二" name="tenth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="初三" name="eleventh">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="高一" name="twelfth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="高二" name="thirteenth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 无限回放 / 学习报告 / 纸质讲义 /</p>
          </div>

          <div class="neirong">
            <div class="neirong_item">
              <img :src="imgImg" alt />
              <p class="p3">34期内容可选</p>
              <div class="kecheng">
                <p class="p4">化学</p>
                <span>高二化学直播班专区</span>
              </div>
              <div class="kecheng">
                <p class="p5">10000+人已经报名</p>
                <span class="jiage">￥700</span>
                <span class="qi">起</span>
              </div>
            </div>

            <div class="neirong_item">
              <img :src="imgImg" alt />
              <p class="p3">34期内容可选</p>
              <div class="kecheng">
                <p class="p4">化学</p>
                <span>高二化学直播班专区</span>
              </div>
              <div class="kecheng">
                <p class="p5">10000+人已经报名</p>
                <span class="jiage">￥700</span>
                <span class="qi">起</span>
              </div>
            </div>

            <div class="neirong_item">
              <img :src="imgImg" alt />
              <p class="p3">34期内容可选</p>
              <div class="kecheng">
                <p class="p4">化学</p>
                <span>高二化学直播班专区</span>
              </div>
              <div class="kecheng">
                <p class="p5">10000+人已经报名</p>
                <span class="jiage">￥700</span>
                <span class="qi">起</span>
              </div>
            </div>

            <div class="neirong_item">
              <img :src="imgImg" alt />
              <p class="p3">34期内容可选</p>
              <div class="kecheng">
                <p class="p4">化学</p>
                <span>高二化学直播班专区</span>
              </div>
              <div class="kecheng">
                <p class="p5">10000+人已经报名</p>
                <span class="jiage">￥700</span>
                <span class="qi">起</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>

          <div class="neirong">

            <div class="neirong_item1">
              <div class="kecheng">
                <p class="p4">语文</p>
                <span>【月旦评】新闻热点作文亮点-第3季</span>
              </div>
              <p class="p7">2019年9月8日-2020年1月5日</p>
              <div class="jiangshi">
                <img class="imgss" :src="imgImg1" alt />
                <p class="p6">授课</p>
                <p class="p8">何鑫等</p>
              </div>

              <div class="kecheng1">
                <p class="p9">共5讲</p>
                <span class="jiage1">￥99</span>
                <span class="qi">￥</span>
                <span class="qian">5</span>
              </div>
            </div>
             <div class="neirong_item1">
              <div class="kecheng">
                <p class="p4">语文</p>
                <span>【月旦评】新闻热点作文亮点-第3季</span>
              </div>
              <p class="p7">2019年9月8日-2020年1月5日</p>
              <div class="jiangshi">
                <img class="imgss" :src="imgImg1" alt />
                <p class="p6">授课</p>
                <p class="p8">何鑫等</p>
              </div>

              <div class="kecheng1">
                <p class="p9">共5讲</p>
                <span class="jiage1">￥99</span>
                <span class="qi">￥</span>
                <span class="qian">5</span>
              </div>
            </div> <div class="neirong_item1">
              <div class="kecheng">
                <p class="p4">语文</p>
                <span>【月旦评】新闻热点作文亮点-第3季</span>
              </div>
              <p class="p7">2019年9月8日-2020年1月5日</p>
              <div class="jiangshi">
                <img class="imgss" :src="imgImg1" alt />
                <p class="p6">授课</p>
                <p class="p8">何鑫等</p>
              </div>

              <div class="kecheng1">
                <p class="p9">共5讲</p>
                <span class="jiage1">￥99</span>
                <span class="qi">￥</span>
                <span class="qian">5</span>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="高三" name="fourteenth">
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">同步课</p>
            <p class="p2">直播授课 / 课堂巩固1对1批改 / 即时答疑 / 无限回放 /</p>
          </div>
        </div>
        <div class="tongbuke">
          <div class="tongbu1">
            <p class="p1">专题课</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="学科"></el-tab-pane>
      <el-tab-pane label="全部" name="fifteenth">全部</el-tab-pane>
      <el-tab-pane label="语文" name="sixteenth">语文</el-tab-pane>
      <el-tab-pane label="数学" name="seventeenth">数学</el-tab-pane>
      <el-tab-pane label="英语" name="eighteenth">英语</el-tab-pane>
      <el-tab-pane label="编程" name="nineteenth">编程</el-tab-pane>
      <el-tab-pane label="素养" name="twentieth">素养</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import page from "../components/shouye";
export default {
  data() {
    return {
      activeName: "thirteenth",
      imgHeight: "",
      imgImg: "https://s03.xesimg.com/web/2018/01/15/15160080642262.png",
      imgImg1: "https://ekt.xesimg.com/teacher/2019/04/09/15547776978094.png",
      imgList: [
        {
          id: 0,
          idView:
            "https://hw.xesimg.com/ad/2019-11-18/c9e88de028ebc61164088f5db8dcf5f7.png"
        },
        {
          id: 1,
          idView:
            "https://hw.xesimg.com/ad/2019-10-18/11481c7b6b29caa58c54a72a8a1c6dfa.jpg"
        },
        {
          id: 2,
          idView:
            "https://hw.xesimg.com/ad/2019-11-15/a8a1fed79f0352d77198de31b49e12dd.jpg"
        },
        {
          id: 3,
          idView:
            "https://hw.xesimg.com/ad/2019-08-30/2d3a39b6bdee444681f930aef205a357.jpg"
        }
      ]
    };
    that.imgHeight = "620px";
    window.onresize = function temp() {
      that.imgHeight = `${that.$refs.imgHeight["0"].height}px`;
    };
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.imgHeight = this.$refs.imgHeight[0].height;
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.imgHeight = this.$refs.imgHeight[0].height;
        this.imgLoad();
      },
      false
    );
  },
  components: {
    page
  }
};
</script>

<style>
.d_jump {
  margin-top: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-tabs {
  width: 100%;
  flex-wrap: wrap;
  border: none;
}
.el-tabs__item {
  border: none;
  display: block;
  float: left;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(1) {
  margin-left: 30px;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(16) {
  margin-left: 30px;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(15) {
  margin-right: 170px;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: none;
}
.el-tabs--card > .el-tabs__header {
  border: none;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
}
.el-tabs__item.is-active {
  color: white;
  background-color: red;
}
.tongbuke {
  width: 100%;
  background-color: #f5f5f5;
}
.tongbu1 {
  width: 100%;
  height: 100px;
  overflow: hidden;
}
.tongbu1 p {
  padding-top: 40px;
  margin-left: 20px;
  float: left;
}
.p1 {
  font-size: 36px;
  font-weight: bolder;
  padding-right: 20px;
  padding-left: 30px;
}
.p2 {
  font-size: 14px;
  color: #777;
  margin-top: 25px;
}
.neirong {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}
.neirong_item {
  width: 300px;
  height: 350px;
  margin-left: 22px;
  background-color: white;
  overflow: hidden;
  position: relative;
  float: left;
  transition: all 0.5s;
}
.neirong_item1 {
  width: 400px;
  height: 360px;
  margin-left: 22px;
  background-color: white;
  overflow: hidden;
  position: relative;
  float: left;
  transition: all 0.5s;
  border: 1px solid #ccc;
}
.neirong_item:hover,
.neirong_item1:hover {
  transform: translateY(-8px);
  box-shadow: 0px 0px 5px #000;
}
.neirong_item img {
  width: 100%;
  height: 200px;
}
.neirong_item1 .imgss {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.p3 {
  background-color: #cc8d7c;
  border-radius: 20px;
  position: absolute;
  top: 30px;
  right: 0px;
  color: white;
  font-size: 12px;
  text-align: center;
}
.p6 {
  color: #333;
  font-size: 14px;
  margin-left: 35px;
}
.p8 {
  color: #333;
  font-size: 14px;
  margin-left: 30px;
}
.kecheng {
  width: 300px;
  height: 30px;
  margin-left: 20px;
  margin-top: 30px;
}
.kecheng1 {
  width: 350px;
  height: 30px;
  margin-left: 20px;
  padding: 10px;
  border-top: 1px solid #cccccc;
}
.p4 {
  border: 1px solid red;
  color: red;
  margin-right: 10px;
  font-size: 14px;
  float: left;
}
.p5,.p9 {
  color: #777;
  font-size: 12px;
  float: left;
  margin-right: 90px;
  margin-top: 8px;
}
.p9{
  margin-right: 240px;
}
.jiage,.qian{
  color: red;
  font-size: 20px;
  font-weight: bolder;

}
.jiage1 {
  color: #777;
  font-size: 14px;
  text-decoration: line-through;
}
.qi {
  color: red;
  font-size: 12px;
  font-weight: lighter;
}
.p7 {
  color: #777;
  font-size: 12px;
  margin: 20px;
}
.jiangshi {
  width: 400px;
  height: 150px;
  padding: 20px;
  margin-top: 30px;
}
</style>