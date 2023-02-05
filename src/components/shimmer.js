export default Shimmer = () => {
    return <div className='flex flex-wrap'>
    {Array(10).fill("").map((e, index) =>  <div key={index} className='h-40 w-52 bg-gray-300 m-2'>
    </div>) }
    </div>
}