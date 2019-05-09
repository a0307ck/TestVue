
<template>
    <div class="container-fluid">
	<div class="row-fluid">
		<div class="span12">
			<p>
				正在播放
			</p>
			<div class="media well">
				<div class="media-body">
					<h4 class="media-heading">
						{{title}}-{{pt}}
					</h4>
                    <iframe width="100%" height="540" :src="purl" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="true">
                    </iframe>
				</div>
			</div> 
		</div>
	</div>
</div>
</template>

<script>
export default {
    name:"playMovie",
    data(){
        return{
            title:this.$route.params.title,
            pt:this.$route.params.pt,
            purl:this.$route.params.purl
        }
    },
    created(){
    },
    mounted:function () {
        
    },
    methods:{

    }
}
</script>

