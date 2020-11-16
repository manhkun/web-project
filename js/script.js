function imagePost(input) {
  
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      var i = 1;
  
      reader.onload = function(e) {
        $('.image-uploaded img').attr('src', e.target.result).show();
        $('.image-uploaded').removeAttr('hidden');
        $('.image-uploaded').insertBefore(".image-upload");
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("input[id^='file-input']").change(function() {
    imagePost(this);
  });

  $(".btn-notify").click(function(){
    $(".notify-container").toggle();
  })

  $(".post-status-nav .posted").click(function(){
    $(this).addClass("active");
    $(".reject-post, .await-accept").removeClass("active");
    $(".list-posted").show();
    $(".list-denied, .list-pending").hide();
  });

  $(".post-status-nav .reject-post").click(function(){
    $(this).addClass("active");
    $(".posted, .await-accept").removeClass("active");
    $(".list-denied").show();
    $(".list-posted, .list-pending").hide();
  });

  $(".post-status-nav .await-accept").click(function(){
    $(this).addClass("active");
    $(".posted , .reject-post").removeClass("active");
    $(".list-pending").show();
    $(".list-posted, .list-denied").hide();
  });