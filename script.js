// validating email form
$(document).ready(function()
{
  $('#signup-form').validate(
  {
    rules:
    {
      mailid:
      {
        required: true,
        email:true
      },
      mailidbottom:
      {
        required: true,
        email:true
      }
    }
  })
})
// event listener for opening and closing an accordion (to make checkbox work like radio)
document.querySelectorAll('.accordion input[type="checkbox"]').forEach(checkbox => 
{
  checkbox.addEventListener('change', function() 
  {
    if (this.checked) 
    {
      document.querySelectorAll('.accordion input[type="checkbox"]').forEach(otherCheckbox => 
      {
        if (otherCheckbox !== this) 
        {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});
