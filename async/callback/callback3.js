
// 分析工具把我的回调调用五次而不是一次

// 门闩：防止回调函数多次调用
var tracked = false;
analytics.trackPurchase(purchaseData, () => {
  if (!tracked) {
    tracked = true;
    chargeCreditCard();
    displayThankyouPage();
  }
});

// 调用次数
// 调用时间
// 调用回传数据


