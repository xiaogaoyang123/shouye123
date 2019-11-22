<template>
  <div>
    <el-button round @click="dialogFormVisible = true">立即领取</el-button>
    <el-dialog title="登录" :visible.sync="dialogFormVisible" center>
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="num">
          <el-input v-model.number="ruleForm2.num"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>        
      </el-form>
      <!-- 插入测试 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm2')">登 录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    /*插入form方法*/
    var checkNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入手机号"));
        } else {
          var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!myreg.test(value)) {
            callback(new Error("请输入正确的手机号码"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    /*插入form方法*/

    return {
      loginPower: false,
      /*插入form方法*/
      /*设定规则指向*/
      ruleForm2: {
        pass: "",
        num: "",
        delivery: false
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],

        num: [{ validator: checkNum, trigger: "blur" }]
      },

      /*插入form方法*/

      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //提交成功做的动作
          dialogFormVisible = false;
          /* alert('submit!') ; */
          this.$message({
            type: "success",
            message: "提交成功"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-button{
    color: white;
    font-size: 24px;
    background-color: red;
}
</style>