<template>
    <div class="container">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="mc">
             <div class=" cols">
                <router-link to="/book/detail" >
                    <img width="180px"  height="300px" src="http://imao123.com/api/imao/20181109172830qM35s.jpg">
                </router-link>
                </div>
                <div class="spans">&nbsp;</div>
                <div class="cols">
                    <img width="180px" height="300px" src="http://imao123.com/api/imao/20181109172830qM35s.jpg">
                </div>
                <div class="spans">&nbsp;</div>
                <div class="cols">
                    <img width="180px" height="300px" src="http://imao123.com/api/imao/20181109172830qM35s.jpg">
                </div>
                <div class="spans">&nbsp;</div>
                <div class="cols">
                    <img width="180px" height="300px" src="http://imao123.com/api/imao/20181109172830qM35s.jpg">
                </div>
                <div class="spans">&nbsp;</div>
                <div class="cols">
                    <img width="180px" height="300px" src="http://imao123.com/api/imao/20181109172830qM35s.jpg">
                </div>
        </div>
       
    </div>
</template>
<script>
import { METHODS } from 'http';
export default {
  name:'productDetail',
  data(){
    return{

    }
  },
  methods:{
    toDetail(){
      alert(11);
      this.$router.push({ path: this.redirect || '/home' })
    }
  }
  
}
</script>

<style>
.spans{
  float: left;
  width: 6%;
}
.mc{
  margin: 0 auto;
  width: 100%;
}
.cols{
  float: left;
  width: 15%;
}
.row-span {
 margin: 0,10px;
}
.col-span {
    margin: 0,10px;
    width:200px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
