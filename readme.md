# 微信内h5发起支付

这里有两种方式:

一种是使用微信 JS-SDK 中的微信支付API发起支付

另一种是使用微信内置浏览器提供的API发起支付

两个API需要的参数大同小异,都需要后端通过统一下单接口获取生成

JS-SDK里还需要后端生成JS-SDK的权限验证签名;

使用微信自带浏览器提供的API则不需要额外签名,但需要提供appId;

第一种:[wxChoosePay](./wx-js-sdk)

第二种:[WeiXinJSBridge](./WeixinJSBridge)

# 关于微信支付相关文档

这些文档可能对你有所帮助

[微信网页授权](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842)

[微信网页开发-JS-SDK说明](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115) 

[微信支付JSAPI支付开发步骤](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_3)

[微信内H5调起支付](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6)