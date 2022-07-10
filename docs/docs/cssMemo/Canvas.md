---
title: Canvas学习
date: '2022-07-10'
categories:
  - other
tags:
  - canvas
---

## WEB_MDN文档
[canvas教程](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)

## Canvas画图步骤
画一个三角形
```javascript
//  获取一个画布上下文
const ctx =document.getElementById('wrap').getContext('2d');
// 开始路径 
ctx.beginPath();
// 或者
ctx.moveTo(x,y);
// 画一条线
ctx.lineTo(x1,y1);
// 重新指定起点
ctx.moveTo(x1,y1);
// 再画一条线
ctx.lineTo(x2,y2);
// 将路径合并到起点
ctx.closePath();

// 填充路径
ctx.fill();
// 或 根据路径描绘边框
ctx.strokw();
// 或者 裁剪 
ctx.clip();
```

## 画圆

```js
//  获取一个画布上下文
const ctx =document.getElementById('wrap').getContext('2d');
/**
 * @param {number} x 圆心 X轴坐标  
 * @param {number} y 圆心 Y轴坐标
 * @param {number} startAngle 开始弧度 (计算公式: Math.PI / 180 * 角度 )
 * @param {number} endAngle 结束弧度 
 * @param {boolean} anticlockwise 顺时针或逆时针  true是逆时针
 */
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

// 填充
ctx.fill();
// 画框
ctx.stroke();
```

## 0-9a-zA-z的字母
```js
//  获取一个画布上下文
const ctx =document.getElementById('wrap').getContext('2d');
const getRandomCode = () => {
    const range = [
      /**0-9 */
      { min: 48, max: 57 },
      /**A-Z */
      { min: 65, max: 90 },
      /**a-z */
      { min: 97, max: 122 },
    ];
    const index = Math.floor(Math.random() * 2);

    const { min, max } = range[index];
    const unicode = randomNum(min, max);
    const chart = String.fromCharCode(unicode);

    if (index === 0) return chart;
    return Math.random() * 2 > 1 ? chart.toLowerCase() : chart.toUpperCase();
  };
// 文字
  const drawText = (ctx: CanvasRenderingContext2D, chart: string) => {
    ctx.beginPath();
    const fontSize = randomNum(20, 25);
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = randomColor();
    // 保存路径的样式(避免偏移旋转之后,后面的路径受到影响)
    ctx.save();
    const x = randomNum(fontSize, width - fontSize);
    const y = randomNum(fontSize, height);
    const degree = randomNum(-45, 45);
    // 偏移量 避免过大幅度偏转
    ctx.translate(x, y);
    // 旋转
    ctx.rotate((Math.PI / 180) * degree);
    ctx.fillText(chart, -fontSize / 2, -fontSize / 2, fontSize);
    // 恢复save保存之前的样式
    ctx.restore();
  };
  const codeArr: string[] = new Array(digit).fill(0).map(() => {
    return getRandomCode();
  });
  
  codeArr.forEach((item) => {
    drawText(ctx, item);
  });
```
## rect 矩形
```javascript
//  获取一个画布上下文
const ctx =document.getElementById('wrap').getContext('2d');

/**
 * 画一个矩形
 * @param {number} x 起点 X轴坐标
 * @param {number} y 起点 Y轴坐标
 * @param {number} width 矩形的宽
 * @param {number} height 矩形的高
 */
ctx.fillRect(x, y, width, height);

// 清空矩形大小的内容,参数同上
ctx.clearRect(x, y, width, height);
// 画框,参数同上
ctx.strokeRect(x, y, width, height);
```

## 二次贝塞尔曲线和三次贝塞尔曲线
```javascript
/**
 * 二次贝塞尔曲线
 * @param cpx 第一个控制点X坐标
 * @param cpy 第一个控制点Y坐标
 * @param x 结束点
 * @param y 结束点
 */
ctx.quadraticCurveTo(cpx, cpy, x, y);

// 三次贝塞尔曲线
ctx.bezierCurveTo(cpx, cpy, x, y);
``` 
