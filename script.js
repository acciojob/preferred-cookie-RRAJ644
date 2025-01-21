//your JS code here. If required.
let rootelem = document.querySelector(':root');
let submitbtn=document.querySelector('[type="submit"]');

submitbtn.addEventListener('click',savefunc);

function savefunc(event) {
	event.preventDefault();
	let fontsize=document.getElementById('fontsize').value;
   let fontcolor=document.getElementById('fontcolor').value;
	document.cookie='fontsize='+fontsize+';'+'max-age=10000000;';
	document.cookie='fontcolor='+fontcolor+';'+'max-age=10000000;';

	if(document.cookie!=='')
{
	console.log("whihier93284")
	let cookies=document.cookie.split(';');
	let ans=false;
	for (let i = 0; i < cookies.length; i++) {

		if (cookies[i].includes('fontsize')) {
		  console.log(cookies[i] + "fre");
		  ans=true;
		}
	}
	if(ans)
			{
		console.log("whihier")
		document.documentElement.style.setProperty('--fontsize',fontsize+"px");
		document.documentElement.style.setProperty('--fontcolor',fontcolor);
		console.log(document.cookie)
	}
}
}

