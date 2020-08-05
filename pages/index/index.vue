<template>
	<view class="content">
		<view class="time-box">
			<view class="time-title">
				昨日：{{currentDate}}影视排行
			</view>
		</view>
		<view v-if="bottomNavIndex === 1" class="header-nav">
			<view :class="[topNavIndex === 1 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(1)>
				<text class="header-nav__txt">院线</text>
			</view>
			<view :class="[topNavIndex === 2 ? 'active' : '', 'header-nav__item']" class="header-nav__item" @click=handleTopNav(2)>
				<text class="header-nav__txt">网络</text>
			</view>
		</view>
		<view v-else-if="bottomNavIndex === 2" class="header-nav">
			<view :class="[topNavIndex === 1 ? 'active' : '', 'header-nav__item',  topNavIndex === 3 ? 'bd-right' : '']" @click=handleTopNav(1)>
				<text class="header-nav__txt">全部</text>
			</view>
			<view :class="[topNavIndex === 2 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(2)>
				<text class="header-nav__txt">网剧</text>
			</view>
			<view :class="[topNavIndex === 3 ? 'active' : '', 'header-nav__item', topNavIndex === 1 ? 'bd-left' : '']" class="header-nav__item" @click=handleTopNav(3)>
				<text class="header-nav__txt">电视剧</text>
			</view>
		</view>
		<view v-else-if="bottomNavIndex === 3" class="header-nav">
			<view :class="[topNavIndex === 1 ? 'active' : '', 'header-nav__item',  topNavIndex === 3 ? 'bd-right' : '']" @click=handleTopNav(1)>
				<text class="header-nav__txt">全部</text>
			</view>
			<view :class="[topNavIndex === 2 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(2)>
				<text class="header-nav__txt">网络综艺</text>
			</view>
			<view :class="[topNavIndex === 3 ? 'active' : '', 'header-nav__item', topNavIndex === 1 ? 'bd-left' : '']" class="header-nav__item" @click=handleTopNav(3)>
				<text class="header-nav__txt">电视综艺</text>
			</view>
		</view>
		<view class="media-list">
