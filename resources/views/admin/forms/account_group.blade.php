<div class="row">
    <div class="col-md-4 frm-desc">
        <div class="media">
            <div class="media-left">
                <a>
                    <img class="media-object" src="{{ url('assets/images/admin/user-group.png') }}" width="128">
                </a>
            </div>
            <div class="media-body">
                <h3 class="media-heading">Nhóm người dùng</h3>
                <p>- Quản lý các nhóm người dùng trên hệ thống.</p>
                <p>- Phân quyền chi tiết cho từng chức năng trên hệ thống.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label for="group_name" class="control-label">Tên nhóm người dùng <sup class="text-danger">(*)</sup></label>
            <input type="text" class="form-control input-lg" name="group_name" id="group_name" data-bind="value: current().group_name" required>
        </div>
        <div class="form-group">
            <label for="note" class="control-label">Ghi chú</label>
            <textarea class="form-control" name="note" id="note" data-bind="value: current().note"></textarea>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-8">
        <?php
            $n           = 0;
        ?>
        @foreach(config('block.navi') as $key=>$val)
        @if ($key!=='')
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="heading{{ $n }}">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse{{ $n }}" aria-expanded="false" aria-controls="collapse{{ $n }}">
                        {{ trans('app.'.$key) }}
                    </a>
                </h4>
            </div>
            <div id="collapse{{ $n }}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{ $n++ }}">
                <ul class="list-group">
                    @foreach($val as $alias=>$route)
                    <li class="list-group-item">
                        <i class="fa fa-question-circle fa-btn-help" onclick="$('#group-item-{{ $alias }}').click()" data-toggle="tooltip" title="Xem ý nghĩa các quyền" aria-hidden="true"></i>
                        <div id="group-item-{{ $alias }}" data-toggle="popover" data-placement="top" title="Giải thích quyền: {!! trans('app.'.$alias) !!}" data-content="{{ trans('permission_explains.'.$alias) }}">
                            <div style="width: 35%; display: inline-block;">
                                <b><span class="{{ $route['icon'] }}"></span> <span class="item-label">{!! trans('app.'.$alias) !!}</span></b>
                            </div>
                            <div style="width: 64%; display: inline-block;">
                            @foreach($permissions->where('alias', $alias) as $label)
                                <label class="badge">
                                    <input id="{{ $label->id }}" type="checkbox" name="{{ $alias }}">
                                    <span for="{{ $alias }}">{{ trans('permissions.'.$label->name) }}</span>
                                </label>
                            @endforeach
                            </div>
                            @if ($alias == 'storages'):
                            <div class="storage-select">
                              <select class="selectpicker show-tick form-control" name="roles" id="roles" multiple data-live-search="true">
                                  @foreach(\DB::table('storages')->orderBy('id')->get() as $storage)
                                  <option value="{{ $storage->id }}">{{ $storage->storage_name }}</option>
                                  @endforeach
                              </select>
                            </div>
                            <div class="clear"></div>
                            @endif
                        </div>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>
        @endif
        @endforeach
    </div>
</div>
