<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img class="media-object" src="{{ url('assets/images/admin/contact.png') }}" width="128">
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Nhà thi đấu</h3>
                <p>- Quản lý thông tin nhà thi đấu trên hệ thống.</p>
                <p>- Thêm, cập nhật danh sách các nhà thi đấu được đăng ký trong hệ thống.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    	<legend>Thông tin cơ bản</legend>
        <div class="form-group">
            <label for="name" class="control-label">Tên nhà thi đấu <sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" name="name" id="name" data-bind="value: current().name" placeholder="Tên nhà thi đấu..." required>
        </div>
        <div class="form-group">
            <label for="address" class="control-label">Địa chỉ</label>
            <textarea type="text" rows="3" class="form-control" name="address" id="address" data-bind="value: current().address" placeholder="Địa chỉ..."></textarea>
        </div>
        <div class="form-group">
            <label for="description" class="control-label">Mô tả</label>
            <textarea type="text" rows="5" class="form-control" name="description" id="description" data-bind="value: current().description" placeholder="Mô tả nhà thi đấu..."></textarea>
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