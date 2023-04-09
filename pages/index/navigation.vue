<template>
	<view class="page">
		<view class="status-bar"></view>
		<view class="top">
			<!-- #ifdef MP -->
			<!-- 页面标题 -->
			<view class="page-title" :style="'height: ' + navBarHeight"><image src="../../static/images/logo.png"></image></view>
			<!-- 搜索 -->
			<view class="search" :style="showNavFloat ? 'display:none' : ''">
				<navigator class="input" url="/pages/article/search" hover-class="none">
					<iconfont type="search"></iconfont>
					<text>输入关键词搜索</text>
				</navigator>
			</view>
			<!-- #endif -->

			<!-- 搜索 -->
			<!-- #ifdef H5 -->
			<view class="search">
				<image class="logo" mode="aspectFit" src="../../static/images/logo.png"></image>
				<navigator class="input" url="/pages/article/search" hover-class="none">
					<iconfont type="search"></iconfont>
					<text>输入关键词搜索</text>
				</navigator>
			</view>
			<!-- #endif -->

			<!-- 导航 -->
			</view>
	
		<view class="content">

	<view class='productSort copy-data'>
		<view class='aside'>
			<view class='item acea-row row-center-wrapper' @click='tap(index,0)'><text>栏目导航</text></view>
			<view class='item acea-row row-center-wrapper' :class='index==navActive?"on":""' v-for="(item,index) in category"
			 :key="index" @click='tap(index,item.classid)'><text>{{item.classname}}</text></view>
		</view>
		<view class='conter'>
			<scroll-view scroll-y="true" @scroll="scroll"
			 scroll-with-animation='true'>
				<block v-for="(item,index) in product" :key="index">
					<view class='listw' style="float: left;">
						<view class='list acea-row'>
							<!-- 根据模型ID判断连接不同列表 -->
<navigator v-if="item.modid == 1" hover-class='none' :url='"/pages/article/list?classid="+item.classid+"&classname="+item.classname' class='item acea-row row-column row-middle'>
	<view class='picture'>
		<image :src='itemn.classimg' v-if="item.classimg"></image>
		<image v-else src="../../static/images/vacancy.png"></image>
	</view>
	<view class='name line1'>{{item.classname}}</view>
</navigator>

<navigator v-else hover-class='none' :url='"/pages/article/list?classid="+item.classid+"&classname="+item.classname' class='item acea-row row-column row-middle'>
	<view class='picture'>
		<image :src='itemn.classimg' v-if="item.classimg"></image>
		<image v-else src="../../static/images/vacancy.png"></image>
	</view>
	<view class='name line1'>{{item.classname}}</view>
</navigator>

						</view>
					</view>
				</block>
				<view :style='"height:"+(height-300)+"rpx;"' v-if="number<15"></view>
			</scroll-view>
		</view>
		<view class="uni-p-b-98"></view>
	</view>


		</view>
		<pageLoading v-if="showPageLoading"></pageLoading>
	</view>
</template>

