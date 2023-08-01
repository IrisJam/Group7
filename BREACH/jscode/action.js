    var secret = Math.floor(Math.random()*90000+10000).toString();
	var baselen = Math.floor(Math.random()*500+100);
	var known = "?????";
	var cnt = 0;
	var b = true;
	function init()
	{
			secret = Math.floor(Math.random()*90000+10000).toString();
			known = "?????";
			baselen = Math.floor(Math.random()*500+100);
			cnt = 0;
			b = true;
			document.getElementById("known").innerHTML = "The secret : " + known;
			attack(secret[cnt]);
	}
	function attack(sel)
	{
		if(cnt==5)
		{
			alert("Please press RESET to try another secret.");
			return;		
		}
		if(b == false) 
		{
			alert("Please guess current digit first!");
			return;
		}
		b = false;
		var len = new Array();
		len[sel] = Math.floor(Math.random()*5+baselen);
		baselen = len[sel];
		var inf = document.getElementsByClassName("attack_information");
		for(var i = 0; i <= 9; i++)
		{
			if(i != sel)
				len[i] = Math.ceil(Math.random()*5+len[sel]);
			inf[i].innerHTML="Injecting\"secret="+known.substr(0,cnt)+ i +"\", received a response of length " + len[i];
		}
	}
	function verify()
	{
		var guess = document.getElementById("attack_input").value;
		document.getElementById("attack_input").value = "";
		if(cnt == 5) 
		{
			alert("Please press RESET to try another secret.");
			return;
		}
		if(guess == "")
			alert("Please enter your guess!");
		else if(guess == secret.substr(cnt,1))
		{
			known = known.substr(0,cnt) + guess + known.substring(cnt+1,5);
			document.getElementById("known").innerHTML="The secret : " + known;
			cnt++;
			b = true;
			
			if(cnt<5)
				alert("correct guess! attack for next digit.");
			else if(cnt==5)
				alert("Congratulations! You've got the secret.");
		}
		else
		{
			alert("Wrong guess, try again!");
		}
	}
function showText(textId) {
    var textContents = document.querySelectorAll('.text-content');
    var videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.style.display = 'none'; // 隐藏视频

    textContents.forEach(function(textContent) {
        textContent.style.display = 'none'; // 隐藏所有文本内容
    });

    var textToShow = document.getElementById('text' + textId);
    textToShow.style.display = 'block'; // 显示相应的文本内容
}

function showVideo() {
    var textContents = document.querySelectorAll('.text-content');
    var videoPlayer = document.getElementById('videoPlayer');

    textContents.forEach(function(textContent) {
        textContent.style.display = 'none'; // 隐藏所有文本内容
    });

    videoPlayer.style.display = 'block'; // 显示视频
	videoPlayer.style.width = '76%'; // 设置视频宽度为100%
    videoPlayer.style.height = '84%'; // 设置视频高度为100%
    videoPlayer.style.position = 'absolute'; // 设置视频定位方式为绝对定位
    videoPlayer.style.top = '50%'; // 设置视频顶部偏移为50%
    videoPlayer.style.left = '50%'; // 设置视频左侧偏移为50%
    videoPlayer.style.transform = 'translate(-50%, -50%)'; // 将视频向左上角偏移50%的宽度和高度
    videoPlayer.style.objectFit = 'fill'; // 设置视频填充模式为填充整个容器
}
