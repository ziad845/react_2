/* eslint-disable react/prop-types */

function Title(props) {

  return (
    <>
        <div className="heading m-auto text-center mb-10">
            <h1 className='my-3 text-[25px] sm:text-[40px] font-bold'> {props.title} </h1>
            <span data-color={props.color} className='star-icon  relative'>
            <i className="fa-solid fa-star"></i>
            </span>
        </div>
    </>
  )
}

export default Title;