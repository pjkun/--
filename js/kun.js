$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],		
	    afterLoad: function(anchorLink, index){
//	    	第1页进入动画
			if(index == 1){
				$('.section1').find('.haohua').stop().animate({opacity:'1'},500);	
                $('.section1').find('.kaitong').stop().animate({opacity:'1'},1500);	
                $('.section1').find('.youyue').stop().animate({opacity:'1'},1000);	
			}
//	    	第2页进入动画			
            if(index == 2){
				$('.section2').find('.light').stop().fadeIn(500);
				$('.whitebox').find('.section2kuai1').stop().animate({top:'10%',opacity:'1'},200);
				$('.whitebox').find('.section2kuai2').stop().animate({top:'35%',opacity:'1'},600);
				$('.whitebox').find('.section2kuai3').stop().animate({top:'50%',opacity:'1'},1000);
				$('.lightMove1').animate({right:'1.5%',top:'21.5%',opacity:'1'});		
			}
//	    	第3页进入动画            
            if(index == 3){
            	$('.section3').find('.section3Light1').stop().animate({right:'0%',top:'50%',opacity:'1'},300);
				$('.section3').find('.section3Light2').stop().animate({right:'77%',top:'42%',opacity:'1'},800);
				$('.section3').find('.section3Light3').stop().animate({right:'18%',top:'42%',opacity:'1'},1200);
				$('.whitebox').find('.section3kuai1').stop().animate({top:'10%',opacity:'1'},200);
				$('.whitebox').find('.section3kuai2').stop().animate({top:'35%',opacity:'1'},600);
				$('.whitebox').find('.section3kuai3').stop().animate({top:'50%',opacity:'1'},1000);					
			}
//	    	第4页进入动画            
            if(index == 4){
            	$('.section4').find('.section4Light1').stop().animate({right:'5%',top:'0%',opacity:'1'},300);
				$('.section4').find('.section4Light2').stop().animate({right:'62%',top:'40%',opacity:'1'},1200);
				$('.section4').find('.section4Light3').stop().animate({right:'5%',top:'50%',opacity:'1'},1200);
				$('.whitebox').find('.section4kuai1').stop().animate({top:'10%',opacity:'1'},200);
				$('.whitebox').find('.section4kuai2').stop().animate({top:'35%',opacity:'1'},600);
				$('.whitebox').find('.section4kuai3').stop().animate({top:'50%',opacity:'1'},1000);	
			}
//	    	第5页进入动画            
            if(index == 5){
            	$('.section5').find('.section5Light1').stop().animate({right:'45%',top:'0%',opacity:'1'},500);
				$('.section5').find('.section5Light2').stop().animate({right:'70%',top:'35%',opacity:'1'},500);
				$('.section5').find('.section5Light3').stop().animate({right:'5%',top:'58%',opacity:'1'},800);
				$('.section5').find('.section5Light4').stop().animate({right:'30%',top:'5%',opacity:'1'},1200);
				$('.whitebox').find('.section5kuai1').stop().animate({top:'10%',opacity:'1'},200);
				$('.whitebox').find('.section5kuai2').stop().animate({top:'35%',opacity:'1'},600);
				$('.whitebox').find('.section5kuai3').stop().animate({top:'50%',opacity:'1'},1000);	
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
//	    	第1页退出动画				
				$('.section1').find('.haohua').stop().animate({opacity:'0'});	
                $('.section1').find('.kaitong').stop().animate({opacity:'0'});	
                $('.section1').find('.youyue').stop().animate({opacity:'0'});
			}
//	    	第2页退出动画			
			if(index == '2'){
				$('.section2').find('.light').stop().fadeOut(500);
				$('.whitebox').find('.section2kuai1').stop().animate({top:'20%',opacity:'0'});
				$('.whitebox').find('.section2kuai2').stop().animate({top:'55%',opacity:'0'});
				$('.whitebox').find('.section2kuai3').stop().animate({top:'70%',opacity:'0'});
				$('.lightMove1').animate({right:'0%',top:'20%'});
			}
//	    	第3页退出动画			
			if(index == '3'){
				$('.section3').find('.section3Light1').stop().animate({right:'5%',top:'40%',opacity:'0.4'});
				$('.section3').find('.section3Light2').stop().animate({right:'80%',top:'40%',opacity:'0.4'});
				$('.section3').find('.section3Light3').stop().animate({right:'20%',top:'40%',opacity:'0.4'});
				$('.whitebox').find('.section3kuai1').stop().animate({top:'20%',opacity:'0'});
				$('.whitebox').find('.section3kuai2').stop().animate({top:'55%',opacity:'0'});
				$('.whitebox').find('.section3kuai3').stop().animate({top:'70%',opacity:'0'});
			}
//	    	第4页退出动画			
			if(index == '4'){
				$('.section4').find('.section4Light1').stop().animate({right:'0%',top:'0%',opacity:'0.4'});
				$('.section4').find('.section4Light2').stop().animate({right:'55%',top:'35%',opacity:'0.4'});
				$('.section4').find('.section4Light3').stop().animate({right:'0%',top:'45%',opacity:'0.4'});
				$('.whitebox').find('.section4kuai1').stop().animate({top:'20%',opacity:'0'});
				$('.whitebox').find('.section4kuai2').stop().animate({top:'55%',opacity:'0'});
				$('.whitebox').find('.section4kuai3').stop().animate({top:'70%',opacity:'0'});
			}
//	    	第5页退出动画			
			if(index == '5'){
				$('.section5').find('.section5Light1').stop().animate({right:'50%',top:'0%',opacity:'0.4'});
				$('.section5').find('.section5Light2').stop().animate({right:'75%',top:'35%',opacity:'0.4'});
				$('.section5').find('.section5Light3').stop().animate({right:'0%',top:'58%',opacity:'0.4'});
				$('.section5').find('.section5Light4').stop().animate({right:'35%',top:'0%',opacity:'0.4'});
				$('.whitebox').find('.section5kuai1').stop().animate({top:'20%',opacity:'0'});
				$('.whitebox').find('.section5kuai2').stop().animate({top:'55%',opacity:'0'});
				$('.whitebox').find('.section5kuai3').stop().animate({top:'70%',opacity:'0'});
			}
		},
