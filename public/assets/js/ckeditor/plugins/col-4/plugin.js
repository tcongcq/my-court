CKEDITOR.plugins.add('col-4',{	
	init: function (editor) {
		var style4 = new CKEDITOR.style({
			element: 'img',
			styles:{
				width: '32%!important',
				height: 'auto!important'
			}
		});
		editor.addCommand('col-4', new CKEDITOR.styleCommand(style4));
		editor.ui.addButton('Col-4', {
			label : 'col-4',
			toolbar : 'insert',
			command : 'col-4',
			icon : this.path + 'icon/c4.png'
		});
	}
});