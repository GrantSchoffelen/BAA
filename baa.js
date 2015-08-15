
$(document).ready(function(){
	$("#survey").click(function(){
		var scriptTag = '<script id="surveyscript">(function(t,e,o,s){var n,c,i;t.SMCX=t.SMCX||[],e.getElementById(s)||(n=e.getElementsByTagName(o),c=n[n.length-1],i=e.createElement(o),i.type="text/javascript",i.async=!0,i.id=s,i.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/gKpSq2y1AYlqv0B4v571O4X8r5FpQV5YNVsHt4MjKojiuCuaw7Uh2BiddmA5fL2F.js"].join(""),c.parentNode.insertBefore(i,c))})(window,document,"script","smcx-sdk");</script>'
		$('body').append(scriptTag);
		$('#smcx-sdk').remove()
	})
});
