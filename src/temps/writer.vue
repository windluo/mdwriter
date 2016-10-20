<template>
	<div class="wrapper wrapper-md" v-el:wrappermd>
		<div class="edit-c" v-el:editc>
			<div class="md-top" v-el:mdtop>
				<div class="edit-title-c">
					<input type="text" placeholder="请输入标题" v-model="title"></input>
				</div>
				<div class="md-mid">下面开始编辑内容</div>
			</div>
			
			<div class="md-c" v-el:mdc>
				<textarea v-model="details" class="md-ta" @keyup="onmarkdown"></textarea>
			</div>
		</div>

		<div class="md-show">
			<div class="md-title">
				<p>{{title}}</p>
			</div>
			<div class="md-details">
				{{{detailsmd}}}
			</div>
		</div>
	</div>
</template>

<script>
	import showdown from "showdown";

	export default{
		data () {
			return {
				title: "无标题文章",
				details: "",
				detailsmd: ""
			}
		},

		computed: {
			converter (){
				var converter = new showdown.Converter();
				return converter;
			}
		},

		methods: {
			onmarkdown: function(){
				/*********
					***测试文本
					### 测试啦啦啦
> 1、哈哈哈哈  
> 2、啦啦啦啦  
> 3、拉克丝的积分楼上的附近开了

![啦啦啦](https://making-photos.b0.upaiyun.com/review_photos/ef0da640eb8344dae1d83215cd453aa5.jpeg!huge)

| Tables        | Are           | Cool  |
| ------------- |-------------  | ----- |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
				********************/
				this.detailsmd = this.converter.makeHtml(this.details);
			},

			setSDoptions (){
				showdown.setOption('tables', true);
			}
		},

		ready (){
			this.$nextTick(function(){
				this.$els.wrappermd.style.height = document.body.scrollHeight + "px";
				this.$els.mdc.style.height = document.body.scrollHeight - this.$els.mdtop.clientHeight + "px";
			});

			this.setSDoptions();
		}
	}
</script>