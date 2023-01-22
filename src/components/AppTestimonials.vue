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