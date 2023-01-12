CKEDITOR.plugins.add('col-6',{	
	init: function (editor) {
		var style6 = new CKEDITOR.style({
			element: 'img',
			styles:{
				width: '48%!important',
				height: 'auto!important'
			}
		});
		editor.addCommand('col-6', new CKEDITOR.styleCommand(style6));
		editor.ui.addButton('Col-6', {
			label : 'col-6',
			toolbar : 'insert',
			command : 'col-6',
			icon : this.path + 'icon/c6.png'
		});
	}
});