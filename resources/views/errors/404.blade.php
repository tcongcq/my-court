@extends('cms::layouts.base')

@section('title')
    {{ trans('cms::cms.404_title') }}
@endsection

@section('assets')
<style>
body {
    padding-top: 100px;
    padding-bottom: 40px;
    background-color: #dbdddd;
    background-image: url("{{ url('assets/images/base-bg.png') }}");
}
.panel-shadow {
    max-width: 330px;
    margin: 0 auto;
    border: 0px;
    -webkit-box-shadow: 0 5px 20px rgba(0,0,0,.4);
    -moz-box-shadow: 0 5px 20px rgba(0,0,0,.4);
    box-shadow: 0 5px 20px rgba(0,0,0,.4);
}
</style>
@endsection

@section('main')
<div class="container">
    <div class="panel panel-default panel-shadow">
        <div class="panel-body">
            <h3>{{ trans('cms::cms.404_title') }}</h3>
            <hr/>
            <p>{{ trans('cms::cms.404_text') }}</p>
            <a class="btn btn-default center-block" href="{{ url('/') }}">{{ trans('cms::cms.404_return') }}</a>
        </div>
    </div>
</div>
@endsection
