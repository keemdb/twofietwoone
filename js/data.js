var q = {
	1: {
		"title": "펜싱 연습하는 고유림을 보았다.<br>고유림을 보는 나의 행동은?",
		"type": "EI",
		"A":"먼저 말을 걸어 나의 존재를 알린다.", 
		"B":"창밖에서 고유림을 지켜보며 흐뭇해한다."
	},
	2: {
		"title": "버스에서 내려야할 정류장을 지나쳤다.",
		"type": "EI",
		"A":"기사님! 세워주세요!!", 
		"B":"다음에 내려서 천천히 걸어가지 뭐"
	},
	3: {
		"title": "학교 수업 끝! 이제 뭐하지?",
		"type": "EI",
		"A":"친구들과 코끼리분식가서 떡볶이 먹으며 수다", 
		"B":"집에서 PC통신해야지!"
	},
	4: {
		"title": "집에 가는 길 노을을 보면서 나는?",
		"type": "SN",
		"A":"오늘 저녁메뉴를 생각한다.", 
		"B":"의식의 흐름에 따라 상상의 나래를 펼친다"
	},
	5: {
		"title": "고유림의 올림픽 경기를 시청한 후 나는",
		"type": "SN",
		"A":"오 진짜 잘한다!! 역시 고유림!!", 
		"B":"내가 고유림이라면 이길 수 있었을까?"
	},
	6: {
		"title": "고유림에게 고백하는 문지웅이 나라면",
		"type": "SN",
		"A":"너에 관한건 왜이렇게 기억이 잘나나 모르겠어. ", 
		"B":"너와 함께라면 엄청 행복할거 같아!"
	},
	7: {
		"title": "고유림과 연습경기에서 졌다.",
		"type": "TF",
		"A":"다음엔 이기도록 전략을 짠다.", 
		"B":"다음엔 이기자며 나를 다독여 준다."
	},
	8: {
		"title": "희도가 약속장소를 못찾겠다고 전화가 왔을때 나는",
		"type": "TF",
		"A":"이정표 보고와", 
		"B":"주변에 뭐가있어? 어디야?"
	},
	9: {
		"title": "희도랑 유림이가 싸웠다는 얘기를 <br>듣고 나는",
		"type": "TF",
		"A":"왜 싸웠어?", 
		"B":"유림이가 잘못했네.. 속상하겠다며 위로한다"
	},
	10: {
		"title": "방송반 친구들과 여행을 가기로했다",
		"type": "JP",
		"A":"체계적으로 일정, 맛집을 계획한다", 
		"B":"우리가 가는 곳이 곧 여행지"
	},
	11: {
		"title": "백이진과 약속이 파토가 났을때 나는",
		"type": "JP",
		"A":"유림이랑 놀아야지", 
		"B":"오? 개이득"
	},
	12: {
		"title": "엄마의 심부름 도중 놀이터에서 <br>백이진을 만났다",
		"type": "JP",
		"A":"심부름을 하고 다시 놀이터가서 백이진과 논다", 
		"B":"백이진과 재미있게 논 다음 심부름을 한다"
	}
}