<script>
import pageLoading from '@/components/loading/pageLoading.vue';
import iconfont from '@/components/iconfont/iconfont.vue';
import util from '@/common/util.js';
export default {
	components: {
		pageLoading,
		iconfont
	},
	data() {
		return {
			classid: 2, //新闻中心ID2
			category_index: 0,
			scroll_classid: 'scroll_classid_0',
			currentSliderIndex: 0,
			category: [],
			product:[],
			navActive: 0,
			number: "",
			height: 0,
			hightArr: [],
			toView: "",
			tabbarH: 0,
			showMenu: false,
			slider: [],
			list: [],
			showNoData: false,
			showPageLoading: true,
			showNavFloat: false,
			navBarHeight: '',
			where: {
				mod: 'column',
				act: 'navigation',
				classid:0,
			},
		};
	},
	onShow() {
		this.$initPageTitle(); //初始化页面标题

		/*导航栏高度*/
		if (this.navBarHeight == '') {
			this.navBarHeight = this.$app.getNaviBarHeight();
		}
		// if(this.where.classid){
		// 	this.navActive = index;
		// }else{
		// 	this.where.classid = 0;
		// 	this.navActive = -1;
		// }
	},
	onShareAppMessage() {
		return {
			path: '/pages/article/index',
			success: function(e) {},
			title: '里奥模板'
		};
	},
	onLoad(e) {
		this.getCategory();
	},
	onPullDownRefresh() {
		uni.showLoading({
			title: '刷新中'
		});
		this.loadData();
	},
	methods: {
		infoScroll: function() {
			let that = this;
			let len = that.category.length;
			this.number = that.category.length;
			//设置商品列表高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = (res.windowHeight) * (750 / res.windowWidth) - 98;
				},
			});
			let height = 0;
			let hightArr = [];
			for (let i = 0; i < len; i++) {
				//获取元素所在位置
				let query = uni.createSelectorQuery().in(this);
				let idView = "#b" + i;
				query.select(idView).boundingClientRect();
				query.exec(function(res) {
					// console.log(res);
					let top = res[0].top;
					hightArr.push(top);
					that.hightArr = hightArr
				});
			};
		},
		/*获取子类别数据*/
		getCategory() {
			this.$app.request({
				url: this.$api.article.category+'?mod=column&act=navigation',
				data: {
					classid: 0,
				},
				method: 'GET',
				dataType: 'json',
				success: res => {
					if (res.code == 1) {
						this.category = res.list;
						this.showPageLoading = false;
					} else {
						this.$alert(res.msg);
					}
				},
				complete: res => {}
			});
		},
		tap: function(index, id) {
			this.toView = id;
			if(index==0){
				this.where.classid = 2;
				this.navActive = 0;
			}else{
				this.where.classid = id;
				this.navActive = index;
			}
			let that = this;
			this.$app.request({
				url: this.$api.article.category+'?mod=column&act=navigation',
				data: {
					classid: that.where.classid,
				},
				method: 'GET',
				dataType: 'json',
				success: res => {
					if (res.code == 1) {
						this.product = res.list;
					} else {
						this.$alert(res.msg);
					}
				},
				complete: res => {}
			});
		},
		/*初始化滚动*/
		initScroller(scroller) {
			this.scroller = scroller;
		},

		/*刷新数据*/
		refreshData() {
			uni.showLoading({
				title: '刷新中'
			});
			this.scroller.resetUpScroll();
		},

		/*加载数据*/
		loadData() {
			this.slider = [];
			this.list = [];
			this.currentSliderIndex = 0;
			this.scroller.resetUpScroll();
		},


		scroll: function(e) {
			let scrollTop = e.detail.scrollTop;
			let scrollArr = this.hightArr;
			for (let i = 0; i < scrollArr.length; i++) {
				if (scrollTop >= 0 && scrollTop < scrollArr[1] - scrollArr[0]) {
					this.navActive = 0
				} else if (scrollTop >= scrollArr[i] - scrollArr[0] && scrollTop < scrollArr[i + 1] - scrollArr[0]) {
					this.navActive = i
				} else if (scrollTop >= scrollArr[scrollArr.length - 1] - scrollArr[0]) {
					this.navActive = scrollArr.length - 1
				}
			}
		},

	}
};
</script>

<style scoped lang="scss">
page {
	height: 100%;
}
.page {
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
}
.content {
	flex: 1;
	width: 100%;
	height: 100rpx;
}

