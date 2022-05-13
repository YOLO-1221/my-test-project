<template>
  <div>
    <h2>动态表单</h2>
    <div class="form-wrapper">
      <div class="dynamic-form">
        <div class="btn-wrapper">
          <el-button @click="addForm()">添加表单</el-button>
          <el-button @click="checkForm()">验证表单</el-button>
        </div>
        <el-form
          v-for="(form, index) in dynamicForm"
          :key="index"
          :model="dynamicForm[index]"
          :rules="dynamicFormRules"
          :ref="`dynamicForm-${index}`"
          :label-width="labelWidth"
        >
          <el-form-item
            :label="`表单${index + 1}`"
            style="font-weight: 600"
          ></el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="dynamicForm[index].name" style="width: 200px" />
          </el-form-item>
          <el-form-item
            label="活动地点"
            prop="address"
            :rules="[
              { required: true, message: '请输入活动地址', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="dynamicForm[index].address"
              style="width: 200px"
            />
          </el-form-item>
        </el-form>
      </div>

      <div class="json">
        <json-viewer :value="dynamicForm"></json-viewer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicForms',
  data() {
    return {
      labelWidth: '100px',

      dynamicForm: [
        {
          name: '',
          address: '',
        },
      ],
      dynamicFormRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    addForm(formName) {
      this['dynamicForm'].push({
        name: '',
        address: '',
      })
    },
    checkForm() {
      for (let index = 0; index < this.dynamicForm.length; index++) {
        this.$refs[`dynamicForm-${index}`][0].validate((valid) => {
          if (valid) {
            setTimeout(() => {
              this.$message({
                message: `表单${index + 1}验证通过`,
                type: 'success',
              })
            }, 400)
          } else {
            return false
          }
        })
      }
    },
  },
}
</script>

<style scoped>
.form-wrapper {
  width: 100%;

  display: flex;
}

.dynamic-form {
  width: 50%;
}

.btn-wrapper {
  padding-left: 100px;
  margin-bottom: 20px;

  display: flex;
  justify-content: flex-start;
}

.json {
  width: 50%;

  text-align: left;
}

.el-form >>> .el-form-item__content {
  display: flex;
  justify-content: flex-start;
}
</style>