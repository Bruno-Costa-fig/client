function ContainerWrapper({children}) {
  return ( 
    <div className="w-100 min-h-full flex justify-center items-start">
      <div className="w-4/5 my-5 min-h-full lg:grid lg:gap-3 lg:gap-4 lg:grid-cols-2 place-content-start">
        {children}
      </div>
    </div>
   );
}

export default ContainerWrapper;