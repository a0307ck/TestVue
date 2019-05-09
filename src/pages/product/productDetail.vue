<template>
    <div class="container">
	<div class="container_wrap">
	   <div class="content">
      	   <div class="movie_top">
      	         <div class="col-md-9 movie_box">
                        <div class="grid images_3_of_2">
                        	<div class="movie_image">
                                <span class="movie_rating">5.0</span>
								
                                <img src="../images/single.jpg"   class="img-responsive" alt=""/>
                            </div>
                            <div class="movie_rate">
                            	<div class="rating_desc"><p>Your Vote :</p></div>
                            	<form action="" class="sky-form">
							     <fieldset>					
								   <section>
								     <div class="rating">
										<input type="radio" name="stars-rating" id="stars-rating-5">
										<label for="stars-rating-5"><i class="icon-star"></i></label>
										<input type="radio" name="stars-rating" id="stars-rating-4">
										<label for="stars-rating-4"><i class="icon-star"></i></label>
										<input type="radio" name="stars-rating" id="stars-rating-3">
										<label for="stars-rating-3"><i class="icon-star"></i></label>
										<input type="radio" name="stars-rating" id="stars-rating-2">
										<label for="stars-rating-2"><i class="icon-star"></i></label>
										<input type="radio" name="stars-rating" id="stars-rating-1">
										<label for="stars-rating-1"><i class="icon-star"></i></label>
									 </div>
								  </section>
							    </fieldset>
						  	   </form>
						  	   <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="desc1 span_3_of_2">
							<p class="movie_option"><strong>title: </strong>{{movieTitle}}</p>
                        	<p class="movie_option"><strong>Country: </strong><a href="#">established</a>, <a href="#">USA</a></p>
                        	<p class="movie_option"><strong>Year: </strong>2014</p>
                        	<p class="movie_option"><strong>Release date: </strong>December 12, 2014</p>
                        	<p class="movie_option"><strong>Director: </strong><a href="#">suffered </a></p>
                        	<p class="movie_option"><strong>Actors: </strong><a href="#">anything</a>, <a href="#">Lorem Ipsum</a>, <a href="#" discovered</a>, <a href="#"> Virginia</a>, <a href="#"> Virginia</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#"> Virginia</a> <a href="#">...</a></p>
                            <p class="movie_option"><strong>Age restriction: </strong>13</p> 
                            	<div class="down_btn">
									<router-link to="/book/view">
									<a class="btn1" href="#"><span> </span>在线观看</a>
									</router-link>
								</div>
                         </div>
                        <div class="clearfix"> </div>
                        <p class="m_4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
						
						<div class="desc1 span_3">
							<template v-for="(site,id) in movieData">
							<p class="movie_option">{{site.moviePlayType}}</p>
							<div class="btn-group">
								<div class="divLeft"  v-for="(st,id) in site.moviePlayNum">
									<!--
									<router-link :to="{path: '/book/view', query: {purl:st.moviePlayNumUrl,title:site.movieTitle,pt:st.moviePlayNumName}}"> 
									</router-link>
									-->
									<button type="button" class="btn btn-default" @click="tolink(st.moviePlayNumUrl,movieTitle,st.moviePlayNumName)">{{st.moviePlayNumName}}</button>
								</div>
							</div>
							</template>
						</div>
                      </div>
                      <div class="col-md-3">
                      	<div class="movie_img"><div class="grid_2">
							<img src="../images/pic6.jpg" class="img-responsive" alt="">
							<div class="caption1">
									<ul class="list_5 list_7">
							    		<li><i class="icon5"> </i><p>3,548</p></li>
							    	</ul>
							    	<i class="icon4 icon6 icon7"> </i>
							    	<p class="m_3">Guardians of the Galaxy</p>
							</div>
						    </div>
						   </div>
                      	  <div class="grid_2 col_1">
							<img src="../images/pic2.jpg" class="img-responsive" alt="">
							<div class="caption1">
								<ul class="list_3 list_7">
						    		<li><i class="icon5"> </i><p>3,548</p></li>
						    	</ul>
						    	<i class="icon4 icon7"> </i>
						    	<p class="m_3">Guardians of the Galaxy</p>
							</div>
						   </div>
						    <div class="grid_2 col_1">
							<img src="../images/pic9.jpg" class="img-responsive" alt="">
							<div class="caption1">
								<ul class="list_3 list_7">
						    		<li><i class="icon5"> </i><p>3,548</p></li>
						    	</ul>
						    	<i class="icon4 icon7"> </i>
						    	<p class="m_3">Guardians of the Galaxy</p>
							</div>
						   </div>
		               </div> 
                      <div class="clearfix"> </div>
                  </div>
           </div>
    </div>
</div>
</template>
<script>
import { extname } from 'path';
import { error } from 'util';
export default {
	name:"productDetail",
	data(){
		return{
			moviePic:"",
			movieTitle:this.$route.query.title,
			typeId:this.$route.query.tid,
			videoId:this.$route.query.vid,
			movieData:[
				{
					moviePlayType:"",
					moviePlayNum:[
						{
							moviePlayNumName:"",
							moviePlayNumUrl:""
						}
					]
				}
			]
		}
	},
	created(){
		this.loadData();
	},
	methods:{
		tolink(purl1,title1,pt1){
			let dt ={};	
			dt.purl = purl1;
			dt.pt = pt1;
			dt.title =title1;
			console.log(dt);
			this.$router.push({name:'playMovie',params:dt})
		},
		loadData(){
			var str = {'vId':this.videoId,'tid':this.typeId};
			console.log(str)
			this.$axios({
				method:'post',
            	url:'http://localhost:8088/movie/play/data/selectOne',
				headers: {
					'Content-type': 'application/json;charset=UTF-8'
				},
				data:JSON.stringify(str)
			}).then((response) =>{          //这里使用了ES6的语法
				 var body1 = response.data.data.body;
				var md = body1.split("$$");
				let data = [];
				md.forEach((element,index) => {
					let map  = {};
					if(index%2==0){
						var aab =element.indexOf("$");
						if(element.indexOf("$")>-1){
							element = element.replace("$","")
							map.moviePlayType = element;
						}else{
							map.moviePlayType = element;
						}
					}else{
						let arr = [];
						if(element.indexOf("33uuck")>-1){
							var aa = element.split("$33uuck#");
							aa.forEach(e => {
								let m = {};
								var bb = e.split("$");
								m.moviePlayNumName = bb[0];
								m.moviePlayNumUrl = bb[1];
								arr.push(m)
							});
						}else if(element.indexOf("$33uu#")>-1){
							var aa = element.split("$33uu#");
							aa.forEach((e,i) => {
								let m = {};
								var bb = e.split("$");
								m.moviePlayNumName = bb[0];
								m.moviePlayNumUrl = bb[1];
								arr.push(m);
							});
						}
						map.moviePlayNum = arr;
						
					}
					data.push(map)

				});
				this.movieData = data;
				console.log(this.movieData);

			}).catch((error) =>{
				console.log(error)       //请求失败返回的数据
			})
		}
	}
}
</script>

<style scoped>
@import "style.css";
</style>
<style>
.divLeft{
	float: left;
	margin: 0 10px;
}
</style>
