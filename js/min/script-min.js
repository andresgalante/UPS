$(document).ready(function(){prettyPrint(),$(".ups-keycloack-custom-input input").click(function(){$(this).is(":checked")?$(".ups-keycloack-custom-url").show(300):$(".ups-keycloack-custom-url").hide(200)}),$(".ups-all-variables input").click(function(){$(".ups-more-variables").fadeToggle("fast")}),$(".ups-send-btn").popover(),$(".ups-renew-master-secret").popover(),$(".datatable").dataTable({fnDrawCallback:function(e){$(".sidebar-pf").length>0&&sidebar()}}),$(".ups-variant-header").click(function(){$(this).closest(".ups-variant").find(".ups-variant-body").slideToggle()}),$(".search-pf .has-clear .clear").each(function(){$(this).prev(".form-control").val()||$(this).hide()}),$(".search-pf .has-clear .form-control").keyup(function(){var e=$(this);e.next("button").toggle(Boolean(e.val()))}),$(".search-pf .has-clear .clear").click(function(){$(this).prev(".form-control").val("").focus(),$(this).hide()}),$("#keycloackConfigModal").modal("show"),$(".ups-snippet a").tooltip();var e=Math.max($("#box1").height(),$("#box2").height(),$("#box3").height(),$("#box3").height());$(".ups-wizard .well").height(e),$(".selectpicker").selectpicker({placeholder:"All"}),$(".js-example-placeholder-single").select2({allowClear:!0})});