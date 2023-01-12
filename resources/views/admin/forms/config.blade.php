<style>
.blocks{ position: relative; } .blocks .pull-left{ width: 200px; } .blocks .pull-right{ width: calc(100% - 200px); min-height: 300px; padding: 15px; border-left: 1px solid #ddd; } .blocks .pull-left .item, .blocks .pull-left .item-head{ padding: 5px 10px; position: relative; border-top: 1px solid rgba(255, 255, 255, 0); border-bottom: 1px solid rgba(255, 255, 255, 0); border-left: 3px solid rgba(255, 255, 255, 0); cursor: pointer; } .blocks .pull-left .item-head{ color: #333; font-weight: 700; font-size: 1.2em; margin-top: 10px; padding-left: 0; } .blocks .pull-left .item:hover{ background: #f5f5f5; } .blocks .pull-left .item.active{ background: #fff; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; border-left: 3px solid rgb(0, 161, 255); } .blocks .pull-left .item.active:before{ content: ''; position: absolute; right: -1px; top: 0; height: 100%; width: 1px; background: #fff; } #block-social-network .sn-instance{ padding: 15px; position: relative; } #block-product-category .block-product:hover, #block-social-network .sn-instance:hover{ background-color: #f5f1f1; } #block-product-category .btn-del{ position: absolute; top: -35px; right: -10px; cursor: pointer; display: none; } #block-social-network .sn-instance .btn-del{ position: absolute; top: 0px; right: 5px; cursor: pointer; display: none; } #block-product-category .block-product:hover .btn-del, #block-social-network .sn-instance:hover .btn-del{ display: block; } /* scrollbar */ .link-collection::-webkit-scrollbar, .s-n-modal::-webkit-scrollbar { width: 6px; } .link-collection::-webkit-scrollbar-track, .s-n-modal::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); } .link-collection::-webkit-scrollbar-thumb, .s-n-modal::-webkit-scrollbar-thumb { background-color: darkgrey; outline: 1px solid slategrey; } /* end scrollbar */ .s-n-modal{ margin: 15px; width: 880px; height: 380px; overflow: auto; } .s-n-modal .fa-hover{ cursor: pointer; } .faq-holder{ margin-top: 60px; height: 510px; padding: 0 10px; overflow: auto; } .faq-input{ font-weight: 700; display: inline-block; height: 34px; width: 86%; padding: 6px 12px; padding-right: 5px; font-size: 14px; line-height: 1.42857; border: 1px solid #ddd; border-radius: 0; box-shadow: rgba(0, 0, 0, 0.075) 0px 0px 0px inset; cursor: pointer; transition: all ease-in-out 400ms; } .faq-subject-holder{ padding: 5px; background: #f88d21; } .faq-subject{ width: 50%; border: 1px solid rgb(248, 141, 33); background: rgb(248, 141, 33); color: #fff; text-transform: uppercase; } .faq-question-holder{ padding: 5px; border: 1px solid #e3e3e3; border-top: 0px; border-bottom: 0px; position: relative; } .faq-answers-holder{ padding: 5px; border: 1px solid #e3e3e3; border-top: 0px; position: relative; } .faq-input:focus, .faq-input:active, .faq-answers:focus, .faq-answers:active{ background: #fff; color: #000; outline: 0px !important; } .faq-set{ border-bottom: 1px solid #e3e3e3; } .faq-answers{ width: 97%; border-radius: 0; min-height: 20px; padding: 10px; margin-bottom: 10px; margin-left: 25px; border: 1px solid #e3e3e3; } .add-faq-set, .del-faq { color: #fff; float: right; margin: 6px; padding: 4px; cursor: pointer; } .del-set{ padding: 10px 0px 0px 10px; width: 32px; height: 34px; background: rgb(230, 86, 86); color: #fff; margin-left: -4px; float: none; cursor: pointer; transition: all ease-in-out 400ms; } .del-set:hover{ background: rgb(236, 100, 100); } .faq-answers-save{ padding: 10px 4px 4px 12px; width: 36px; height: 34px; cursor: pointer; margin-left: -4px; background: #247ac3; color: #fff; transition: all ease-in-out 400ms; } .faq-answers-save:hover{ background: #0e8bf5; }
</style>
<div class="clearfix blocks">
    <div class="pull-left">
        <div class="item-head">Cài đặt chung</div>
        <div class="item active">Cài đặt tin nhắn</div>
        <div class="item hidden">Danh sách được tăng ca</div>
        <div style="margin-top: 10px; text-align: center;">
            <button type="button" onclick="toolbar.save_config()" class="btn btn-primary" style="border-radius: 0px;"><i aria-hidden="true" class="fa fa-floppy-o fa-lg"></i> Lưu thông tin</button>
        </div>
    </div>
    <div class="pull-right">
        <div class="col-md-12 m-b-t-5">
            <legend>Cài đặt tin nhắn tự động</legend>
        </div>
        <div class="col-md-6 m-b-t-5">
            <div class="form-group">
                <label for="send_sms_contract_success" class="control-label">1. Cho phép gửi tin khi đơn hàng thành công</label>
                <label class='toggle-label'>
                    <input type="checkbox" class="form-control" name="send_sms_contract_success" id="send_sms_contract_success" {{ !empty($send_sms_contract_success) ? 'checked="checked"' : '' }} />
                    <span class="back">
                        <span class="toggle"></span>
                        <span class="label on">ON</span>
                        <span class="label off">OFF</span>
                    </span>
                </label>
                <p class="help-block"><i>* Diễn giải: mỗi khi các đơn hàng thành công sẽ có tin nhắn thông báo gửi đến 2 BOSS và giám đốc miền của chính người thực hiện đơn hàng đó.</i></p>
            </div>
            <div class="form-group">
                <label for="send_sms_new_registered" class="control-label">2. Cho phép gửi tin khi duyệt thành viên mới</label>
                <label class='toggle-label'>
                    <input type="checkbox" class="form-control" name="send_sms_new_registered" id="send_sms_new_registered" {{ !empty($send_sms_new_registered) ? 'checked="checked"' : '' }} />
                    <span class="back">
                        <span class="toggle"></span>
                        <span class="label on">ON</span>
                        <span class="label off">OFF</span>
                    </span>
                </label>
                <p class="help-block"><i>* Diễn giải: mỗi khi duyệt thành viên trong hệ thống sẽ có tin nhắn thông báo gửi đến thành viên đó gồm tên đăng nhập và mật khẩu.</i></p>
            </div>
            <div class="form-group">
                <label for="send_sms_user_reset_pass" class="control-label">3. Cho phép gửi tin khi reset mật khẩu</label>
                <label class='toggle-label'>
                    <input type="checkbox" class="form-control" name="send_sms_user_reset_pass" id="send_sms_user_reset_pass" {{ !empty($send_sms_user_reset_pass) ? 'checked="checked"' : '' }} />
                    <span class="back">
                        <span class="toggle"></span>
                        <span class="label on">ON</span>
                        <span class="label off">OFF</span>
                    </span>
                </label>
                <p class="help-block"><i>* Diễn giải: mỗi khi có người đăng ký xin cấp lại mật khẩu sẽ có tin nhắn thông báo gửi đến BOSS.</i></p>
            </div>
        </div>
        <div class="col-md-4 m-b-t-5">
            <div class="form-group">
                <label for="send_sms_phone_recieved_default_first" class="control-label">4. Số điện thoại BOSS 1</label>
                <input class="form-control" id="send_sms_phone_recieved_default_first" name="send_sms_phone_recieved_default_first" value="{{ !empty($send_sms_phone_recieved_default_first) ? $send_sms_phone_recieved_default_first : '' }}" placeholder="Số điện thoại mặc định 1..." />
                <p class="help-block"><i>* Diễn giải: mỗi khi các đơn hàng thành công sẽ có tin nhắn thông báo gửi đến số điện thoại này.</i></p>
            </div>
            <div class="form-group">
                <label for="send_sms_phone_recieved_default_second" class="control-label">5. Số điện thoại BOSS 2</label>
                <input class="form-control" id="send_sms_phone_recieved_default_second" name="send_sms_phone_recieved_default_second" value="{{ !empty($send_sms_phone_recieved_default_second) ? $send_sms_phone_recieved_default_second : '' }}" placeholder="Số điện thoại mặc định 2..." />
                <p class="help-block"><i>* Diễn giải: mỗi khi các đơn hàng thành công sẽ có tin nhắn thông báo gửi đến số điện thoại này.</i></p>
            </div>
        </div>
    </div>
</div>