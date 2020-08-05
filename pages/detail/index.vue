<template>
	<view class="content">
		<view class="detail-header">
			<view>
				<image class="detail-header__img" :src="detailData.cover"></image>
			</view>
			<view class="detail-header__info">
				<text class="detail-header__name">{{detailData.show_name}}</text>
				<view class="detail-header__line">
					<text class="detail-header__label">类型:</text>
					<text class="detail-header__value">{{detailData.type || '其他'}}</text>
				</view>
				<view class="detail-header__line">
					<text class="detail-header__label">上映时间:</text>
					<text class="detail-header__value">{{detailData.release_date}}</text>
				</view>
				<view class="detail-header__line">
					<text class="detail-header__label">播放平台:</text>
					<view class="detail-header__value">
							<image class="detail-header__plat-img" :key="item.showId" v-for="item in detailData.platform_list" :src="item.url"></image>
						</text>
					</view>
				</view>
			</view>
		</view>
		<view class="detail-introduce">
			<text class="detail-introduce__header">
				简介：
			</text>
			<text class="detail-introduce__txt">
				{{detailData.intro}}
			</text>
		</view>
		<view class="detail-actor">
			<text class="detail-actor__header">
				主演：
			</text>
			<view class="detail-actor__txt">
				<text class="detail-actor__item" v-if="index <= 5" :key="item.id" v-for="(item, index) in detailData.actor_info">
					{{item.actorName}} 饰 {{item.roles}}
				</text>
			</view>
		</view>
		<view class="detail-creater">
			<text class="detail-creater__header">
				主创：
			</text>
			<view class="detail-creater__txt">
				<view class="detail-creater__item">
					<text class=detail-creater__label>导演：</text> 
					<text class=detail-creater__value>
						{{detailData.director}}
					</text>
				</view>
				<view class="detail-creater__item">
					<text class=detail-creater__label>编剧：</text>
					<text class=detail-creater__value>
						{{detailData.script_writer}}
					</text>
				</view>
				<view class="detail-creater__item">
					<text class=detail-creater__label>制片人：</text>
					<text class=detail-creater__value>
						{{detailData.producer}}
					</text>
				</view>
				<view class="detail-creater__item">
					<text class=detail-creater__label>监制：</text>
					<text class=detail-creater__value>
						{{detailData.executive_producer}}
					</text>
				</view>
				<view class="detail-creater__item">
					<text class=detail-creater__label>出品人：</text>
					<text class=detail-creater__value>
						{{detailData.publisher}}
					</text>
				</view>
				<view class="detail-creater__item">
					<text class=detail-creater__label>出品公司：</text>
					<view class="detail-creater__value">
						<text class="detail-creater__company" v-for="item in detailData.publishers" :key="item">
							{{item}}
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				id: '',
				detailData: null
			}
		},
		onLoad(option) {
			// this.id = '13196'
			if (option.id) {
				this.id = JSON.parse(decodeURIComponent(option.id))
				this.getDetail()
			}
		},
		methods: {
			getStorage(key) {
				let _value = uni.getStorageSync(key);
				return _value
			},
			setStorage(key,data) {
				uni.setStorageSync(key, data);
			},
			getDetail(parms) {
				uni.request({
					url: 'https://d.guduodata.com/m/show/detail/' + this.id,
					success: (res) => {
						this.detailData = res.data
					}
				});
			},
			onShareAppMessage: function(e) {
				let title = `${this.detailData.show_name}详情介绍`
				return {
					title: title,
					path: 'pages/index/detail'
				}
			}
		},
	}
</script>

<style lang="less">
	.detail-header{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		width: 94%;
		margin: 25rpx auto;
		&__img{
			flex:1;
			width: 300rpx;
			height: 400rpx;
		}
		&__info{
			flex: 1;
			padding-left: 20rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}
		&__name{
			font-size: 36rpx;
			font-weight: bold;
			line-height: 50rpx;
			padding-bottom: 40rpx;
		}
		&__line{
			font-size: 32rpx;
			line-height: 70rpx;
			color: #666;
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		&__value{
			display: flex;
		}
		&__plat-img{
			width: 50rpx;
			height: 50rpx;
			margin: 0 10rpx;
		}
	}
	.detail-introduce{
		border-top: 1rpx solid #d9d9d9;
		padding: 0 3%;
		margin: 40rpx auto;
		&__header{
			display: inline-block;
			font-size: 36rpx;
			line-height: 80rpx;
			font-weight: bold;
			width: 100%;
			margin: 15rpx 0 5rpx 0;
		}
		&__txt{
			font-size: 32rpx;
			color: #888;
		}
		&__item{
			line-height: 50rpx;
		}
	}
	.detail-actor{
		border-top: 1rpx solid #d9d9d9;
		padding: 0 3%;
		margin: 40rpx auto;
		&__header{
			display: inline-block;
			font-size: 36rpx;
			line-height: 80rpx;
			font-weight: bold;
			width: 100%;
			margin: 15rpx 0 5rpx 0;
		}
		&__txt{
			font-size: 32rpx;
			color: #888;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.detail-actor__item{
				width: 50%;
			}
		}
		&__item{
			line-height: 60rpx;
		}
	}
	.detail-creater{
		border-top: 1rpx solid #d9d9d9;
		padding: 0 3%;
		margin: 40rpx auto;
		&__header{
			display: inline-block;
			font-size: 36rpx;
			line-height: 80rpx;
			font-weight: bold;
			width: 100%;
			margin: 15rpx 0 5rpx 0;
		}
		&__txt{
			font-size: 32rpx;
			color: #888;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			.detail-actor__item{
				width: 100%;
				flex:1;
			}
		}
		&__item{
			line-height: 65rpx;
			display: flex;
			flex-direction: row;
		}
		&__label{
			width: 200rpx;
		}
		&__value{
			flex:1;
		}
		&__company{
			display: block;
		}
	}
</style>