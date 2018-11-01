<template>
    <div class="main container">
        <div class="site-header">
            <div class="head-logo">
                <img src="./../img/logo.png" />
            </div>
            <div class="head-nav">
                <ul class="clear">
                    <li class="hand_hover" v-for="n in nav" v-bind:key="n.id">{{n.name}}</li>
                </ul>
            </div>
            <div class="head-search">
                <input>
                <i class="icon iconfont icon-fangdajing"></i>
            </div>
        </div>
        <div class="site-nav">
            <div class="head-cat">
                <ul>
                    <li v-for="c in cat" :key="c.id" class="flex_between">
                        {{c.name}}
                        <i class="icon iconfont icon-dayuhao"></i>
                    </li>
                </ul>
            </div>
            <div class="head-swiper">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide hand_hover">
                            <img src="./../img/xmad_1540622566963_Dhkyv.jpg" />
                        </div>
                        <div class="swiper-slide hand_hover">
                            <img src="./../img/xmad_15402884393036_KqnCH.jpg" />
                        </div>
                        <div class="swiper-slide hand_hover">
                            <img src="./../img/xmad_15404716972142_jGJnP.jpg" />
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
        <div class="head-hero-sub clearfix">
            <div class="span4 fl">
                <ul class="home-channel-list clearfix">
                    <li class="fl" v-for='h in channel' :key="h.id">
                        <i :class="h.icon"></i>
                        <p>{{h.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="span16 fl home-promo-list-box">
                <ul class="home-promo-list  flex_between">
                    <li class="hand_hover"><img src="./../img/xmad_1539675355282_XfkaT.jpg"></li>
                    <li class="hand_hover"><img src="./../img/xmad_15350224111785_ASnBL.jpg"></li>
                    <li class="hand_hover"> <img src="./../img/xmad_15381015124677_QcEGp.jpg"></li>
                </ul>
            </div>
        </div>
        <div class="plain-box">
            <div class="box-hd">
                <h2>小米闪购</h2>
                <div class="more"></div>
            </div>
            <div class="box-bd clearfix">
                <div class="first-box fl">
                    <p class="session">10:00场</p>
                    <div class="flashpurchase"><img src="./../img/flashpurchase.png"></div>
                    <p class="text">距离结束还有</p>
                    <p class="time">
                        <span class="time-box">10</span> :
                        <span class="time-box">12</span> :
                        <span class="time-box">32</span>
                    </p>
                </div>
                <div class="other-box ">
                    <ul class="clearfix">
                        <li v-for="i in item" :key="i.id" class="other-one fl" :class="`rainbow-item-${i.id}`">
                            <div class="img"><img :src="`./../${i.img}`"></div>
                            <p class="name">{{i.name}}</p>
                            <p class="des">{{i.des}}</p>
                            <p class="price"><span>{{i.promPrice}}</span><span>{{i.price}}</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="img-box">
            <img src="./../img/xmad_15408661432025_tiVWv.jpg">
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
    name: "index",
    data() {
        return {
            nav: [
                { id: 0, name: "小米手机" },
                { id: 1, name: "红米" },
                { id: 2, name: "电视" },
                { id: 3, name: "笔记本" },
                { id: 4, name: "空调" },
                { id: 5, name: "新品" },
                { id: 6, name: "路由器" },
                { id: 7, name: "智能硬件" },
                { id: 8, name: "服务" },
                { id: 9, name: "社区" }
            ],
            cat: [
                { id: 0, name: "手机 电话卡" },
                { id: 1, name: "电视 盒子" },
                { id: 2, name: "笔记本 平板" },
                { id: 3, name: "家电 插线板" },
                { id: 4, name: "出行 穿戴" },
                { id: 5, name: "智能 路由器" },
                { id: 6, name: "电源 配件" },
                { id: 7, name: "健康 儿童" },
                { id: 8, name: "耳机 音箱" },
                { id: 9, name: "生活 箱包" }
            ],
            channel: [
                { id: 0, name: "选购手机", icon: "icon iconfont icon-liwu" },
                { id: 1, name: "企业团购", icon: "icon iconfont icon-liwu" },
                { id: 2, name: "F码通道", icon: "icon iconfont icon-liwu" },
                { id: 3, name: "米粉卡", icon: "icon iconfont icon-liwu" },
                { id: 4, name: "以旧换新", icon: "icon iconfont icon-liwu" },
                { id: 5, name: "话费充值", icon: "icon iconfont icon-liwu" }
            ],
            item: [
                {
                    id: 1,
                    name: "红米6 Pro 4GB+32GB",
                    des: "高颜值大电量/异形全面屏/后置1200万 AI双摄",
                    promPrice: "929",
                    price: "1199",
                    img: "feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 2,
                    name: "小米8 SE 4GB+64GB 亮红",
                    des: "三星AMOLED全面屏/骁龙710处理器/AI 超感光双摄",
                    promPrice: "1549",
                    price: "1799",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 3,
                    name: "红米6 4GB+64GB ",
                    des: "小屏高性能双摄/12nm八核处理器/AI 人脸解锁",
                    promPrice: "799",
                    price: "999",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 4,
                    name: "红米6 Pro 4GB+32GB",
                    des: "高颜值大电量/异形全面屏/后置1200万 AI双摄",
                    promPrice: "929",
                    price: "1199",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 5,
                    name: "红米6 Pro 4GB+32GB",
                    des: "高颜值大电量/异形全面屏/后置1200万 AI双摄",
                    promPrice: "929",
                    price: "1199",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 6,
                    name: "红米6 Pro 4GB+32GB",
                    des: "高颜值大电量/异形全面屏/后置1200万 AI双摄",
                    promPrice: "929",
                    price: "1199",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 7,
                    name: "红米6 Pro 4GB+32GB",
                    des: "高颜值大电量/异形全面屏/后置1200万 AI双摄",
                    promPrice: "929",
                    price: "1199",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 8,
                    name: "红米6 Pro 4GB+32GB",
                    des: "高颜值大电量/异形全面屏/后置1200万 AI双摄",
                    promPrice: "929",
                    price: "1199",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                },
                {
                    id: 9,
                    name: "红米6 Pro 4GB+32GB",
                    des: "高颜值大电量/异形全面屏/后置1200万 AI双摄",
                    promPrice: "929",
                    price: "1199",
                    img: "img/feafc682a3043b4c81a40b3f18430d19.jpg"
                }
            ]
        };
    },
    mounted: function() {
        var swiper = new Swiper(".swiper-container", {
            width: 1266,
            height: 460,
            slidesPerView: 1,
            speed: 1000,
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true,
            prevButton: ".swiper-button-prev",
            nextButton: ".swiper-button-next"
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main {
    .site-header {
        height: 100px;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
        .head-logo {
            width: 56px;
            height: 56px;
            img {
                height: 100%;
            }
        }
        .head-nav {
            font-size: 16px;
            ul {
                margin: 0 0 0 98px;
                li {
                    float: left;
                    margin: 0 10px;
                }
            }
        }
        .head-search {
            font-size: 0;
            input {
                width: 221px;
                height: 48px;
                border: 1px solid #e0e0e0;
                padding: 0 10px;
                line-height: 48px;
                font-size: 14px;
            }
            i {
                width: 52px;
                height: 48px;
                display: inline-block;
                vertical-align: top;
                border: 1px solid #e0e0e0;
                text-align: center;
                line-height: 48px;
                font-size: 19px;
                border-left: 0;
            }
        }
    }

    .site-nav {
        display: flex;
        position: relative;
        .head-cat {
            width: 234px;
            height: 420px;
            padding: 20px 0;
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            li {
                height: 42px;
                line-height: 42px;
                color: #ffffff;
                text-align: left;
                padding-left: 30px;
                padding-right: 20px;
            }
            li:hover {
                background-color: #ff6700;
                cursor: pointer;
            }
        }
        .head-swiper {
            width: 1226px;
            height: 460px;
            .swiper-container {
                height: 100%;
            }
            .swiper-button-prev {
                left: 240px;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .head-hero-sub {
        margin-top: 14px;
        margin-bottom: 26px;
        .home-channel-list {
            margin: 0;
            padding: 3px;
            list-style-type: none;
            font-size: 12px;
            text-align: center;
            background: #5f5750;
            li {
                width: 70px;
                height: 70px;
                padding: 0 3px;
                color: rgba(255, 255, 255, 0.7);
                padding-top: 12px;
                position: relative;
            }
            li:after {
                top: 6px;
                left: 0;
                width: 1px;
                height: 70px;
            }
            li:before {
                top: -1px;
                left: 6px;
                width: 64px;
                height: 1px;
            }
            li:before,
            li:after {
                position: absolute;
                content: "";
                background: #665e57;
            }
            i {
                font-size: 24px;
            }
            p {
                margin-top: -2px;
            }
        }
        .home-promo-list-box {
            margin-left: 14px;
            li {
                width: 316px;
                height: 170px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .plain-box {
        .box-hd h2 {
            margin: 0;
            font-size: 22px;
            font-weight: 200;
            line-height: 58px;
            color: #333;
            text-align: left;
        }
        .box-bd {
            padding-bottom: 40px;
            .first-box {
                width: 234px;
                height: 300px;
                border-top: 1px solid #e53935;
                padding-top: 39px;
                margin-right: 14px;
                .session {
                    font-size: 21px;
                    color: #ef3a3b;
                    padding-top: 15px;
                }
                .flashpurchase {
                    margin: 25px 0;
                }
                .text {
                    color: rgba(0, 0, 0, 0.54);
                    font-size: 15px;
                }
                .time {
                    font-size: 20px;
                    font-weight: bold;
                    color: #605751;
                    margin-top: 28px;
                    .time-box {
                        width: 46px;
                        height: 46px;
                        line-height: 46px;
                        color: #ffffff;
                        font-size: 24px;
                        display: inline-block;
                        background-color: #605751;
                        text-align: center;
                    }
                }
            }
            .other-box {
                height: 340px;
                overflow: hidden;
                li {
                    width: 234px;
                    height: 300px;
                    padding-top: 39px;
                    border-top-width: 1px;
                    border-top-style: solid;
                    margin-right: 14px;
                    .img{
                        width: 160px;
                        height: 160px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
    .img-box {
        height: 120px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
