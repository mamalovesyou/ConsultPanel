$(document).ready(function(){function t(t,e){e=e||new Date;for(var a=e.getUTCFullYear(),n=e.getUTCMonth(),o=e.getUTCDate(),l=new Array(t),r=0;t>r;r++)l[r]={x:new Date(Date.UTC(a,n,o+r)),y:r>0?l[r-1].y+2*Math.random()-1:5*Math.random()};return l}function e(t){var e={},a=t.foreground().append("g").style("visibility","hidden");return e.vLine=a.append("line").attr("stroke","black").attr("y1",0).attr("y2",t.height()),e.circle=a.append("circle").attr("stroke","black").attr("fill","white").attr("r",3),e.drawAt=function(t){e.vLine.attr({x1:t.x,x2:t.x}),e.circle.attr({cx:t.x,cy:t.y}),a.style("visibility","visible")},e.hide=function(){a.style("visibility","hidden")},e}var a=new Plottable.Scales.Time,n=new Plottable.Axes.Numeric(a,"bottom");n.formatter(Plottable.Formatters.multiTime());var o=new Plottable.Scales.Linear,l=new Plottable.Axes.Numeric(o,"left"),r=new Plottable.Scales.Color,i=new Plottable.Dataset(t(1e3),{name:"series1"}),s=new Plottable.Dataset(t(1e3),{name:"series2"}),u=new Plottable.Plots.Line;u.x(function(t){return t.x},a).y(function(t){return t.y},o),u.attr("stroke",function(t,e,a){return a.metadata().name},r),u.addDataset(i).addDataset(s),u.autorangeMode("y");var c=new Plottable.Scales.Time,b=new Plottable.Axes.Time(c,"bottom"),d=new Plottable.Scales.Linear,w=new Plottable.Plots.Line;w.x(function(t){return t.x},c).y(function(t){return t.y},d),w.attr("stroke",function(t,e,a){return a.metadata().name},r),w.addDataset(i).addDataset(s);var f=new Plottable.Components.XDragBoxLayer;f.resizable(!0),f.onDrag(function(t){var e=c.invert(t.topLeft.x),n=c.invert(t.bottomRight.x);a.domain([e,n])}),f.onDragEnd(function(t){t.topLeft.x===t.bottomRight.x&&a.domain(c.domain())}),a.onUpdate(function(){f.boxVisible(!0);var t=a.domain();f.bounds({topLeft:{x:c.scale(t[0]),y:null},bottomRight:{x:c.scale(t[1]),y:null}})});var P=new Plottable.Components.Group([w,f]),m=new Plottable.Interactions.PanZoom(a,null);m.attachTo(u);var g=d3.select("#hoverFeedback"),p="Closest:";g.text(p);var x=new Plottable.Components.Table([[l,u],[null,n],[null,P],[null,b]]);x.rowWeight(2,.2),x.renderTo("#plottable-finance");var y=e(u),h=new Plottable.Interactions.Pointer;h.onPointerMove(function(t){var e=u.entityNearest(t);if(null!=e.datum){y.drawAt(e.position);var a=e.datum;g.text("Closest: ("+a.x.toLocaleString()+", "+a.y.toFixed(2)+")")}}),h.onPointerExit(function(){y.hide(),g.text(p)}),h.attachTo(u)}),$(document).ready(function(){var t=new Plottable.Scales.Time,e=new Plottable.Scales.Linear,a=new Plottable.Scales.Color,n=new Plottable.Axes.Time(t,"bottom"),o=new Plottable.Axes.Numeric(e,"left"),l=(new Plottable.Components.AxisLabel("Temperature (ºF)",-90),new Plottable.Components.Legend(a).maxEntriesPerRow(3)),r=new Plottable.Components.Group,i=new Plottable.Interactions.PanZoom(t,null);i.attachTo(r);var s=new Plottable.Components.Table([[null,l],[o,r],[null,n]]);s.renderTo("svg#plottable-weather"),d3.tsv("data/plottable/data.tsv",function(n,o){var l=d3.time.format("%Y%m%d").parse,i=d3.keys(o[0]).filter(function(t){return"date"!==t}),s=i.map(function(t){return o.map(function(e){return{date:l(e.date),temperature:+e[t],name:t}})});s.forEach(function(n){r.append((new Plottable.Plots.Line).addDataset(new Plottable.Dataset(n)).x(function(t){return t.date},t).y(function(t){return t.temperature},e).attr("stroke",a.scale(n[0].name)).attr("stroke-width",1))})})}),$(document).ready(function(){var t=function(t){return new Date(t)},e=new Plottable.Scales.Time,a=new Plottable.Scales.Category,n=new Plottable.Axes.Time(e,"bottom").margin(5).annotationsEnabled(!0),o=(new Plottable.Scales.Color).domain(["USA","USSR"]).range(["#0052A5","#FF2400"]),l=new Plottable.Components.Legend(o),r=new Plottable.Components.TitleLabel("Space Race",0).yAlignment("top"),i=(new Plottable.Plots.Scatter).x(function(e){return t(e.date)},e).y(function(){return 0},a).size(30).attr("opacity",1).attr("stroke-width",1).attr("fill",function(t){return t.country},o).attr("stroke","#ffffff"),s=new Plottable.Components.GuideLineLayer("vertical").scale(e),u=new Plottable.Components.Group([s,i,l,r]),c=new Plottable.Components.Table([[u],[n]]);c.renderTo("svg#plottable-space-race"),new Plottable.Interactions.PanZoom(e,null).attachTo(i).minDomainExtent(e,31536e6).maxDomainExtent(e,63072e7),(new Plottable.Interactions.Pointer).attachTo(c).onPointerMove(function(e){var a=i.entityNearest(e),o=t(a.datum.date);s.value(o),n.annotatedTicks([o]),r.text(a.datum.event)}).onPointerExit(function(){s.pixelPosition(-10),n.annotatedTicks([]),r.text("Space Race")}),d3.json("data/plottable/spacerace.json",function(t,e){var a=new Plottable.Dataset(e);i.addDataset(a)})}),$(document).ready(function(){var t=[{start:"4/1/2015 9:00:00",end:"4/1/2015 9:30:00",task:"Planning"},{start:"4/1/2015 9:30:00",end:"4/1/2015 10:30:00",task:"Development"},{start:"4/1/2015 10:30:00",end:"4/1/2015 10:45:00",task:"QE"}],e=new Plottable.Scales.Color,a=new Plottable.Scales.Time,n=new Plottable.Axes.Time(a,"bottom"),o=new Plottable.Scales.Category,l=new Plottable.Axes.Category(o,"left"),r=(new Plottable.Plots.Rectangle).x(function(t){return new Date(t.start)},a).x2(function(t){return new Date(t.end)},a).y(function(t){return t.task},o).attr("fill",function(t){return t.task},e).addDataset(new Plottable.Dataset(t)),i=new Plottable.Components.Table([[l,r],[null,n]]);i.renderTo("svg#plottable-gantt-chart")}),$(document).ready(function(){function t(t){return new Date(t.getFullYear(),0,1-new Date(t.getFullYear(),0,1).getDay())}function e(e){var a=t(e),n=e-a,o=864e5;return Math.floor(Math.ceil(n/o)/7)}function a(){return function(t){var e=t[0],a=t[1],n=new Date(e,0,7*(a+1)-new Date(e,0,1).getDay());return n.getDate()>7?"":r[n.getMonth()]}}for(var n=[],o=1;184>o;o++)n.push({date:new Date(2015,0,o),val:1.5*Math.random()-.5});var l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=new Plottable.Scales.Category,s=new Plottable.Scales.Category;s.domain(l);var u=new Plottable.Axes.Category(i,"bottom"),c=new Plottable.Axes.Category(s,"left");u.formatter(a());var b=new Plottable.Scales.InterpolatedColor;b.domain([0,1]),b.range(["#eee","#d6e685","#8cc665","#44a340","#1e6823"]);var d=(new Plottable.Plots.Rectangle).addDataset(new Plottable.Dataset(n)).x(function(t){return[t.date.getFullYear(),e(t.date)]},i).y(function(t){return l[t.date.getDay()]},s).attr("fill",function(t){return t.val},b).attr("stroke","#fff").attr("stroke-width",2),w=(new Plottable.Plots.Rectangle).addDataset(new Plottable.Dataset(n)).x(function(t){return[t.date.getFullYear(),e(t.date)]},i).y(function(t){return l[t.date.getDay()]},s).attr("fill","black").attr("fill-opacity",0),f=new Plottable.Components.Group([d,w]),P=new Plottable.Interactions.Pointer;P.onPointerMove(function(t){var e=w.entityNearest(t),a=e.datum.date.getMonth();w.entities().forEach(function(t){var e=t.datum.date;t.selection.attr("fill-opacity",e.getMonth()===a?.5:0)})}),P.onPointerExit(function(){w.entities().forEach(function(t){t.selection.attr("fill-opacity",0)})}),P.attachTo(d);var m=new Plottable.Components.Table([[c,f],[null,u]]);m.renderTo("svg#plottable-calendar-heatmap")}),$(document).ready(function(){function t(t,e,a,n){var o=new Plottable.Scales.Category,l=new Plottable.Scales.Category,r=(new Plottable.Scales.Linear).domain([e[0].low,e[e.length-1].high]),i=(new Plottable.Scales.InterpolatedColor).range(["#9ac3f9","#E3F2FD"]),s=(new Plottable.Plots.Bar).x(function(t){return t.x},o).y(function(t){return t.y},r).attr("fill","#25383C").addDataset(new Plottable.Dataset(t)),u=(new Plottable.Plots.Rectangle).y(function(t){return t.low},r).y2(function(t){return t.high},r).x(function(t){return t.x},l).attr("fill",function(t){return t.stage},i).attr("stroke",function(t){return t.stage},i).addDataset(new Plottable.Dataset(e)),c=new Plottable.Axes.Numeric(r,"left").formatter(a),b=new Plottable.Components.Group([u,s]),n=new Plottable.Components.TitleLabel(n);return new Plottable.Components.Table([[null,n],[c,b]])}var e=[{x:"profit",y:.23}],a=[{x:"profit",stage:0,low:0,high:.2},{x:"profit",stage:1,low:.2,high:.25},{x:"profit",stage:2,low:.25,high:.3}],n=[{x:"newCust",y:1600}],o=[{x:"newCust",stage:0,low:0,high:1500},{x:"newCust",stage:1,low:1500,high:2e3},{x:"newCust",stage:2,low:2e3,high:2500}],l=[{x:"revenue",y:28e4}],r=[{x:"revenue",stage:0,low:0,high:15e4},{x:"revenue",stage:1,low:15e4,high:225e3},{x:"revenue",stage:2,low:225e3,high:3e5}],i=[{x:"sales",y:280}],s=[{x:"sales",stage:0,low:0,high:350},{x:"sales",stage:1,low:350,high:500},{x:"sales",stage:2,low:500,high:600}],u=new Plottable.Components.Table([[t(e,a,new Plottable.Formatters.percentage,"Profit"),t(n,o,new Plottable.Formatters.general,"Users"),t(l,r,new Plottable.Formatters.currency(0),"Salary"),t(i,s,new Plottable.Formatters.currency,"Sales")]]);u.renderTo("svg#plottable-bullet-graph")});