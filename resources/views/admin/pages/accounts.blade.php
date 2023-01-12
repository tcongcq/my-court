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
        $('.date').datetimepicker({
            viewMode: 'days',
            format: 'DD-MM-YYYY'
        });
        $('.selectpicker').selectpicker();
    };
    self.grid = function (attr, param) {
        return self.grid_data[attr](param);
    };

    self.add = function (e) {
        self.form_data.method('add');
        self.form_data.current({
            login_backend: 1,
            login_frontend: 1,
            active: 1
        });
        self.view('form');
    };

    self.edit = function (e) {
        self.form_data.method('update');
        self.form_data.current(e);
        self.view('form');
        $('#birthday').data("DateTimePicker").date(new Date(e.birthday));
    };

    self.prepare_save = function(){
        self.form_data.current().birthday   = $('#birthday input').val() != '' ? $('#birthday').data("DateTimePicker").date().format('YYYY-MM-DD HH:mm:ss'):'';
        self.form_data.current().password   = $.trim($('#js_password').val());
        self.form_data.current().avatar     = $('#avatar').attr('data-src')!=""? $('#avatar').attr('data-src') : '#';
        self.form_data.current().login_backend  = self.form_data.current().login_backend ? 1 : 0;
        self.form_data.current().login_frontend = self.form_data.current().login_frontend ? 1 : 0;
        self.form_data.current().active     = self.form_data.current().active ? 1 : 0;
        self.form_data.current().protected      = self.form_data.current().protected ? 1 : 0;
        self.form_data.current().anonymous      = self.form_data.current().anonymous ? 1 : 0;
        self.form_data.current().locked         = self.form_data.current().locked ? 1 : 0;
    };

    self.saved = function () {
        self.grid_data.fetch();
    };

    self.cellsrenderer = {
        active: function (data) {
            return data.active === 0 ? '<span class="label label-default">Khoá</span>' : '<span class="label label-success">Kích hoạt</span>';
        },
        gender: function (data) {
            return data.gender === 0 ? '<span>Nữ</span>' : '<span>Nam</span>';
        },
        login_backend: function(data){
            var text = data.login_backend === 0 ? '<span class="label label-danger">Chặn</span>' : '<span class="label label-primary">Cho phép</span>';
            text    += '<br/>'
            text    += data.active === 0 ? '<span class="label label-default">Khoá</span>' : '<span class="label label-success">Kích hoạt</span>';
            return text;
        },
        fullname: function(data){
            var info_text = '<strong>'+data.fullname+'</strong>';
            if (data.phone)
                info_text += '<br/>- SĐT: '+data.phone;
            if (data.email)
                info_text += '<br/>- Email: '+data.email;
            if (data.user_group_name)
                info_text += '<br/>- Nhóm người dùng: '+data.user_group_name;
            var type_user = '<span class="label label-default">Tài khoản dùng thử</span>';
            if (data.type_user == 0)
                type_user = '<span class="label label-default">Tài khoản dùng thử</span>';
            if (data.type_user == 1)
                type_user = '<span class="label label-info">Tài khoản tiêu chuẩn</span>';
            if (data.type_user == 2)
                type_user = '<span class="label label-warning">Tài khoản cao cấp</span>';
            info_text += '<br/>- Loại tài khoản: '+type_user;
            return info_text;
        },
        avatar: function(data){
            var avatar = (data.avatar && data.avatar != '#') ? data.avatar : 'assets/images/admin/no-image.png';
            return '<img src="{{ url("/") }}/'+avatar+'" width="60" height="60" />';
        }
    };
    self.avatar_background_image = function(e){
        if (e){
            var avatar = e.avatar ? e.avatar : 'assets/images/admin/no-image.png';
            return 'url({{ url("/") }}/' + avatar + ')';
        }
    };
}
var toolbar = new ToolBar();
</script>
<?php
    $btn = "";
    if(\App\Models\Account::has_permission(['route'=>uri(),'permission_name'=>'insert'])){
        $btn .= "'add'";
    }
    if(\App\Models\Account::has_permission(['route'=>uri(),'permission_name'=>'update'])){
        $btn .= $btn == "" ? "'edit'":", 'edit'";
    }
    if(\App\Models\Account::has_permission(['route'=>uri(),'permission_name'=>'delete'])){
        $btn .= $btn == "" ? "'delete'":", 'delete'";
    }
?>
<grid params="cols: {
        avatar: 'Ảnh',
        username: 'UserName',
        fullname: 'Thông tin',
        login_backend: 'Đăng nhập'
    },
    sorts: ['username', 'fullname', 'login_backend'],
    url: '{{ uri() }}',
    token: '{{ csrf_token() }}',
    buttons: [{{ $btn }}],
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
    toolbar: { btnSaveAndNew: false },
    callback: toolbar.form_init" data-bind="visible: toolbar.view() === 'form'"></edit-form>

<script type="text/html" id="edit-form">
    @include('admin.forms.account')
</script>
@endsection