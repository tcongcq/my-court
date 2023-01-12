@extends('cms::layouts.crud')

@section('assets')
<style>
    .list-group-item{
        padding: 5px 15px;
    }
    .list-group input[type="checkbox"]{
        display: none;
    }
    .list-group .badge{
        padding: 0;
        background-color: transparent;
    }
    .list-group .badge > span{
        cursor: pointer;
        padding: 3px 7px;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        background-color: #d9534f;
        border-radius: 10px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

    }
    .list-group .badge input[type="checkbox"]:checked + span {
        background-color: #5cb85c;
    }
    .fa-btn-help{
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        padding: 3px;
        transition: .1s all;
    }
    .fa-btn-help:hover{
        color: magenta;
    }
</style>
@endsection

@section('main')
@include('admin.blocks.hide_nav_menu')
<script type="text/javascript">
    function ToolBar() {
        var self = this;
        self.view = ko.observable('grid');
        self.grid_data = null;
        self.form_data = null;
        self.user_group_permissions_old = ko.observableArray([]);


        self.grid_init = function (grid) {
            self.grid_data = grid;
            $('[data-toggle="popover"]').popover();
        };

        self.form_init = function (form) {
            self.form_data = form;
        };

        self.grid = function (attr, param) {
            return self.grid_data[attr](param);
        };

        self.add = function (e) {
            self.form_data.method('add');
            self.view('form');
        };

        self.edit = function (e) {
            self.form_data.method('update');
            self.form_data.current(e);
            self.getPermissions(e.id);
            self.view('form');
        };

        self.back = function () {
            toolbar.view('grid');
        };

        self.prepare_save = function () {
          $permissions = [];
          $('input:checkbox').each(function(){
            if(this.checked)
              $permissions.push(this.id);
            });
            self.form_data.current().permissions = $permissions;
            self.form_data.current().permissionsOld = self.user_group_permissions_old();
        };

        self.cellsrenderer = {};

        self.saved = function () {
            self.grid_data.fetch();
        };
        self.getPermissions = function(user_group_id){
            $.ajax({url: '{{ uri() }}/user-group-permissions', type: "post", data: {
                    _token: '{{ csrf_token() }}',
                    user_group_id: user_group_id
                }, success: function (data) {
                    self.user_group_permissions_old(data);
                    $.each(data, function(index, value) {
                        $('#' + value).prop( "checked", true );
                    });
                }
            });
        };
    }
    var toolbar = new ToolBar();
</script>
<?php
    $btn = "";
    if(\App\Models\Account::has_permission(['route'=>'user-group','permission_name'=>'insert'])){
        $btn .= "'add'";
    }
    if(\App\Models\Account::has_permission(['route'=>'user-group','permission_name'=>'update'])){
        $btn .= $btn == "" ? "'edit'":", 'edit'";
    }
    if(\App\Models\Account::has_permission(['route'=>'user-group','permission_name'=>'delete'])){
        $btn .= $btn == "" ? "'delete'":", 'delete'";
    }
?>
<grid params="cols: {
        group_name: 'Tên nhóm',
        note: 'Ghi chú'
    },
    sorts: ['group_name', 'note'],
    url: '{{ uri() }}',
    token: '{{ csrf_token() }}',
    buttons: [{{ $btn }}],
    cellsrenderer: toolbar.cellsrenderer,
    add: toolbar.add,
    edit: toolbar.edit,
    callback: toolbar.grid_init,
    trans: {
        data_empty_label: 'Không có dữ liệu',
        add: 'Thêm',
        refresh: 'Làm mới',
        delete: 'Xoá',
        pagination_of_total: 'của',
        search: 'Tìm kiếm',
        delete_question: 'Bạn chắc chắn muốn xoá dữ liệu này?',
        cancel: 'Huỷ'
    }" data-bind="visible: toolbar.view() === 'grid'"></grid>

<edit-form params="url: '{{ uri() }}',
    token: '{{ csrf_token() }}',
    buttons: ['add', 'edit'],
    back: toolbar.back,
    prepare_save: toolbar.prepare_save,
    saved: toolbar.saved,
    template: 'edit-form',
    toolbar: { btnSaveAndNew: false },
    callback: toolbar.form_init" data-bind="visible: toolbar.view() === 'form'"></edit-form>

<script type="text/html" id="edit-form">
    @include('admin.forms.account_group')
</script>
@endsection
