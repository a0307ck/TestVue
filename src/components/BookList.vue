<template>
  <div>
    <div class="col-sm-9">
      <div>
        <i class="glyphicon glyphicon-list-alt"></i>
        书籍列表
        </div>
      <hr>
      <div>
        <p v-if="!books.length"><strong>还没有任何书籍</strong></p>

        <div class="list-group">
          <a class="list-group-item" v-for="(book,index) in books" :href="book.shopUrl">
            <div class="row">
              <div class="col-sm-3 book-avatar">
                <img :src="book.pictureUrl" class="avatar img-responsive" />
              </div>

              <div class="col-sm-4 text-center">
                <h5 class="list-group-item-text total-time">
                  <i class="glyphicon glyphicon-book"></i>
                  {{ book.name }}
                </h5>
                <p class="label label-primary text-center">
                  <i class="glyphicon glyphicon-user"></i>
                  {{ book.teacher }}
                </p>
              </div>

              <div class="col-sm-5">
                <p>{{ book.introduction }}</p>
              </div>

            </div>
          </a>

        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
    export default {
        name : 'BookList',
        data(){
          return {
            books:[]
          }
        },
        created(){
          document.title="书籍列表"
          this.$http.post('http://localhost:8088/book/list',{
            page :1,
            size : 10
        }).then(function(ret) {
              console.log(ret.data.data.list)
              this.books = ret.data.data.list;
            })
            .then(function(err) {
              console.log(err);
            })
        },
    }
</script>
<style>
.avatar {
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .book-avatar {
    width:100%;
    background-color: #f5f5f5;
    border-top: 18px;
  }
</style>