import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Comment = ({ data }) => {
    const { name, comment } = data;
    return (
        <div className="flex bg-slate-200 rounded-md p-1 my-2 shadow-md">
            <div className="bg-red-200  rounded-full w-8 h-8 flex items-center justify-center"><AccountCircleIcon color='error' fontSize="medium" /></div>
            <div className='pl-2'>
                <p>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    )
}

export default Comment;