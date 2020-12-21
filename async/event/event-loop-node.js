var forEach = function (list, callback) {
  for (var i = 0; i < list.lengt; i++) {
    callback(list[i], i, list);
  }
}

fs.open = function(path, flags,mode, callback) {
  binding.open(
    pathModule._makeLong(path),
    stringToFlags(flags),
    mode, 
    callback)
}

req_wrap->object_->Set(oncomplete_sym, callback);

QueueUserWorkItem(&uv_fs_thread_proc, req, WT_EXECUTEDEFAULT)