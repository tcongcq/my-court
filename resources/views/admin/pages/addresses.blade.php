@extends('cms::layouts.crud')

@section('main')
@include('admin.blocks.hide_nav_menu')
<script type="text/javascript">
function ToolBar() {
    var self = this;
    self.view = ko.observable('grid');
    self.grid_data = null;
    self.form_data = null;

    self.grid_init = function (grid) {
        self.grid_data = grid;
    };
    self.form_init = function (form) {
        self.form_data = form;
    };
    self.grid = function (attr, param) {
        return self.grid_data[attr](param);
    };

    self.add = function (e) {
        self.form_data.method('add');
        self.form_data.current({});
        self.view('form');
    };

    self.edit = function (e) {
        self.form_data.method('update');
        self.form_data.current(e);
        self.view('form');
    };

    self.prepare_save = function(){
    	self.form_data.current().has_complete        = self.form_data.current().has_complete == true ? 1 : 0;
    };

    self.saved = function () {
        self.grid_data.fetch();
    };

    self.cellsrenderer = {
    	contact_name: function(data){
    		var text = '';
    		text += 'Tên: <strong class="text-blue">'+data.contact_name+'</strong>';
    		text += '<br/>+ SĐT: <strong class="text-purple">'+data.contact_phone+'</strong>';
    		if (data.contact_email)
    			text += '<br/>+ Email: <strong class="text-green">'+data.contact_email+'</strong>';
    		if (data.contact_address)
    			text += '<br/>+ Địa chỉ: <strong>'+data.contact_address+'</strong>';
    		return text;
    	},
        has_complete: function(data){
        	return data.has_complete === 0 ? '<span class="label label-default">Đang chờ</span>' : '<span class="label label-success">Đã trả lời</span>';
        }
    };
}
var toolbar = new ToolBar();
</script>
<grid params="cols: {
        contact_name: 'Học viên đăng ký',
        content: 'Nội dung',
        has_complete: 'Trạng thái',
    },
    sorts: ['contact_name', 'has_complete'],
    url: '{{ uri() }}',
    token: '{{ csrf_token() }}',
    buttons: ['add', 'edit', 'delete'],
    cellsrenderer: toolbar.cellsrenderer,
    add: toolbar.add,
    edit: toolbar.edit,
    callback: toolbar.grid_init,
    filters: [
    @if(\Request::has('id'))
        {key:'id',value:[{{ \Request::get('id') }}]},
    @endif
    ],
    trans: {
        data_empty_label: 'Không có dữ liệu',
        add: 'Thêm',
        refresh: 'Làm mới',
        delete: 'Xoá',
        pagination_of_total: 'Trong tổng số',
        search: 'Tìm kiếm',
        delete_question: 'Bạn chắc chắn muốn xoá dữ liệu này?',
        cancel: 'Huỷ'
    }" data-bind="visible: toolbar.view() === 'grid'"></grid>

<edit-form params="url: '{{ uri() }}',
    token: '{{ csrf_token() }}',
    buttons: ['add', 'edit'],
    back: function (){ toolbar.view('grid'); },
    prepare_save: toolbar.prepare_save,
    saved: toolbar.saved,
    template: 'edit-form',
    callback: toolbar.form_init" data-bind="visible: toolbar.view() === 'form'"></edit-form>

<script type="text/html" id="edit-form">
@include('admin.forms.ward')
</script>
@endsection