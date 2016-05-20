<?php
//  加载常量配置文件
require_once('constant.php');

return array(
    /* 加载公共函数 */
    'LOAD_EXT_FILE' =>'common',
    'AUTH_CODE' => "TPSHOP", //安装完毕之后不要改变，否则所有密码都会出错
    //'URL_CASE_INSENSITIVE' => false, //URL大小写不敏感
    'LOAD_EXT_CONFIG'=>'db,route', // 加载数据库配置文件
    'LOAD_EXT_CONFIG'=>'db', // 加载数据库配置文件


    'TAGLIB_LOAD'   => true,
    'APP_AUTOLOAD_PATH'  =>'@.TagLib',
    'TAGLIB_BUILD_IN'  =>  'cx,tpshop', // tpshop 为自定义标签类名称
    'TMPL_TEMPLATE_SUFFIX'  =>  '.html',     // 默认模板文件后缀
    'URL_HTML_SUFFIX'       =>  'html',  // URL伪静态后缀设置  默认为html  去除默认的 否则很多地址报错


    'MODULE_ALLOW_LIST' => array('Home','Admin','Api'),
    'DEFAULT_MODULE'        =>  'Home',  // 默认模块
    //'DEFAULT_MODULE'        =>  'Index',  // 默认模块
    'DEFAULT_CONTROLLER'    =>  'Index', // 默认控制器名称
    'DEFAULT_ACTION'        =>  'index', // 默认操作名称    
);