//		导航栏显示
		'navigation': true,
//      导航栏位于左端
		'navigationPosition': 'left',
	});
});

//首页动画初始化
$('.section1').find('.haohua').animate({opacity:'1'},600);	
$('.section1').find('.kaitong').animate({opacity:'1'},1600);	
$('.section1').	find('.youyue').animate({opacity:'1'},1100);	

//首页鼠标悬停
$(".a1").mouseenter(function(){
	$(".a1").css("color","#23B45B");
}).mouseleave(function(){
	$(".a1").css("color","#FFFFFF");
});

$(".a2").mouseenter(function(){
	$(".a2").css("color","#23B45B");
}).mouseleave(function(){
	$(".a2").css("color","#FFFFFF");
});

$(".a3").mouseenter(function(){
	$(".a3").css("color","#23B45B");
}).mouseleave(function(){
	$(".a3").css("color","#FFFFFF");
});

$(".kaitong").mouseenter(function(){
	$(".kaitong").css("background","#23b45b");
}).mouseleave(function(){
	$(".kaitong").css("background","#31c27c");
});

$(".a4").mouseenter(function(){
	$(".a4").css("text-decoration","underline");
}).mouseleave(function(){
	$(".a4").css("text-decoration","none");
});

//第二页鼠标悬停
$(".section2a1").mouseenter(function(){
	$(".section2p1").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section2p1").css("text-decoration","none");
});

$(".section2a2").mouseenter(function(){
	$(".section2p2").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section2p2").css("text-decoration","none");
});

$(".section2a3").mouseenter(function(){
	$(".section2p3").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section2p3").css("text-decoration","none");
});
//第三页鼠标悬停
$(".section3a1").mouseenter(function(){
	$(".section3p1").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section3p1").css("text-decoration","none");
});

$(".section3a2").mouseenter(function(){
	$(".section3p2").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section3p2").css("text-decoration","none");
});

$(".section3a3").mouseenter(function(){
	$(".section3p3").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section3p3").css("text-decoration","none");
});

$(".section3a4").mouseenter(function(){
	$(".section3p4").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section3p4").css("text-decoration","none");
});

//第四页鼠标悬停
$(".section4a1").mouseenter(function(){
	$(".section4p1").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section4p1").css("text-decoration","none");
});

$(".section4a2").mouseenter(function(){
	$(".section4p2").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section4p2").css("text-decoration","none");
});

$(".section4a3").mouseenter(function(){
	$(".section4p3").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section4p3").css("text-decoration","none");
});

//第五页鼠标悬停
$(".section5a1").mouseenter(function(){
	$(".section5p1").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section5p1").css("text-decoration","none");
});

$(".section5a2").mouseenter(function(){
	$(".section5p2").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section5p2").css("text-decoration","none");
});


//首页底部鼠标动态
$(".section2kuai3 a").mouseenter(function(){
	$(".section2kuai3 a").css("text-decoration","underline");
}).mouseleave(function(){
	$(".section2kuai3 a").css("text-decoration","none");
});

$(".dinianfei").mouseenter(function(){
	$(".dinianfei").stop().animate({opacity:'1'},100);
}).mouseleave(function(){
	$(".dinianfei").stop().animate({opacity:'0.5'},100);
});

$(".dibao").mouseenter(function(){
	$(".dibao").stop().animate({opacity:'1'},100);
}).mouseleave(function(){
	$(".dibao").stop().animate({opacity:'0.5'},100);
});
