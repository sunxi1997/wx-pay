/**
 * payment:{
 *    appId:'wxa3b2eff77af0d6eb',
 *    timestamp:timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
 *    nonceStr, // 支付签名随机串，不长于 32 位
 *    package: _package||prepay_id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
 *    signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
 *    paySign, // 支付签名
 * }
 */
function wxJSBridgePay(payment) {
    return new Promise((resolve, reject) => {

        let WeixinJSBridge = window['WeixinJSBridge'];

        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        } else
            onBridgeReady();

        function onBridgeReady() {
            // console.log('emit onBridgeReady');
            let WeixinJSBridge = window['WeixinJSBridge'];
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', payment,
                /*
                'getBrandWCPayRequest', {
                    "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入
                    "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数
                    "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
                    "package":"prepay_id=u802345jgfjsdfgsdg888",
                    "signType":"MD5",         //微信签名方式：
                    "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
                },
                * */
                function (res) {
                    // console.log('weixinJSBridge ok!!!', res);
                    resolve(res)
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        // 使用以上方式判断前端返回,微信团队郑重提示：
                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    }
                });
        }

    })
}
