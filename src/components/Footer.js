import React from 'react'

function Footer() {
  return (
    <div>
      <hr />
      <span class="small"> best viewed using sensible browsers</span><br />
      <span id="sig"> &copy; {(new Date().getFullYear())}</span>
    </div>
  )
}

export default Footer
