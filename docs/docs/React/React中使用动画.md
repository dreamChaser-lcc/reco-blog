---
title: React中的CSS动画
sidebar: "auto"
tags:
  - css3
categories:
  - React
  - css3动画
---

## 在 React 中使用动画的方式

- 1.使用@keyframes 规则 + transform (原生 Css3)
- 2.调用 animate.css 动画库
- 3.官网推荐的组件 Transition Group

## 原生 CSS3 动画

简单的从右到左动画例子（fadeInRight）：[在线源码](https://codesandbox.io/s/css3dong-hua-demo-h2p0c?file=/src/App.tsx)

:::details 点击查看代码

### styles.css

```css {1,6,7,8}
.wrapper .animate-fadeInRight {
  margin-top: 5px;
  width: 100px;
  height: 100px;
  background-color: #74b9ff;
  animation: fadeInRight;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  -webkit-animation: fadeInRight;
  -webkit-animation-duration: 3s;
  -webkit-animation-fill-mode: forwards;
}
@keyframes fadeInRight {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0px);
  }
}
```

### app.tsx

```tsx {12}
const [visiblity, setVisiblity] = useState<boolean>(false);
return (
  <div className="App">
    <div className="wrapper">
      <button
        onClick={() => {
          setVisiblity(!visiblity);
        }}
      >
        开启/关闭动画
      </button>
      {visiblity && <div className="animate-fadeInRight"></div>}
    </div>
  </div>
);
```

:::

## animate 动画库

```bash
npm install animate.css --save
```

[animate 效果地址](https://animate.style/)

```tsx
<h1 class="animate__animated animate__bounce">An animated element</h1>
```

## 官方推荐组件 Transition Group

```bash
npm install react-transition-group --save
```

| 组件            | 描述                                                              |
| --------------- | ----------------------------------------------------------------- |
| Transition      | 过渡组件，通过组件状态的变化改变样式形成动画，in 控制是否开启动画 |
| CSSTransition   | 通过**特定 css 类名**设置指定周期的样式                           |
| SwitchTranstion | 和 CSSTransition 配合使用，**当 key 改变触发动画生命周期**        |
| TransitionGroup | 过渡动画组，**当 key 改变触发动画生命周期**                       |

### Transition 与 CSSTransition 的异同

- in 控制是否能出现动画，in 为 flase 动画不会生效
- 都有特定的"动画生命周期"
- 且无法控制"动画生命周期"生效时机
  :::tip
  因为动画的生命周期，和组件的周期同步，大致分为**进入中(entering)/进入完成(entered)/销毁中(exiting)/销毁完成(exiting)周期**,在组件不销毁的情况，无法二次触发动画
  :::

### SwitchTranstion 与 TransitionGroup 的异同

- 需要与 CSSTransition 结合
- 可以通过 key 改变间接控制动画生效时机
- TransitionGroup 旧组件和新组件**同时**触发动画，SwitchTranstion**旧组件销毁才触发**新组件动画

### 应用场景
- SwitchTransition **路由切换页面的时候使用**，组件路径作为key
- TransitionGroup **Todo列表中使用**，列表中需要同时触发动画
- Transition，CSSTranstion **数据不会发生改变的情况下使用**

## 参考链接

[React-Transition-Group 文档](http://reactcommunity.org/react-transition-group/)
