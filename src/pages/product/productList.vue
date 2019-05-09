
<template>
 <div class="container-fluid">
	<div class="row-fluid">
		<div class="span12">
			<ul class="thumbnails">
                <template v-for="(site,id) in movieDetailList">
                    <li class="span4" :key="id">
                        <div class="thumbnail">
                            <img alt="300x200" :src="site.vPic" />
                            <div class="caption">
                                <h3>
                                    {{site.vName}}
                                </h3>
                                <p>
                                    <a class="btn btn-primary" href="#">浏览</a> <a class="btn" href="#">分享</a>
                                </p>
                            </div>
                        </div>
                    </li>
                </template>
			</ul>
		</div>
	</div>
</div>
</template>
<script>
export default {
    name:"productList",
    data(){
        return{
            "moviePicUrl":require("../images/pic2.jpg"),
            "movieDetailList":[]
        }
    },
    created(){
        this.$axios({
            method:'post',
            url:'http://localhost:8088/movie/data/list',
            data:this.qs.stringify({    //这里是发送给后台的数据
                    page:1,
                    size:10,
            })
        }).then((response) =>{          //这里使用了ES6的语法
            console.log(response)       //请求成功返回的数据
            this.movieDetailList = response.data.data.list;
        }).catch((error) =>{
            console.log(error)       //请求失败返回的数据
        })
    },
    mounted(){
    },
    methods:{
    }
}
</script>
<style scoped>
 /*@import "http://www.bootcss.com/p/layoutit/css/bootstrap-combined.min.css"; */
</style>
