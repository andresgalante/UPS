$(document).ready(function(){

prettyPrint();

// Keycloack set up // TODO(agalante) this doesn't work :(
$(".ups-keycloack-custom-input input").click(function() {
    if($(this).is(":checked")) {
        $(".ups-keycloack-custom-url").show(300);
    } else {
        $(".ups-keycloack-custom-url").hide(200);
    }
});


// Send notification modal, opens and close variables
  $(".ups-all-variables input").click(function(){
    $(".ups-more-variables").fadeToggle("fast");
  });


// Disable send notification btn, Popover message when there are no variables set
  $('.ups-send-btn').popover();
  $('.ups-renew-master-secret').popover();


// Data tables with sidebar
  $('.datatable').dataTable({
    "fnDrawCallback": function( oSettings ) {
      // if .sidebar-pf exists, call sidebar() after the data table is drawn
      if ($('.sidebar-pf').length > 0) {
        sidebar();
      }
    }
  });
  

// Variant list accordion  
  $(".ups-variant-header").click(function(){
    $(this).closest(".ups-variant").find(".ups-variant-body").slideToggle();
  });


// Search input on index
  // Hide the clear button if the search input is empty
  $(".search-pf .has-clear .clear").each(function() {
    if (!$(this).prev('.form-control').val()) {
      $(this).hide();
    }
  });
  // Show the clear button upon entering text in the search input
  $(".search-pf .has-clear .form-control").keyup(function () {
    var t = $(this);
    t.next('button').toggle(Boolean(t.val()));
  });
  // Upon clicking the clear button, empty the entered text and hide the clear button
  $(".search-pf .has-clear .clear").click(function () {
    $(this).prev('.form-control').val('').focus();
    $(this).hide();
  });
  


// Login screen modal    
  $('#keycloackConfigModal').modal('show');
  
// tool tip on Copy code snippet      
  $('.ups-snippet a').tooltip();


// makes the boxes of the welcome screen equal
var highestCol = Math.max($('#box1').height(),$('#box2').height(),$('#box3').height(),$('#box3').height());
$('.ups-wizard .well').height(highestCol);


   $('.selectpicker').selectpicker({
      placeholder: "All",
   });


$(".js-example-placeholder-single").select2({
  allowClear: true
});

});



