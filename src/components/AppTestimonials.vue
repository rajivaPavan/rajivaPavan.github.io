<script>
export default {
  name: 'AppTestimonials',
  data() {
    return {
      testimonials: [
        {
          img: '../assets/img/testimonials/testimonials-1.jpg',
          name: 'Saul Goodman',
          title: 'Ceo & Founder',
          text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
        },
        {
          img: '../assets/img/testimonials/testimonials-2.jpg',
          name: 'Jane Smith',
          title: 'Designer',
          text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
        }
      ]
    }
  }
}
</script>

<template>
  <section id="testimonials" class="testimonials section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Testimonials</h2>
      </div>

      <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">

          <div class="swiper-slide" v-for="testimonial in testimonials">
            <div class="testimonial-item">
              <img :src="testimonial.img" class="testimonial-img" alt="">
              <h3>{{ testimonial.name }}</h3>
              <h4>{{ testimonial.title }}</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                {{ testimonial.text }}
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div><!-- End testimonial item -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>


<style scoped>

/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
.testimonials .section-header {
  margin-bottom: 40px;
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  text-align: center;
}

.testimonials .testimonial-item .testimonial-img {
  width: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  margin: 0 auto;
}

.testimonials .testimonial-item h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #111;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #999;
  margin: 0 0 15px 0;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: #90c8fc;
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 auto 15px auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #0563bb;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #0563bb;
}

@media (min-width: 992px) {
  .testimonials .testimonial-item p {
    width: 80%;
  }
}

</style>