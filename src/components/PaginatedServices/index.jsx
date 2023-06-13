import React,{useState,useEffect} from "react";
import ReactPaginate from 'react-paginate';
import BlogCard from "../BlogCard";



const PaginatedServices = ({data}) => {
  console.log("Data---",data)
  const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setPageCount(Math.ceil(data?.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data?.length;
		setItemOffset(newOffset);
	};
  return (
    <>
        
      <BlogCard cardsData={data } dental itemOffset={itemOffset} />
      <div className="md:mt-[-30px] mt-[30px] mb-[30px]">
        
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<< Previous"
        renderOnZeroPageCount={null}
        containerClassName="services-pagination"
        pageLinkClassName="paginate-link"
        previousLinkClassName="paginate-previous-link"
        activeLinkClassName="paginate-active-link"
        nextClassName="paginate-next-link"
      />
      </div>
    </>
  );
};

export default PaginatedServices;