<!-- 			<view class="media-item__header">
				<text class="media-item media-item__rank">排行</text>
				<text class="media-item media-item__name">剧名</text>
				<text class="media-item media-item__score">单日播放</text>
				<text class="media-item media-item__hot">总播放</text>
			</view> -->
			<view class="media-item__out media-item__body" @click="goDetail(item.showId)" v-for="(item,index) in list" :key="index">
				<text class="media-item media-item__rank">{{item.rank}}</text>
				<view class="media-item media-item__name">
					<text class="media-item__name-strong">
						{{item.name}}
					</text>
					<text class="media-item__on-day">
						上映{{item.days}}天
					</text>
				</view>
				<view class="media-item__play">
					<text class="media-item media-item__score" v-if="item.attachData">{{setPlayCount(item.attachData)}}</text>
					<text class="media-item media-item__score" v-else>统计中</text>
					<text class="media-item__bottom-tip">
						单日播放
					</text>
				</view>
				<view class="media-item__play media-item__total-play">
					<text class="media-item media-item__score">{{setPlayCount(item.totalPlayCount)}}</text>
					<text class="media-item__bottom-tip">
						总播放
					</text>
				</view>
			</view>
		</view>
		<view class="bottom-nav">
			<view :class="['bottom-nav__item', bottomNavIndex === 2 ? 'active' : '']" @click=handleBottomNav(2)>
				<view class="bottom-nav__icon"></view>
				<text class="bottom-nav__txt">电视剧</text>
			</view>
			<view :class="['bottom-nav__item', bottomNavIndex === 1 ? 'active' : '']" @click=handleBottomNav(1)>
				<view class="bottom-nav__icon"></view>
				<text class="bottom-nav__txt">电影</text>
			</view>
			<view :class="['bottom-nav__item', bottomNavIndex === 3 ? 'active' : '']" @click=handleBottomNav(3)>
				<view class="bottom-nav__icon"></view>
				<text class="bottom-nav__txt">综艺</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				src: '',
				topNavIndex: 1,
				bottomNavIndex: 2,
				typeList: {
					1: 'MOVIE', // 院线电影
					2: 'NETWORK_MOVIE', // 网络电影
					3: 'DRAMA', // 全部电视剧
					4: 'NETWORK_DRAMA', // 网剧
					5: 'TV_DRAMA', // tv电视剧
					6: 'VARIETY', // 全部综艺
					7: 'NETWORK_VARIETY', // 网络综艺
					8: 'TV_VARIETY', // 电视综艺
				},
				currentDate: '',
				list:[]
			}
		},
		onLoad() {
			let date = new Date();
			date.setDate(date.getDate() - 1)
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = date.getDate() + ' ';
			this.currentDate = Y+M+D
			// 有缓存的话
			if(this.getStorage('currentDate') && this.getStorage('currentDate') == this.currentDate) {
				
			} else { // 过期数据清缓存
				this.clearAllStorage()
				this.setStorage('currentDate', this.currentDate)
			}
			this.getListByType(3)
		},
		methods: {
			goDetail(id){
				uni.navigateTo({                
				  url:'/pages/detail/index?id=' + id
				})
			},
			setPlayCount(num) {
				if (num == 0) {
					return '统计中'
				} else if (parseFloat(num) >= 100000000) {
					return parseFloat(num/100000000).toFixed(2) + '亿'
				} else {
					return parseFloat(num/10000).toFixed(2) + '万'
				}
			},
			getStorage(key) {
				let _value = uni.getStorageSync(key);
				return _value
			},
			setStorage(key,data) {
				uni.setStorageSync(key, data);
			},
			clearAllStorage() {
				uni.clearStorage();
			},
			handleTopNav(index) {
				this.topNavIndex = index;
				this.handlerClickData();
			},
			handleBottomNav(index) {
				this.topNavIndex = 1;
				this.bottomNavIndex = index;
				this.handlerClickData();
				uni.pageScrollTo({
				scrollTop: 0,
				duration: 200
				});
			},
			handlerClickData() {
				let _type = 0;
				if (this.bottomNavIndex === 1) {
					if (this.topNavIndex === 1) {
						_type = 1
					} else if (this.topNavIndex === 2){
						_type = 2
					}
				}
				if (this.bottomNavIndex === 2) {
					if (this.topNavIndex === 1) {
						_type = 3
					} else if (this.topNavIndex === 2){
						_type = 4
					} else if (this.topNavIndex === 3){
						_type = 5
					}
				}
				if (this.bottomNavIndex === 3) {
					if (this.topNavIndex === 1) {
						_type = 6
					} else if (this.topNavIndex === 2){
						_type = 7
					} else if (this.topNavIndex === 3){
						_type = 8
					}
				}
				this.getListByType(_type)
			},
			getListByType(type){
				this.getList({
					category: this.typeList[type.toString()],
					date: this.currentDate
				})
			},
			getList(parms) {
				let newParms = {
					type: 'DAILY',
					attach: 'playCount',
					orderTitle: 'playCount',
					platformId: 0,
					...parms
				}
				if (parms.category == 'NETWORK_DRAMA' || parms.category == 'DRAMA' || parms.category == 'TV_DRAMA'){
					newParms.orderTitle = 'gdi'
				}
				let _storage = this.getStorage(parms.category)
				if(_storage && _storage.length > 0) {
					this.list = _storage
				} else {
					uni.request({
						url: 'https://d.guduodata.com/m/v3/billboard/list',
						data: newParms,
						success: (res) => {
							this.list = res.data.data
							this.setStorage(parms.category, res.data.data)
						}
					});
				}
			},
			onShareAppMessage: function(e) {
				let title = `点击查看${this.currentDate}影视剧排行`
				return {
					title: title,
					path: 'pages/index/index'
				}
			}
		},
	}
</script>

