
//make table editable, refresh charts on blur$(function(){
$(function(){	
	 $('table').visualize({type: 'line', height: '300px', width: '420px'});

	$('table td')
		.click(function(){
			if( !$(this).is('.input') ){
				$(this).addClass('input')
					.html('<input type="text" value="'+ $(this).text() +'" />')
					.find('input').focus()
					.blur(function(){
						//remove td class, remove input
						$(this).parent().removeClass('input').html($(this).val() || 0);
						//update charts	
						$('.visualize').trigger('visualizeRefresh');
					});					
			}
		})
		
	$('table th')
		.click(function(){
			if( !$(this).is('.input') ){
				$(this).addClass('input')
					.html('<input type="text" value="'+ $(this).text() +'" />')
					.find('input').focus()
					.blur(function(){
						//remove td class, remove input
						$(this).parent().removeClass('input').html($(this).val() || 0);
						//update charts	
						$('.visualize').trigger('visualizeRefresh');
					});					
			}
		})
		
		.hover(function(){ $(this).addClass('hover'); },function(){ $(this).removeClass('hover'); });
});












/*********************************************************************************/
/*function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


function startGraph () {
	var textarea = document.getElementById("textarea");
  
}

function linearGraph () {
	
	var graphCanvas = document.getElementById('cvs');
	var dataMatrix = [[4,5,1,6,3,5,2], [7,7,8,6,2,1,1]];
	var labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
	var largo = 2;
	var i = 0;
	
		var line = new RGraph.Line('cvs', dataMatrix[0], dataMatrix[1]);
	    line.Set('chart.curvy', true);
	    line.Set('chart.curvy.tickmarks', true);
	    line.Set('chart.curvy.tickmarks.fill', null);
	    line.Set('chart.curvy.tickmarks.stroke', '#aaa');
	    line.Set('chart.curvy.tickmarks.stroke.linewidth', 2);
	    line.Set('chart.curvy.tickmarks.size', 5);
	    line.Set('chart.linewidth', 3);
	    line.Set('chart.hmargin', 5);
	    line.Set('chart.labels', labels);
	    line.Set('chart.tooltips', labels);
	    line.Set('chart.tickmarks', 'circle');
	    RGraph.Effects.Line.jQuery.Trace(line);
	   
}

function barGraph () {
	bar = new RGraph.Bar('cvs', [4,5,3,8,4,9,6,5,3,7]);
    bar.Set('chart.labels', ['Mal', 'Barry', 'Gary', 'Neil', 'Kim', 'Pete', 'Lou', 'Fred', 'Jobe', 'Larry']);
    bar.Set('chart.colors', [get_random_color()]);
    bar.Set('chart.ylabels', false);
    RGraph.Effects.Bar.Grow(bar);
  
}

function pieGraph () {
	 var pie = new RGraph.Pie('cvs', [1750, 6000, 250]);
	 pie.Set('chart.strokestyle', 'white');
     pie.Set('chart.colors', [get_random_color(),get_random_color(),get_random_color()]);
     pie.Set('chart.linewidth', 3);
     pie.Set('chart.exploded', [15,]);
     pie.Set('chart.shadow', true);
     pie.Set('chart.shadow.offsetx', 0);
     pie.Set('chart.shadow.offsety', 0);
     pie.Set('chart.shadow.blur', 20);
     pie.Set('chart.labels', ['Jerry', 'Mauro', 'Gaby']);
     pie.Set('chart.labels.sticks', [true]);
     pie.Set('chart.labels.sticks.length', 10);
     RGraph.Effects.Pie.RoundRobin(pie);
  
}*/
  
