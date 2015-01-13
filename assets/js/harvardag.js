// Uses JQuery to do an image hover on images of class cls
function imghover(cls,img,hov) {
	
	$(document).ready(function(){
		$(cls).hover(function() {
			$(this).attr("src",hov);
				}, function() {
			$(this).attr("src",img);
		});
	});
		
}

imghover(".soundcloud","assets/img/soundcloud.png","assets/img/soundcloud_hov.png");
imghover(".linkedin","assets/img/linkedin.png","assets/img/linkedin_hov.png");
imghover(".rss","assets/img/rss.png","assets/img/rss_hov.png");