<style lang="less">
	.header-nav{
		display: flex;
		flex-direction: row;
		width: 80%;
		margin: 50rpx auto 65rpx auto;
		border-radius: 15rpx;
		&__item{
			flex: 1;
			text-align: center;
			font-size: 30rpx;
			position: relative;
			line-height: 60rpx;
			border: 1rpx solid #d9d9d9;
			border-left: none;
			border-right: none;
			&:nth-last-child(1){
				border-right: 1rpx solid #d9d9d9;
				border-radius: 0rpx 15rpx 15rpx 0;
			}
			&:nth-child(1){
				border-left: 1rpx solid #d9d9d9;
				border-radius: 15rpx 0 0 15rpx;
			}
			// &:nth-child(2){
			// 	border-right: 1rpx solid #d9d9d9;
			// 	border-left: 1rpx solid #d9d9d9;
			// }
			// border-right: none;
			&__link{
				width: 100%;
			}
			&.active{
				background-color: #1989fa;
				color: #fff;
				border: none;
				position: relative;
				z-index: 9;
			}
			&.bd-left{
				border-left: 1rpx solid #d9d9d9;
			}
			&.bd-right{
				border-right: 1rpx solid #d9d9d9;
			}
		}
	}
	.bottom-nav{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background:rgba(255,255,255,1);
		box-shadow:0px 1px 0px 0px rgba(217,217,217,1);
		display: flex;
		border-top: 1px solid #d9d9d9;
		&__item{
			height: 94rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			text-align: center;
			&:nth-of-type(1) {
				.bottom-nav__icon{
					background: url('/static/nav1.png') no-repeat;
					background-size: 100%;
				}
			}
			&:nth-of-type(2) {
				.bottom-nav__icon{
					background: url('/static/nav2.png') no-repeat;
					background-size: 100%;
				}
			}
			&:nth-of-type(3) {
				.bottom-nav__icon{
					background: url('/static/nav3.png') no-repeat;
					background-size: 100%;
				}
			}
			&.active{
				.bottom-nav__txt{
					color:#1989fa;
				}
				&:nth-of-type(1) {
					.bottom-nav__icon{
						background: url('/static/nav1_active.png') no-repeat;
						background-size: 100%;
					}
				}
				&:nth-of-type(2) {
					.bottom-nav__icon{
						background: url('/static/nav2_active.png') no-repeat;
						background-size: 100%;
					}
				}
				&:nth-of-type(3) {
					.bottom-nav__icon{
						background: url('/static/nav3_active.png') no-repeat;
						background-size: 100%;
					}
				}
			}
		}
		&__icon{
			width: 40rpx;	
			height: 40rpx;
			margin: 5rpx 0 0rpx 0;
		}
		&__txt{
			font-size: 30rpx;
			line-height: 40rpx;
			color:#646566;
			
		}
	}
	.media{
		&-list{
			display: flex;
			flex-direction: column;
			width: 90%;
			margin: 10px auto 180rpx auto;
		}
		&-item{
			font-size: 34rpx;
			text-align: center;
			margin: 15rpx 0;
			box-sizing: border-box;
			padding: 0 5rpx;
			&__body{
				border-bottom: 1px solid #f0f0f0;
				padding: 10rpx 0;
				&:nth-child(1){
					border-top: 1px solid #f0f0f0;
				}
			}
			&__rank{
				width: 10%;
			}
			&__name{
				width: 30%;
				text-align: left;
				// overflow: hidden;
				// text-overflow: ellipsis;
				// white-space: nowrap;
				display: flex;
				flex-direction: column;
				padding: 0 10rpx;
				box-sizing: border-box;
			}
			&__hot{
				width: 30%;
				text-align: right;
			}
			&__name-strong{
				font-weight: bold;
				color: #313131;
				margin: 0  0 15rpx 0;
			}
			&__on-day{
				color: #9a9a9a;
				font-size: 28rpx;
			}
			&__score{
				text-align: right;
				font-weight: bold;
			}
			&__play{
				display: flex;
				flex-direction: column;
				width: 30%;
				text-align: right;
			}
			&__total-play{
				width: 30%;
			}
			&__bottom-tip{
				color: #9a9a9a;
				font-size: 28rpx;
			}
		}
		&-item__body{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
		}
		&-item__header{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			margin: 20rpx 0;
		}
	}
	.media-item__header{
		.media-item__hot{
			font-weight: normal;
			color: #000;
		}
	}
	.time-box{
		background-color: #1989fa;
		color: #fff;
		font-size: 32rpx;
		width: 100%;
		text-align: center;
		padding: 8px 0 0 0;
	}
	.time-title{
		background-color: #fff;
		width: 60%;
		color: #666;
		padding: 20rpx 0;
		border-radius: 15rpx 15rpx 0 0;
		margin: 0 auto 0rpx auto;
	}
</style>