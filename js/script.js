const app = new Vue({
	el: "#root",
	data: {
		images: [
			{
				src: "https://www.visitlevanto.it/app/uploads/2018/07/riomaggiore-raul-taciu.jpg",
				title: "Riomaggiore"
			},
			{
				src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/04/a2/64/tre-terrazzi.jpg?w=900&h=-1&s=1",
				title: "Vernazza"
			},
			{
				src: "https://lp-cms-production.imgix.net/2019-06/b17be75aaa7d15b4b9afa001a91ba45d-corniglia.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312",
				title: "Corniglia"
			}
			
		],
		imageIndex: 0,
		autoplayID: null
	},
	methods: {
		nextImage: function() {
			this.imageIndex++;

			if ( this.imageIndex >= this.images.length ) {
				this.imageIndex = 0;
			}
		},
		prevImage: function() {
			this.imageIndex--;

			if ( this.imageIndex == -1 ) {
				this.imageIndex = this.images.length - 1;
			}
		},
		isBulletActive: function(indexBullet) {
			if ( this.imageIndex == indexBullet ) {
				return 'far';
			}
			return 'fas';
		},
		startAutoplay: function() {
			this.autoplayID = setInterval(this.nextImage, 2000);
		},
		stopAutoplay: function() {
			if(this.autoplayID != null) {
				clearInterval(this.autoplayID);
			}
		}
	},
	mounted: function() {
		this.startAutoplay();
		// navigazion da tastiera
		document.addEventListener("keydown", 
			(event) => {
				if(event.key == "ArrowRight") {
					this.nextImage();
				} else if (event.key == "ArrowLeft") {
					this.prevImage();
				}
			}
		);
	}
});

