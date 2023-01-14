<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img class="media-object" src="{{ url('assets/images/admin/contact.png') }}" width="128">
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Khung giờ chơi</h3>
                <p>- Quản lý thông tin khung giờ chơi trên hệ thống.</p>
                <p>- Thêm, cập nhật danh sách khung giờ được đăng ký trong hệ thống.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    	<legend>Thông tin cơ bản</legend>
        <div class="form-group">
            <label for="name" class="control-label">Tên khung giờ <sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" name="name" id="name" data-bind="value: current().name" placeholder="Tên khung giờ..." required>
        </div>
        <div class="form-group">
            <label for="price_per_hour" class="control-label">Giá mỗi giờ</label>
            <div class="input-group">
                <input type="text" class="form-control inputmask" name="price_per_hour" id="price_per_hour" data-bind="value: current().price_per_hour" placeholder="Giá mỗi giờ..." />
                <span class="input-group-addon">VNĐ</span>
            </div>
        </div>
        <div class="form-group">
            <label for="start_time" class="control-label">Giờ bắt đầu</label>
            <div class="input-group time-only" id="start_time" name="start_time">
                <input type="text" class="form-control" placeholder="Giờ bắt đầu (*)..." />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
        <div class="form-group">
            <label for="end_time" class="control-label">Giờ kết thúc</label>
            <div class="input-group time-only" id="end_time" name="end_time">
                <input type="text" class="form-control" placeholder="Giờ kết thúc (*)..." />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    	<legend>Cài đặt</legend>
        <div class="form-group">
            <label for="active" class="control-label">Trạng thái</label>
            <label class='toggle-label'>
				<input type="checkbox" class="form-control" name="active" id="active" data-bind="checked: current().active" />
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