/* 
1、按关键字搜索商品接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
错误回调：code：404
参数:
    introduction:商品关键字(string) 具体示例请看接口文档

*/
const   QUERY_BY_INTRODUCTION_URL ="/goodsController/queryByIntroduction"

/* 
2、首页商品展示接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
错误回调：code：404
参数:
    id:商品id(int) 具体示例请看接口文档

*/
const   QUERY_BY_ID_URL ="/goodsController/queryById"

/* 
3、首页猫、狗商品接口
请求类型：GET请求
返回类型：json类型	
参数:
    status:状态：猫还是狗(int) 具体示例请看接口文档

*/
const   QUERY_BY_STATUS_URL ="/goodsController/queryByStatus"

/* 
4、推荐关键字搜索接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
错误回调：code：404
参数:
    Introduction:商品关键字(String) 具体示例请看接口文档

*/


/* 
5、店铺搜索接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
错误回调：code：404
参数:
    sid:店铺id(int) 具体示例请看接口文档

*/
const   QUERYGOODS_BY_SHOPID_URL ="/shopController/queryGoodsByShopId"

/* 
6、分类接口（点击底部栏分类项）
请求类型：GET请求
返回类型：json类型	
参数:
    无

*/
const   GETTYPELIST_URL ="/goodsTypeController/getTypeList"

/* 
7、分类商品详情接口
请求类型：GET请求
返回类型：json类型	
参数:
    tid:商品所属分类id(int) 具体示例请看接口文档

*/
const   GETGOODS_BY_TYPEID_URL ="/goodsController/getGoodsByTypeId"

/* 
8、商品评论接口
请求类型：post请求
返回类型：json类型	
成功回调：code：200
参数:
    gid:所评商品id(int) 具体示例请看接口文档

*/
const   GETCOMMENTS_BY_GOODSID_URL ="/commentsController/getCommentsByGoodsId"

/* 
9、登录接口
请求类型：post请求
返回类型：json类型	
成功回调：code：200
参数:
    username:用户名(string) 具体示例请看接口文档
    password:密码(string)
*/
const   LOGIN_URL ="/userController/login"

/* 
10、注册接口
请求类型：post请求
返回类型：json类型	
参数:
    username:用户名(string) 具体示例请看接口文档

*/
const   REGISTER_URL ="/userController/register"

/* 
11、查询收藏店铺接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
错误回调：code：404
参数:
    Userid:用户id(int) 具体示例请看接口文档

*/
const   QUERYSHOPCOLLECTION_BY_USERID_URL ="/collectionController/queryShopCollectionByUserId"

/* 
12、查询收藏商品接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
错误回调：code：404
参数:
    Userid:用户id(int) 具体示例请看接口文档

*/
const   QUERYGOODSCOLLECTION_BY_USERID_URL ="/collectionController/queryGoodsCollectionByUserId"

/* 
13、查询订单接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
参数:
    Userid:用户id(int) 具体示例请看接口文档

*/
const   QUERYORDER_BY_USERID_URL ="/orderController/queryOrderByUserId"

/* 
14、查询待支付订单接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
参数:
    Userid:用户id(int) 具体示例请看接口文档
    Orderid:订单id(int)
*/
const   QUERYWAIT_URL ="/ orderController /queryWait"

/* 
15、查询待发货接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
参数:
    Userid:用户id(int) 具体示例请看接口文档
    Ordertype:订单状态(int)
*/
const   QUERYNOTSEND_URL ="/ orderController /queryNotSend"

/* 
16、查询已发货接口
请求类型：GET请求
返回类型：json类型	
参数:
    Userid:用户id(int) 具体示例请看接口文档
    Ordertype:订单状态(int)
*/
const   QUERYSEND_URL ="/ orderController /querySend"

/* 
17、查询其他订单接口
请求类型：GET请求
返回类型：json类型	
成功回调：code：200
参数:
    Userid:用户id(int) 具体示例请看接口文档
    Ordertype:订单状态(int)
*/
const   QUERYOTHER_URL ="/ orderController /queryOther"

/* 
18、商品收藏接口
请求类型：GET请求
返回类型：json类型	
回调：code：1
参数:
    Userid:用户id(int) 具体示例请看接口文档
    Goodsid:商品id(int)
*/
const   ADDGOODSCOLLECTIONFORUSER_URL ="/collectionController/addGoodsCollectionForUser"

/* 
19、商品取消收藏接口
请求类型：GET请求
返回类型：json类型	
回调：code：1
参数:
    Userid:用户id(int) 具体示例请看接口文档
    Goodsid:商品id(int)
*/
const   DELGOODSCOLLECTIONFOR_URL ="/collectionController/delGoodsCollectionFor"

