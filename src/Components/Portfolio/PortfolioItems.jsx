/* eslint-disable react/prop-types */

function PortfolioItems({source}) {
    let {id, imgSrc} = source

    return (
        <>
            <div data-id={id} className="item group cursor-pointer text-center rounded-[10px] overflow-hidden relative">
              <img src={imgSrc}  alt="" />
              <div className="overLayer bg-[#1abc9c] bg-opacity-90 opacity-0 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:opacity-100 transition-all duration-500">
                <i className='fa-solid fa-plus text-white text-8xl'></i>
              </div>
            </div>
        </>
    )
}

export default PortfolioItems;