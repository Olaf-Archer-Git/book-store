import React from 'react'

const Container = (props) => {
  return (
    <section>
        <div className="container-xxl">{props.children}</div>
    </section>
  )
}

export default Container