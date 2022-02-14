<template>
  <div class="toolList-style">
    <slot name="toolList"> </slot>
  </div>
</template>

<script>
/**Vue3.x写法 */
export default {
  name:'ToolCardsLayout',
  setup() {},
};
</script>
<style scoped>
.toolList-style{
  display: flex;
  flex-wrap:wrap;
  align-items: center;
}

</style>