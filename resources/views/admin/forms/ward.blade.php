<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img class="media-object" src="{{ url('assets/images/admin/contact.png') }}" width="128">
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Đanh sách đăng ký</h3>
                <p>- Quản lý danh sách đăng ký trên hệ thống.</p>
                <p>- Thêm, cập nhật các danh sách đăng ký trong hệ thống.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    	<legend>Thông tin cơ bản</legend>
        <div class="form-group">
            <label for="contact_name" class="control-label">Tên học viên <sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" name="contact_name" id="contact_name" data-bind="value: current().contact_name" placeholder="Tên học viên..." required>
        </div>
        <div class="form-group">
            <label for="contact_phone" class="control-label">SĐT học viên <sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" name="contact_phone" id="contact_phone" data-bind="value: current().contact_phone" placeholder="SĐT học viên..." required>
        </div>
        <div class="form-group">
            <label for="contact_address" class="control-label">Địa chỉ</label>
            <input type="text" class="form-control" name="contact_address" id="contact_address" data-bind="value: current().contact_address" placeholder="Địa chỉ..." >
        </div>
        <div class="form-group">
            <label for="contact_email" class="control-label">Email</label>
            <input type="text" class="form-control" name="contact_email" id="contact_email" data-bind="value: current().contact_email" placeholder="Email..." >
        </div>
        <div class="form-group">
            <label for="content" class="control-label">Nội dung</label>
            <textarea type="text" rows="5" class="form-control" name="content" id="content" data-bind="value: current().content" placeholder="Nội dung..."></textarea>
        </div>
    </div>
    <div class="col-md-4">
    	<legend>Cài đặt</legend>
        <div class="form-group">
            <label for="has_complete" class="control-label">Đã trả lời</label>
            <label class='toggle-label'>
				<input type="checkbox" class="form-control" name="has_complete" id="has_complete" data-bind="checked: current().has_complete" />
				<span class="back">
					<span class="toggle"></span>
			 		<span class="label on">ON</span>
					<span class="label off">OFF</span>
				</span>
			</label>
        </div>
        <div class="form-group">
            <label for="note" class="control-label">Ghi chú</label>
            <textarea type="text" rows="5" class="form-control" name="note" id="note" data-bind="value: current().note" placeholder="Nội dung..."></textarea>
        </div>
    </div>
</div>