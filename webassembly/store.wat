(module
  (import "env" "memory" (memory 1))
  (data (i32.const 0) "Hi")
  (func $store (param $lhs i32) (param $rhs i32) (result)
    (i32.store (i32.const 0) (i32.const 42))
  )
)