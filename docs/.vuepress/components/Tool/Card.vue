<template>
  <div class="card-wapper" @click="handleClickCard">
    <div :title="title" class="title text-overflow">{{ title }}</div>
    <div class="card-main">
      <div v-if="icon" class="icon">
        <img :src="`${$themeConfig.jsdelivrUrl + icon}`" alt="fail" />
      </div>
      <div class="card-content">
        <div :title="descripte" class="descripte text-overflow-two">
          {{ descripte }}
        </div>
        <div class="link text-overflow">
          <a  class="text-overflow" target="_blank" :title="url" :href="url">{{ url }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**Vue2.x写法 */
export default {
  name: "ToolCard",
  props: ["title", "descripte", "icon", "url"],
  mounted: function () {
    // console.log($themeConfig)
  },
  methods: {
    handleClickIcon: function (event) {
      event.stopPropagation();
    },
    handleClickCard: function (event) {
      const { url } = this._props;
      const noIMG = event.target.tagName !== "IMG";
      // 不是IMG元素 触发跳转弹窗
      noIMG && window.open(url);
    },
  },
};
</script>
<style scoped>
.card-wapper {
  background: #fff;
  margin: 10px;
  border: 1px solid #c3c3c3;
  padding: 8px;
  width: 300px;
  max-height: 140px;
  border-radius: 5px;
  box-sizing: border-box;
}
.card-wapper:hover {
  box-shadow: 3px 3px 5px 0px #4a6886;
  cursor: pointer;
}
.card-wapper .title {
  padding: 5px;
  font-weight: bold;
  border-bottom: 1px solid #c3c3c3;
}
.card-wapper .main {
  display: flex;
  align-items: center;
}
.card-main .icon {
  flex: 0 0 50px;
  height: 50px;
  border: 1px solid #c3c3c3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.card-main .card-content {
  padding: 8px;
}
.card-main.card-content .title {
  font-weight: bold;
}
.card-main .card-content .descripte {
  margin: 10px 0;
  color: #8d8c8c;
  font-size: 13px;
}
.card-main .card-content .link {
  font-size: 10px;
  width:200px;
}
/* 溢出隐藏 */
.text-overflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/** 溢出隐藏 （超出两行）*/
.text-overflow-two {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
