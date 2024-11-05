const InputData = {
    template: `
      <div>
        <h3>Enter the data for the charts</h3>
        <div v-for="(chart, index) in charts" :key="index" class="chart-input">
          <label :for="'label' + index">Chart name:</label>
          <input v-model="chart.label" type="text" :id="'label' + index" placeholder="write the name of the chart" />
          
          <label :for="'value' + index">Percent:</label>
          <input v-model.number="chart.value" type="number" :id="'value' + index" min="0" max="100" placeholder="Процент" />
          
          <button @click="removeChart(index)" class="delete-btn">Delete</button>
        </div>
  
        <button @click="addChart" class="add-btn">Add a chart</button>
      </div>
    `,
    data() {
      return {
        charts: [{ label: '', value: 0 }],
      };
    },
    methods: {
      addChart() {
        this.charts.push({ label: '', value: 0 });
      },
      removeChart(index) {
        this.charts.splice(index, 1);
      },
    },
  };

  const ChartDisplay = {
    template: `
      <div>
        <h3>Charts</h3>
        <div v-for="(chart, index) in charts" :key="index" class="chart-container">
          <div class="chart-label">{{ chart.label }}: {{ chart.value }}%</div>
          <div class="chart" :style="{ width: chart.value + '%' }"></div>
        </div>
      </div>
    `,
    props: {
      charts: {
        type: Array,
        required: true,
      },
    },
  };

  const mainDiagram = {
    template: `
      <div>
        <InputData v-model="charts" />
        <ChartDisplay :charts="charts" />
      </div>
    `,
    components: {
      InputData,
      ChartDisplay,
    },
    data() {
      return {
        charts: [{ label: 'Chart 1', value: 50 }],
      };
    },
  };

  Vue.createApp(mainDiagram).mount('#app');