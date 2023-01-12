CKEDITOR.plugins.add('col-2',{	
	init: function (editor) {
		var style2 = new CKEDITOR.style({
			element: 'img',
			styles:{
				width: '16%!important',
				height: 'auto!important'
			}
		});
		editor.addCommand('col-2', new CKEDITOR.styleCommand(style2));
		editor.ui.addButton('Col-2', {
			label : 'col-2',
			toolbar : 'insert',
			command : 'col-2',
			icon : this.path + 'icon/c2.png'
		});
	}
});
