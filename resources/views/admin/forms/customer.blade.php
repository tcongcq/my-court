<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img class="media-object" src="{{ url('assets/images/admin/contact.png') }}" width="128">
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Khách hàng</h3>
                <p>- Quản lý thông tin khách hàng trên hệ thống.</p>
                <p>- Thêm, cập nhật danh sách khách hàng được đăng ký trong hệ thống.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <legend>Thông tin cơ bản</legend>
        <div class="form-group">
            <label for="name" class="control-label">Tên khách hàng <sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" name="name" id="name" data-bind="value: current().name" placeholder="Tên khách hàng..." required>
        </div>
        <div class="form-group">
            <label for="display_name" class="control-label">Tên gợi nhớ</label>
            <input type="text" class="form-control" name="display_name" id="display_name" data-bind="value: current().display_name" placeholder="Tên gợi nhớ..." />
        </div>
        <div class="form-group">
            <label for="phone" class="control-label">Số điện thoại</label>
            <input type="text" class="form-control" name="phone" id="phone" data-bind="value: current().phone" placeholder="Số điện thoại..." />
        </div>
        <div class="form-group">
            <label for="email" class="control-label">Email</label>
            <input type="text" class="form-control" name="email" id="email" data-bind="value: current().email" placeholder="Email..." />
        </div>
        <div class="form-group">
            <label for="zalo" class="control-label">Zalo</label>
            <input type="text" class="form-control" name="zalo" id="zalo" data-bind="value: current().zalo" placeholder="Zalo..." />
        </div>
        <div class="form-group">
            <label for="facebook" class="control-label">Facebook</label>
            <input type="text" class="form-control" name="facebook" id="facebook" data-bind="value: current().facebook" placeholder="Facebook..." />
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
            <label for="classify" class="control-label">Nhóm khách</label>
            <select class="form-control" name="classify" id="classify" data-bind="value: current().classify">
                <option value="NORMAL">Khách vãng lai</option>
                <option value="LOYAL">Khách hàng thân thiết</option>
                <option value="VIP">Khách hàng VIP</option>
                <option value="SVIP">Khách hàng SVIP</option>
            </select>
        </div>
        <div class="form-group">
            <label for="note" class="control-label">Ghi chú</label>
            <textarea type="text" rows="5" class="form-control" name="note" id="note" data-bind="value: current().note" placeholder="Nội dung..."></textarea>
        </div>
    </div>
</div>