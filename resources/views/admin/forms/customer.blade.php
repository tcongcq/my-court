<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img class="media-object" src="{{ url('assets/images/admin/list.png') }}" width="128">
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Công việc</h3>
                <p>- Quản lý việc xem các công việc trên hệ thống.</p>
                <p>- Cho phép thêm sửa xoá các công việc.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label for="name" class="control-label">Tên công việc <sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control input-lg" name="name" id="name" data-bind="value: current().name" placeholder="Tên công việc..." required>
        </div>
        <div class="form-group">
            <label for="active" class="control-label">Trạng thái</label>
            <select class="form-control" name="active" id="active" data-bind="value: current().active">
            	<option value="">-- Chọn trạng thái --</option>
            	<option value="1">Kích hoạt</option>
            	<option value="0">Khoá</option>
            </select>
        </div>
        <div class="form-group">
            <label for="note" class="control-label">Ghi chú</label>
            <textarea type="text" class="form-control" name="note" id="note" data-bind="value: current().note" rows="5" placeholder="Ghi chú..."></textarea>
        </div>
    </div>
</div>