<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img class="media-object" src="{{ url('assets/images/admin/contact.png') }}" width="128">
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Đặt sân</h3>
                <p>- Quản lý thông tin khách đặt sân trên hệ thống.</p>
                <p>- Thêm, cập nhật danh sách khách đặt sân trong hệ thống.</p>
            </div>
        </div>
        <hr />
        <legend>Thông tin thêm</legend>
        <div class="form-group">
            <label for="type" class="control-label">Loại hình đặt <sup class="text-danger">(*)</sup></label>
            <select type="text" class="form-control selectpicker" data-live-search="true" name="type" id="type" data-bind="value: current().type" onChange="toolbar.set_type()" placeholder="Trạng thái" required>
                <option value="RETAIL" data-content="<span class='label label-default'>Khách vãng lai</span>"></option>
                <option value="WHOLESALE" data-content="<span class='label label-danger'>Khách cố định</span>"></option>
            </select>
        </div>
        <div class="form-group">
            <label for="state" class="control-label">Trạng thái <sup class="text-danger">(*)</sup></label>
            <select type="text" class="form-control selectpicker" data-live-search="true" name="state" id="state" data-bind="value: current().state" placeholder="Trạng thái" required>
                <option value="DRAFT" data-content="<span class='label label-info'>Yêu cầu mới</span>"></option>
                <option value="HOLD" data-content="<span class='label label-warning'>Đang giữ sân</span>"></option>
                <option value="DEPOSIT" data-content="<span class='label label-primary'>Đã cọc</span>"></option>
                <option value="PAID" data-content="<span class='label label-success'>Đã thanh toán</span>"></option>
            </select>
        </div>
        <div class="form-group">
            <label for="note" class="control-label">Ghi chú</label>
            <textarea type="text" rows="5" class="form-control" name="note" id="note" data-bind="value: current().note" placeholder="Nội dung..."></textarea>
        </div>
    </div>
    <div class="col-md-4">
    	<legend>Thông tin cơ bản</legend>
        <div class="form-group">
            <label for="customer_id" class="control-label">Khách hàng <sup class="text-danger">(*)</sup></label>
            <select type="text" class="form-control selectpicker" data-live-search="true" name="customer_id" id="customer_id" data-bind="value: current().customer_id" placeholder="Khách hàng..." required>
                @foreach($customers as $idx => $customer)
                <option value="{{ $customer->id }}">{{$idx+1}}. {{ $customer->name }} ({{$customer->phone }})</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label for="court_id" class="control-label">Chọn sân <sup class="text-danger">(*)</sup></label>
            <select type="text" class="form-control selectpicker" data-live-search="true" name="court_id" id="court_id" data-bind="value: current().court_id" placeholder="Chọn sân..." required onchange="toolbar.do_pricing()">
                <option value="">-- Chọn sân --</option>
                @foreach($courts as $idx => $court)
                <option value="{{ $court->id }}">{{$idx+1}}. {{ $court->name }}</option>
                @endforeach
            </select>
        </div>
        <!-- ko if: toolbar.booking_type() == 'RETAIL' -->
        <div class="form-group">
            <label for="booking_date" class="control-label">Ngày đặt <sup class="text-danger">(*)</sup></label>
            <div class="input-group date-only" id="booking_date" name="booking_date">
                <input type="text" class="form-control" placeholder="Ngày đặt (*)..." required />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
        <!-- /ko -->
        <!-- ko if: toolbar.booking_type() == 'WHOLESALE' -->
        <div class="form-group">
            <label for="booking_date" class="control-label">Ngày đặt <sup class="text-danger">(*)</sup></label>
            <select class="form-control selectpicker" data-live-search="true" name="booking_date" id="booking_date" placeholder="Chọn ngày..." multiple required>
                <option value="MON">Thứ Hai</option>
                <option value="TUE">Thứ Ba</option>
                <option value="WED">Thứ Tư</option>
                <option value="THU">Thứ Năm</option>
                <option value="FRI">Thứ Sáu</option>
                <option value="SAT">Thứ Bảy</option>
                <option value="SUN">Chủ nhật</option>
            </select>
        </div>
        <!-- /ko -->
        <div class="row">
        	<div class="col-md-6">
        		<div class="form-group">
		            <label for="begin_datetime" class="control-label">Giờ bắt đầu <sup class="text-danger">(*)</sup></label>
		            <div class="input-group time-only" id="begin_datetime" name="begin_datetime">
		                <input type="text" class="form-control" placeholder="Giờ bắt đầu (*)..." required />
		                <span class="input-group-addon">
		                    <span class="glyphicon glyphicon-calendar"></span>
		                </span>
		            </div>
		        </div>
		    </div>
		    <div class="col-md-6">
		        <div class="form-group">
		            <label for="finish_datetime" class="control-label">Giờ kết thúc <sup class="text-danger">(*)</sup></label>
		            <div class="input-group time-only" id="finish_datetime" name="finish_datetime">
		                <input type="text" class="form-control" placeholder="Giờ kết thúc (*)..." required />
		                <span class="input-group-addon">
		                    <span class="glyphicon glyphicon-calendar"></span>
		                </span>
		            </div>
		        </div>
        	</div>
        </div>
        <hr/>
        <div class="form-group">
            <label for="price" class="control-label">Giá tiền</label>
            <div class="input-group">
                <span type="text" class="form-control" name="price" id="price" data-bind="text: toolbar.format_number(toolbar.current_price())" disabled></span>
                <span class="input-group-addon">VNĐ</span>
            </div>
        </div>
        <div class="form-group">
            <label for="discount" class="control-label">Giảm giá</label>
            <div class="input-group">
                <div class="input-group-btn">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span data-bind="visible: toolbar.discount_type() == 'PRICE'">Giảm vào giá</span> 
                        <span data-bind="visible: toolbar.discount_type() == 'HOUR'">Giảm mỗi giờ</span> 
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a data-bind="click: toolbar.set_discount_type.bind($data, 'PRICE')"><span class="glyphicon glyphicon-usd"></span> Giảm vào giá</a></li>
                        <li><a data-bind="click: toolbar.set_discount_type.bind($data, 'HOUR')"><span class="glyphicon glyphicon-hourglass"></span> Giảm mỗi giờ</a></li>
                    </ul>
                </div>
                <input type="text" class="form-control inputmask" name="discount" id="discount" data-bind="value: current().discount" placeholder="Giá..." onchange="toolbar.do_pricing()" />
                <span class="input-group-addon">VNĐ</span>
            </div>
        </div>
        <div class="form-group">
            <label for="total" class="control-label">Thành tiền</label>
            <div class="input-group">
                <span type="text" class="form-control" name="total" id="total" data-bind="text: toolbar.format_number(toolbar.current_total())" disabled></span>
                <span class="input-group-addon">VNĐ</span>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    	<!-- ko if: toolbar.playtime_pricing().length > 0 -->
        <legend>Giá sân theo giờ</legend>
        <table class="table table-hover table-bordered table-striped table-head-center">
        	<thead>
				<tr>
					<th>Tên</th>
					<th>Giờ</th>
					<th>Giá</th>
				</tr>
			</thead>
			<tbody>
			<!-- ko foreach: toolbar.playtime_pricing() -->
				<tr>
					<td data-bind="text: name"></td>
					<td>
						<span data-bind="text: toolbar.format_time(start_time)"></span> - 
						<span data-bind="text: toolbar.format_time(end_time)"></span>
					</td>
					<td class="text-right"><span data-bind="text: toolbar.format_money(price_per_hour)"></span></td>
				</tr>
			<!-- /ko -->
			</tbody>
        </table>
		<!-- /ko -->
        <div class="form-group">
            <label for="description" class="control-label">Mô tả</label>
            <textarea type="text" rows="5" class="form-control" name="description" id="description" data-bind="value: current().description" placeholder="Mô tả sân..."></textarea>
        </div>
    </div>
</div>