$(document).ready(function(){function e(e){return"Total"}function n(e){return e.length}function i(e){var n=0;return $.each(e,function(e,i){n+=+i.price.substring(1)}),"$"+n}function t(e,n,i){var t="",a="",o=10;return"Draft"===e&&(t="btn-danger"),"Pending"===e&&(t="btn-primary"),"Moderation"===e&&(t="btn-warning"),"Published"===e&&(t="btn-success"),i>=o/2&&(a="dropup"),'<div class="dropdown dropdown-status '+a+' "><button class="btn '+t+' dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+e+'</button><div class="dropdown-menu"><a class="dropdown-item" href="#">Draft</a><a class="dropdown-item" href="#">Pending</a><a class="dropdown-item" href="#">Moderation</a><a class="dropdown-item" href="#">Published</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Move to Trash</a></div></div>'}function a(e,n,i){return['<a class="like" href="javascript:void(0)" title="Like">','<i class="glyphicon glyphicon-heart"></i>',"</a>  ",'<a class="remove" href="javascript:void(0)" title="Remove">','<i class="glyphicon glyphicon-remove"></i>',"</a>"].join("")}function o(){return $.map(r.bootstrapTable("getSelections"),function(e){return e.id})}var r=$("#table"),d=$("#remove"),c=[];window.operateEvents={"click .like":function(e,n,i,t){alert("You click like action, row: "+JSON.stringify(i))},"click .remove":function(e,n,i,t){r.bootstrapTable("remove",{field:"id",values:[i.id]})}};var l=[{id:0,name:"Draft",price:"$0"},{id:1,name:"Pending",price:"$20"},{id:2,name:"Moderation",price:"$55"},{id:3,name:"Published",price:"$120"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"},{id:4,name:"Pending",price:"$63"}];r.bootstrapTable({iconsPrefix:"font-icon",icons:{paginationSwitchDown:"font-icon-arrow-square-down",paginationSwitchUp:"font-icon-arrow-square-down up",refresh:"font-icon-refresh",toggle:"font-icon-list-square",columns:"font-icon-list-rotate","export":"font-icon-download",detailOpen:"font-icon-plus",detailClose:"font-icon-minus-1"},paginationPreText:'<i class="font-icon font-icon-arrow-left"></i>',paginationNextText:'<i class="font-icon font-icon-arrow-right"></i>',data:l,columns:[[{field:"state",checkbox:!0,rowspan:2,align:"center",valign:"middle"},{title:"Item ID",field:"id",rowspan:2,align:"center",valign:"middle",sortable:!0,footerFormatter:e},{title:"Item Detail",colspan:3,align:"center"}],[{field:"name",title:"Status",sortable:!0,editable:!0,formatter:t,footerFormatter:n,align:"center"},{field:"price",title:"Item Price",sortable:!0,align:"center",footerFormatter:i},{field:"operate",title:"Item Operate",align:"center",events:operateEvents,formatter:a}]]}),r.on("check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table",function(){d.prop("disabled",!r.bootstrapTable("getSelections").length),c=o()}),d.click(function(){var e=o();r.bootstrapTable("remove",{field:"id",values:e}),d.prop("disabled",!0)}),$("#toolbar").find("select").change(function(){r.bootstrapTable("refreshOptions",{exportDataType:$(this).val()})})});