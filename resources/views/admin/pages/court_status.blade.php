@extends('cms::layouts.crud')

@section('assets')
<link rel="stylesheet" href="{{ url('assets/css/apexcharts.css') }}">
<script type="text/javascript" src="{{ url('assets/js/apexcharts/apexcharts.min.js') }}"></script>
<style>
  	
</style>
@endsection

@section('main')
<div class="col-md-12">
    <div class="row">
        <div class="col-md-12">
            <h4>sân số 1</h4>
            <div style="width: 300px; float: left;">
                <canvas id="myChart1"></canvas>
            </div>
            <div style="width: 300px; float: left;">
                <canvas id="myChart2"></canvas>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h4>sân số 2</h4>
            <div style="width: 300px; float: left;">
                <canvas id="myChart3"></canvas>
            </div>
            <div style="width: 300px; float: left;">
                <canvas id="myChart4"></canvas>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h4>sân số 3</h4>
            <div style="width: 300px; float: left;">
                <canvas id="myChart5"></canvas>
            </div>
            <div style="width: 300px; float: left;">
                <canvas id="myChart6"></canvas>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
</div>
<script type="text/javascript">
	    // backgroundColor: [
		// 	'rgba(255, 26, 104, 0.2)',
		// 	'rgba(54, 162, 235, 0.2)',
		// 	'rgba(255, 206, 86, 0.2)',
		// 	'rgba(75, 192, 192, 0.2)'
	    // ],
	    // borderColor: [
		// 	'rgba(255, 26, 104, 1)',
		// 	'rgba(54, 162, 235, 1)',
		// 	'rgba(255, 206, 86, 1)',
		// 	'rgba(75, 192, 192, 1)'
	    // ],
const data1 = {
  	datasets: [{
	    label: 'A Half',
	    data: [2.5, 4, 2, 2.5, 1],
	    injectData: ['2,5h', '4h', '2h', '2,5h', '1h'],
	    injectLabel: [
	    	'12:00 - 14:30',
	    	'14:30 - 18:30||Anh Công (0975538987)||ghi chú thêm',
	    	'18:30 - 20:30',
	    	'20:30 - 23:00',
	    	'23:00 - 00:00'
	    ],
	    backgroundColor: [
			'rgba(0, 0, 0, 0.05)',
			'rgba(50, 205, 50, 0.5)',
			'rgba(0, 0, 0, 0.05)',
			'rgba(255, 206, 86, 0.5)',
			'rgba(0, 0, 0, 0.05)'
	    ],
	    borderColor: [
			'rgba(0, 0, 0, 0.2)',
			'rgba(50, 205, 50, 0.6)',
			'rgba(0, 0, 0, 0.2)',
			'rgba(255, 206, 86, 1)',
			'rgba(0, 0, 0, 0.2)'
	    ],
	    borderWidth: 1,
	    cutout: '70%',
	    borderRadius: 3
  	},
  	{
	    label: 'Hours',
	    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	    injectData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	    injectLabel: ['12:00 - 12:59', '13:00 - 13:59', '14:00 - 14:59', '15:00 - 15:59', '16:00 - 16:59', '17:00 - 17:59', '18:00 - 18:59', '19:00 - 19:59', '20:00 - 20:59', '21:00 - 21:59', '22:00 - 22:59', '23:00 - 23:59'],
	    backgroundColor: [
			'rgba(0, 0, 0, 0.2)',
			'rgba(0, 0, 0, 0.05)'
	    ],
	    borderColor: [
			'rgba(0, 0, 0, 0.2)',
			'rgba(0, 0, 0, 0.1)'
	    ],
	    borderWidth: 1,
	    cutout: '70%',
	    borderRadius: 0
  	}]
};
const data2 = {
  	datasets: [{
	    label: 'A Half',
	    data: [2.5, 4, 2, 2.5, 1],
	    injectData: ['2,5h', '4h', '2h', '2,5h', '1h'],
	    injectLabel: [
	    	'12:00 - 14:30',
	    	'14:30 - 18:30||Anh Công (0975538987)||ghi chú thêm',
	    	'18:30 - 20:30',
	    	'20:30 - 23:00',
	    	'23:00 - 00:00'
	    ],
	    backgroundColor: [
			'rgba(0, 0, 0, 0.05)',
			'rgba(50, 205, 50, 0.5)',
			'rgba(0, 0, 0, 0.05)',
			'rgba(255, 206, 86, 0.5)',
			'rgba(0, 0, 0, 0.05)'
	    ],
	    borderColor: [
			'rgba(0, 0, 0, 0.2)',
			'rgba(50, 205, 50, 0.6)',
			'rgba(0, 0, 0, 0.2)',
			'rgba(255, 206, 86, 1)',
			'rgba(0, 0, 0, 0.2)'
	    ],
	    borderWidth: 1,
	    cutout: '70%',
	    borderRadius: 3
  	},
  	{
	    label: 'Hours',
	    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	    injectData: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
	    injectLabel: ['12:00 - 12:59', '13:00 - 13:59', '14:00 - 14:59', '15:00 - 15:59', '16:00 - 16:59', '17:00 - 17:59', '18:00 - 18:59', '19:00 - 19:59', '20:00 - 20:59', '21:00 - 21:59', '22:00 - 22:59', '23:00 - 23:59'],
	    backgroundColor: [
			'rgba(0, 0, 0, 0.2)',
			'rgba(0, 0, 0, 0.05)'
	    ],
	    borderColor: [
			'rgba(0, 0, 0, 0.2)',
			'rgba(0, 0, 0, 0.1)'
	    ],
	    borderWidth: 1,
	    cutout: '70%',
	    borderRadius: 0
  	}]
};


