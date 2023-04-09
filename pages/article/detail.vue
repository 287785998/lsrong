<template>
	<view class="container">
		<view class="content">
			<view class="detail">
				<view class="title">{{ info.title }}</view>
				<view class="info">
					<view class="source-date">
						<text class="source" @tap="copyText(info.titleurl)">{{ info.befrom }}</text>
						<text class="date">{{ info.newstime | formatDate }}</text>
					</view>
					<view class="read">阅读 {{ info.onclick }}</view>
				</view>
				<view class="desc"><parser :html="newstext"></parser></view>
				<view class="declaration" v-if="info.titleurl">
					本文转载至{{ info.befrom }}，
					<text @tap="copyText(info.titleurl)">点此可查看原文链接。</text>
					如有侵权，请联系我们，我们将在最短的时间内处理。
				</view>
			</view>

			<uni-popup :show="showH5Share" type="bottom">
				<view class="h5-share">
					<view class="title">分享到</view>
					<view class="share-icon">
						<view @tap="showBrowserShareTips()">
							<image class="wechat" src="/static/images/icon_wechat.png"></image>
							<text>微信</text>
						</view>
						<view @tap="showBrowserShareTips()">
							<image src="/static/images/icon_qq.png"></image>
							<text>QQ</text>
						</view>
						<view @tap="openLink('https://service.weibo.com/share/share.php?url=' + currentUrl + '&title=' + info.title + '&pic=' + info.photo_url)">
							<image src="/static/images/icon_weibo.png"></image>
							<text>新浪微博</text>
						</view>
						<view
							@tap="openLink('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey??url=' + currentUrl + '&title=' + info.title + '&pics=' + info.photo_url)"
						>
							<image src="/static/images/icon_qqkj.png"></image>
							<text>QQ空间</text>
						</view>
					</view>
					<view class="share-btn" @tap="closeH5Share">取消</view>
				</view>
			</uni-popup>
			<view @tap="closeShareTip()" class="share-maske" v-show="showShareTip">
				<view class="share-tip">
					<image class="share-tip-info" mode="aspectFit" src="/static/images/share_tip_info.png"></image>
					<image @tap="closeShareTip()" class="share-tip-btn" mode="aspectFit" src="/static/images/share_tip_btn.png"></image>
				</view>
			</view>
			<view @tap="closeBrowserShareTip()" class="share-maske" v-show="showBrowserShareTip">
				<view class="share-tip share-browser-tip">
					<image class="share-tip-info" mode="aspectFit" src="/static/images/share_tip_browser.png"></image>
					<image @tap="closeBrowserShareTip()" class="share-tip-btn" mode="aspectFit" src="/static/images/share_tip_btn.png"></image>
				</view>
			</view>
		</view>
		<pageLoading v-if="showPageLoading"></pageLoading>
	</view>
</template>

