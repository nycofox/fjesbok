@props([
    'type' => 'text',
    'class' => 'form-control fs-13px',
    'placeholder' => '',
    'name' => 'name',
])

<input type="$type" class="form-control fs-13px @if($error->has($name)) border-danger @endif"
       placeholder="$placeholder" name="$name" value="old($name)" data-parsley-required="true"/>
@if($error->has($name))
    <small class="text-danger">$error->get($name)</small>
@endif
