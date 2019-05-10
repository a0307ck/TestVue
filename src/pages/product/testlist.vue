<template>
<div data-v-b7b8db26="" data-v-567665ec="" class="content-list work-list">
    <ul data-v-b7b8db26="">
        <li data-v-b7b8db26="" class="li-banner">
            <div data-v-b7b8db26="" class="banner-item">
                <div data-v-b7b8db26="" class="cover">
                    <a data-v-b7b8db26="" title="原创空间签约作者专访——Vol.4 古风创作插画师随随" href="https://ycg.qq.com/detail/338790" 
                    target="_blank" class="banner-pic" lazy-progressive="true" lazy="loaded" 
                    style="background-image: url(&quot;https://ycg-1251509803.image.myqcloud.com/xyz/zMr7e6BmO.jpg?imageView2/2/w/748&quot;);">
                    </a>
                </div>
            </div>
        </li>
        <template v-for="(site,id2) in movieDetailList">
                <li data-v-b7b8db26="" class="li-work" :key="id2" >
                    <div data-v-b7b8db26="" class="item" @click="tolink(site.movieTid,site.movieVid,site.movieTitle)">
                        <div data-v-b7b8db26="" class="cover">
                        <a data-v-b7b8db26="" href="#" class="pic" lazy-progressive="true" lazy="loaded" :style="site.movieUrl">
                        </a><!----><!---->
                        </div>
                        <div data-v-b7b8db26="" class="info">
                            <a data-v-b7b8db26="" href="#" class="title"> {{site.movieTitle}}</a>
                            <div data-v-b7b8db26="" class="data">
                                <span data-v-b7b8db26="" class="likes-num">
                                    <div data-v-b7b8db26="" class="VueStar">
                                        <div class="VueStar__ground VueStar__black">
                                            <div class="VueStar__icon">
                                                <i data-v-b7b8db26="" class="icon-follow-star"></i>
                                                <span data-v-b7b8db26="" class="favor-nums">45</span>
                                            </div>
                                            <div class="VueStar__decoration"></div>
                                        </div>
                                    </div>
                                </span>
                                <span data-v-b7b8db26="" class="scan-num">
                                    <i data-v-b7b8db26="" class="icon-scan_1"></i>
                                    <span data-v-b7b8db26="">822</span>
                                </span>
                            </div>
                            <a data-v-b7b8db26="" href="#" class="author">
                                <span data-v-b7b8db26="" class="headpor" lazy-progressive="true" lazy="loaded" style="background-image: url(&quot;https://ycg-1251509803.image.myqcloud.com/upload/cover/cover-7145ad19-e0ea-4985-988b-2228ea766549.png?imageView2/2/w/16&quot;);">
                                </span>
                                <span data-v-b7b8db26="" class="nickname">UID 上海</span>
                            </a>
                        </div>
                    </div>
                </li>
        </template>
    </ul>
</div>
</template>

<script>
export default {
    name:"test",
    data(){
        return{
             "movieDetailList":[
                {
                    movieTitle:"",
                    movieUrl:"",
                    movieTid:"",
                    movieVid:"",
                    moviePic:""
                }
             ]

        }
    },
    created(){
        this.$axios({
            method:'post',
            url:'http://localhost:8088/movie/data/list',
            data:this.qs.stringify({    //这里是发送给后台的数据
                    page:1,
                    size:17,
            })
        }).then((response) =>{          //这里使用了ES6的语法
            //console.log(response)       //请求成功返回的数据
            //this.movieDetailList = response.data.data.list;
            let dateList = response.data.data.list;

            dateList.forEach(data => {
                //tid:site.tid,vid:site.vId
                let mp ={};
                mp.movieTitle = data.vName;
                mp.movieTid = data.tid;
                mp.movieVid = data.vId;
                mp.moviePic = data.vPic;
                mp.movieUrl = "background-image: url("+data.vPic+")";
                this.movieDetailList.push(mp);
            });
            console.log(this.movieDetailList)
        }).catch((error) =>{
            console.log(error)       //请求失败返回的数据
        })
    },
    methods:{
        tolink(tid,vid,title){
			let dt ={};	
			dt.tid = tid;
			dt.vid = vid;
			dt.title =title;
			console.log(dt);
			this.$router.push({name:'productDetail',params:dt})
		}
    }
}
</script>

<style scoped>
@import "./js/intlTelInput.css";
@import "./js/common.6027ad05220f3941fa0f.css";
</style>
<style>
.banner-pic {
    display:block;
    width:100%;
    height:250px;
    background-repeat: no-repeat;
    background-position:50% 50%;
}
.pic {
    display:block;
    width:100%;
    height:150px;
    background-repeat: no-repeat;
    background-position:50% 50%;
}
.work-list ul li.li-banner[data-v-b7b8db26] {
    width: 60%;
    display: -ms-flexbox;
    display: flex;
}
.work-list ul li[data-v-b7b8db26] {
    width: 20%;
    display: inline-block;
    vertical-align: top;
}

ul {
    list-style: none;
}

a, body, button, fieldset, form, h1, h2, h3, h4, h5, h6, html, input, legend, li, ol, p, ul {
    margin: 0;
    padding: 0;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
</style>

