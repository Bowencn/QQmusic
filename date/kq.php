<?
php
//处理跨域
header("Access-Control-Allow-Origin:*"); //*号表示所有域名都可以访问
header("Access-Control-Allow-Method:POST,GET");


  echo file_get_contents("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923");

?>
