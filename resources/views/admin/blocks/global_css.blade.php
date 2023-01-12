<style type="text/css">
/* toggle label active or checked */
.toggle-label{position:relative;display:block;width:130px;height:35px;border:1px solid grey;margin:0 auto;user-select:none}.toggle-label input[type=checkbox]{opacity:0;position:absolute;width:100%;height:100%}.toggle-label input[type=checkbox]+.back{position:absolute;width:100%;height:100%;background:#ed1c24;transition:background 150ms linear}.toggle-label input[type=checkbox]:checked+.back{background:#00a651}.toggle-label input[type=checkbox]+.back .toggle{display:block;position:absolute;content:' ';background:#fff;width:50%;height:100%;transition:margin 150ms linear;border:1px solid grey;border-radius:0}.toggle-label input[type=checkbox]:checked+.back .toggle{margin-left:64px}.toggle-label .label{display:block;position:absolute;width:50%;color:#ddd;line-height:25px;text-align:center;font-size:1.5em}.toggle-label .label.on{left:0}.toggle-label .label.off{right:0}.toggle-label input[type=checkbox]+.back .label.off,.toggle-label input[type=checkbox]:checked+.back .label.on{color:#fff}.toggle-label input[type=checkbox]:checked+.back .label.off{color:#ddd}
</style>
<script src="{{ url('assets/js/input-mask/dist/jquery.inputmask.bundle.js') }}"></script>

<style type="text/css">
html, body{ /*background-color: #ddd;*/ } .inventory-toolbar{ background-color: #fff; -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18); box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18); padding: 5px 15px; } .overview{ margin-top: 50px; text-align: center; padding: 15px; } .overview .icon{ width: 100px; height: 100px; display: inline-block; border-radius: 50%; background: #888; color: #fff; font-size: 57px; padding: 8px 0px; margin-bottom: 20px; } .overview ul{ font-size: 1.2em; } .stat-container{ padding: 10px; } .nano-s { overflow: auto; } #chartContainer, .stat-main{ -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18); box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18); background-color: #fff; } .canvasjs-chart-credit{ display: none !important; } .schedule-detail .head-title{ text-align: center; text-transform: uppercase; margin: 0; font-family: 'Time new roman' } .schedule-detail .head-hr{ width: 30%; margin-left: 35%; border-style: dashed; margin-top: 7px; } .no-border td{ border: 0px !important; } .no-border td.td-title{ } .no-border td.td-content{ font-weight: bold; }
.msg{} .msg .list{ height: 230px; overflow: auto; padding: 5px; border: 1px solid #ddd; margin-bottom: 0px; } .msg .list .message-list{ margin-bottom: 0px; } .msg .list .message-list>li{ display: inline-block; width: 100%; line-height: 1.1; margin-bottom: 8px; padding-bottom: 2px; border-bottom: 1px solid #ddd; } .msg .list .message-list>li:last-child{ margin-bottom: 0; padding-bottom: 0; border-bottom: 0; } .msg .list .message-list>li div.title{ display: inline-block; width: 100%; } .msg .list .message-list>li div.title strong{ float: left; } .msg .list .message-list>li div.title span.date{ float: right; font-size: 12px; font-style: italic; } .msg .list .message-list>li .content{ /*float: left;*/ } .msg .grp-inp{ position: relative; } .msg .inp-text{ width: 100%; padding: 7px 10px; border: 1px solid #ddd; padding-right: 30px; } .msg .inp-text:focus{ outline: 0; } .msg .grp-inp .fa.fa-send{ position: absolute; top: 0; right: 0; padding: 11px 10px; cursor: pointer; color: #0000ff; } .reminder {} .reminder .list{ height: 260px; overflow: auto; border: 1px solid #ddd; margin-bottom: 0px; } .reminder .list .message-list{ margin-bottom: 0px; } .reminder .list .message-list>li{ display: inline-block; width: 100%; line-height: 1.1; padding: 5px; padding-top: 10px; border-bottom: 1px solid #ddd; position: relative; } .reminder .list .message-list>li:nth-of-type(odd){ background-color: #f5f5f5; } .reminder .list .message-list>li:last-child{ margin-bottom: 0; padding-bottom: 0; border-bottom: 0; } .reminder .list .message-list>li div.title{ display: inline-block; width: 100%; margin-top: 5px; } .reminder .list .message-list>li div.title strong{ /*float: left;*/ } .reminder .list .message-list>li div.title span.date{ float: right; font-size: 14px; font-style: italic; } .reminder .list .message-list>li:hover .three-dot{ display: block; } .reminder .list .message-list>li .three-dot{ position: absolute; right: 0; bottom: 0px; font-size: 25px; display: none; font-weight: bold; cursor: pointer; user-select: none; } .reminder .list .message-list>li .three-dot:hover{ color: blue; } .message-control{ position: absolute; display: none; right: 0; bottom: -62px; z-index: 99; padding: 5px 0; background-color: #fff; text-align: right; border: 1px solid #ccc; box-shadow: 0px 0px 12px -4px; } .message-control.show{ display: block; } .message-control>li{ padding: 5px 10px; } .message-control>li>i.fa{ margin-left: 5px; } .message-control>li:hover{ background-color: #005de8; color: #fff; cursor: pointer; user-select: none; } .message-control>li.del:hover{ background-color: #ff0000; } .reminder .grp-inp{ position: relative; } .reminder .inp-text{ width: 100%; padding: 7px 10px; border: 1px solid #ddd; padding-right: 30px; } .reminder .inp-text:focus{ outline: 0; } .reminder .grp-inp .input-group-addon{ cursor: pointer; } .reminder .grp-inp .fa.fa-send{ color: #0000ff; }

.m-25{ margin: 25px !important; } .ml-25{ margin-left: 25px !important; } .mr-25{ margin-right: 25px !important; } .mt-25{ margin-top: 25px !important; } .mb-25{ margin-bottom: 25px !important; }
.m-20{ margin: 20px !important; } .ml-20{ margin-left: 20px !important; } .mr-20{ margin-right: 20px !important; } .mt-20{ margin-top: 20px !important; } .mb-20{ margin-bottom: 20px !important; }
.m-15{ margin: 15px !important; } .ml-15{ margin-left: 15px !important; } .mr-15{ margin-right: 15px !important; } .mt-15{ margin-top: 15px !important; } .mb-15{ margin-bottom: 15px !important; }
.m-10{ margin: 10px !important; } .ml-10{ margin-left: 10px !important; } .mr-10{ margin-right: 10px !important; } .mt-10{ margin-top: 10px !important; } .mb-10{ margin-bottom: 10px !important; }
.m-5{ margin: 5px !important; } .ml-5{ margin-left: 5px !important; } .mr-5{ margin-right: 5px !important; } .mt-5{ margin-top: 5px !important; } .mb-5{ margin-bottom: 5px !important; }
.m-2{ margin: 2px !important; } .ml-2{ margin-left: 2px !important; } .mr-2{ margin-right: 2px !important; } .mt-2{ margin-top: 2px !important; } .mb-2{ margin-bottom: 2px !important; }
.m-0{ margin: 0px !important; } .ml-0{ margin-left: 0px !important; } .mr-0{ margin-right: 0px !important; } .mt-0{ margin-top: 0px !important; } .mb-0{ margin-bottom: 0px !important; }

.p-25{ padding: 25px !important; } .pl-25{ padding-left: 25px !important; } .pr-25{ padding-right: 25px !important; } .pt-25{ padding-top: 25px !important; } .pb-25{ padding-bottom: 25px !important; }
.p-20{ padding: 20px !important; } .pl-20{ padding-left: 20px !important; } .pr-20{ padding-right: 20px !important; } .pt-20{ padding-top: 20px !important; } .pb-20{ padding-bottom: 20px !important; }
.p-15{ padding: 15px !important; } .pl-15{ padding-left: 15px !important; } .pr-15{ padding-right: 15px !important; } .pt-15{ padding-top: 15px !important; } .pb-15{ padding-bottom: 15px !important; }
.p-10{ padding: 10px !important; } .pl-10{ padding-left: 10px !important; } .pr-10{ padding-right: 10px !important; } .pt-10{ padding-top: 10px !important; } .pb-10{ padding-bottom: 10px !important; }
.p-5{ padding: 5px !important; } .pl-5{ padding-left: 5px !important; } .pr-5{ padding-right: 5px !important; } .pt-5{ padding-top: 5px !important; } .pb-5{ padding-bottom: 5px !important; }
.p-2{ padding: 2px !important; } .pl-2{ padding-left: 2px !important; } .pr-2{ padding-right: 2px !important; } .pt-2{ padding-top: 2px !important; } .pb-2{ padding-bottom: 2px !important; }
.p-0{ padding: 0px !important; } .pl-0{ padding-left: 0px !important; } .pr-0{ padding-right: 0px !important; } .pt-0{ padding-top: 0px !important; } .pb-0{ padding-bottom: 0px !important; }

.br-0{ border-radius: 0px !important; }
.br-50{ border-radius: 50% !important; }

.text-red{ color: red !important; }
.text-blue{ color: blue !important; }
.text-green{ color: green !important; }
.text-orange{ color: orange !important; }
.text-yellow{ color: #f3d700 !important; }
.text-purple{ color: purple !important; }
.text-default{ color: #888 !important; }
.text-grey-dark{ color: #333 !important; }
.text-white{ color: white !important; }
.text-black{ color: black !important; }

.hover-bg-red:hover{ background-color: red !important; }
.hover-bg-blue:hover{ background-color: blue !important; }
.hover-bg-green:hover{ background-color: green !important; }
.hover-bg-orange:hover{ background-color: orange !important; }
.hover-bg-yellow:hover{ background-color: #f3d700 !important; }
.hover-bg-purple:hover{ background-color: purple !important; }
.hover-bg-default:hover{ background-color: #888 !important; }

.text-bold{ font-weight: bold !important; } .text-uppercase{ text-transform: uppercase !important; }
.border-radius-none{ border-radius: 0px !important; }
.label-purple { background-color: purple; }
.bg-red{ background-color: red !important; }
.bg-blue{ background-color: blue !important; }
.bg-green{ background-color: green !important; }
.bg-yellow{ background-color: yellow !important; }
.bg-orange{ background-color: orange !important; }
.bg-purple{ background-color: purple !important; }
.bg-grey{ background-color: grey !important; }
.bg-grey-light{ background-color: #eeeeee !important; }
.bg-green-light{ background-color: #00bb00 !important; }

.center-middle{ text-align: center !important; vertical-align: middle !important; }
.text-middle{ vertical-align: middle !important; }
.c_pointer{ cursor: pointer !important; }
.btn-circle{ border-radius: 50% !important; }
.pre-line-text{ white-space: pre-line; }
.limit-text-length{ overflow: hidden; text-overflow: ellipsis; }
.btn-add-bottom-right{ position: fixed; bottom: 30px; right: 20px; z-index: 999; }
.btn-add-bottom-right .dropdown-toggle{ box-shadow: none !important; }
.btn-add-bottom-right .css_dropdown_add_btn{ right: 35px; bottom: -14px; border-radius: 8px; }
.btn-reminder-bottom-right{ position: fixed; bottom: 80px; right: 20px; padding: 10px 14px; z-index: 999; }
.btn-reminder-bottom-right>span{ position: absolute; top: -5px; background-color: red; padding: 0px 3px; border-radius: 4px; text-align: center; font-size: 88%; min-width: 20px; }
.fa-share-custom{
	padding: 8px 10px;
    border-radius: 8px;
    background-color: #337ab7;
    color: #fff;
    cursor: pointer;
    transition: .2s;
}
.fa-share-custom:hover{
	background-color: #4aabff;
}
.line_height_2{
    line-height: 2 !important;
}

.media-center{ display: block !important;margin-left: auto;margin-right: auto; }
.modal_material .modal-content, .modal_material .btn, .modal_material .form-control{ border-radius: 0px !important; } .modal_material .modal-header{ background-color: purple; color: #fff; }
.btn-purple{
    background-color: purple;
    border: 1px solid #a000a0;
    color: #fff;
    transition: 0.1s all;
}
.btn-purple:hover{
    background-color: #a900a9;
    border: 1px solid #9c009c;
    color: #fff;
}
.list-image .image-item{
    width: 150px;
    height: 100px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #efefef;
    border: 1px solid #ccc;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.table-sm-custom{
    margin-top: 10px;
    margin-bottom: 0;
}
.table-sm-custom>tbody>tr>td, .table-sm-custom>thead>tr>th{
    padding: 4px 8px;
}
.grid-container table>tbody>tr>td{
    position: relative;
}
.grid-container .absolute-100{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.container-fluid{
    padding-right: 10px !important;
    padding-left: 10px !important;
}
.row{
    margin-right: -10px !important;
    margin-left: -10px !important;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    padding-right: 10px !important;
    padding-left: 10px !important;
}
@media only screen and (min-width: 992px) {
    .mt-25md{ margin-top: 25px; } .mb-25md{ margin-bottom: 25px; } .ml-25md{ margin-left: 25px; } .mr-25md{ margin-right: 25px; }
	.mt-20md{ margin-top: 20px; } .mb-20md{ margin-bottom: 20px; } .ml-20md{ margin-left: 20px; } .mr-20md{ margin-right: 20px; }
	.mt-15md{ margin-top: 15px; } .mb-15md{ margin-bottom: 15px; } .ml-15md{ margin-left: 15px; } .mr-15md{ margin-right: 15px; }
	.mt-10md{ margin-top: 10px; } .mb-10md{ margin-bottom: 10px; } .ml-10md{ margin-left: 10px; } .mr-10md{ margin-right: 10px; }
}
</style>