<script>
import parser from '@/components/parser/parser.vue';
import pageLoading from '@/components/loading/pageLoading.vue';
import iconfont from '@/components/iconfont/iconfont.vue';
import loading from '@/components/loading/loading.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import util from '@/common/util.js';
import {formatDate} from '@/common/date';
import wechatMP from '@/common/sdk/wechatMP.js';
// import onclick from 'http://app.lsrong.cn/e/public/ViewClick/?classid=0&id=78&addclick=1'
export default {
	components: {
		parser,
		pageLoading,
		loading,
		iconfont,
		uniPopup
	},
	data() {
		return {
			id: 0,
			info: {},
			page_index: 1,
			page_size: 10,
			hasMoreData: false,
			showPageLoading: true,
			currentUrl: '',
			shareUrl: '',
			showShareTip: false,
			showH5Share: false,
			showBrowserShareTip: false,
			newstext:'',
			onclick:0,
			click:1,
		};
	},
	onShow(e) {
		this.$initPageTitle(); //初始化页面标题
		// if (this.page_index > 1) {
		// 	this.page_index = 1;
		// 	this.getData();
		// }
        this.getData();
		/*来源是登录时更新*/
		// let source = uni.getStorageSync('source');
		// if (source == 'login') {
		// 	uni.removeStorageSync('source');
		// 	this.loadData();
		// }

		/*当前页面*/
		if (!uni.getStorageSync('source')) {
			uni.setStorageSync('source', 'article/detail');
		}
	},
	onLoad(e) {
		if (e) {
			this.id = e.id;
		}else{
			this.$alert('没有内容!');
			uni.navgitorBack();
		}
		// #ifdef H5
		this.currentUrl = encodeURIComponent(window.location.href);
		// #endif
		this.getData();
	},
	onPullDownRefresh() {
		uni.showLoading({
			title: '刷新中'
		});
		// this.info.onclick = +1
		this.getData();
	},
	onReachBottom(e) {
		// if (this.hasMoreData) {
		// 	this.getComment();
		// }
	},
	/*小程序分享*/
	onShareAppMessage() {
		return {
			path: '/pages/article/detail?id=' + this.info.id,
			success: function(e) {},
			title: this.info.title,
			imageUrl: this.info.titlepic
		};
	},
	filters: {
	  formatDate(time) {
		let datetime = time*1000
		if (datetime == null || datetime === '') {
		  return '';
		}
		let date = new Date(datetime);
		return formatDate(date, 'yyyy-MM-dd')
	  },
	},
	methods: {
		/*加载数据*/
		loadData() {
			this.getData();
		},

		/*获取文章详情*/
		getData() {
			this.$app.request({
				url: this.$api.article.detail+'?mod=news&act=detail',
				data: {
					id: this.id,
				},
				method: 'GET',
				dataType: 'json',
				success: res => {
					if (res.code == 1) {
						this.info = res.data;
						// let onclick = uni.getStorageSync(res.data.onclick);
						this.onclick = res.data.onclick;
						if(this.onclick >= 0){
							this.getOnclick(this.onclick);
						}
						this.newstext = res.data.newstext.replace(/\\/g,"");
						//this.info.newstime = data('Y-m-d' , res.data.newstime);
						uni.setNavigationBarTitle({
							title: this.info.title
						});
						this.$initPageTitle();
						this.showPageLoading = false;
						// if (res.data.comment.page > this.page_index) {
						// 	this.hasMoreData = true;
						// } else {
						// 	this.hasMoreData = false;
						// }
						// this.page_index += 1;
						this.initMPShare(); //公众号分享
					} else {
						this.$alert(res.msg);
					}
				},
				complete: res => {
					uni.stopPullDownRefresh();
					uni.hideLoading();
				}
			});
		},
		
		/*访问统计*/
		getOnclick(onclick) {
				this.$app.request({
					url: this.$api.article.onclick+'?mod=news&act=onclick',
					data: {
						id: this.id,
						onclick:parseInt(onclick)+1,
					},
					method: 'POST',
					dataType: 'json',
					success: res => {
					},
					complete: res => {}
				});

		},


		/*打开外部链接*/
		openLink(url) {
			console.log(url);
			window.location.href = url;
		},

		/*关闭H5分享*/
		closeH5Share() {
			this.showH5Share = false;
		},

		/*关闭微信分享提示*/
		closeShareTip() {
			this.showShareTip = false;
		},
		/*显示浏览器分享提示*/
		showBrowserShareTips() {
			this.showH5Share = false;
			this.showBrowserShareTip = true;
		},
		/*关闭浏览器分享提示*/
		closeBrowserShareTip() {
			this.showBrowserShareTip = false;
		},

		/*分享*/
		share() {
			// #ifdef H5
			if (util.isWechatOrQQ()) {
				this.showShareTip = true;
			} else {
				this.showH5Share = true;
			}
			// #endif

			console.log('share');

			// #ifdef MP
			uni.showShareMenu();
			// #endif
		},

		/*初始化公众号分享*/
		initMPShare() {
			// #ifdef H5
			let domain = location.href.split('/pages/')[0];
			/*分享链接*/
			let link = domain + '/pages/article/detail?id=' + this.info.id;
			if (this.$app.isWechat()) {
				/*初始化分享*/
				wechatMP.initShare(this, {
					title: this.info.title,
					desc: '',
					link: link,
					imgUrl: this.info.titlepic
				});
			} else {
				this.shareUrl = link;
			}
			// #endif
		},

		/*跳转至评论详情*/
		redirectCommentDetail(id, replyCount) {
			if (replyCount > 0) {
				uni.navigateTo({
					url: 'commentDetail?id=' + id
				});
			}
		},

		/*复制*/
		copyText(text) {
			uni.setClipboardData({
				data: text,
				success: res => {
					this.$alert('原文链接已复制', 'success');
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.detail {
	padding: 40rpx 32rpx;
	background: #fff;
	.title {
		font-size: 44rpx;
		color: #262626;
		line-height: 70rpx;
		font-weight: bold;
	}
	.info {
		margin-top: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.source-date {
			.source {
				color: #666;
			}
			.date {
				color: #999;
				margin-left: 24rpx;
			}
		}
		.read {
			color: #999;
		}
	}
	.desc {
		margin-top: 56rpx;
		overflow: hidden;
		color: #262626;
		.wxParse {
			color: #262626;
		}
	}
}
.comment {
	padding: 20rpx 32rpx 0;
	background: #fff;
	.title {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		color: #262626;
		font-weight: bold;
		border-bottom: 1rpx solid #eee;
		text {
			padding-bottom: 20rpx;
			line-height: normal;
		}
		.count {
			padding-bottom: 20rpx;
			font-size: 30rpx;
			color: #999;
			margin-left: 10rpx;
			line-height: normal;
		}
	}
	.item {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 0 20rpx;
		border-bottom: 1rpx solid #eee;
		&:last-child {
			border-bottom: 0;
		}
		.avatar {
			flex-grow: 0;
			flex-shrink: 0;
			margin-right: 20rpx;
			image {
				width: 45rpx;
				height: 45rpx;
				border-radius: 50%;
			}
		}
		.comment-info {
			flex-grow: 1;
			flex-shrink: 1;
			.nickname-like {
				display: flex;
				justify-content: space-between;
				.nickname {
					font-size: 32rpx;
					color: #444;
					font-weight: bold;
				}
				.like {
					display: flex;
					align-items: center;
					image {
						width: 32rpx;
						height: 32rpx;
						margin-right: 14rpx;
					}
					.like-count {
						color: #999;
						font-size: 30rpx;
					}
				}
			}
			.comment-desc {
				color: #444;
				font-size: 32rpx;
				line-height: 1.6;
				margin-top: 15rpx;
			}
			.reply-count {
				background: #f2f2f2;
				padding: 8rpx 20rpx;
				font-size: 30rpx;
				color: #999;
				margin: 20rpx 0 24rpx;
			}
			.date-reply {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.date {
					display: flex;
					align-items: center;
					color: #b4b4b4;
					font-size: 28rpx;
					margin-right: 20rpx;
					margin-top: 4rpx;
				}
				.reply {
					flex-grow: 0;
					flex-shrink: 0;
					font-size: 28rpx;
					color: #999;
				}
			}
		}
	}
	.no-comment {
		padding: 40rpx 0;
		color: #999;
		font-size: 30rpx;
	}
}
.comment-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 120rpx;
	background-color: #ffffff;
	box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: row;
	.input {
		flex-grow: 0;
		flex-shrink: 0;
		margin: 20rpx 10rpx 20rpx 20rpx;
		display: flex;
		align-items: center;
		background: #f2f2f2;
		width: 420rpx;
		border-radius: 40rpx 40rpx 0 40rpx;
		text {
			font-size: 32rpx;
			color: #aaa;
			margin-left: 38rpx;
		}
	}
	.operate {
		width: 100%;
		flex-grow: 1;
		flex-shrink: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-right: 10rpx;
		view,
		navigator {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 25%;
			image {
				width: 45rpx;
				height: 45rpx;
			}
		}
		.info,
		.like {
			position: relative;
			.count {
				position: absolute;
				top: -15rpx;
				right: -4rpx;
				background-image: linear-gradient(140deg, #bee7e9 9%, #409EFF 75%);
				display: flex;
				align-items: center;
				border-radius: 50rpx;
				padding: 0 10rpx;
				font-size: 22rpx;
				color: #fff;
				height: 30rpx;
				line-height: 30rpx;
			}
		}
		.share {
			display: flex;
			justify-content: space-around;
			padding: 0;
			background: transparent;
			image {
				width: 45rpx;
				height: 45rpx;
				border: 0;
			}
			&:after {
				display: none;
			}
		}
	}
}
.float-empty {
	height: 120rpx;
	width: 100%;
	display: block;
	background: #fff;
}
.add-comment {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #ffffff;
	z-index: 9999;
	.info {
		display: flex;
		flex-direction: row;
		padding: 20rpx 20rpx 20rpx 20rpx;
		.input {
			flex-grow: 1;
			flex-shrink: 1;
			display: flex;
			align-items: center;
			background: #f2f2f2;
			border-radius: 40rpx 40rpx 0 40rpx;
			padding: 20rpx 32rpx 20rpx;
			line-height: normal;
			textarea {
				//padding: 10rpx 0;
				width: 100%;
				font-size: 32rpx;
				line-height: 42rpx;
				background: #f2f2f2;
			}
		}
		.add {
			flex-grow: 0;
			flex-shrink: 0;
			width: 150rpx;
			display: flex;
			align-items: center;
			margin-left: 10rpx;
		}
		.cancel {
			position: absolute;
			right: 10rpx;
			top: 2rpx;
			/deep/.icon {
				font-size: 40rpx;
				color: #ccc;
			}
		}
	}
}
.h5-share {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #ffffff;
	border-top: 1rpx solid #ddd;
	padding-top: 20rpx;
	padding-bottom: 20rpx;
	.title {
		font-size: 30rpx;
		text-align: center;
		height: 50rpx;
	}
	.share-icon {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		view {
			flex-grow: 0;
			flex-shrink: 0;
			text-align: center;
			image {
				margin-top: 35rpx;
				width: 80rpx;
				height: 80rpx;
			}
			text {
				display: block;
			}
		}
	}
	.share-btn {
		margin: 30rpx 30rpx 15rpx;
		border: 1rpx solid #409EFF;
		background: #409EFF;
		border-radius: 15rpx;
		font-size: 32rpx;
		text-align: center;
		padding: 12rpx 0;
		color: #fff;
	}
}
.share-maske {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 99999;
	.share-tip {
		position: absolute;
		top: 100rpx;
		left: 0;
		text-align: center;
		.share-tip-info {
			height: 240rpx;
		}
		.share-tip-btn {
			margin-top: 400rpx;
			height: 82rpx;
		}
	}
	.share-browser-tip {
		top: 300rpx;
		.share-tip-info {
			height: 240rpx;
		}
		.share-tip-btn {
			margin-top: 200rpx;
		}
	}
}
.declaration {
	margin: 50rpx 0;
	font-size: 34rpx;
	color: #999;
}
</style>
