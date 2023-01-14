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
        $('.selectpicker').selectpicker();
    };
    self.grid = function (attr, param) {
        return self.grid_data[attr](param);
    };

    self.add = function (e) {
        self.form_data.method('add');
        self.form_data.current({active: 1});
        self.view('form');
    };

    self.edit = function (e) {
        self.form_data.method('update');
        self.form_data.current(e);
        $('#stadium_id').selectpicker('val', e.stadium_id);
        self.view('form');
    };

    self.prepare_save = function(){
        self.form_data.current().active = self.form_data.current().active == true ? 1 : 0;
        self.form_data.current().stadium_id = $('#stadium_id').selectpicker('val');
    };

    self.saved = function () {
        self.grid_data.fetch();
    };

    self.cellsrenderer = {
        stadium_id: (e)=>e.stadium_info?.name,
        active: function(data){
            return data.active === 0 ? '<span class="label label-default">Không hoạt động</span>' : '<span class="label label-success">Hoạt động</span>';
        }
    };
}
var toolbar = new ToolBar();
</script>
<grid params="cols: {
        name: 'Tên sân',
        stadium_id: 'nhà thi đấu',
        active: 'Trạng thái',
    },
    sorts: ['name', 'stadium_id'],
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
@include('admin.forms.court')
</script>
@endsection