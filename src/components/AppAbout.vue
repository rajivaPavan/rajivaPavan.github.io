<script>
export default {
  name: 'AppAbout',
  data() {
    return {
      bioDataTable:{
        columnCount: 2,
        columnNumbers:[]
      },
      bioDataList: [
        { name: 'Age', value: 21 },
        { name: 'Email', value: 'pavanpitiwaduge@outlook.com' },
        { name: 'Degree', value: 'BSc in Computer Science Engineering' },
        { name: 'Freelance', value: 'Available' }
      ]
    }
  },
  methods: {
    //get every nth element from bioDataList starting from given index
    getBioDataList(index, nth) {
      return this.bioDataList.filter((item, i) => i >= index && i % nth === 0);
    },
    getColumnNumbers(){
      //return an array of numbers from 1 to columnCount
      return Array.from(Array(this.bioDataTable.columnCount).keys());
    }
  },
  mounted(){
    // fill columnNumbers array with numbers from 1 to columnCount
    this.bioDataTable.columnNumbers = this.getColumnNumbers();
  }
}
</script>
<template>
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>About</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <img src="../assets/img/profile-img.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Web Developer.</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li v-for="bioData in bioDataList">
                  <i class="bi bi-chevron-right"></i> <strong>{{bioData.name}}: </strong> <span>{{ bioData.value }}</span></li>
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.
            Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

.about .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #728394;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.about .content ul strong {
  margin-right: 10px;
}

.about .content ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #0563bb;
  line-height: 0;
}

.about .content p:last-child {
  margin-bottom: 0;
}
</style>