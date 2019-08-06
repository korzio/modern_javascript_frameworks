(module
  (memory $mem 1)
  (func $get (param $x i32) (result i32)
    get_local $x)
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    ;; (i32.store (i32.const 1111228) (i32.const 1111112))
    get_local $lhs
    (call $get (i32.const 8))
    i32.add)
  (export "add" (func $add))
)