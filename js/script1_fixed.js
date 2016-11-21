window.onload = function() {
	var stage = document.querySelector(".stage");
	var imgBtn = document.querySelectorAll(".img0");
	var ado = document.querySelector("audio");
	var diskg = document.getElementById("diskg");
	var disk = document.querySelectorAll(".disk")[0];
	var startOrStop = document.querySelector("#start");
	var volStop = document.querySelector("#volStop");
	var span1 = document.getElementById("span1");
	var span2 = document.getElementById("span2");
	var allTimeLength = ado.duration;
	var playRange = document.querySelector("#playRange");
	var volimg = document.querySelector("#volimg");
	var volimgg = document.querySelector("#volimgg");
	var songList = document.querySelectorAll(".songList");
	var imgbgp = document.querySelector("#imgbgp");
	var music = document.querySelectorAll("h3");
	var top = document.querySelector("#top");
	var repeat = document.querySelector("#repeat");
	var degX = 0,
		degY = 0;
	var isMuted = false;
	var isPlay = false;
	var isRepeatOne = false;
	var arrMusic = ["audios/1.mp3", "audios/2.mp3", "audios/3.mp3", "audios/4.mp3", "audios/5.mp3", "audios/6.mp3", "audios/7.mp3", "audios/8.mp3", "audios/9.mp3", "audios/10.mp3", "audios/11.mp3", "audios/12.mp3", "audios/13.mp3", "audios/14.mp3", "audios/15.mp3", "audios/16.mp3", "audios/17.mp3", "audios/18.mp3"];
	var arr = ["img/11.png", "img/22.png", "img/33.png", "img/44.png", "img/55.png", "img/66.png", "img/77.png", "img/88.png", "img/99.png"];
	var arrText = ["黄家驹", "Frank Musik", "Taylor Swift", "Avril Lavigne", "张学友", "刘德华", "郭富城", "Michael Jackson", "张国荣"];
	ado.loop = true;
	//音乐选择
	for (var i = 0; i < music.length; i++) {
		music[i].index = i;
		music[i].onclick = function() {
			ado.src = arrMusic[this.index];
			ado.play();
			ado.ontimeupdate = function() {
				var timeNow = Math.ceil(ado.currentTime);
				var allTimeLength = Number(ado.duration);
				console.log(ado.duration);
				var timeElse = Math.ceil(allTimeLength - timeNow);
				var time = timeNow / allTimeLength * 100;
				playRange.value = time;
				currentHour = Math.floor(timeNow / 3600);
				currentMinute = Math.floor(timeNow % 3600 / 60);
				currentSecond = timeNow % 60;
				allHour = Math.floor(timeElse / 3600);
				allMinute = Math.floor(timeElse % 3600 / 60);
				allSecond = timeElse % 60;
				span1.innerHTML = currentHour + ":" + currentMinute + ":" + currentSecond;
				span2.innerHTML = allHour + ":" + allMinute + ":" + allSecond;
			};
			isPlay = true;
			diskg.style.transform = "rotate(10deg)";
			disk.style.transform = "rotate(4000deg)";
			//			adoLen = arrMusic[this.index];
			//			this.audioLength = ado.duration;
			//			allTimeLength = this.audioLength;
			//			console.log(ado.duration);
		}
	}

	//音乐循环
	repeat.onclick = function() {
			if (ado.loop === true) {
				ado.loop = false;
				console.log(1);
				repeat.src = "img/repeatAll.png";
			} else {
				ado.loop = true;
				console.log(2);
				repeat.src = "img/repeatOne.png";
			}
		}
		//开始暂停
	diskg.onclick = function() {
			if (isPlay) {
				ado.pause();
				isPlay = false;
				disk.style.transition = "";
				
				diskg.style.transform = "rotate(-15deg)";
				disk.style.transform = "rotate(0deg)";
			} else {
				ado.play();
				isPlay = true;
				disk.style.transition = "300s linear";
				diskg.style.transform = "rotate(10deg)";
				disk.style.transform = "rotate(4000deg)";
			}
		}
		//音量控制
	var lenX = 0;
	var lenX1 = 0;
	ado.volume = 0;
	volimg.onmousedown = function(e) {
		var eve = e || event;
		volimg.style.transform = "rotate(" + lenX1 + "deg)";
		mouX = eve.clientX;
		volimg.onmousemove = function(e) {
			var eve1 = e || event;
			var mouseX = eve1.clientX;
			lenX = mouseX - mouX + lenX1;
			volimg.style.transform = "rotate(" + lenX + "deg)";
			if (lenX > 0) {
				volimgg.style.transform = "rotate(10deg)";
				var max = lenX / 200;
				if (max > 1) {
					ado.volume = 1;
				} else {
					ado.volume = max;
				}
			} else {
				var min = Math.abs(lenX) / 200;
				if (min > 1) {
					ado.volume = 0;
					volimgg.style.transform = "rotate(-15deg)";
				} else {
					ado.volume = min;
				}
			}
		}
	}
	volimg.onmouseup = function(e) {
			lenX1 = lenX;
			var eve1 = e || event;
			volimg.onmousemove = function() {
				return false;
			}
		}
		//是否静音
	volimgg.onclick = function() {
			if (isMuted) {
				ado.volume = 1;
				volimgg.style.transform = "rotate(10deg)";
				isMuted = false;
			} else {
				ado.volume = 0;
				volimgg.style.transform = "rotate(-15deg)";
				isMuted = true;
			}
		}
		//播放进度
	var currentHour = 0,
		currentMinute = 0,
		currentSecond = 0,
		allHour = 0,
		allMinute = 0,
		allSecond = 0,
		timeElse = Math.floor();

	function songTimeUpdate() {
		var timeNow = Math.ceil(ado.currentTime);
		var allTimeLength = Number(ado.duration);
		console.log(ado.currentTime);
		var timeElse = Math.ceil(allTimeLength - timeNow);
		var time = timeNow / allTimeLength * 100;
		playRange.value = time;
		currentHour = Math.floor(timeNow / 3600);
		currentMinute = Math.floor(timeNow % 3600 / 60);
		currentSecond = timeNow % 60;
		allHour = Math.floor(timeElse / 3600);
		allMinute = Math.floor(timeElse % 3600 / 60);
		allSecond = timeElse % 60;
		span1.innerHTML = currentHour + ":" + currentMinute + ":" + currentSecond;
		span2.innerHTML = allHour + ":" + allMinute + ":" + allSecond;
	}

	playRange.onchange = function() {
		var playRangeVal = this.value;
		var playTime = playRangeVal * allTimeLength * 0.01;
		ado.currentTime = playTime;
	}

	//点击控制碟片背景和音乐选择
	for (var i = 0; i < imgBtn.length; i++) {
		imgBtn[i].index = i;
		var songCount = 0;
		imgBtn[i].onmousedown = function() {
			if (songCount % 2 == 0) {
				imgbgp.src = arr[this.index];
				songList[this.index].style.transform = "scale(1)";
				for (var j = 0; j < songList.length; j++) {
					if (j != this.index) {
						songList[j].style.transform = "scale(0)";
					}
				}
				top.innerHTML = arrText[this.index];
			} else {
				songList[this.index].style.transform = "scale(0)";
				top.innerHTML = "WELCOME HERE EVERYONE";
			}
			songCount++;
		}
	}
	//歌手选择	
	document.ondragstart = function() {
		return false;
	}

	document.onmousedown = function(e) {
		var eve = e || event;
		var mouX = eve.clientX;
		var mouY = eve.clientY;
		document.onmousemove = function(e) {
			var eve1 = e || event;
			var mouseX = eve1.clientX;
			var mouseY = eve1.clientY;
			stepX = mouseX - mouX;
			stepY = mouseY - mouY;
			degX -= stepY * 0.4;
			degY += stepX * 0.5;
			var str = "perspective(800px) rotateY(" + degY + "deg)";
			css3Transform(stage, str);
			mouX = mouseX;
			mouY = mouseY;
		}
	}
	document.onmouseup = function() {
		document.onmousemove = function() {
			return false;
		}
	}

	function css3Transform(element, value) {
		var arr = ["o", "ms", "Moz", "webkit", ""];
		var length = arr.length;
		for (var i = 0; i < length; i++) {
			element.style[arr[i] + "Transform"] = value;
		}
	}
}