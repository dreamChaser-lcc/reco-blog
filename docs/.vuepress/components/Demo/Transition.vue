<template>
  <main>
    <div class="wrap">
      <div class="item">
        <button class="draw">Draw</button>
      </div>
      <div class="item">
        <button class="meet">Meet</button>
      </div>
      <div class="item">
        <button class="center">Center</button>
      </div>
    </div>
    <div class="wrap">
      <div class="item">
        <button class="spin">Spin</button>
      </div>
      <div class="item">
        <button class="spin circle">Circle</button>
      </div>
      <div class="item"><button class="spin thick">Thick</button></div>
    </div>
  </main>
</template>
<script>
export default {
  name: "DemoTransition",
  setup() {},
};
</script>

<style lang='stylus' scoped>
.wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  background-color: #2d3436;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f45e61;
    // 未理解
    isolation: isolate;

    button {
      background-color: transparent;
      border: 0;
      margin: 1em;
      padding: 1em;
      width: 5rem;
      height: 5rem;
      outline: none;
      color: #f45e61;
      box-sizing: border-box;
      box-shadow: inset 0 0 0 2px #f45e61;
      position: relative;
    }

    button::before, button::after {
      box-sizing: inherit;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}

/* *顺时针缓慢过渡 */
.wrap .item .draw {
  transition: color 0.25s;

  &::before, &::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: #60daaa;
  }

  &:hover::before, &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: #60daaa;
    border-right-color: #60daaa;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-bottom-color: #60daaa;
    border-left-color: #60daaa;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  }
}

/* *原点开始对角相遇 */
.wrap .item .meet {
  border: 2px solid transparent;

  &::before, &::after {
    position: absolute;
    border: 2px solid transparent;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }

  &:hover {
    color: #fbca67;
  }

  &:hover::before, &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: #fbca67;
    border-right-color: #fbca67;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-left-color: #fbca67;
    border-bottom-color: #fbca67;
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
  }
}

/* *四条边分别从中间扩散 通过scale3d缩放 */
.wrap .item .center {
  &:hover {
    color: #6477b9;
  }

  &::before, &::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  &::before {
    border-top: 2px solid #6477b9;
    border-bottom: 2px solid #6477b9;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
  }

  &::after {
    border-left: 2px solid #6477b9;
    border-right: 2px solid #6477b9;
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
  }

  &:hover::before, &:hover::after {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
  }
}

/* *旋转过渡，before填充颜色，after旋转特效 */
.wrap .item .spin {
  &:hover {
    color: #0eb7da;
  }

  &::before, &::after {
    top: 0;
    left: 0;
  }

  &::before {
    border: 2px solid transparent;
  }

  &:hover::before {
    border-top-color: #0eb7da;
    border-right-color: #0eb7da;
    border-bottom-color: #0eb7da;
    transition: border-top-color 0.15s linear, border-right-color 0.15s linear 0.1s, border-bottom-color 0.15s linear 0.2s;
  }

  &::after {
    border: 0 solid transparent;
  }

  &:hover::after {
    border-top: 2px solid #0eb7da;
    border-left-width: 2px;
    border-right-width: 2px;
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    transition: border-left-width 0s linear 0.35s, -webkit-transform 0.4s linear 0s;
    transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
    transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s, -webkit-transform 0.4s linear 0s;
  }
}

/* *旋转圆形过渡 */
.wrap .item .circle {
  border-radius: 100%;
  box-shadow: none;

  &::before, &::after {
    border-radius: 100%;
  }
}

/* *旋转三角形并填充 */
.wrap .item .thick {
  color: #f45e61;

  &:hover {
    color: #fff;
    font-weight: 700;
  }

  &::before {
    border: 2.5em solid transparent;
    z-index: -1;
  }

  &::after {
    mix-blend-mode: color-dodge;
    z-index: -1;
  }

  &:hover::before {
    background: #f45e61;
    border-top-color: #f45e61;
    border-right-color: #f45e61;
    border-bottom-color: #f45e61;
    transition: background 0s linear 0.4s, border-top-color 0.15s linear, border-right-color 0.15s linear 0.15s, border-bottom-color 0.15s linear 0.25s;
  }

  &:hover::after {
    border-top: 2.5em solid #f45e61;
    border-left-width: 2.5em;
    border-right-width: 2.5em;
  }
}
</style>