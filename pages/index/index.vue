<template>
	<view class="content">
		<view class="time-title">
			{{currentDate}}影视排行
		</view>
		<view v-if="bottomNavIndex === 1" class="header-nav">
			<view  :class="[topNavIndex === 1 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(1)>
				<text class="header-nav__txt">院线</text>
			</view>
			<view :class="[topNavIndex === 2 ? 'active' : '', 'header-nav__item']" class="header-nav__item" @click=handleTopNav(2)>
				<text class="header-nav__txt">网络</text>
			</view>
		</view>
		<view v-else-if="bottomNavIndex === 2" class="header-nav">
			<view :class="[topNavIndex === 1 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(1)>
				<text class="header-nav__txt">全部</text>
			</view>
			<view :class="[topNavIndex === 2 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(2)>
				<text class="header-nav__txt">网剧</text>
			</view>
			<view :class="[topNavIndex === 3 ? 'active' : '', 'header-nav__item']" class="header-nav__item" @click=handleTopNav(3)>
				<text class="header-nav__txt">电视剧</text>
			</view>
		</view>
		<view v-else-if="bottomNavIndex === 3" class="header-nav">
			<view :class="[topNavIndex === 1 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(1)>
				<text class="header-nav__txt">全部</text>
			</view>
			<view :class="[topNavIndex === 2 ? 'active' : '', 'header-nav__item']" @click=handleTopNav(2)>
				<text class="header-nav__txt">网络综艺</text>
			</view>
			<view :class="[topNavIndex === 3 ? 'active' : '', 'header-nav__item']" class="header-nav__item" @click=handleTopNav(3)>
				<text class="header-nav__txt">电视综艺</text>
			</view>
		</view>
		<view class="media-list">
			<view class="media-item__header">
				<text class="media-item media-item__rank">排行</text>
				<text class="media-item media-item__name">剧名</text>
				<text class="media-item media-item__score">单日播放</text>
				<text class="media-item media-item__hot">总播放</text>
			</view>
			<view class="media-item__body" v-for="(item,index) in list" :key="index">
				<text class="media-item media-item__rank">{{item.rank}}</text>
				<text class="media-item media-item__name">{{item.name}}</text>
				<text class="media-item media-item__score" v-if="item.attachData">{{Number.parseInt(item.attachData/10000)}}万</text>
				<text class="media-item media-item__score" v-else>{{item.gdi}}</text>
				<text class="media-item media-item__hot">{{setPlayCount(item.totalPlayCount)}}</text>
			</view>
		</view>
		<view class="bottom-nav">
			<view :class="['bottom-nav__item', bottomNavIndex === 1 ? 'active' : '']" @click=handleBottomNav(1)>
				<view class="bottom-nav__icon"></view>
				<text class="bottom-nav__txt">电影</text>
			</view>
			<view :class="['bottom-nav__item', bottomNavIndex === 2 ? 'active' : '']" @click=handleBottomNav(2)>
				<view class="bottom-nav__icon"></view>
				<text class="bottom-nav__txt">电视剧</text>
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
				bottomNavIndex: 1,
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
			this.getListByType(1)
		},
		methods: {
			setPlayCount(num) {

				if (num == 0) {
					return '暂无数据'
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
				if(_storage) {
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
			}
		},
	}
</script>

<style lang="less">
	.header-nav{
		display: flex;
		flex-direction: row;
		width: 80%;
		margin: 50rpx auto 0 auto;
		&__item{
			flex: 1;
			text-align: center;
			font-size: 36rpx;
			position: relative;
			line-height: 70rpx;
			border: 1rpx solid #d9d9d9;
			&.active{
				background-color: #F63636;
				color: #fff;
				border: 1rpx solid #F63636;
			}
		}
	}
	.bottom-nav{
		position: fixed;
		left: 0;
		bottom: 0;
		height: 128rpx;
		width: 100%;
		background:rgba(255,255,255,1);
		box-shadow:0px 1px 0px 0px rgba(217,217,217,1);
		display: flex;
		border-top: 1px solid #d9d9d9;
		&__item{
			flex: 1;
			display: flex;
			flex-direction: column;
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
					color:#F63636;
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
			width: 45rpx;	
			height: 45rpx;
			margin: 13rpx 0 12rpx 0;
		}
		&__txt{
			font-size: 32rpx;
			color:#999;
		}
	}
	.media{
		&-list{
			display: flex;
			flex-direction: column;
			width: 96%;
			margin: 10px auto 180rpx auto;
		}
		&-item{
			font-size: 34rpx;
			text-align: center;
			margin: 15rpx 0;
			box-sizing: border-box;
			padding: 0 5rpx;
			&__rank{
				width: 15%;
			}
			&__name{
				width: 40%;
				text-align: left;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding: 0 10rpx;
				box-sizing: border-box;
			}
			&__score{
				width: 20%;
			}
			&__hot{
				width: 25%;
				text-align: right;
				font-weight: bold;
				color: #F63636;
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
	.time-title{
		width: 100%;
		text-align: center;
		margin: 15px 0 0 0;
	}
</style>