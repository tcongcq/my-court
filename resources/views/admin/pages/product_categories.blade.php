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

        function ymdFormat(dateStr){
            var day = dateStr['0']+dateStr['1'];
            var month = dateStr['3']+dateStr['4'];
            var year = dateStr['6']+dateStr['7']+dateStr['8']+dateStr['9'];
            return month+'/'+day+'/'+year;
        };

        self.prepare_save = function(){
            //
        };

        self.saved = function () {
            self.grid_data.fetch();
        };

        self.cellsrenderer = {
            active: function (data) {
                return data.active === 0 ? '<span class="label label-default">Khoá</span>' : '<span class="label label-success">Kích hoạt</span>';
            }

        };

    }
    var toolbar = new ToolBar();
</script>
<grid params="cols: {
        name: 'Tên công việc',
        active: 'Trạng thái',
        note: 'Ghi chú'
    },
    sorts: ['name', 'active', 'note'],
    url: '{{ uri() }}',
    token: '{{ csrf_token() }}',
    buttons: ['edit','add','delete'],
    cellsrenderer: toolbar.cellsrenderer,
    add: toolbar.add,
    edit: toolbar.edit,
    callback: toolbar.grid_init,
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
    toolbar: { btnSaveAndNew: false },
    callback: toolbar.form_init" data-bind="visible: toolbar.view() === 'form'"></edit-form>

<script type="text/html" id="edit-form">
    @include('admin.forms.product_category')
</script>
@endsection