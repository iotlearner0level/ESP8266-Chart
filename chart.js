<script type="text/javascript">

var canvas ;
var context ;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
		// Values for the Data Plot, they can also be obtained from a external file
var Apple =  [100, 102, 87, , 100, 123, 100, 90, 87, 91, 93, 88];
var Samsung = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130];
var Nokia =   [20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80];

function init() {
		// set these values for your data 
	sections = 12;
	Val_max = 130;
	Val_min = -40;
	var stepSize = 10;
	var columnSize = 50;
	var rowSize = 50;
	var margin = 10;
	var xAxis = [" ", "Jan", "Feb", "Mar", "Apr",
	"May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 
		//
		
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	context.fillStyle = "#0099ff"
	context.font = "20 pt Verdana"
	
	yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
	xScale = (canvas.width - rowSize) / sections;
	
	context.strokeStyle="#009933"; // color of grid lines
	context.beginPath();
		// print Parameters on X axis, and grid lines on the graph
	for (i=1;i<=sections;i++) {
		var x = i * xScale;
		context.fillText(xAxis[i], x,columnSize - margin);
		context.moveTo(x, columnSize);
		context.lineTo(x, canvas.height - margin);
	}
		// print row header and draw horizontal grid lines
	var count =  0;
	for (scale=Val_max;scale>=Val_min;scale = scale - stepSize) {
		var y = columnSize + (yScale * count * stepSize); 
		context.fillText(scale, margin,y + margin);
		context.moveTo(rowSize,y)
		context.lineTo(canvas.width,y)
		count++;
	}
	context.stroke();
	
	context.translate(rowSize,canvas.height + Val_min * yScale);
	context.scale(1,-1 * yScale);
	
		// Color of each dataplot items
		
	context.strokeStyle="#FF0066";
	plotData(Apple);
	context.strokeStyle="#9933FF";
	plotData(Samsung);
	context.strokeStyle="#000";
	plotData(Nokia);
}

function plotData(dataSet) {
	context.beginPath();
	context.moveTo(0, dataSet[0]);
	for (i=1;i<sections;i++) {
		context.lineTo(i * xScale, dataSet[i]);
	}
	context.stroke();
}

</script>
