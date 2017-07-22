$(document).ready(function () {
  $('select').material_select();

  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });

  $('.parallax').parallax();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

  Highcharts.chart('skillsChart', {
    chart: {
      type: 'column'
    },
    title: {
      text: '',
      style: {
        display: 'none'
      }
    },
    subtitle: {
      text: '',
      style: {
        display: 'none'
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'HTML',
        'CSS',
        'JavaScript',
        'AngularJS',
        'jQuery',
        'Bootstrap',
        'Responsive Design'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Value',
      data: [70, 65, 70, 80, 55, 75, 60]

    }]
  });

  Highcharts.chart('languagesChart', {
    chart: {
      type: 'column'
    },
    title: {
      text: '',
      style: {
        display: 'none'
      }
    },
    subtitle: {
      text: '',
      style: {
        display: 'none'
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'C#',
        'JavaScript',
        'HTML',
        'Java',
        'jQuery',
        'PHP',
        'SQL',
        'NodeJS'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Value',
      data: [60, 70, 65, 50, 55, 80, 60, 30]

    }]
  });


  function goToByScroll(id) {
    // Reove "link" from the ID
    id = id.replace("_link", "");
    // Scroll
    $('html,body').animate({
      scrollTop: $("#" + id).offset().top
    },
      'slow');
  }

  $("#sidebar > div > div > ul > li > a").click(function (e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr("id"));
  });

  $("#mobile-demo > li > a").click(function (e){
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr("id"));
  });

  $('#spnTop').on("click", function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
    });
  });

  $('#tap-discovery').on('click', function () {
    $('.tap-target').tapTarget('open');
  });

  $('#spnDiscovery').on('click', function () {
    $('.tap-target').tapTarget('open');
  });

});