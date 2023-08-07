<template>
	<div class="area" >
		<ul class="circles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Background',
});
  
</script>

<style scoped>
.area {
	position: absolute;
	top: 0;
	z-index: -1;
	background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
	width: 100%;
	height: 100vh;
	background: linear-gradient(
		-45deg,
		#ffffff,
		#ffe4e9,
		#fcc8e2,
		#f6baed,
		#efb0ff,
		#d3a2ff,
		#8eb8ff,
		#91efff,
		#d5f9ff
	);
	background-size: 400% 400%;
	animation: gradient 9s ease infinite;
}

.circles {
	margin: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.circles li{
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	background: rgba(255, 255, 255, 0.2);
	bottom: -150px; 
}

.circles li:nth-child(1){
	background-image: url("../src/assets/images/other/silly_anne.png");
	background-size: 110px 110px;
	left: 25%;
	width: 110px;
	height: 110px;
	animation: regular 25s linear infinite;
	animation-delay: 0s;
}


.circles li:nth-child(2){
	background-image: url("../src/assets/images/other/silly_anne.png");
	background-size: 90px 90px;
	left: 10%;
	width: 90px;
	height: 90px;
	animation: regular 25s linear infinite;
	animation-delay: 2s;
	animation-duration: 12s;
}

.circles li:nth-child(3){
	background-image: url("../src/assets/images/other/silly_matt.png");
	background-size: 80px 80px;
	left: 70%;
	width: 80px;
	height: 80px;
	animation: regular 25s linear infinite;
	animation-delay: 4s;
}

.circles li:nth-child(4){
	background-image: url("../src/assets/images/other/silly_matt.png");
	background-size: 120px 120px;
	left: 40%;
	width: 120px;
	height: 120px;
	animation: extreme 25s linear infinite;
	animation-delay: 0s;
	animation-duration: 18s;
}

.circles li:nth-child(5){
	background-image: url("../src/assets/images/other/silly_anne.png");
	background-size: 140px 140px;
	left: 65%;
	width: 140px;
	height: 140px;
	animation: regular 25s linear infinite;
	animation-delay: 0s;
}

.circles li:nth-child(6){
	background-image: url("../src/assets/images/other/silly_matt.png");
	background-size: 110px 110px;
	width: 110px;
	height: 110px;
	left: 75%;
	animation: regular 25s linear infinite;
	animation-delay: 3s;
}

.circles li:nth-child(7){
	background-image: url("../src/assets/images/other/silly_anne.png");
	background-size: 150px 150px;
	left: 35%;
	width: 150px;
	height: 150px;
	animation: extreme 25s linear infinite;
	animation-delay: 7s;
}

.circles li:nth-child(8){
	background-image: url("../src/assets/images/other/silly_matt.png");
	background-size: 90px 90px;
	left: 50%;
	width: 90px;
	height: 90px;
	animation: extreme 25s linear infinite;
	animation-delay: 15s;
	animation-duration: 45s;
}

.circles li:nth-child(9){
	background-image: url("../src/assets/images/other/silly_anne.png");
	background-size: 100px 100px;
	left: 20%;
	width: 100px;
	height: 100px;
	animation: regular 25s linear infinite;
	animation-delay: 2s;
	animation-duration: 35s;
}

.circles li:nth-child(10){
	background-image: url("../src/assets/images/other/silly_matt.png");
	background-size: 150px 150px;
	left: 85%;
	width: 150px;
	height: 150px;
	animation: extreme 25s linear infinite;
	animation-delay: 0s;
	animation-duration: 11s;
}



@keyframes regular {
	0% {
		transform: translateY(-1000px) rotate(540deg);
		border-radius: 0;
	}

	100% {
		transform: translateY(200px) rotate(0deg);
		border-radius: 50%;
	}
}

@keyframes extreme {
	0% {
		transform: translateY(-1000px) rotate(900deg);
		opacity: 1;
		border-radius: 0;
	}

	100% {
		transform: translateY(200px) rotate(0deg);
		opacity: 0.5;
		border-radius: 50%;
	}
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
  