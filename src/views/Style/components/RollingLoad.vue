<template>
  <div>
    <h2>滚动加载</h2>
    <div ref="box-wrapper" class="box-wrapper">
      <div class="box">Conten1</div>
      <div class="box">Conten2</div>
      <div class="box">Conten3</div>
      <div class="box">Conten4</div>
      <div class="box">Conten5</div>
      <div class="box">Conten6</div>
      <div class="box">Conten7</div>
      <div class="box">Conten8</div>
      <div class="box">Conten9</div>
      <div class="box">Conten10</div>
    </div>
  </div>
</template>

<script >
/**
 * 思路：
 * 1、获取所有 box
 * 2、监听滚动
 * 3、滚动加载函数
 */
export default {
  mounted() {
    this.handleScroll()
    this.$refs['box-wrapper'].addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    this.$refs['box-wrapper'].removeEventListener('scroll')
  },
  data() {
    return {}
  },
  methods: {
    handleScroll() {
      // 1、获取滚动高度
      let scrollLength = this.$refs['box-wrapper'].scrollTop
      // 2、获取所有 box
      let boxList = document.querySelectorAll('.box')
      // 3、获取wrapper高度
      let boxWrapperHeight =
        document.querySelectorAll('.box-wrapper')[0].clientHeight
      // 4、获取盒子距离顶部高度
      let boxWrapperOffsetTop =
        document.querySelectorAll('.box-wrapper')[0].offsetTop
      boxList.forEach((box) => {
        // 5、获取每一个box距离父元素box-wrapper顶部的值
        let boxTop = box.offsetTop - boxWrapperOffsetTop - scrollLength
        if (boxTop <= boxWrapperHeight) {
          box.classList.add('show-center')
        } else {
          box.classList.remove('show-center')
        }
      })
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.box-wrapper {
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  overflow-y: auto;
}
.box {
  flex-shrink: 0;

  width: 1200px;
  height: 300px;

  margin-top: 20px;

  background: #5296d5;
  border-radius: 8px;

  font-size: 30px;
  color: #fff;

  transition: transform 0.5s ease, opacity 0.5s linear;

  display: flex;
  justify-content: center;
  align-items: center;
}
.box:nth-child(even) {
  transform: translateX(-200%);
  opacity: 0;
}
.box:nth-child(odd) {
  transform: translateX(200%);
  background: #735de8;
  opacity: 0;
}
.box.show-center {
  transform: translate(0);
  opacity: 1;
}
</style>