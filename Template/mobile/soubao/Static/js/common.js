function AjaxAddCart(goods_id,num,to_catr)
{
    // 如果有商品规格 说明是商品详情页提交
    if($("#buy_goods_form").length > 0){
        $.ajax({
            type : "POST",
            url:"/index.php?m=Mobile&c=Cart&a=ajaxAddCart",
            data : $('#buy_goods_form').serialize(),// 你的formid 搜索表单 序列化提交
            dataType:'json',
            success: function(data){
                alert(data.msg);
                // 加入购物车后再跳转到 购物车页面
                if(to_catr == 1)  location.href = "/index.php?m=Mobile&c=Cart&a=cart";
            }
        });
    }else{ // 否则可能是商品列表页 收藏页 等点击加入购物车的
        $.ajax({
            type : "POST",
            url:"/index.php?m=Mobile&c=Cart&a=ajaxAddCart",
            data :{goods_id:goods_id,goods_num:num} ,
            dataType:'json',
            success: function(data){
                //console.log(data);
                alert(data.msg);

                if(data.status == -1)
                {
                    location.href = "/index.php?m=Mobile&c=Goods&a=goodsInfo&id="+goods_id;
                }
                else if (to_catr == 1)
                {
                    // 加入购物车后再跳转到 购物车页面
                    location.href = "/index.php?m=Mobile&c=Cart&a=cart";
                }
            }
        });
    }
}
