// Uses JQuery to do an image hover on images of class cls
function imghover(parentcls,childcls,img,hov) {
	
	$(document).ready(function(){
		$(parentcls).hover(function() {
			$(childcls).attr("src",hov);
				}, function() {
			$(childcls).attr("src",img);
		});
	});
		
}

imghover(".soundcloud",".soundcloud","assets/img/soundcloud.png","assets/img/soundcloud_hov.png");
imghover(".linkedin",".linkedin","assets/img/linkedin.png","assets/img/linkedin_hov.png");
imghover(".rss",".rss","assets/img/rss.png","assets/img/rss_hov.png");
imghover(".haa",".haa","assets/img/haalogo.png","assets/img/haalogo_hov.png");
imghover(".alumnimagnet-link",".alumnimagnet","assets/img/alumnimagnet.png","assets/img/alumnimagnet_hov.png");

