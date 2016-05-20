<?php
namespace Home\Controller;

class IndexController extends BaseController {
    public function index(){


        //clear_cart(); // 清空购物车垃圾数据

        $hot_goods = $hot_cate = $cateList = array();
        $sql = "select a.goods_name,a.goods_id,a.shop_price,a.market_price,a.cat_id,b.parent_id_path,b.name from __PREFIX__goods as a left join ";
        $sql .= " __PREFIX__goods_category as b on a.cat_id=b.id where a.is_hot=1 and a.is_on_sale=1 order by a.sort";//二级分类下热卖商品
        $index_hot_goods = M()->query($sql);//首页热卖商品

        //var_dump($index_hot_goods);die;
        if($index_hot_goods){
            foreach($index_hot_goods as $val){
                $cat_path = explode('_', $val['parent_id_path']);
                $hot_goods[$cat_path[1]][] = $val;   //1级分类下 放置很多商品@by zhaozhiliang
            }
        }

        $hot_category = M('goods_category')->where("is_hot=1 and level=3 and is_show=1")->select();//热门三级分类
        foreach ($hot_category as $v){
            $cat_path = explode('_', $v['parent_id_path']);
            $hot_cate[$cat_path[1]][] = $v; //把三级分类，放置在对应一级分类下
        }

        foreach ($this->cateTrre as $k=>$v){
            if($v['is_hot']==1){
                $v['hot_goods'] = empty($hot_goods[$k]) ? '' : $hot_goods[$k];
                $v['hot_cate'] = empty($hot_cate[$k]) ? '' : $hot_cate[$k];
                $cateList[] = $v;
            }
        }


        $this->assign('cateList',$cateList);
//        echo '<pre>';
//        //var_dump($cateList);
//        var_dump($cateList[0]);
//        echo '</pre>';
//        die;

        $this->display();
    }
}