var resultData = {
	"ISTJ": {
		"resultNm": "백이진", 
		"explain": "<li>기억력이 좋고 끈기있음</li><li>부끄러움을 많이 탐</li><li>성실하고 책임감이 강함</li><li>외유내강</li><li>표현이 적고, 표정 변화가 적음</li>", 
		"img": "result_img1"
	},
	"ISFJ": {
		"resultNm": "지승완", 
		"explain": "<li>속으로 잡생각을 많이하고, 잔걱정을 많이함</li><li>사람들과 어울리는 것을 좋아하면서도 혼자노는것을 좋아함</li><li>마음이 여리고 눈물도 많음</li><li>남들 챙기는거 좋아함</li><li>게으름뱅이</li>", 
		"img": "result_img2"
	},
	"INFJ": {
		"resultNm": "백이현", 
		"explain": "<li>사회생활을 피곤해함(낯가림 심함)</li><li>남에게 민폐 끼치는걸 싫어함</li><li>공감능력이 뛰어남</li><li>싫은 내색 못하고 마음의 상처도 잘 받음</li><li>혼자만의 시간이 꼭 필요함</li>", 
		"img": "result_img3"
	},
	"INTJ": {
		"resultNm": "서예진", 
		"explain": "<li>사람많고 시끄러운 장소 싫음</li><li>계획짜고 실행하는거 좋아함</li><li>혼자있는거 좋아함</li><li>남 눈치 안보고 남 일에 무신경</li><li>호불호 확실</li>", 
		"img": "result_img4"
	},
	"ISTP": {
		"resultNm": "김민채", 
		"explain": "<li>불편한 사교모임은 좋아하지 않음</li><li>만사가 귀찮음</li><li>카톡 할말없으면 읽씹</li><li>하나에 꽂히면 끝장을 봄</li><li>친하면 활발함</li>", 
		"img": "result_img5"
	},
	"ISFP": {
		"resultNm": "고유림", 
		"explain": "<li>배려형 개인주의</li><li>관심받기 싫어하는 관종</li><li>심한 장난 싫어함</li><li>화를 잘 안내서 착하다는 얘기 많이 들음</li><li>노는건 좋지만 금방 지침</li>", 
		"img": "result_img6"
	},
	"INFP": {
		"resultNm": "이다슬", 
		"explain": "<li>동물을 좋아하고 낭만적</li><li>남이 나를 어떻게 생각할지 고민 많이함</li><li>망상하는 것을 좋아함</li><li>집순이</li><li>착하고 배려심 넘침</li>", 
		"img": "result_img7"
	},
	"INTP": {
		"resultNm": "방송국 PD놈", 
		"explain": "<li>조용하고 소심해보여도 자존감이 높음</li><li>게으른 천재가 많음</li><li>집에가면 연락두절</li><li>간섭받는거 싫어함</li><li>돈모으는거 좋아함. 절약잘함.</li>", 
		"img": "result_img8"
	},
	"ESTP": {
		"resultNm": "국가대표 코치", 
		"explain": "<li>스릴을 즐겨서 게임을 잘함</li><li>다혈질 기질이 있음(화끈한 성격)</li><li>리더십이 있어서 반장을 자주함</li><li>지루한거 싫고 재밌는게 최고</li><li>눈치는 빠르지만 눈치안봄</li>", 
		"img": "result_img9"
	},
	"ESFP": {
		"resultNm": "정호진", 
		"explain": "<li>귀가 얇고, 거절을 잘 못함</li><li>충동구매 잘함</li><li>사교성이 좋음(마당발, 오지라퍼)</li><li>성격이 급함</li><li>걱정되는 일이 있어도 좀만 지나면 생각없음</li>", 
		"img": "result_img10"
	},
	"ENFP": {
		"resultNm": "문지웅", 
		"explain": "<li>호기심이 많고 즉흥적</li><li>새로운 친구 사귀는걸 좋아함</li><li>감정이 얼굴에 드러남</li><li>고집이 셈</li><li>아이디어와 창의력이 뛰어남</li>", 
		"img": "result_img11"
	},
	"ENTP": {
		"resultNm": "나희도", 
		"explain": "<li>정신없고 장난 많이침</li><li>직설적이고 솔직함</li><li>남 눈치 안봄(마이웨이)</li><li>관심받는것 좋아하고 뒤끝없다</li><li>독창적이고 기발한 상상을 많이함</li>", 
		"img": "result_img12"
	},
	"ESTJ": {
		"resultNm": "신재경", 
		"explain": "<li>계획은 섬세하고 꼼꼼</li><li>할 일은 미리미리</li><li>호불호가 확실</li><li>직설적이고 공감능력이 부족</li><li>일못하는 사람을 싫어함</li>", 
		"img": "result_img13"
	},
	"ESFJ": {
		"resultNm": "서준혁", 
		"explain": "<li>공감능력이 좋고 센스있음</li><li>새로운사람과 술자리 좋아함</li><li>사람을 좋아하고 정이 많음</li><li>예의없는 사람을 싫어함</li><li>책임감이 강함</li>", 
		"img": "result_img14"
	},
	"ENFJ": {
		"resultNm": "고유림 엄마", 
		"explain": "<li>정이 엄청 많다</li><li>갈등을 싫어하는 평화주의자</li><li>고집이 세서 하고싶은건 꼭 해야함</li><li>인간관계 걱정이 많음</li><li>돈에 휘둘리지않고 물욕이 없음</li>", 
		"img": "result_img15"
	},
	"ENTJ": {
		"resultNm": "양찬미", 
		"explain": "<li>자신감이 넘침</li><li>야망이 있고 목표가 확실</li><li>공과사가 철저</li><li>츤데레</li><li>일처리가 효율적</li>", 
		"img": "result_img16"
	}
}