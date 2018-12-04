$( document ).ready(function() {

  var contents = [
    [ "1982884-200", 
      "Weihnachtsmärkte in Münster",
      "Eine kleine Webapp, mit der man den Münsteraner Weihnachtsmarkt durchsuchen kann.",
      "https://weihnachtsmarkt.ms/"
    ], 
    [ "2018116-200",
      "Rette Deinen Nahverkehr",
      "Eine Aktion der Open Knowledge Foundation Deutschland e.V. zur Förderung Offener ÖPNV-Daten.",
      "https://rettedeinennahverkehr.de/"
    ], 
    [ "771074-200",
      "kleine Anfragen",
      "Sogenannte “kleine Anfragen” von Parlamentariern müssen von ihrer jeweiligen Regierung zeitnah und öffentlich beantwortet werden. Diese Seite sammelt solche Anfragen, weil in den Antworten oft interessante Details stecken, und versucht sie auffindbar, durchsuchbar und verlinkbar zu machen.",
      "https://kleineanfragen.de/"
    ],  
    [ "1417389-200",
      "Bahn-Preiskalender",
      "Klein aber Oho!: mit dieser App kannst du herausfinden, an welchen Tagen es am günstigsten ist, mit der Bahn zu fahren.",
      "https://bahn.guru/"
    ], 
    [ "2014873-200",
      "Politik Bei Uns",
      "Politik bei uns macht die Politik vor Ort transparenter. Dazu werden Informationen und öffentliche Dokumente werden aus den Ratsinformationssystemen der Städte und Kommunen ausgelesen und in einer übersichtlichen und strukturierten Form präsentiert.",
      "https://politik-bei-uns.de/"
    ]
      , "amet", "consect", "adipisci", "elit,", "sed.", "Eiusmod", "tempor", "a", "enim", "minim", "season", "nulla", "dolore", "sint", "id", "est", "laboris", "ut.", "aute", "laborum", "toe"];
 console.log("test");
  var message = "";
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var scrolled = false;
  var timeDelay = 200;

  // function to reveal message
  var cardReveal = function() {

  }  

  // day=25; // uncomment to skip to 25

  // Only work in December
  if(month === 12) {
    // Loop through each calendar window
    $("li").each( function( index ) {
      var adventwindow = index + 1;
      var item = $(this);

      // Open past windows
      if( day !== adventwindow && adventwindow < day ) {
        window.setTimeout(function(){
          item.children(".door").addClass("open");
        }, timeDelay);
      }

      // timeout offset for past window opening animation
      timeDelay += 100;

      // Add content
      var content = contents[index];
      var iconcode = content[0];
      var headline = content[1];
      var description = content[2];
      var link = content[3];

      if( adventwindow <= day ) {
        $(this).append('<div class="revealed"><img src="img/' + iconcode + '.png" /></div>');
      }

      // Add jiggle animation to current day window
      if(adventwindow === day) {
        $(this).addClass("current");
        $(this).addClass("jiggle");
      }

      // On clicking a window, toggle it open/closed and
      // handle other things such as removing jiggle and 25th
      $(this).on("click", function() {
        if(adventwindow <= day) { 

          if ($(this).children(".door").hasClass('open')) {
            $('#js-overlay-content').html(
              '<h1>'+headline+'</h1><p>' 
              + description 
              + '</p><br /><a target="_blank" href="' + link + '">Hier gehts zum Projekt &gt;&gt;<br />'
              + '<img src="img/' + iconcode + '.png" /></a>'
            );

            novicell.overlay.create({
              'selector': '#js-overlay-content',
              'class': 'selector-overlay',
            });
          } else {
            $(this).children(".door").toggleClass("open");
          }
        
 
          $(this).removeClass("jiggle");

          // If 25th, can show the message
          if(day >= 25 && adventwindow === 25) {
            messageReveal();

            // Animate scroll to message if not already done
            if(!scrolled) {
              $('html, body').animate({
                scrollTop: $("#message").offset().top
              }, 2000);
              scrolled = true;
            }
          }
        }
      });

    });

    // If beyond 24, show message
    if(day >= 26){
      messageReveal();
    }

  }

});