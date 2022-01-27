// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var newData = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    var newArray = newData.filter(element => element.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.

    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var newResult = newArray[0];
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = chartResult.otu_ids;
    var otuLabels = chartResult.otu_labels;
    var sampleValues = chartResult.sample_values;
    console.log(sampleValues);
    console.log(otuIds);


    // 3. Create a variable that holds the washing frequency.
   var washFreq = data.metadata.wfreq;
    // Create the yticks for the bar chart.
    var yticks = otuIds.sort((a,b)=> b - a).slice(0, 10).reverse();
    // Use Plotly to plot the bar data and layout.
    // Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    // Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0, 1], y: [0, 1] },
		  value: 270,
		  title: { text: "Speed" },
		  type: "indicator",
		  mode: "gauge+number"
    }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      width: 600, height: 500, margin: { t: 0, b: 0 }
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("guage",gaugeData,gaugeLayout);
  });
}
