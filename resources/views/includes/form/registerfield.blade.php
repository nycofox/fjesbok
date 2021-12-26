<input type="{{ $type ?? 'text' }}" class="form-control fs-13px @error($name) border-danger @enderror"
       placeholder="{{ $placeholder }}" name="{{ $name }}" value="{{ old($name) }}" data-parsley-required="true"/>
@error($name)
    <small class="text-danger">{{ $message }}</small>
@enderror
