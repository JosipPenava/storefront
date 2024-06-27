function Pagination({totalProducts,productsPerPage,setCurrentPage,currentPage}) {  
    let pages = [];
    
    for(let i =1;i<=Math.ceil(totalProducts/productsPerPage);i++) {
        pages.push(i)
    }

    return (
        <div className="text-center">            
            {
                pages.map((page, index) => {
                    return <button className={page == currentPage ? "w-12 h-12 mx-1 bg-gray-400" :  "w-12 h-12 mx-1 bg-gray-200"}
                        key={index} onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                })
            }
        </div>
    )
  }
  export default Pagination