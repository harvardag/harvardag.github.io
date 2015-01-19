// Magnet Admin Dropdown


// Adds hover effects to images and magnet admin dropdown
$(document).ready(function() {	
	
	// remove no-script warning
	$(".no-script").css("display","none");
	
	// make admin menu start out with no display and position absolute
	$("#magnet-admin ul").addClass("admin-dropdown");
	$("#magnet-admin ul").css("display","none");
	

	// Add image hover
	imghover("#soundcloud","#soundcloud","assets/img/soundcloud.png","assets/img/soundcloud_hov.png");
	imghover("#linkedin","#linkedin","assets/img/linkedin.png","assets/img/linkedin_hov.png");
	imghover("#rss","#rss","assets/img/rss.png","assets/img/rss_hov.png");
	imghover("#haa","#haa","assets/img/haalogo.png","assets/img/haalogo_hov.png");
	imghover(".alumnimagnet-link","#alumnimagnet","assets/img/alumnimagnet.png","assets/img/alumnimagnet_hov.png");
	
	$("#magnet-admin").first().hover(
		function() {
			$("#magnet-admin ul").css("display","block");
		},
		function() {
			$("#magnet-admin ul").css("display","none");
		}
	);
	
	// Add image lightbox to gallery images
	$('.gallery a').lightbox();
	
});

// Make these items responsive:
//     - center column on portal page and featured alumni page
//	   - images on article and featured alumni page
$(window).load(function() {

	// Dynamically resize height of center column to match that of side columns
	// (This is a workaround that lets the side columns be fixed width rather than fluid)
		
	// Check if this is a portal page
	if ($("#portal-center-wrapper").length) {
		var pInit = $("#portal-center-wrapper").height();
		resizeportal(pInit);	
		$(window).resize(function(){
			resizeportal(pInit);
		});		
	}
	
	if ($("#double-center-wrapper").length) {
		var dInit = $("#double-center-wrapper").height();
		resizedouble(dInit);	
		$(window).resize(function(){
			resizedouble(dInit);
		});		
	}

	// On article page and featured alumni page, make images respond to page size. Minimum image size is 290px
	// since minimum page width is 320px.
	var page = location.pathname.split('/').slice(-1)[0];
	if (page == "article.html") {
		var imgs = $("table.normaltext img");
		imgs.each(function(){
			// For all images that DON'T have source pixel.gif OR class img-static:
			if ($(this).prop('src').match('[^/]*$')[0] != "pixel.gif" && !$(this).hasClass('img-static')) {
				// On window resize, make sure the image scales accordingly.
				var initW = $(this).width();
				$(this).css("height","auto");
				
				var img = this;
				resizeimg(img,initW);				
				$(window).resize(function(){						
					resizeimg(img,initW);
				});									
			}			
		});
	}	
})
	
// Function resizes image if container is small
function resizeimg(img,imgw) {
	var cwidth = $(".container").first().width();
	if (imgw >= cwidth) {
		$(img).width(cwidth);
	}		
}

// Function resizes portal content
function resizeportal(ph){
	var portalw = Number($("#portal-center-wrapper").css('margin-left').replace(/[^\d\.\-]/g, '')) + Number($("#portal-center-wrapper").css('margin-right').replace(/[^\d\.\-]/g, ''));
	var cheight = $("#portal-center-wrapper").height();
	var lheight = $("#portal-left-wrapper").height();
	var rheight = $("#portal-right-wrapper").height();	
	// Three column page responsiveness:
	if (portalw == 450) {
		$("#portal-center-wrapper").height(
			Math.max(ph,cheight,lheight,rheight)
		);		
	} else if (portalw == 225) {
		$("#portal-center-wrapper").height(
			Math.max(ph,cheight,rheight)
		);
	} else {
		$("#portal-center-wrapper").height(
			'100%'
		)
	}
}

// Function resizes two column content
function resizedouble(dh){	
	var doublew = Number($("#double-center-wrapper").css('margin-right').replace(/[^\d\.\-]/g, ''));
	var cheight = $("#double-center-wrapper").height();
	var rheight = $("#double-right-wrapper").height();
	// Two column page responsiveness:
	if (doublew >= 225) {		
		$("#double-center-wrapper").height(
			Math.max(dh,cheight,rheight)
		);		
	} else {		
		$("#double-center-wrapper").height(
			'100%'
		);
	}
}


// Image hover function.
function imghover(parentid,childid,img,hov) {	
	$(parentid).hover(function() {
		$(childid).attr("src",hov);
			}, function() {
		$(childid).attr("src",img);
	});
}

// Toggle function from AlumniMagnet
function toggle( targetId ){
  if (document.getElementById){
        target = document.getElementById( targetId );
           if (target.style.display == "none"){
              target.style.display = "";
           } else {
              target.style.display = "none";
           }
     }
}

// Toggle from HBSAB.ORG
    function toggle_visibility(id, butt) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
	   {
          e.style.display = 'none';
		  document.getElementById(butt).innerHTML='+ More Info';
	   }
       else
	   {
          e.style.display = 'block';
		  document.getElementById(butt).innerHTML='- Less Info';
	   }
    }
	