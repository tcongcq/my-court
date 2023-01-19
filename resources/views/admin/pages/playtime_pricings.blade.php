@extends('cms::layouts.crud')

@section('main')
@include('admin.blocks.hide_nav_menu')
<script type="text/javascript">
function ToolBar() {
    var self = this;
    self.view = ko.observable('grid');
    self.grid_data = null;
    self.form_data = null;

    self.view.subscribe(function () {
        if (self.view() == 'form')
            $('.inputmask').inputmask({'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true});
    });

    self.grid_init = function (grid) {
        self.grid_data = grid;
    };
    self.form_init = function (form) {
        self.form_data = form;
        $('.time-only').datetimepicker({
            format: 'HH:mm',
            stepping: 15
        });
        $('.selectpicker').selectpicker();
    };
    self.grid = function (attr, param) {
        return self.grid_data[attr](param);
    };

    self.add = function (e) {
        self.form_data.method('add');
        self.form_data.current({active: 1, price_per_hour: 0, price_per_hour_loyal: 0});
        self.view('form');
    };

    self.edit = function (e) {
        self.form_data.method('update');
        self.form_data.current(e);
        $('#start_time').data("DateTimePicker").date(e.start_time);
        $('#end_time').data("DateTimePicker").date(e.end_time);
        self.view('form');
    };

    self.prepare_save = function(){
        let inputMaskIds = ['price_per_hour','price_per_hour_loyal'];
        inputMaskIds.forEach((id, idx)=>{self.form_data.current()[id] = $('#'+id).val().replace(/#|,/g,'')});
        self.form_data.current().active = self.form_data.current().active == true ? 1 : 0;
        self.form_data.current().start_time = $("#start_time").find("input").val();
        self.form_data.current().end_time 	= $("#end_time").find("input").val();
        self.form_data.current().stadium_id = $('#stadium_id').selectpicker('val');
    };

    self.saved = function () {
        self.grid_data.fetch();
    };

    self.cellsrenderer = {
        start_time: (e)=>moment(e.start_time, [moment.ISO_8601, 'HH:mm']).format('HH:mm'),
        end_time: (e)=>moment(e.end_time, [moment.ISO_8601, 'HH:mm']).format('HH:mm'),
        price_per_hour: (e)=>parseInt(e.price_per_hour).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    };
}
var toolbar = new ToolBar();
</script>
<grid params="cols: {
        name: 'Khung giờ chơi',
        start_time: 'Giờ bắt đầu',
        end_time: 'Giờ kết thúc',
        price_per_hour: 'Giá',
    },
    sorts: ['name'],
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
@include('admin.forms.playtime_pricing')
</script>
@endsection