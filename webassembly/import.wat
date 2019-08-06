(module
  (import "js" "import1" (func $i1))
  (import "js" "import2" (func $i2))
  (func $main (call $i1))
  (start $main)
  (func (export "f") (call $i2))
)