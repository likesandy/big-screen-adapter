import "./style.css";

window.addEventListener("load", () => {
  changeScale();
  window.addEventListener("resize", () => {
    changeScale();
  });
});

function changeScale() {
  const body = document.querySelector("body");
  // 设计稿尺寸
  // 目标适配: 1920*1080  3840*2160   7680*2160
  const targetX = 1920;
  const targetY = 1080;
  const targetRatio = 16 / 9;

  const currentX =
    document.documentElement.clientWidth || document.body.clientWidth;
  const currentY =
    document.documentElement.clientHeight || document.body.clientHeight;
  // 默认根据X轴缩放
  let scaleRatio = currentX / targetX;
  const curRatio = currentX / currentY;
  // 如果当前宽高比 > 16:9
  // 超宽屏
  if (curRatio > targetRatio) {
    scaleRatio = currentY / targetY; // 参照高度进行缩放
    body.style = `width:${targetX}px; height:${targetY}px;transform: scale(${scaleRatio}) translateX(-50%); left: 50%`;
  } else {
    // 4.开始缩放网页
    body.style = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio})`;
  }
}
