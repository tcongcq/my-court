<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img
                        id="avatar"
                        width="200"
                        height="140"
                        style="background-repeat: no-repeat; background-size: cover; background-position: center; margin-top: 30px;"
                        onclick="open_popup('{{ url('admin/filemanager?secret='.bcrypt(env('APP_KEY')).'&backgroundID=avatar' ) }}')"
                        data-bind="attr:{class: 'media-oject', 'data-src':current().avatar}, style:{'background-image': 'url({{url('/')}}/' + ((current().avatar && current().avatar != '#') ? current().avatar : 'assets/images/admin/no-image.png') + ')'}"
                    />
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Người dùng</h3>
                <p>- Quản lý các người dùng trên hệ thống.</p>
                <p>- Cho phép thao tác các thông tin người dùng và thay đổi nhóm quyền của người dùng trong hệ thống.</p>
            </div>
        </div>
        <div class="form-group">
            <label for="type_user" class="control-label">Loại tài khoản</label>
            <select type="text" class="form-control" name="type_user" id="type_user" required data-bind="value: current().type_user">
                <option value="0"><span class="label label-defautl">Tài khoản dùng thử</span></option>
                <option value="1"><span class="label label-info">Tài khoản tiêu chuẩn</span></option>
                <option value="2"><span class="label label-warning">Tài khoản cao cấp</span></option>
            </select>
        </div>
        <div class="form-group">
            <label for="expiry_date" class="control-label">Hạn sử dụng đến</label>
            <input type="datetime-local" class="form-control" name="expiry_date" id="expiry_date" data-bind="value: current().expiry_date" />
        </div>
    </div>
    <div class="col-md-4">
        <legend>THÔNG TIN TÀI KHOẢN</legend>
        <div class="form-group">
            <label class="control-label">Tên đăng nhập<sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" data-bind="value: current().username" placeholder="Tên đăng nhập..." required maxlength="255">
        </div>
        <div class="form-group">
            <label class="control-label">Mật khẩu</label>
            <input type="text" class="form-control" id="js_password" maxlength="255" placeholder="Nhập khi thêm mới hoặc muốn cập nhật...">
        </div>
        <div class="form-group">
            <label for="user_group_id" class="control-label">Nhóm người dùng </label>
            <select type="text" class="form-control" name="user_group_id" id="user_group_id" required data-bind="value: current().user_group_id">
                <?php $user_groups=[]; ?>
                @foreach ($user_groups as $user_group)
                <option value="{{$user_group->id}}">{{$user_group->group_name}}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label for="email" class="control-label">Email<sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" name="email" id="email" data-bind="value: current().email" placeholder="Email..." required maxlength="255">
        </div>
        <div class="form-group">
            <label for="email" class="control-label">Thông số tài khoản<sup class="text-danger">(*)</sup></label>
            <div class="checkbox" style="margin-top: 0px;">
                <label>
                    <input id="active" data-bind="checked: current().active" type="checkbox"> Kích hoạt tài khoản<sup class="text-danger">(*)</sup>
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input id="login_frontend" data-bind="checked: current().login_frontend" type="checkbox"> Cho phép truy cập trang Website<sup class="text-danger">(*)</sup>
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input id="login_backend" data-bind="checked: current().login_backend" type="checkbox"> Cho phép đăng nhập hệ thống quản trị<sup class="text-danger">(*)</sup>
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input id="locked" data-bind="checked: current().locked" type="checkbox"> Tài khoản bị khoá
                </label>
            </div>
            <div class="
            @if(!\Auth::user()->anonymous)
            hidden
            @endif
            ">
                <div class="checkbox">
                    <label>
                        <input id="protected" data-bind="checked: current().protected" type="checkbox"> Tài khoản quản trị được bảo vệ
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input id="anonymous" data-bind="checked: current().anonymous" type="checkbox"> Anonymous
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <legend>THÔNG TIN CÁ NHÂN</legend>
        <div class="form-group">
            <label for="fullname" class="control-label">Họ tên<sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control" name="fullname" id="fullname" data-bind="value: current().fullname" placeholder="Họ tên..." required maxlength="255">
        </div>
        <div class="form-group">
            <label for="address" class="control-label">Địa chỉ</label>
            <input type="text" class="form-control" name="address" id="address" data-bind="value: current().address" placeholder="Địa chỉ..." maxlength="255">
        </div>
        <div class="form-group">
            <label for="birthday" class="control-label">Ngày sinh</label>
            <div class='input-group date' id='birthday' name="birthday">
                <input type='text' class="form-control" placeholder="Ngày sinh..." data-bind="value: current().birthday" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
        <div class="form-group">
            <label for="phone" class="control-label">Phone</label>
            <input type="text" class="form-control" name="phone" id="phone" data-bind="value: current().phone" placeholder="Số điện thoại..." maxlength="20">
        </div>
        <div class="form-group">
            <label for="gender" class="control-label">Giới tính<sup class="text-danger">(*)</sup></label>
            <select type="text" class="form-control" name="gender" id="gender" required data-bind="value: current().gender">
                <option value="1">Nam</option>
                <option value="0">Nữ</option>
            </select>
        </div>
        <div class="form-group">
            <label for="note" class="control-label">Ghi chú</label>
            <textarea name="note" class="form-control" id="note" cols="10" rows="5" placeholder="Ghi chú..." data-bind="value: current().note"></textarea>
        </div>
    </div>
</div>
