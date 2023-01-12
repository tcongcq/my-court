@extends('cms::layouts.crud')
@section('main')
@include('admin.blocks.hide_nav_menu')
<script type="text/javascript">
function Toolbar(){
    var self = this;

    self.init = function(){
        // 
    };
    
    self.save_config = function(){
        $.ajax({
            url: "{{ uri() }}/save-config",
            type: "post",
            data: self.get_system_inp_data(),
            beforeSend: showAppLoading, complete: hideAppLoading,
            success: function (data) {
                window.location.reload();
            }
        });
    };
    self.get_system_inp_data = function(){
        var inp_data = {_token: '{{ csrf_token() }}'};
        inp_data['send_sms_contract_success']   = $('#send_sms_contract_success').prop('checked') ? 1:0;
        inp_data['send_sms_new_registered']     = $('#send_sms_new_registered').prop('checked') ? 1:0;
        inp_data['send_sms_user_reset_pass']    = $('#send_sms_user_reset_pass').prop('checked') ? 1:0;
        inp_data['send_sms_phone_recieved_default_first']   = $('#send_sms_phone_recieved_default_first').val();
        inp_data['send_sms_phone_recieved_default_second']  = $('#send_sms_phone_recieved_default_second').val();
        return inp_data;
    };
}
var toolbar = new Toolbar();
</script>
<div id="block-manager" style="padding: 15px 15px 0px; user-select: none;">
    @include('admin.forms.config')
</div>


@endsection