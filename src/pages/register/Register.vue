<template>
  <div>
    <header-title :headTitle='headTitle'></header-title>
    <el-form :model="form" status-icon :rules="rules2" ref="form" class="demo-ruleForm">
      <el-form-item label="国家地区" class="list">
          <el-select v-model="form.region" placeholder="请选择" style="border:none;">
            <el-option label="中国大陆 +86" value="zhongguo"></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
      </el-form-item>
      <el-form-item label="账户" class="list">
        <input v-model="form.phonenumber" placeholder="请输入手机号码">
      </el-form-item>
      <el-form-item label="密码" prop="pass" class="list">
        <input type="password" v-model="form.pass" autocomplete="off" placeholder="请设置密码">
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" class="list">
        <input type="password" v-model="form.checkPass" autocomplete="off" placeholder="请再次输入密码">
      </el-form-item>
      <el-form-item label="昵称" class="list">
        <input v-model="form.name" placeholder="请输入昵称">
      </el-form-item>
      <el-form-item label="邀请码" class="list">
        <input v-model="form.number" placeholder="选填">
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('form')" class="list-btn">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      headTitle: '注册',
      form: {
        pass: '',
        checkPass: '',
        region: '中国大陆 +86',
        phonenumber: '',
        name: '',
        number: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.form)
          let postData = this.qs.stringify({
            phone: this.form.phonenumber,
            name: this.form.name,
            password: this.form.pass,
            inviterPerson: this.form.number
          })
          // console.log(postData)
          this.axios({
            method: 'post',
            url: '/api/customer/register',
            data: postData
          })
            .then(res => {
              console.log(res)
              if (res.data.result === 'true') {
                this.$router.push('/login')
              } else {
                alert(res.data.message)
              }
            }, res => {
              console.info('调用失败')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  components: {
    HeaderTitle
  },
  mounted () {
    let inviteCode = this.$route.query.inviteCode
    this.form.number = inviteCode
  }
}
</script>

<style lang="stylus" scoped>
.demo-ruleForm
    border-top 2px solid #cccccc
    padding .3rem .2rem
    .el-form-item
        margin-bottom .4rem
        padding .03rem
    .list
        display flex
        justify-content space-between
        border 1px solid #eee
        text-align left
        input
            height 80%
    .list >>> .el-form-item__content
        margin-left 0
    .list >>> .el-form-item__label
        text-align left
    .list >>> .el-input__inner
        border none
    .list-btn
        border none
        color #fff
        background-color rgba(255, 87, 51, 1)
        width 90vw
        height 7vh
        font-size .36rem
        margin-top .2rem
</style>