// config 
const config1 = {
  	type: 'doughnut',
  	data: data1,
  	options: {
  		layout: {
  			padding: 20
  		},
  		maintainAspectRatio: false,
  		plugins: {
  			legend: {
  				display: false
  			},
  			datalabels: {
        		formatter: function(value, context) {
        			let {dataset, dataIndex} = context;
        			if (dataset.label == 'A Half'){
        				return String(dataset.data[dataIndex]+'h');
        			}
        			return String(dataset.injectData[dataIndex]);
		        }
		    },
		    tooltip: {
		        callbacks: {
		          	label: function(context) {
	        			let {dataset, dataIndex} = context;
	        			let str = dataset.injectLabel[dataIndex];
	        			return str.split('||');
                    }
		        }
		    }
  		},
  		onClick: function(event, arrEl){
  			let dataIndex = arrEl[0]?.index;
  			let label = arrEl[0]?.label;
  			let datasets = event.chart.data;
  			console.log(arrEl)
		}
  	},
  	plugins: [ChartDataLabels, {
        id: 'text',
        beforeDraw: function(chart, a, b) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = chart.canvas.id.slice(-1)%2 ? "AM" : "PM",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
// config 
const config2 = {
  	type: 'doughnut',
  	data: data2,
  	options: {
  		layout: {
  			padding: 20
  		},
  		maintainAspectRatio: false,
  		plugins: {
  			legend: {
  				display: false
  			},
  			datalabels: {
        		formatter: function(value, context) {
        			let {dataset, dataIndex} = context;
        			if (dataset.label == 'A Half'){
        				return String(dataset.data[dataIndex]+'h');
        			}
        			return String(dataset.injectData[dataIndex]);
		        }
		    },
		    tooltip: {
		        callbacks: {
		          	label: function(context) {
	        			let {dataset, dataIndex} = context;
	        			let str = dataset.injectLabel[dataIndex];
	        			return str.split('||');
                    }
		        }
		    }
  		},
  		onClick: function(event, arrEl){
  			let dataIndex = arrEl[0]?.index;
  			let label = arrEl[0]?.label;
  			let datasets = event.chart.data;
  			console.log(arrEl)
		}
  	},
  	plugins: [ChartDataLabels, {
        id: 'text',
        beforeDraw: function(chart, a, b) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = chart.canvas.id.slice(-1)%2 ? "AM" : "PM",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};

// render init block
const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
);
const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config1
);
const myChart4 = new Chart(
    document.getElementById('myChart4'),
    config2
);
const myChart5 = new Chart(
    document.getElementById('myChart5'),
    config1
);
const myChart6 = new Chart(
    document.getElementById('myChart6'),
    config2
);
</script>
@endsection


@section('footer')
@endsection