/* 
20、店铺收藏接口
请求类型：GET请求
返回类型：json类型	
回调：code：1
参数:
    Userid:用户id(int) 具体示例请看接口文档
    shopsid:店铺id(int)
*/
const   ADDSHOPCOLLECTIONFORUSER_URL ="/collectionController/addShopCollectionForUser"

/* 
21、店铺取消收藏接口
请求类型：GET请求
返回类型：json类型	
回调：code：1
参数:
    Userid:用户id(int) 具体示例请看接口文档
    shopsid:店铺id(int)
*/
const   DELSHOPCOLLECTIONFORUSER_URL ="/collectionController/delShopCollectionForUser"

/* 
22、用户修改接口
请求类型：post请求
返回类型：json类型	
回调：code：1
参数:
    phonenumber:用户id(int) 具体示例请看接口文档
    username:店铺id(int)
    userpicture:用户头像(text)
    signature:签名(text)
    balance:余额(int)
    address:地址(text)
*/
const   UPDATA_URL ="/userController/updata"

/* 
23、用户修改密码接口
请求类型：post请求
返回类型：json类型	
回调：code：1
参数:
    Password:用户密码(int) 具体示例请看接口文档
    Newpassword:新密码(int)
*/
const   UPDATAPASSWORD_URL ="/userController/updataPassword"

/* 
25、取消订单接口
请求类型：get请求
返回类型：json类型	
回调：code：1
参数:
    orderid:订单id(int) 具体示例请看接口文档
    
*/
const   DELORDERBYID_URL ="/orderController/delOrderById"

/* 
26、支付接口
请求类型：post请求
返回类型：json类型	
回调：code：1
参数:
    orderid:(int) 具体示例请看接口文档
    
*/

/* 
27、余额充值接口
请求类型：get请求
返回类型：json类型	
回调：code：1
参数:
    orderid:(int) 具体示例请看接口文档
    
*/

/* 
28、 二级分类查询
请求类型：get请求
返回类型：json类型	
回调：code：1
参数:
    Typeid:类型id(int) 具体示例请看接口文档
    
*/
const   GETSECONDTYPELIST_URL ="/goodsTypeController/getSecondTypeList"

/* 
29、 添加收货地址
请求类型：get请求
返回类型：json类型	
回调：code：1
参数:
    consignee:收货人(String) 具体示例请看接口文档
    adphonenumber:收货人手机(int)
    province:省市区信息(text)
    addetails:地址详情(text)
    adtype:地址类型(int)
    
*/
const   ADDADDRESS_URL ="/addressController/addAddress"

/* 
30、 修改收货地址
请求类型：post请求
返回类型：json类型	
回调：code：1
参数:
    consignee:收货人(String) 具体示例请看接口文档
    adphonenumber:收货人手机(int)
    province:省市区信息(text)
    addetails:地址详情(text)
    adtype:地址类型(int)
    
*/
const   UPDATEADDRESS_URL ="/addressController/updateAddress"

/* 
31、 查询用户收货地址
请求类型：get请求
返回类型：json类型	
参数:
    Userid:用户id(int) 具体示例请看接口文档
    
*/
const   QUERYADDRESS_URL ="/addressController/queryAddress"

/* 
32、 删除收货地址
请求类型：post请求
返回类型：json类型	
回调：code：1
参数:
    Userid:地址id(int) 具体示例请看接口文档
    
*/
const   DELADDRESS_URL ="/addressController/delAddress"

export default {
    DELADDRESS_URL,
    QUERYADDRESS_URL,
    UPDATEADDRESS_URL,
    ADDADDRESS_URL,
    GETSECONDTYPELIST_URL,
    DELORDERBYID_URL,
    UPDATAPASSWORD_URL,
    UPDATA_URL,
    DELSHOPCOLLECTIONFORUSER_URL,
    ADDSHOPCOLLECTIONFORUSER_URL,
    DELGOODSCOLLECTIONFOR_URL,
    ADDGOODSCOLLECTIONFORUSER_URL,
    QUERYOTHER_URL,
    QUERYSEND_URL,
    QUERYNOTSEND_URL,
    QUERYWAIT_URL,
    QUERYORDER_BY_USERID_URL,
    QUERYGOODSCOLLECTION_BY_USERID_URL,
    QUERYSHOPCOLLECTION_BY_USERID_URL,
    REGISTER_URL,
    LOGIN_URL,
    GETCOMMENTS_BY_GOODSID_URL,
    GETGOODS_BY_TYPEID_URL,
    GETTYPELIST_URL,
    QUERYGOODS_BY_SHOPID_URL,
    QUERY_BY_STATUS_URL,
    QUERY_BY_ID_URL,
    QUERY_BY_INTRODUCTION_URL
}


