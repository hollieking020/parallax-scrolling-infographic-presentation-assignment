var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
							
							triggerElement: "#trigger1",
							triggerHook: 0.9,
							offset: 50, // move trigger to center of element
							reverse: false // only do once
						})
						.setClassToggle("#reveal1", "visible") // add class toggle
						.addTo(controller);


new ScrollMagic.Scene({
							triggerElement: "#trigger2",
							triggerHook: 0.9, // show, when scrolled 10% into view
							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal2", "visible") // add class to reveal
						
						.addTo(controller);


new ScrollMagic.Scene({
							triggerElement: "#trigger3",
							triggerHook: 0.5, // show, when scrolled 10% into view
							duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal3", "visible") // add class to reveal
						.addTo(controller);



var xValues = ["miss lectures to earn money for costs", " considered dropping out with finances playing a key role", "seriously considered withdrawing from their course due to financial or employment reasons"];
var yValues = [55, 33, 15];
var barColors = [
  "#d2eeae",
  "#accfd2",
  "#728b8d"
];

new Chart("myChart3", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "% of DCU students who.."
    }
  }
});

new ScrollMagic.Scene({
							
							triggerElement: "#trigger4",
							triggerHook: 0.9,
							offset: 80, // move trigger to center of element
							reverse: true // only do once
						})
						.setClassToggle("#reveal4", "visible") // add class toggle
						
						.addTo(controller);



new ScrollMagic.Scene({
							triggerElement: "#trigger5",
							triggerHook: 0.5, // show, when scrolled 10% into view
							duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal5", "visible") // add class to reveal
						
						.addTo(controller);

var xValues = ["have faced an accomodation scam", "have to share a room with one or more persons","took over 100 days to find accomodation"];
var yValues = [49, 29, 10];
var barColors = ["#d2eeae",
  "#accfd2",
  "#728b8d"];

Chart.register(ChartDeferred);
new Chart("myChart2", {
   
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Percentages Of International Students interviewed Who....',
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
      
        legend: {display: false},
        title: {
          display: false,
          text: "2022 statistics"
        },
        plugins: {
            deferred: {
                xOffset:150,
                yOffset: '10%',
                delay: 500
            }
        }
    }
});


new ScrollMagic.Scene({
							triggerElement: "#trigger6",
							triggerHook: 0.9, // show, when scrolled 10% into view
							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal", "visible") // add class to reveal
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);

new ScrollMagic.Scene({
							triggerElement: "#trigger7",
							triggerHook: 0.9, // show, when scrolled 10% into view
							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal8", "visible") // add class to reveal
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);


new ScrollMagic.Scene({
							
							triggerElement: "#trigger8",
							triggerHook: 0.9,
							offset: 50, // move trigger to center of element
							reverse: false // only do once
						})
						.setClassToggle("#reveal5", "visible") // add class toggle
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);

new ScrollMagic.Scene({
							triggerElement: "#trigger10",
							triggerHook: 0.5, // show, when scrolled 10% into view
							duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
							offset: 50 // move trigger to center of element
						})
						.setClassToggle("#reveal10", "visible") // add class to reveal
						
						.addTo(controller);

var xValues = [2008, 2023];

new Chart("myChart4", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                label: "Increase In Average Rent",
                data: [1030, 1500],
                borderColor: "#728b8d",
                fill: false
            },
            {
                label: "Increase In Average Rent"
            }
        ]
    },
    options: {
        legend: { display: false }
    }
});
new ScrollMagic.Scene({
							
							triggerElement: "#trigger10",
							triggerHook: 0.9,
							offset: 50, // move trigger to center of element
							reverse: false // only do once
						})
						.setClassToggle("#reveal4", "visible") // add class toggle
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);
new ScrollMagic.Scene({
							
							triggerElement: "#trigger11",
							triggerHook: 0.9,
							offset: 20, // move trigger to center of element
							reverse: false // only do once
						})
						.setClassToggle("#reveal4", "visible") // add class toggle
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);
new ScrollMagic.Scene({
							
							triggerElement: "#trigger12",
							triggerHook: 0.9,
							offset: 20, // move trigger to center of element
							reverse: false // only do once
						})
						.setClassToggle("#reveal6", "visible") // add class toggle
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);