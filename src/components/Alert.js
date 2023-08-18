import React from 'react'

export default function Alert(props) {
  return (
   props.Alert.msg&& <div className="alert alert-warning alert-dismissible fade show" role="alert">
 {props.Alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
  }
 