<style type="text/css">
.w-0{ width: 0px !important; } .ml-0{ margin-left: 0px !important; } .btn_nav_show_hide_menu{ position: fixed; top: 50%; left: 180px; background-color: white; padding: 15px 5px 15px 19px; border-radius: 50%; cursor: pointer; border: 1px solid #CCC; transition: .25s; z-index: 1; } .btn_nav_show_hide_menu.do_hide{ left: -20px; } .btn_nav_show_hide_menu:hover{ background-color: purple; color: #fff; } .btn_nav_show_hide_menu>.js_chevron_left{ display: block; } .btn_nav_show_hide_menu>.js_chevron_right{ display: none; } .btn_nav_show_hide_menu.do_hide>.js_chevron_left{ display: none; } .btn_nav_show_hide_menu.do_hide>.js_chevron_right{ display: block; } @media only screen and (max-width: 768px) { .btn_nav_show_hide_menu{ display: none; } }

.loading-bar { left: 0; position: fixed; right: 0; top: 50px; z-index: 9999; } .loading-bar-animation { height: 2px; background: #27c4f5 -webkit-gradient(linear, left top, right top, from(#27c4f5), color-stop(#a307ba), color-stop(#fd8d32), color-stop(#70c050), to(#27c4f5)); background: #27c4f5 -webkit-linear-gradient(left, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5); background: #27c4f5 linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5); background-size: 500%; -webkit-animation: 2s linear infinite LoadingBarProgress, .5s ease-out LoadingBarEnter; animation: 2s linear infinite LoadingBarProgress, .5s ease-out LoadingBarEnter; -webkit-transform-origin: left; transform-origin: left; width: 100% } @keyframes LoadingBarProgress { 0% { background-position: 0% 0 } to { background-position: 125% 0 } } @keyframes LoadingBarEnter { 0% { -webkit-transform: scaleX(0); transform: scaleX(0) } to { -webkit-transform: scaleX(1); transform: scaleX(1) } }
.pre-wrap{
	white-space: pre-wrap;
}
.pre-line{
	white-space: pre-line;
}
</style>
<div class="btn_nav_show_hide_menu"><i class="fa fa-chevron-left js_chevron_left"></i><i class="fa fa-chevron-right js_chevron_right"></i></div>
<script type="text/javascript">function do_btn_nav_show_hide_menu(){ $('.app-main .app-sidebar').toggleClass('w-0'); $('.app-main .app-content').toggleClass('ml-0'); $('.btn_nav_show_hide_menu').toggleClass('do_hide');} function auto_hide_menu(){do_btn_nav_show_hide_menu();} $('.btn_nav_show_hide_menu').click(function(){do_btn_nav_show_hide_menu();});</script>
<script src="{{ url('assets/js/ckeditor/ckeditor.js') }}"></script>
<script src="{{ url('assets/js/input-mask/dist/jquery.inputmask.bundle.js') }}"></script>

<span class="loading-bar loading-bar-animation hidden"></span>
@include('admin.blocks.assets')
@include('admin.blocks.global_css')

