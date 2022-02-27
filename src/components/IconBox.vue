<template>
	<div class="icon_boxes">
		<div class="container">
			<div class="row icon_box_row">
				<div class="col-lg-4 icon_box_col">
					<div class="icon_box">
						<div class="icon_box_image">
							<img src="@/assets/icon_1.svg" alt="">
						</div>
						<div class="icon_box_title">Бесплатная доставка</div>
					</div>
				</div>

				<div class="col-lg-4 icon_box_col">
					<div class="icon_box">
						<div class="icon_box_image">
							<img src="@/assets/icon_2.svg" alt="">
						</div>
						<div class="icon_box_title">Обмен телефона на новый</div>
						<p>
							<b class="text-danger">Важно!</b>
							Обмен делаем по состояние телефону
						</p>
					</div>
				</div>

				<div class="col-lg-4 icon_box_col">
					<div class="icon_box">
						<div class="icon_box_image">
							<img src="@/assets/icon_3.svg" alt="">
						</div>
						<div class="icon_box_title">Бесплатная консультация</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped>
.icon_boxes {
	width: 100%;
	padding-top: 99px;
	padding-bottom: 99px;
	background: #FFFFFF;
	z-index: 2;
}
.icon_box{
	width: 100%;
	text-align: center;
}
.icon_box_image{
	width: 75px;
	height: 75px;
	margin-left: auto;
	margin-right: auto;
}
.icon_box_image img{
	max-width: 100%;
}
.icon_box_title{
	font-size: 18px;
	font-weight: 500;
	color: #1b1b1b;
	margin-top: 33px;
}
.icon_box_text{
	margin-top: 20px;
}
</style>