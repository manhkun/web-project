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