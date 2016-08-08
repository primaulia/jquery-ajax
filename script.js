$(function(){

  // 2. changing to jquery format, notice we don't define the XHR class anymore
  var $btn = $('#request');
  var $bio = $('#bio');
  var url = "http://127.0.0.1:4000/node/day1/bio-jquery/bio.txt";

  $btn.on('click', function() {
    // 3. testing if btn click happened
    // alert('test click');

    // 4. hide button upon click
    $(this).hide();

    // 5. similar to checking ready state, but call it in as callback
    $bio.load(url, captureError);
  });

  function captureError(responseText, textStatus, request) {
    // 6. see the return $.load();
    console.log(responseText, textStatus, request);

    alert(request.readyState);
    alert(textStatus);
    alert(responseText);

    // 7. implement changes as per first lab
    $bio.css('border', '1px solid #e8e8e8');

    // 8. check if the callback can detect error by changing the url
    if(textStatus == 'error') {
        $bio.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    }
  }
});
