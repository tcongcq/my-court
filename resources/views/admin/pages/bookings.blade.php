@extends('cms::layouts.crud')

@section('main')
@include('admin.blocks.hide_nav_menu')
<script type="text/javascript">
function ToolBar() {
    var self = this;
    self.view = ko.observable('grid');
    self.current_price = ko.observable(0);
    self.current_total = ko.observable(0);
    self.discount_type = ko.observable('PRICE');
    self.booking_type  = ko.observable('RETAIL');

    self.discount_value     = ko.observable(0);
    self.playtime_pricing   = ko.observableArray([]);
    self.grid_data = null;
    self.form_data = null;
    self.pricing   = false;

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
        $('.date-only').datetimepicker({
            format: 'DD-MM-YYYY'
        });
        $('.selectpicker').selectpicker();
        $('#court_id').on('changed.bs.select', (e)=>{
            self.get_playtime_pricing();
        });
        $('#booking_date').on('dp.change', self.do_pricing);
        $('#begin_datetime').on('dp.change', self.do_pricing);
        $('#finish_datetime').on('dp.change', self.do_pricing);
    };
    self.grid = function (attr, param) {
        return self.grid_data[attr](param);
    };

    self.add = function (e) {
        self.form_data.method('add');
        self.form_data.current({active: 1, discount: 0, price: 0, total: 0});
        self.current_price(0);
        self.current_total(0);
        self.playtime_pricing([]);
        self.discount_type('PRICE');
        self.discount_value(0);
        $('#type').selectpicker('val', 'RETAIL');
        $('#court_id').selectpicker('val', null);
        $('#customer_id').selectpicker('val', 2);
        $('#booking_date').data("DateTimePicker").date(new Date());
        self.view('form');
    };

    self.edit = function (e) {
        self.form_data.method('update');
        self.form_data.current(e);
        self.current_price(e.price);
        self.current_total(e.total);
        self.discount_type(e.discount_type);
        self.discount_value(e.discount_value);
        $('#type').selectpicker('val', e.type);
        $('#court_id').selectpicker('val', e.court_id);
        $('#customer_id').selectpicker('val', e.customer_id);
        $('#begin_datetime').data("DateTimePicker").date(new Date(e.begin_datetime));
        $('#finish_datetime').data("DateTimePicker").date(new Date(e.finish_datetime));
        $('#booking_date').data("DateTimePicker").date(new Date(e.begin_datetime));
        self.view('form');
    };

    self.validate_date = function(){
        let current = self.form_data.current();
        let now = moment().format('YYYY-MM-DD HH:mm:ss');
        let beg = moment(current.begin_datetime).format('YYYY-MM-DD HH:mm:ss');
        if (beg < now)
            throw RangeError('Unable to book in the past time!');
    };

    self.prepare_save = function(){
        let inputMaskIds = ['discount'];
        inputMaskIds.forEach((id, idx)=>{self.form_data.current()[id] = $('#'+id).val().replace(/#|,/g,'')});
        let booking_date     = null;
        let booking_weekdays = null;
        if (self.form_data?.method() == 'update'){
            booking_date = moment($('#booking_date').data("DateTimePicker").date()).format('YYYY-MM-DD');
        } else {
            if (self.booking_type() == 'RETAIL'){
                booking_date = moment($('#booking_date').data("DateTimePicker").date()).format('YYYY-MM-DD');
            } else {
                booking_weekdays = $('#booking_date').selectpicker('val');
            }
        }
        self.form_data.current().court_id        = $('#court_id').selectpicker('val');
        self.form_data.current().active          = self.form_data.current().active == true ? 1 : 0;
        self.form_data.current().booking_date    = booking_date;
        self.form_data.current().booking_weekdays= booking_weekdays;
        self.form_data.current().begin_time      = $("#begin_datetime").find("input").val();
        self.form_data.current().finish_time     = $("#finish_datetime").find("input").val();
        self.form_data.current().discount_type   = self.discount_type();
        self.form_data.current().discount_value  = self.discount_value();

        delete self.form_data.current().court_info;
        delete self.form_data.current().customer_info;
        // self.validate_date();
    };

    self.saved = function () {
        self.grid_data.fetch();
    };

    self.cellsrenderer = {
        court_id: (e)=>{
            let text = '';
            text += 'Khách hàng: '+e.customer_info?.name+' ('+e.customer_info?.classify+')';
            text += '</br>- SĐT: '+e.customer_info?.phone;
            text += '</br>- Ngày đặt: '+moment(e.begin_datetime).format('DD.MM.YYYY');
            text += '</br>- Tên sân: '+e.court_info?.name;
            text += '</br>'+e.court_info?.stadium_info?.name;
            return text;
        },
        begin_datetime: (e)=>{
            let text = '';
            let begin_date = moment(e.begin_datetime).format('DD.MM.YYYY');
            let finish_date = moment(e.finish_datetime).format('DD.MM.YYYY');
            if (begin_date == finish_date){
                text = [moment(e.begin_datetime).format('HH:mm'), ' - ', moment(e.finish_datetime).format('HH:mm')].join('');
            } else {
                text = [moment(e.begin_datetime).format('HH:mm DD.MM.YYYY'), ' - ', moment(e.finish_datetime).format('HH:mm DD.MM.YYYY')].join('');
            }
            return text;
        },
        state: (e)=>{
            let text = '';
            let state = '';
            switch(e.state) {
                case 'DRAFT':
                    state = "<span class='label label-info'>Yêu cầu mới</span>";
                    break;
                case 'HOLD':
                    state = "<span class='label label-warning'>Đang giữ sân</span>";
                    break;
                case 'DEPOSIT':
                    state = "<span class='label label-primary'>Đã cọc</span>";
                    break;
                default:
                    state = "<span class='label label-success'>Đã thanh toán</span>";
            }
            text += state;
            text += '</br>' + (e.type == 'RETAIL' ? "<span class='label label-default'>Khách vãng lai</span>" : "<span class='label label-danger'>Khách cố định</span>");
            return text;
        },
        total: (e)=>self.format_money(e.total)
    };

    self.get_playtime_pricing = function(){
        let court_id = $('#court_id').selectpicker('val');
        $.ajax({
            url: "{{ url(config('cms.backend_prefix').'/'.uri().'/playtime-pricing') }}",
            type: "get",
            data: {
                court_id
            },
            success: function(rows){
                self.playtime_pricing(rows);
            }
        });
    };
    self.do_pricing = function(){
        if (!self.form_data) return;
        if (!$("#begin_datetime").find("input").val() || !$("#finish_datetime").find("input").val()) return;
        let court_id        = $('#court_id').selectpicker('val');
        let booking_date    = null;
        if (self.booking_type() == 'RETAIL'){
            booking_date = moment($('#booking_date').data("DateTimePicker").date()).format('YYYY-MM-DD');
        } else {
            booking_date = moment().format('YYYY-MM-DD');
        }
        let begin_datetime  = booking_date + ' ' + $("#begin_datetime").find("input").val();
        let finish_datetime = booking_date + ' ' + $("#finish_datetime").find("input").val();
        if (!court_id || booking_date == 'Invalid date') return;
        if (self.pricing) return;
        self.pricing = true;
        $.ajax({
            url: "{{ url(config('cms.backend_prefix').'/'.uri().'/calc-court-price') }}",
            type: "get",
            data: {
                court_id, begin_datetime, finish_datetime
            },
            success: function(price){
                self.pricing = false;
                self.set_pricing(price, begin_datetime, finish_datetime);
            }
        });
    };
    self.set_pricing = function(price, begin_datetime, finish_datetime){
        let discount        = $('#discount').val() ? $('#discount').val().replace(/#|,/g,'') : 0;
        let discount_type   = self.discount_type();
        let discount_value  = discount;
        if (discount_type == 'HOUR'){
            let begin   = moment(begin_datetime);
            let end     = moment(finish_datetime);
            let duration = moment.duration(end.diff(begin));
            let hours = duration.asHours();
            discount_value = hours*discount;
        }
        self.current_price(price);
        self.current_total(parseInt(price) - parseInt(discount_value));
    };
    self.set_discount_type = function(type){
        self.discount_type(type);
        self.do_pricing();
    };
    self.set_type = function(){
        if (self.form_data?.method() == 'update')
            return self.booking_type('RETAIL');
        let type = $('#type').val();
        self.booking_type(type);
        if (type == 'RETAIL')
            $('#booking_date').datetimepicker({
                format: 'DD-MM-YYYY'
            });
        else
            $('#booking_date').selectpicker();
    };
    self.format_time = function(_time){
        return moment('2000-01-01 '+_time).format('HH:mm')
    };
    self.format_number = function(_num){
        return parseInt(_num).toLocaleString();
    };
    self.format_money = function(_num){
        if (!_num) _num = 0;
        return self.format_number(_num)+' VNĐ';
    };
}
var toolbar = new ToolBar();
</script>
<grid params="cols: {
        court_id: 'Thông tin đặt',
        begin_datetime: 'Thời gian',
        state: 'Trạng thái',
        total: 'Giá'
    },
    sorts: ['court_id', 'begin_datetime', 'total', 'state'],
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
@include('admin.forms.booking')
</script>
@endsection