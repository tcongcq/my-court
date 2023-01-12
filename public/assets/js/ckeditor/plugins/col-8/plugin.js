CKEDITOR.plugins.add('col-8',{	
	init: function (editor) {
		var style8 = new CKEDITOR.style({
			element: 'img',
			styles:{
				width: '64%!important',
				height: 'auto!important'
			}
		});
		editor.addCommand('col-8', new CKEDITOR.styleCommand(style8));
		editor.ui.addButton('Col-8', {
			label : 'col-8',
			toolbar : 'insert',
			command : 'col-8',
			icon : this.path + 'icon/c8.png'
		});
	}
});