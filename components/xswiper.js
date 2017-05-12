//轮播图组件
Vue.component("xswiper", {
	template:`
	    	<div class="swiper-container">
					<div class="swiper-wrapper">
					<div class="swiper-slide"><img src="../img/b1.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b2.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b3.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b4.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b5.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b6.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b7.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b8.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b9.jpg" /></div>
		            <div class="swiper-slide"><img src="../img/b10.jpg" /></div>
		        </div>

        		<div class="swiper-pagination"></div>
    			</div>	
	    	`,
	    	ready:function(){
	    		var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
	    	}
	    })