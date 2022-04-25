var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var num = 1;

		function start (){
			var start = document.querySelector(".start");
			var question = document.querySelector(".question");

			start.style.display = "none";
			question.style.display = "block";
			next();
		};

		answerA.addEventListener("click", ()=>{
			var type = document.querySelector("#type").value;
			var preValue = document.querySelector("#"+type).value;
			document.querySelector("#"+type).value = parseInt(preValue) + 1;
			next();
		})

		answerB.addEventListener("click", ()=>{
			next();
		})

		function next(){
			if(num == 13){
				var question = document.querySelector(".question");
				var result = document.querySelector(".result");
				var resultImg = document.querySelector("#resultImg");
				var resultNm = document.querySelector("#resultNm");
				var explain = document.querySelector("#explain");
				var retryBtn = document.querySelector("#retryBtn");
				var ei = document.querySelector("#EI");
				var sn = document.querySelector("#SN");
				var tf = document.querySelector("#TF");
				var jp = document.querySelector("#JP");
				var mbti = "";

				question.style.display = "none";
				result.style.display = "block";

				ei.value < 2 ? mbti += "I" : mbti += "E";
				sn.value < 2 ? mbti += "N" : mbti += "S";
				tf.value < 2 ? mbti += "F" : mbti += "T";
				jp.value < 2 ? mbti += "P" : mbti += "J";

				console.log(mbti)

				resultImg.src = "img/" + resultData[mbti]['img'] + ".jpg";
				resultNm.innerHTML = resultData[mbti]["resultNm"];
				explain.innerHTML = resultData[mbti]["explain"];

				retryBtn.addEventListener("click", ()=>{
					retry();
				});

			} else {
				var progressBar = document.querySelector(".progress-bar");
				var title = document.querySelector("#title");
				var type = document.querySelector("#type");
				var title = document.querySelector("#title");
				var quizImg = document.querySelector(".quizImg>img");

				progressBar.style.width = "calc(100/12*"+num+"%)";
				title.innerHTML = q[num]["title"];
				type.value = q[num]["type"];
				answerA.innerHTML = q[num]["A"];
				answerB.innerHTML = q[num]["B"];
				quizImg.src = 'img/img'+num+'.jpg';
				num++;
			}
		}

		function retry(){
			var start = document.querySelector(".start");
			var result = document.querySelector(".result");

			var ei = document.querySelector("#EI");
			var sn = document.querySelector("#SN");
			var tf = document.querySelector("#TF");
			var jp = document.querySelector("#JP");
			var mbti = "";


			result.style.display = "none";
			start.style.display = "block";

			ei.value = 0;
			sn.value = 0;
			tf.value = 0;
			jp.value = 0;

			num = 1;
		}