/*头部*/
.top {
	/*页面标题*/
	.page-title {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90rpx;
		text-align: center;
		border-bottom: 1rpx solid #efefef;
		z-index: 9999;
		line-height: 1;
		image {
			height: 50rpx;
			width: 280rpx;
			margin-left: -35rpx;
		}
	}

	/*搜索*/
	.search {
		padding: 24rpx 24rpx 0 24rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			height: 60rpx;
			width: 474rpx;
			margin-right: 30rpx;
		}
		.input {
			margin-left: 0 !important;
			display: flex;
			align-items: center;
			height: 70rpx;
			width: 100%;
			background: #f5f5f5;
			border-radius: 34rpx;
			/deep/ .icon {
				margin-left: 28rpx;
				color: #aaaaaa;
				font-size: 32rpx;
				line-height: 1;
			}
			text {
				margin-left: 14rpx;
				font-size: 30rpx;
				color: #aaaaaa;
				line-height: 1;
			}
		}
		.user{
			display: flex;
			align-items: center;
			/deep/ .icon {
				margin-left: 24rpx;
				color: #aaaaaa;
				font-size: 38rpx;
				margin-top: 4rpx;
			}
			image{
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				margin-left: 25rpx;
			}
		}
	}


}




/*浮动navbar*/
.floatbar {
	//border-bottom: 1rpx solid #e8e8e8;
	box-shadow: 0px 2px 2px -2px #e8e8e8;
	padding-bottom: 12rpx;
}

/deep/ .no-data {
	margin-top: 200rpx;
}
</style>
<style lang="scss">
	.nav {
		background-color: #fff;
		padding-bottom: 20rpx;
		height: 130rpx;;

		.item {
			margin-top: 30rpx;
			width: 25%;
			text-align: center;
			font-size: 24rpx;
			float: left;

			.pictrue {
				width: 82rpx;
				height: 82rpx;
				margin: 0 auto;

				&.default {
					background-color: #ccc;
					border-radius: 50%;
					text-align: center;
					line-height: 90rpx;

					.iconfont {
						font-size: 40rpx;
					}
				}

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.menu-txt {
				margin-top: 15rpx;
			}

			&.four {
				width: 25%;

				.pictrue {
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
	}
</style>


<style scoped lang="scss">
	.productSort{
		border-top: 1rpx solid #f5f5f5;
		margin-top: 20rpx;
	}
	.productSort .aside {
		position: fixed;
		width: 180rpx;
		left: 0;
		// top:0;
		background-color: #f7f7f7;
		overflow-y: auto;
		overflow-x: hidden;
		height: auto;
		// margin-top: 96rpx;
		text-align: center;
	}

	.productSort .aside .item {
		height: 100rpx;
		line-height: 100rpx;
		width: 100%;
		font-size: 26rpx;
		color: #424242;
	}

	.productSort .aside .item.on {
		background-color: #fff;
		border-left: 4rpx solid #409EFF;
		width: 100%;
		text-align: center;
		color: #409EFF;
		font-weight: bold;
	}

	.productSort .conter {
		margin: 20rpx 0 0 180rpx;
		padding: 0 14rpx;
		background-color: #fff;
	}

	.productSort .conter .listw {
		padding-top: 20rpx;
		text-align: center;
	}

	.productSort .conter .listw .title {
		height: 90rpx;
	}

	.productSort .conter .listw .title .line {
		width: 100rpx;
		height: 2rpx;
		background-color: #f0f0f0;
	}

	.productSort .conter .listw .title .name {
		font-size: 28rpx;
		color: #333;
		margin: 0 30rpx;
		font-weight: bold;
	}

	.productSort .conter .list {
		flex-wrap: wrap;
	}

	.productSort .conter .list .item {
		width: 177rpx;
		text-align: center;
		margin-bottom: 26rpx;
	}

	.productSort .conter .list .item .picture {
		width: 120rpx;
		height: 120rpx;
		margin-left: 28rpx;
		border-radius: 50%;
	}

	.productSort .conter .list .item .picture image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.productSort .conter .list .item .name {
		font-size: 24rpx;
		color: #333;
		height: 56rpx;
		line-height: 56rpx;
		width: 100%;
		text-align: center;
	}
</style>